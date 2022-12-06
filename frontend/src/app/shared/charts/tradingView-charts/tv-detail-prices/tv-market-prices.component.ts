import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {createChart, LineStyle, PriceScaleMode, UTCTimestamp,CrosshairMode} from 'lightweight-charts';
import {MarketBasic} from '../../../../model/market/basic/marketBasic';
import {TVBets} from '../../../../model/TV/TVBets';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as reportSelectors from '../../../../store/report/report.selectors';
import {Trade} from '../../../../model/report/trade/trade';
import {BacktestTrade} from '../../../../model/backtest/backtestTrade';
import {TVRunners} from '../../../../model/TV/TVRunners';
import {TradeBets} from '../../../../model/report/trade/tradeBets';
import {Utils} from '../../../../model/utils';

@Component({
  selector: 'app-tv-market-prices',
  templateUrl: './tv-market-prices.component.html',
})
export class TvMarketPricesComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() originalMarket: MarketBasic
  @Input() originalTrade: Trade
  @Input() TVBets: TVBets[]
  @Input() isBacktest: boolean

  // chart
  lineSeriesData =[];
  tv: HTMLElement;
  chart: any;
  runnersData: TVRunners[] = [];
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
  timeCorrection = 0
  // backtest
  backtestForm: BacktestTrade
  $backtestMode: Observable<boolean>
  backtestTradeBets: TradeBets[]
  removeState = false
  // other
  showTrades = true
  bug = true

  util = new Utils()

  constructor(private readonly store: Store) {  }

  // -- COMPONENT LIFETIME --
  ngOnInit(): void {
    // backtest state
    this.$backtestMode = this.store.pipe(select(reportSelectors.getBacktestModeState))
    this.backtestForm = new BacktestTrade(this.originalMarket, this.originalTrade)


    // legend initialization
    this.legend ={
      name: '',
      value: [],
      time: null,
      openTime: this.originalMarket.marketInfo.marketInfo.openDate as UTCTimestamp
    }

    // chart initialization
    this.createTVData(false)
    this.generateUpdatesMarkers()


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

  // -- CHART --
  // chart initialization
  private initializeChart(){
    // generate chart and set data
    this.generateChart()
    this.setRunnersSeriesInTV()

    // crosshair subscribe
    this.chart.subscribeCrosshairMove((param) =>{
      this.crosshairMoveSubscriber(param)
    });
    if(this.isBacktest){
      this.chart.subscribeClick((param) =>{
        this.crosshairClickSubscriber(param)
      });
    }
  }

  // subscriber function for click
  crosshairClickSubscriber(param){
    const prices = []
    // get odds data from TV object series
    for (let i = 0; i < this.lineSeriesData.length; i++) {
      if(this.backtestForm.info.selectionN===i){
        prices.push(param.seriesPrices.get(this.lineSeriesData[i]))
      } else {
       prices.push(null)
      }
    }
    // add backtest bets
    const time = (param.time* 1000) - this.toAdd*1000
    if (time){
      if(!this.removeState){
        // add backtest bet
        const temp = {
          time,
          odds: prices,
          selectionName: this.backtestForm.info.selectionName,
          selectionN: this.backtestForm.info.selectionN,
          type: this.backtestForm.info.active,
          stakeBack: this.backtestForm.info.back.stake,
          stakeLay: this.backtestForm.info.lay.stake,
          options: this.backtestForm.info.option
        }
        // push in the bets
        if(prices[this.backtestForm.info.selectionN]){
          this.backtestForm.backtestBets.push(temp)
        }
      } else {
        // remove backtest bets
        this.backtestForm.backtestBets = this.backtestForm.backtestBets.filter( x => !(x.time === time))
      }
    }
    // reorder backtest bets
    this.backtestForm.backtestBets.sort((a,b) => a.time-b.time)

    // refresh all
    this.createTVData(true)
    this.backtestTradeBets = this.util.generateBetsFromBacktestBets(this.backtestForm.backtestBets, this.originalTrade ? this.originalTrade : null, this.originalMarket)
  }

  // subscriber function for move
  crosshairMoveSubscriber(param) {
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
        text: this.originalMarket.marketInfo.marketInfo.eventName,
      },
      timeScale: {
        visible: true,
        timeVisible: true,
        secondsVisible: true
      }
    });
  }

  // generate correct TV data form runner data
  createTVData(isUpdate: boolean){
    // generate data for all runner
    let firstColor = '#54ff00'
    const colorList = ['#298afa', '#e04434','#f3ea2d' ,'#65ef56' ,'#1c65ff']
    let i =0
    // empty last markers
    this.tradeMarkersA = []
    this.tradeMarkersB = []
    for (const mktRunnerOdds of this.originalMarket.marketOdds.marketOdds){
      // increment the color for each runner
      firstColor = i<4 ? colorList[i] : incrementColor(firstColor,5000)
      // initialize runner data
      const tempRunner: TVRunners = {
        runnerId: mktRunnerOdds.runnerId,
        originalData: [],
        tradeData: [],
        color: firstColor,
        name: this.originalMarket.marketRunners.marketRunners[i].name,
        visible: true
      }

      // correct the time params for current runner
      this.correctTime(mktRunnerOdds)

      // add odds for this runner
      for (const odds of mktRunnerOdds.odds){
        const time =  (odds.timestamp/1000) + this.toAdd as UTCTimestamp
        const temp = {
          time,
          value: odds.ltp,
        }
        tempRunner.originalData.push(temp)
        tempRunner.tradeData.push(temp)
      }

      // add bets value
      // iterate over bets
      let prevTime = 0
      if(this.TVBets){
        for (const bet of this.TVBets){
          let temp = {}
          const time = ((bet.time/1000)  + this.timeCorrection + this.toAdd) as UTCTimestamp
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

      // check if update data or push the trade as the first time
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
    if(this.isBacktest && this.backtestForm.backtestBets){
      let j = 0
      for (const backtestBet of this.backtestForm.backtestBets){
        const time = (backtestBet.time /1000)  + this.timeCorrection + this.toAdd as UTCTimestamp
        if (backtestBet.odds[0]){
          this.tradeMarkersA.push(this.generateTradeMarker(null,time, j))
          j++
        }
        if (backtestBet.odds[1]){
          this.tradeMarkersB.push(this.generateTradeMarker(null,time, j))
          j++
        }
      }
    }
    this.showTradeMarkers(false)
  }

  // set TvData to trade
  private setRunnersSeriesInTV(){
    // for runner create their TvData and append their odds
    // tslint:disable-next-line:forin
    for(const i in this.runnersData){
      // this runner series
      const runnerSerie = this.chart.addLineSeries({
        title: this.originalMarket.marketRunners.marketRunners[i].name,
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

      if(this.originalMarket.marketInfo.marketInfo.sport==='FOOTBALL'){

      } else {
        // only for tennis market
        this.setMarkers(runnerSerie,+i)
      }
      this.lineSeriesData.push(runnerSerie)
    }
    this.chart.timeScale().fitContent();
  }

  // -- MARKERS --
  // generate updates markers for chart
  private generateUpdatesMarkers(){
    let color = '#b0fa74'
    let index=0
    for (const update of this.originalMarket.marketUpdates.marketUpdates){
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

  private generateTradeMarker(trade: TVBets, time: number,  index?: number){
    // markers
    let color = '#b9e11c'
    let arrow = 'square'
    let position = 'inBar'
    if(trade){
      color = trade.isBackTrade ? '#30d6e5' : '#ce86ea'
      arrow = trade.isBackTrade ? 'arrowDown' : 'arrowUp'
      position = trade.isBackTrade ? 'aboveBar' : 'belowBar'
    }

    if(index>=0){
      const temp = this.backtestForm.backtestBets[index]
      arrow = temp.type==='back' ? 'arrowDown' : 'arrowUp'
      position = temp.type==='back' ? 'aboveBar' : 'belowBar'
    }

    return {
      time,
      position,
      color,
      shape: arrow,
      size:  trade  ? 3 : 2,
      id: trade ? 'entry' +  trade.id : Math.random().toString(),
      text: trade ? trade.id + ') ' + trade.odds + ', ' + trade.options.substr(0,5) : index ?  (index+1).toString() : ''
    }

  }

  public showTradeMarkers(changeStatus: boolean){
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

  // -- BUTTON FUNCTIONS --
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
      if (this.originalMarket.marketRunners.marketRunners[i].status === 'WINNER') {
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

  // change the visibility for the runner in this position in data and series
  private changeRunnerVisibility(runnerPos: number, status:boolean){
    this.runnersData[runnerPos].visible = status
    this.lineSeriesData[runnerPos].applyOptions({
      visible: status,
    });

  }

  // -- BACKTEST --

  // remove all backtest bets and update markers
  removeAllBets(){
    this.backtestForm.backtestBets = []
    // refresh all
    this.createTVData(true)
    this.backtestTradeBets = this.util.generateBetsFromBacktestBets(this.backtestForm.backtestBets,this.originalTrade ? this.originalTrade : null, this.originalMarket)
  }

  // --  TIME CORRECTION --
  correctTime(odd){
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
    this.timeCorrection = 0
    switch (this.timeCorrect){
      case ('-1d'):
        this.timeCorrection = -86400
        break
      case ('-1d-1h'):
        this.timeCorrection = -86400-3600
        break
      case ('-1d-0h'):
        this.timeCorrection = -86400
        break
      case ('-1d+1h'):
        this.timeCorrection = -86400+3600
        break
      case ('+1d'):
        this.timeCorrection = +86400
        break
      case ('+1d-1h'):
        this.timeCorrection = 86400-3600
        break
      case ('+1d+1'):
        this.timeCorrection = 86400+3600
        break
      case ('0h'):
        this.timeCorrection = 0
        break
      case ('-1h'):
        this.timeCorrection = -3600
        break
      case ('-2h'):
        this.timeCorrection = -7200
        break
      case ('-3h'):
        this.timeCorrection = -10800
        break
      case ('-4h'):
        this.timeCorrection = -14400
        break
      case ('+1h'):
        this.timeCorrection = +3600
        break
      case ('+2h'):
        this.timeCorrection = +7200
        break
      case ('+3h'):
        this.timeCorrection = +10800
        break
      case ('+4h'):
        this.timeCorrection = +14400
        break
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



