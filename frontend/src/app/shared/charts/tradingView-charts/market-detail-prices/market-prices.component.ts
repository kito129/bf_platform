import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {createChart, ISeriesApi, LineStyle, PriceScaleMode, UTCTimestamp} from 'lightweight-charts';
import { DatePipe } from '@angular/common'
import {MarketBasic} from '../../../../model/market/basic/marketBasic';
import {SelectedTradeCharts} from '../../../../model/study/selectedTradeCharts';


export interface RunnerData{
  runnerId: string,
  originalData: any[],
  tradeData: any[]
  color: string,
  name: string,
  visible: boolean
}

@Component({
  selector: 'app-market-detail-prices',
  templateUrl: './market-prices.component.html',
})
export class MarketPricesComponent implements OnInit, AfterViewInit {

  @Input() marketDetail: MarketBasic
  @Input() trades: SelectedTradeCharts[]

  public runnersData: RunnerData[] = [];

  // initialize chart
  public lineSeriesData =[];
  private tv: HTMLElement;
  private chart: any;

  timeCorrect= '-1h'
  timeCorrection = 0

  utc = 0
  toAdd = 0

  showTrades = true
  bug = true

  updateMarkers= []
  tradeMarkersA= []
  tradeMarkersB= []

  legend: {
    name: string,
    value: number[],
    time: number,
    openTime: number
  }

  constructor(public datePipe: DatePipe) {  }

  ngOnInit(): void {
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
    this.startChart()
  }

  private startChart(){
    this.generateChart()
    this.setRunnerTvDataInChart()

    // cross hair subscribe
    this.chart.subscribeCrosshairMove((param) =>{
      this.subscriber(param)
    });
  }

  subscriber(param) {
    if (param.point) {
      const prevValue = this.legend.value
      // empty list
      this.legend.value = []
      // valid data point
      this.legend.time = (param.time * 1000) - this.toAdd*1000

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
          size:2,
          shape: 'circle',
          id: 'update Runner' + index,
        })
      }
      index++
    }
  }

  // plot TV trade in div
  private generateChart(){
    this.tv = document.getElementById('TVCharts') as HTMLElement
    this.chart = createChart(this.tv, {
      width: document.getElementById('TvContainer').clientWidth-70,
      height: (document.getElementById('TvContainer').clientWidth-70)*0.60,
      localization: {
        locale: 'en-GB',
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
        fontSize: 36,
        horzAlign: 'center',
        vertAlign: 'center',
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
    let firstColor = '#c86f6f'
    let i =0
    for (const odd of this.marketDetail.marketOdds.marketOdds){

      // increment the color for each runner
      firstColor = incrementColor(firstColor,5000)

      // initialize runner data
      const tempRunner: RunnerData = {
        runnerId: odd.runnerId,
        originalData: [],
        tradeData: [],
        color: firstColor,
        name: this.marketDetail.marketRunners.marketRunners[i].name,
        visible: true
      }

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

      // check for day, here add a const based on form value
      let timeCorrection = 0
      switch (this.timeCorrect){
        case ('-1d'):
          timeCorrection = -86400
          break
        case ('+1d'):
          timeCorrection = +86400
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

      // add trades value
      // empty last markers
      this.tradeMarkersA = []
      this.tradeMarkersB = []
      // iterate over trade
      let prevTime = 0
      if(this.trades){
        for (const trade of this.trades){
          let temp = {}
          const time = (trade.time/1000)  + timeCorrection + this.toAdd as UTCTimestamp
          if (i===0 && trade.sideA){
            temp = {
              time,
              value: trade.odds,
            }
            this.tradeMarkersA.push(this.generateTradeMarker(trade,time))
            prevTime !== time ? tempRunner.tradeData.push(temp)  : console.log()
          } else if (i===1 && !trade.sideA) {
            temp = {
              time,
              value: trade.odds,
            }
            this.tradeMarkersB.push(this.generateTradeMarker(trade,time))
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
        this.showTrade(false)
      } else {
        // add this runner to list of data
        this.runnersData.push(tempRunner)
      }
      i++
    }
  }

  // set TvData to trade
  private setRunnerTvDataInChart(){
    // for runner create their TvData and append their odds
    // tslint:disable-next-line:forin
    for(const i in this.runnersData){
      // this runner series
      const runnerSerie = this.chart.addLineSeries({
        title: this.marketDetail.marketRunners.marketRunners[i].name,
        /*
        autoscaleInfoProvider: () => ({
          priceRange: {
            minValue: 1,
            maxValue: 8,
          },
          margins: {
            above: 0,
            below: 0,
          },
        }),

         */
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
        lineWidth: 2,
        lineStyle: LineStyle.Dotted,
        axisLabelVisible: false
      });
      runnerSerie.createPriceLine({
        title: '2odds',
        price: 2,
        color: '#ffbdbd',
        lineWidth: 2,
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
    for(const serie of this.lineSeriesData){
      if(this.showTrades){
        this.lineSeriesData[i].setData(this.runnersData[i].tradeData);
      } else {
        this.lineSeriesData[i].setData(this.runnersData[i].originalData);
      }
      // update markers
      this.setMarkers(serie,i)
      i++
    }

  }


  // change the visibility for the runner in this position
  private changeRunnerVisibility(runnerPos: number, status:boolean){
    this.runnersData[runnerPos].visible = status
    this.lineSeriesData[runnerPos].applyOptions({
      visible: status,
    });

  }

  private setMarkers(runnerSerie, i: number){
    if(i===0) {
      if (this.showTrades) {
        runnerSerie.setMarkers(this.updateMarkers.concat(this.tradeMarkersA))
      } else {
        runnerSerie.setMarkers(this.updateMarkers)
      }
    } else {
      if (this.showTrades) {
        runnerSerie.setMarkers(this.updateMarkers.concat(this.tradeMarkersB))
      } else {
        runnerSerie.setMarkers(this.updateMarkers)
      }
    }
  }

  private generateTradeMarker(trade: SelectedTradeCharts, time: number){

    // markers
    const color = trade.isBackTrade ? '#30d6e5' : '#ce86ea'
    const arrow = trade.isBackTrade ? 'arrowDown' : 'arrowUp'
    const position = trade.isBackTrade ? 'aboveBar' : 'belowBar'

    return {
      time,
      position,
      color,
      shape: arrow,
      size: 1,
      id: 'entry' + trade.id,
      text: trade.id + ') ' + trade.odds + ', ' + trade.options
    }

  }
}

// increment the color function
export function incrementColor(color, step){
  let colorToInt = parseInt(color.substr(1), 16)
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



