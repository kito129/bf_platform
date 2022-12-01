import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {createChart, LineStyle, PriceScaleMode, UTCTimestamp,CrosshairMode} from 'lightweight-charts';
import {MarketBasic} from '../../../../model/market/basic/marketBasic';
import {BetsTV} from '../../../../model/study/betsTV';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as reportSelectors from '../../../../store/report/report.selectors';
import {NewTrade} from '../../../../model/report/new/newTrade';


export interface RunnerData{
  runnerId: string,
  originalData: any[],
  tradeData: any[]
  color: string,
  name: string,
  visible: boolean
}

@Component({
  selector: 'app-tv-market-prices',
  templateUrl: './tv-market-prices.component.html',
})
export class TvMarketPricesComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() marketDetail: MarketBasic
  @Input() trade: NewTrade
  @Input() bets: BetsTV[]

  // chart
  lineSeriesData =[];
  tv: HTMLElement;
  chart: any;
  runnersData: RunnerData[] = [];
  // markers and legend
  updateMarkers= []
  tradeMarkersA= []
  tradeMarkersB= []
  legend: {
    name: string,
    value: number[],
    time: number,
    openTime: number
  }
  // time correction
  timeCorrect= '-1h'
  utc = 0
  toAdd = 0
  // backtest
  $backtestMode: Observable<boolean>
  backtestBets = []
  selectionBlock = null
  removeState = false
  // other
  showTrades = true
  bug = true

  constructor(private readonly store: Store) {  }

  // on component start
  ngOnInit(): void {
    // backtest state
    this.$backtestMode = this.store.pipe(select(reportSelectors.getBacktestModeState))

    // chart initialization
    this.createTvData(false)
    this.generateUpdatesPoint()

    this.legend ={
      name: '',
      value: [],
      time: null,
      openTime: this.marketDetail.marketInfo.marketInfo.openDate as UTCTimestamp
    }
  }

  ngAfterViewInit() {
    this.initializeChart()
  }

  ngOnDestroy() {
    // unsubscribe from Crosshair
    this.chart.unsubscribeCrosshairMove((param) =>{
      console.log(param)
    });
    this.chart.unsubscribeClick((param) =>{
      console.log(param)
    });
  }

  // chart initialization
  private initializeChart(){
    // generate chart and set data
    this.generateChart()
    this.setRunnersSeriesInTV()

    // crosshair subscribe
    this.chart.subscribeCrosshairMove((param) =>{
      this.crosshairSubscriber(param)
    });
    this.chart.subscribeClick((param) =>{
      this.crosshairClickSubscriber(param)
    });
  }

  crosshairClickSubscriber(param){
    const prices = []
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.lineSeriesData.length; i++) {
      if((this.selectionBlock===0 && i===0) || ((this.selectionBlock===1 && i===1))){
        prices.push(null)
      } else {
        prices.push(param.seriesPrices.get(this.lineSeriesData[i]))
      }
    }
    // add backtest bets
    const time = (param.time* 1000) - this.toAdd*1000
    if (time){
      if(!this.removeState){
        // add backtest bets
        if(this.selectionBlock===1){
          prices[0] ? this.backtestBets.push([time,prices]) : console.log()
        } else {
          prices[1] ? this.backtestBets.push([time,prices]) : console.log()
        }
      } else {
        // remove backtest bets
        if(this.selectionBlock===0){
          this.backtestBets = this.backtestBets.filter( x => !(x[0] === time && x[1] !== null))
        } else {
          this.backtestBets = this.backtestBets.filter( x => !(x[0] === time && x[0] !== null))
        }
      }
    }
    // update charts with bets
    this.createTvData(true)
  }

  crosshairSubscriber(param) {
    if (param.point) {
      // console.log(param)
      const prevValue = this.legend.value
      // empty list
      this.legend.value = []
      // valid data point
      this.legend.time = (param.time * 1000) - this.toAdd*1000
      // update legend
      for (let i = 0; i < this.lineSeriesData.length; i++) {
        this.legend.value.push(param.seriesPrices.get(this.lineSeriesData[i]) ? param.seriesPrices.get(this.lineSeriesData[i]) : prevValue[i])
      }
    } else {
      return
    }
  }

  // generate updates point
  private generateUpdatesPoint(){
    let color = '#b0fa74'
    let index=0
    for (const update of this.marketDetail.marketUpdates.marketUpdates){
      if(update.status.indexOf('OPEN')!==-1 && update.betDelay>0 && update.inPlay){
        color = incrementColor(color, 20000)
        this.updateMarkers.push({
          time: update.timestamp/1000 + this.toAdd as UTCTimestamp,
          position: 'inBar',
          color,
          size:3,
          shape: 'circle',
          id: 'update Runner' + index,
        })
      }
      index++
    }
  }

  // TV main creation, params and set in DOM
  private generateChart(){
    this.tv = document.getElementById('TVCharts') as HTMLElement
    this.chart = createChart(this.tv, {
      width: document.getElementById('TvContainer').clientWidth-20,
      height: (document.getElementById('TvContainer').clientWidth-20)*0.718,
      localization: {
        locale: 'en-GB',
      },
      crosshair:{
        mode: CrosshairMode.Magnet
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.1,
          bottom: 0.1,
        },
        mode: PriceScaleMode.Logarithmic,
        borderColor: 'rgba(197, 203, 206, 0.4)',
        autoScale: true
      },
      layout: {
        backgroundColor: '#060c17',
        textColor: '#ffffff',
        fontSize: 17,
      },
      grid: {
        vertLines: {
          color: 'rgba(197, 203, 206, 0.4)',
          style: LineStyle.Dotted,
        },
        horzLines: {
          color: 'rgba(197, 203, 206, 0.4)',
          style: LineStyle.Dotted,
        },
      },
      watermark: {
        visible: true,
        fontSize: 52,
        color: 'rgba(171, 71, 188, 0.2)',
        text: this.marketDetail.marketInfo.marketInfo.eventName,
      },
      timeScale: {
        visible: true,
        timeVisible: true,
        secondsVisible: true
      }
    });
  }

  // generate correct TV data form runner data
  public createTvData(isUpdate: boolean){
    // generate data for all runner
    let firstColor = '#54ff00'
    const colorList = ['#298afa', '#e04434','#f3ea2d' ,'#65ef56' ,'#1c65ff']
    let i =0
    // empty last markers
    this.tradeMarkersA = []
    this.tradeMarkersB = []
    let timeCorrection = 0
    for (const odd of this.marketDetail.marketOdds.marketOdds){
      // increment the color for each runner
      firstColor = i<4 ? colorList[i] : incrementColor(firstColor,5000)
      // initialize runner data
      const tempRunner: RunnerData = {
        runnerId: odd.runnerId,
        originalData: [],
        tradeData: [],
        color: firstColor,
        name: this.marketDetail.marketRunners.marketRunners[i].name,
        visible: true
      }

      // --  TIME CORRECTION --
      // calculate time zone and offset
      this.utc = new Date(odd.odds[0].timestamp).getTimezoneOffset()
      if(this.utc===-120){
        this.toAdd = 7200
      } else if(this.utc===-60){
        this.toAdd = 3600
      }
      else if(this.utc===0){
        this.toAdd = 0
      }
      // check for day, here add a const based on form value

      switch (this.timeCorrect){
        case ('-1d'):
          timeCorrection = -86400
          break
        case ('-1d-1h'):
          timeCorrection = -86400-3600
          break
        case ('-1d-0h'):
          timeCorrection = -86400
          break
        case ('-1d+1'):
          timeCorrection = -86400+3600
          break
        case ('+1d'):
          timeCorrection = +86400
          break
        case ('+1d-1h'):
          timeCorrection = 86400-3600
          break
        case ('+1d-0h'):
          timeCorrection = 86400
          break
        case ('+1d+1'):
          timeCorrection = 86400+3600
          break
        case ('+0h'):
          timeCorrection = 0
          break
        case ('-1h'):
          timeCorrection = -3600
          break
        case ('-2h'):
          timeCorrection = -7200
          break
        case ('-3h'):
          timeCorrection = -10800
          break
        case ('-4h'):
          timeCorrection = -14400
          break
        case ('+1h'):
          timeCorrection = +3600
          break
        case ('+2h'):
          timeCorrection = +7200
          break
        case ('+3h'):
          timeCorrection = +10800
          break
        case ('+4h'):
          timeCorrection = +14400
          break
      }

      // add odds for this runner
      for (const  o of odd.odds){
        const t =  (o.timestamp/1000) + this.toAdd as UTCTimestamp
        const temp = {
          time: t,
          value: o.ltp,
        }
        tempRunner.originalData.push(temp)
        tempRunner.tradeData.push(temp)
      }

      // add bets value
      // iterate over bets
      let prevTime = 0
      if(this.bets){
        for (const bet of this.bets){
          let temp = {}
          const time = (bet.time/1000)  + timeCorrection + this.toAdd as UTCTimestamp
          if (i===0 && bet.sideA){
            temp = {
              time,
              value: bet.odds,
            }
            this.tradeMarkersA.push(this.generateTradeMarker(bet,time))
            prevTime !== time ? tempRunner.tradeData.push(temp)  : console.log()
          } else if (i===1 && !bet.sideA) {
            temp = {
              time,
              value: bet.odds,
            }
            this.tradeMarkersB.push(this.generateTradeMarker(bet,time))
            prevTime !== time ? tempRunner.tradeData.push(temp)  : console.log()
          }
          prevTime =  time
        }
      }

      // reorder
      tempRunner.tradeData = tempRunner.tradeData.sort((a, b) => a.time - b.time)
      tempRunner.originalData = tempRunner.originalData.sort((a, b) => a.time - b.time)

      // check if update data or push the new as the first time
      if(isUpdate){
        // update data for the runner
        this.runnersData[i].tradeData = tempRunner.tradeData
        this.runnersData[i].originalData = tempRunner.originalData
        // this.showTrade(false)
      } else {
        // add this runner to list of data
        this.runnersData.push(tempRunner)
      }
      i++
    }

    // add backtest bets as markers and update chart
    if(this.backtestBets){
      for (const backtestBet of this.backtestBets){
        const time = (backtestBet[0] /1000)  + timeCorrection + this.toAdd as UTCTimestamp
        if (backtestBet[1][0]){
          this.tradeMarkersA.push(this.generateTradeMarker(null,time))
        }
        if (backtestBet[1][1]){
          this.tradeMarkersB.push(this.generateTradeMarker(null,time))
        }
      }
    }
    this.showTrade(false)
  }

  selectionBlockEvent(event){
    if(this.marketDetail.marketRunners.marketRunners[0].id === event[0]) this.selectionBlock = 1
    else this.selectionBlock = 0
  }

  changeRemoveState(){
    this.removeState = !this.removeState
  }

  removeAllBets(){
    this.backtestBets = []
    this.createTvData(true)
  }

  // set TvData to trade
  private setRunnersSeriesInTV(){
    // for runner create their TvData and append their odds
    // tslint:disable-next-line:forin
    for(const i in this.runnersData){
      // this runner series
      const runnerSerie = this.chart.addLineSeries({
        title: this.marketDetail.marketRunners.marketRunners[i].name,
      });
      // set data
      if(this.showTrades){
        runnerSerie.setData(this.runnersData[i].tradeData);
      } else {
        runnerSerie.setData(this.runnersData[i].originalData);
      }

      // chart options
      runnerSerie.applyOptions({
        priceLineVisible: false,
        color: this.runnersData[i].color,
        priceLineColor: this.runnersData[i].color,
        lastValueVisible: false,
      });
      // charts horiz price line
      runnerSerie.createPriceLine({
        title: 'end',
        price: 1,
        color: '#919191',
        lineWidth: 3,
        lineStyle: LineStyle.Solid,
        axisLabelVisible: false
      });
      runnerSerie.createPriceLine({
        title: '2odds',
        price: 2,
        color: '#fded31',
        lineWidth: 3,
        lineStyle: LineStyle.SparseDotted,
        axisLabelVisible: false
      });

      if(this.marketDetail.marketInfo.marketInfo.sport==='FOOTBALL'){

      } else {
        // only for tennis market
        this.setMarkers(runnerSerie,+i)
      }
      this.lineSeriesData.push(runnerSerie)
    }
    this.chart.timeScale().fitContent();
  }

  // support function to change runner by button
  public changeRunnerState(runnerId: string){
    let i = 0
    for (const runner of this.runnersData ){
      if( runnerId === runner.runnerId){
        if(runner.visible === true ){
          this.changeRunnerVisibility(i, false)
          break
        } else {
          this.changeRunnerVisibility(i, true)
          break
        }
      }
      i++
    }
  };

  // reset all runner to visible
  public resetClick(){
    let i = 0
    for (const runner of this.runnersData ){
      this.changeRunnerVisibility(i, true)
      i++
    }
    this.chart.timeScale().resetTimeScale();
    this.chart.timeScale().fitContent();
  }

  // visible only the winner selection price click
  public winnerOnly(){
    let i = 0
    for (const runner of this.runnersData ) {
      // select only the winner
      if (this.marketDetail.marketRunners.marketRunners[i].status === 'WINNER') {
        this.changeRunnerVisibility(i, true)
      } else {
        this.changeRunnerVisibility(i, false)
      }
      i++
    }
  }

  // expand chart click
  public fitClick(){
    this.chart.timeScale().resetTimeScale();
    this.chart.timeScale().fitContent();
  }

  public showTrade(changeStatus: boolean){
    if(changeStatus){
      this.showTrades = !this.showTrades
    }
    let i=0
    // switch tradeData to originalData
    for(const series of this.lineSeriesData){
      if(this.showTrades){
        this.lineSeriesData[i].setData(this.runnersData[i].tradeData);
      } else {
        this.lineSeriesData[i].setData(this.runnersData[i].originalData);
      }
      // update markers
      this.setMarkers(series,i)
      i++
    }

  }


  // change the visibility for the runner in this position in data and series
  private changeRunnerVisibility(runnerPos: number, status:boolean){
    this.runnersData[runnerPos].visible = status
    this.lineSeriesData[runnerPos].applyOptions({
      visible: status,
    });

  }

  private setMarkers(runnerSeries, i: number){
    if(i===0) {
      if (this.showTrades) {
        runnerSeries.setMarkers(this.updateMarkers.concat(this.tradeMarkersA))
      } else {
        runnerSeries.setMarkers(this.updateMarkers)
      }
    } else {
      if (this.showTrades) {
        runnerSeries.setMarkers(this.updateMarkers.concat(this.tradeMarkersB))
      } else {
        runnerSeries.setMarkers(this.updateMarkers)
      }
    }
  }

  private generateTradeMarker(trade: BetsTV, time: number){

    // markers
    let color = '#b9e11c'
    let arrow = 'square'
    let position = 'inBar'
    if(trade){
      color = trade.isBackTrade ? '#30d6e5' : '#ce86ea'
      arrow = trade.isBackTrade ? 'arrowDown' : 'arrowUp'
      position = trade.isBackTrade ? 'aboveBar' : 'belowBar'
    }

    return {
      time,
      position,
      color,
      shape: arrow,
      size:  trade  ? 3 : 2,
      id: trade ? 'entry' +  trade.id : Math.random().toString(),
      text: trade ? trade.id + ') ' + trade.odds + ', ' + trade.options.substr(0,5) : 'BT'
    }

  }
}

// increment the color function
export function incrementColor(color, step){
  let colorToInt = parseInt(color.substr(1), 16)
  // tslint:disable-next-line:radix
  const nStep = parseInt(step);
  if(!isNaN(colorToInt) && !isNaN(nStep)){
    colorToInt += nStep;
    let nColor = colorToInt.toString(16);
    nColor = '#' + (new Array(7-nColor.length).join('0')) + nColor;
    if(/^#[0-9a-f]{6}$/i.test(nColor)){
      return nColor;
    }
  }
  return color;
}



