import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {createChart, LineStyle, PriceScaleMode, CrosshairMode, UTCTimestamp} from 'lightweight-charts';
import {MarketDetailAdvanced} from '../../../../model/market/advanced/marketDetailAdvanced';
import {GridData} from '../../../../model/market/advanced/gridData';
import {LadderData} from '../../../../model/apxCharts/ladderData';
import {Observable, Subject} from 'rxjs';


export interface RunnerDataAdvanced{
  runnerId: string,
  data: any[],
  volume: any[],
  color: string,
  name: string,
  visible: boolean
}

@Component({
  selector: 'app-advanced-multiple-selections',
  templateUrl: './tv-advanced-multiple-selections.component.html',
  styles: [`
    .three-line-legend {
      width: 96px;
      height: 70px;
      position: absolute;
      padding: 8px;
      font-size: 12px;
      background-color: rgba(255, 255, 255, 0.23);
      text-align: left;
      z-index: 1000;
      pointer-events: none;
    }
    `
  ]
})
export class TvAdvancedMultipleSelectionsComponent implements OnInit, OnDestroy {

  @Input() market: MarketDetailAdvanced

  public runnersData: RunnerDataAdvanced[] = [];

  public legend: any

  public clickTime: number

  public byClick = false

  utc = 0
  toAdd = 0


  // DATA of the component
  public lineSeriesData: any[] = []
  public volumeSeriesData: any[] = []
  public candlestickData: any[] = []
  private tv: any
  private chart: any


  // TIME FRAME BUTTON
  public timeFrameState = []

  collapsedAdvanced = true

  // ladder data
  ladder: LadderData = new LadderData()
  ladderData: Subject<number[][]> = new Subject<number[][]>()

  // for grid
  dataGrid: GridData = {
    runnerA: {
      name: '',
      id: 0,
      batb: [],
      batl: [],
    },
    runnerB: {
      name: '',
      id: 0,
      batb: [],
      batl: [],
    }
  }


  updates = []

  constructor(public datePipe: DatePipe) {
    this.ladder.generateLadderArray()
  }


  ngOnInit(): void {

    this.setInitialGrid()

    this.populateTimeFrameButtonArray()
    this.createRunnerData()

    this.generateUpdatesPoint()

    this.legend ={
      name: '',
      value: [],
      time: null,
      openTime: this.market.marketInfo.marketInfo.openDate as UTCTimestamp
    }


  }

  // generate updates point
  private generateUpdatesPoint(){
    let color = '#b0fa74'
    let index=0
    for (const update of this.market.marketUpdates.marketUpdates){
      if(update.status.indexOf('OPEN')!==-1 && update.betDelay>0 && update.inPlay){
        color = incrementColor(color, 20000)
        this.updates.push({
          time: update.timestamp/1000 + this.toAdd as UTCTimestamp,
          position: 'inBar',
          color,
          size:2,
          shape: 'circle',
          id: 'update Runner' + index,
        },)
      }
      index++
    }
  }


  setInitialGrid(){
    if(this.market.marketRunners.marketRunners.length>=2){
      this.dataGrid.runnerA.name = this.market.marketRunners.marketRunners[0].name
      this.dataGrid.runnerA.id = +this.market.marketRunners.marketRunners[0].id

      this.dataGrid.runnerB.name = this.market.marketRunners.marketRunners[1].name
      this.dataGrid.runnerB.id = +this.market.marketRunners.marketRunners[1].id

    }
  }

  getBestAvailableByTime(){
    if (this.legend.time && this.market.marketOdds.marketOdds.length>=2){
      // runner A
      const bestAvailableA = this.market.marketOdds.marketOdds[0].odds.filter(x => x.timestamp === this.legend.time)
      const bestAvailableB = this.market.marketOdds.marketOdds[1].odds.filter(x => x.timestamp === this.legend.time)
      if(bestAvailableA.length){
        this.dataGrid.runnerA.batb = bestAvailableA[0].batb
        this.dataGrid.runnerA.batl = bestAvailableA[0].batl
      }
      // runner B
      if(bestAvailableB.length){
        this.dataGrid.runnerB.batb = bestAvailableB[0].batb
        this.dataGrid.runnerB.batl = bestAvailableB[0].batl
      }

      // remove empty
      this.dataGrid.runnerA.batb = this.dataGrid.runnerA.batb ?  this.dataGrid.runnerA.batb.filter( x => x.length): []
      this.dataGrid.runnerA.batl = this.dataGrid.runnerA.batl ? this.dataGrid.runnerA.batl.filter( x => x.length): []
      this.dataGrid.runnerB.batb = this.dataGrid.runnerB.batb ? this.dataGrid.runnerB.batb.filter( x => x.length): []
      this.dataGrid.runnerB.batl = this.dataGrid.runnerB.batl ? this.dataGrid.runnerB.batl.filter( x => x.length): []

      // push to reach size 3
      for(let i=0; i<3;i++){
        if(!this.dataGrid.runnerA.batb[i]){
          this.dataGrid.runnerA.batb.push([0,0,0])
        }
        if(!this.dataGrid.runnerA.batl[i]){
          this.dataGrid.runnerA.batl.push([0,0,0])
        }
        if(!this.dataGrid.runnerB.batb[i]){
          this.dataGrid.runnerB.batb.push([0,0,0])
        }
        if(!this.dataGrid.runnerB.batl[i]){
          this.dataGrid.runnerB.batl.push([0,0,0])
        }
      }
      // revers back
      this.dataGrid.runnerA.batb = this.dataGrid.runnerA.batb.slice().reverse()
      this.dataGrid.runnerB.batb = this.dataGrid.runnerB.batb.slice().reverse()


      /*

      TO CROSS MATCHING
      // check for cross matching
      const toCrossLayA = []
      const toCrossBackA = []
      const toCrossLayB = []
      const toCrossBackB = []
      for(let i=0; i < this.dataGrid.runnerA.batb.length;i++){
        if(this.dataGrid.runnerA.batb[i][1]>1){
          toCrossLayA.push([i,this.dataGrid.runnerA.batb[i][1]/(this.dataGrid.runnerA.batb[i][1]-1),this.dataGrid.runnerA.batb[i][2]])
        }
      }

      for(let i=0; i < this.dataGrid.runnerA.batl.length;i++){
        if(this.dataGrid.runnerA.batb[i][1]>1){
          toCrossBackA.push([i,this.dataGrid.runnerA.batl[i][1]/(this.dataGrid.runnerA.batl[i][1]-1),this.dataGrid.runnerA.batl[i][2]])
        }
      }

      for(let i=0; i < this.dataGrid.runnerB.batb.length;i++){
        if(this.dataGrid.runnerB.batb[i][1]>1){
          toCrossLayB.push([i,this.dataGrid.runnerB.batb[i][1]/(this.dataGrid.runnerB.batb[i][1]-1),this.dataGrid.runnerB.batb[i][2]])
        }
      }
      for(let i=0; i < this.dataGrid.runnerB.batl.length;i++){
        if(this.dataGrid.runnerB.batb[i][1]>1){
          toCrossBackB.push([i,this.dataGrid.runnerB.batl[i][1]/(this.dataGrid.runnerB.batl[i][1]-1),this.dataGrid.runnerB.batl[i][2]])
        }
      }

      console.log(toCrossLayA)
      console.log(toCrossBackA)
      console.log(toCrossLayB)
      console.log(toCrossBackB)

       */
    }
  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {

    this.generateChart()

    // set winner with sec time frame scaled, hide loser
    this.changeTimeFrame(2)
    const loser = this.market.marketInfo.marketInfo.winner.id === +this.market.marketRunners.marketRunners[0].id ? 1 : 0
    this.changeVisibility(loser,false,true)
    this.fitClick()

    this.chart.subscribeClick((param) => {
      if(this.byClick){
        this.subscriber(param)
      }
    })

    // cross hair suscribe
    this.chart.subscribeCrosshairMove((param) =>{
      if(!this.byClick){
        this.subscriber(param)
      }
    });
  }

  subscriber(param) {
    if (param.point) {
      const prevValue = this.legend.value
      const prevVol = this.legend.volume
      this.legend.value = []
      this.legend.volume = []
      // valid data point
      this.legend.time = (param.time * 1000) - this.toAdd*1000

      for (let i = 0; i < this.lineSeriesData.length; i++) {
        const value = param.seriesPrices.get(this.lineSeriesData[i]) ? param.seriesPrices.get(this.lineSeriesData[i]) : prevValue[i]
        this.legend.value.push(value)

        // CHECK TO REMAKE
        // const vol = param.seriesPrices.get(this.volumeSeriesData[i]) ? param.seriesPrices.get(this.volumeSeriesData[i]) : prevVol[i]
        this.legend.volume.push(param.seriesPrices.get(this.volumeSeriesData[i]))
      }
      for (let j = 0; j < this.candlestickData.length; j++) {
        const value = param.seriesPrices.get(this.candlestickData[j]) ? param.seriesPrices.get(this.candlestickData[j]) : prevValue[j]
        this.legend.value.push(value)
        // const vol = param.seriesPrices.get(this.volumeSeriesData[j]) ? param.seriesPrices.get(this.volumeSeriesData[j]) : prevVol[j]
        this.legend.volume.push(param.seriesPrices.get(this.volumeSeriesData[j]))
      }

    } else {
      return
    }

    // data grid
    this.getBestAvailableByTime()
    this.ladder.countTd(this.market.marketOdds.marketOdds[0].odds, this.market.marketOdds.marketOdds[1].odds, this.legend.time)
    this.ladderData.next([this.ladder.dataA, this.ladder.dataB])
    this.clickTime = this.legend.time
  }

  ngOnDestroy(): void {
    this.chart.unsubscribeClick();
    this.chart.unsubscribeCrosshairMove();
  }

  /*
  **
  * MAIN CHART FUNCTIONS
   */

  // plot TV trade in div
  private generateChart() {
    this.tv = document.getElementById('TVCharts') as HTMLElement
    this.chart = createChart(this.tv, {
      width: document.getElementById('TvContainer').clientWidth - 70,
      height: (document.getElementById('TvContainer').clientWidth - 70) * 0.50,
      localization: {
        locale: 'en-GB',
      },
      crosshair: {
        mode: CrosshairMode.Normal,
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
        text: this.market.marketInfo.marketInfo.eventName,
      },
      timeScale: {
        visible: true,
        timeVisible: true,
        secondsVisible: true
      }
    });
  }

  // generate runner data from prices
  private createRunnerData() {
    // generate data for all runner
    let firstColor = '#c86f6f'
    let i = 0
    for (const odd of this.market.marketOdds.marketOdds) {

      // increment the color for each runner
      firstColor = incrementColor(firstColor, 5000)

      // initialize runner data
      const tempRunner: RunnerDataAdvanced = {
        runnerId: odd.runnerId,
        data: [],
        volume: [],
        color: firstColor,
        name: this.market.marketRunners.marketRunners[i].name,
        visible: true
      }

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
      let previousVol = 0
      for (const o of odd.odds) {
        const time: number = (o.timestamp/1000) + this.toAdd as UTCTimestamp
        const tempOdds = {
          time,
          value: o.ltp,
        }
        const tempVol = {
          time,
          value: o.tv - previousVol,
        }
        previousVol = o.tv

        if (o.ltp > 1) {
          tempRunner.data.push(tempOdds)
          tempRunner.volume.push(tempVol)
        }

      }
      // add this runner to list of data
      this.runnersData.push(tempRunner)
      i++
    }
  }

  /*
  **
  * SET DATA IN CHARTS FUNCTIONS
   */

  // set line series in charts
  private setLineSeriesInCharts() {
    // for runner create their TvData and append their odds
    // tslint:disable-next-line:forin
    for (let i = 0; i < this.runnersData.length; i++) {
      // this runner series
      const runnerSeries = this.chart.addLineSeries({
        title: this.market.marketRunners.marketRunners[i].name,
      });
      runnerSeries.setData(this.runnersData[i].data);

      // series options
      runnerSeries.applyOptions({
        priceLineVisible: false,
        color: this.runnersData[i].color,
        priceLineColor: this.runnersData[i].color,
        lastValueVisible: false,
        visible: this.runnersData[i].visible,
      });

      // set line and dots
      this.setLineAndInPlayDots(runnerSeries, i)

      // pusdh in DATA
      this.lineSeriesData.push(runnerSeries)
      // add volume for this runner
      this.setVolumeSeriesToChart(i, null)
    }
  }

  // set volume in charts
  private setVolumeSeriesToChart(index: number, volData: any) {
    // VOLUME

    const runnerSeriesVolume = this.chart.addHistogramSeries({
      color: this.runnersData[index].color,
      priceFormat: {
        type: 'volume',
      },
      priceScaleId: '',
      scaleMargins: {
        top: 0.8,
        bottom: 0,
      },
      lastValueVisible: false,
    });
    if (volData) {
      runnerSeriesVolume.setData(volData);
    } else {
      runnerSeriesVolume.setData(this.runnersData[index].volume);
    }

    if (!(this.runnersData[index].visible)) {
      runnerSeriesVolume.applyOptions({
        visible: status,
      });
    }

    this.volumeSeriesData.push(runnerSeriesVolume)
  }

  private setLineAndInPlayDots(runnerSeries: any, i: number) {
    // create line for limit 1
    runnerSeries.createPriceLine({
      price: 1,
      color: '#919191',
      lineWidth: 2,
      lineStyle: LineStyle.Dotted,
      axisLabelVisible: false,
    });
    // create line for odds 2
    runnerSeries.createPriceLine({
      price: 2,
      color: '#ffbdbd',
      lineWidth: 2,
      lineStyle: LineStyle.SparseDotted,
      axisLabelVisible: false,
    });
    // set time markers
    if (this.market.marketInfo.marketInfo.sport === 'FOOTBALL') {
    } else {
      runnerSeries.setMarkers(this.updates);
    }
  }


  /*
  **
  * CLICK AND OTHER FUNCTIONS
   */

  // support function to change runner by button
  public changeRunnerState(runnerId: string) {

    let i = 0
    for (const runner of this.runnersData) {
      if (runnerId === runner.runnerId) {
        if (runner.visible === true) {
          if (this.lineSeriesData.length) {
            this.changeVisibility(i, false, false)
          } else if (this.candlestickData.length) {
            this.changeVisibility(i, false, true)
          }
          break
        } else {
          if (this.lineSeriesData.length) {
            this.changeVisibility(i, true, false)
          } else if (this.candlestickData.length) {
            this.changeVisibility(i, true, true)
          }
          break
        }
      }
      i++
    }
  };

  // expand chart click
  public fitClick() {
    this.chart.timeScale().resetTimeScale();
    this.chart.timeScale().fitContent();
  }

  // prematch only click
  public preMatchOnlyClick() {

  }

  // go to inPlay click
  public goToInPlayClick() {

  }


  /*
  **
  *  TIME FRAME
   */


  // change the visibility for the runner in this position
  private changeVisibility(runnerPos: number, status: boolean, isCandle: boolean) {
    this.runnersData[runnerPos].visible = status
    // volume
    this.volumeSeriesData[runnerPos].applyOptions({
      visible: status,
    });
    // odds
    if (!isCandle) {
      this.lineSeriesData[runnerPos].applyOptions({
        visible: status,
      });
    } else {
      this.candlestickData[runnerPos].applyOptions({
        visible: status,
      });
    }
  }

  // populate the array with static data
  private populateTimeFrameButtonArray() {
    this.timeFrameState.push({
      state: false,
      name: 'Line',
      color: 'withe'
    })
    this.timeFrameState.push({
      state: false,
      name: '10 S',
      color: 'yellow'
    })
    this.timeFrameState.push({
      state: true,
      name: '20 S',
      color: 'yellow'
    })
    this.timeFrameState.push({
      state: false,
      name: '30 S',
      color: 'yellow'
    })
    this.timeFrameState.push({
      state: false,
      name: '1M',
      color: 'green'
    })
    this.timeFrameState.push({
      state: false,
      name: '3M',
      color: 'green'
    })
    this.timeFrameState.push({
      state: false,
      name: '5M',
      color: 'green'
    })
    this.timeFrameState.push({
      state: false,
      name: '10M',
      color: 'grey'
    })
    this.timeFrameState.push({
      state: false,
      name: '30M',
      color: 'grey'
    })
  }

  // click that update button and start the switch
  changeTimeFrameClick(index: number) {
    for (const time of this.timeFrameState) {
      time.state = false
    }
    this.timeFrameState[index].state = true
    this.changeTimeFrame(index)
    this.fitClick()
  }

  // main functions that reset chart and generate new value via switch
  public changeTimeFrame(index: number) {

    // remove all data from charts
    if (this.lineSeriesData.length) {
      this.removeAllLineSeries()
    }
    this.removeAllVolumeSeries()
    if (this.candlestickData.length) {
      this.removeAllCandleSeries()
    }

    if(index===0){
      this.setLineSeriesInCharts()

    } else {
      for (let i = 0; i < this.runnersData.length; i++) {
        const run = JSON.parse(JSON.stringify(this.runnersData[i]));

        switch (index) {
          case (1): {
            const newData = this.generateCandlestickByDuration(10, run.data, run.volume)
            this.setNewCandleTimeFrame(newData[0], newData[1], i)
            break
          }
          case (2): {
            const newData = this.generateCandlestickByDuration(20, run.data, run.volume)
            this.setNewCandleTimeFrame(newData[0], newData[1], i)
            break
          }
          case (3): {
            const newData = this.generateCandlestickByDuration(30, run.data, run.volume)
            this.setNewCandleTimeFrame(newData[0], newData[1], i)
            break
          }
          case (4): {
            const newData = this.generateCandlestickByDuration(60, run.data, run.volume)
            this.setNewCandleTimeFrame(newData[0], newData[1], i)
            break
          }
          case (5): {
            const newData = this.generateCandlestickByDuration(180, run.data, run.volume)
            this.setNewCandleTimeFrame(newData[0], newData[1], i)
            break
          }
          case (6): {
            const newData = this.generateCandlestickByDuration(300, run.data, run.volume)
            this.setNewCandleTimeFrame(newData[0], newData[1], i)
            break
          }
          case (7): {
            const newData = this.generateCandlestickByDuration(600, run.data, run.volume)
            this.setNewCandleTimeFrame(newData[0], newData[1], i)
            break
          }
          case (8): {
            const newData = this.generateCandlestickByDuration(1800, run.data, run.volume)
            this.setNewCandleTimeFrame(newData[0], newData[1], i)
            break
          }
        }
      }
    }
  }


  // set new candlestick time frame in the carts
  private setNewCandleTimeFrame(odds: any[], vol: any[], index: number) {

    // create candlestick
    const candlestickSeries = this.chart.addCandlestickSeries();
    candlestickSeries.setData(odds)
    candlestickSeries.applyOptions({
      priceLineVisible: false,
      lastValueVisible: false,
    })


    // check for visibility
    if (!(this.runnersData[index].visible)) {
      candlestickSeries.applyOptions({
        visible: status,
      });
    }

    // set line and dots
    this.setLineAndInPlayDots(candlestickSeries, index)
    // push in data
    this.candlestickData.push(candlestickSeries)

    // volume
    this.setVolumeSeriesToChart(index, vol)

  }

  // return the new data for [odds, volume] with the new timeframe
  private generateCandlestickByDuration(secDuration: number, odds: any[], volume: any[]): any[] {

    const responseOdds = []
    const responseVol = []
    let timeDelta = 0
    // first set
    let tempCandle = {
      time: odds[0].time,
      open: odds[0].value,
      high: odds[0].value,
      low: odds[0].value,
      close: odds[0].value,
    }
    // volume
    let volDelta = 0

    for (let i = 1; i < odds.length - 2; i++) {
      // check if add
      timeDelta = (odds[i].time) - tempCandle.time

      if (timeDelta > secDuration) {
        // VOLUME -------
        // push in array vol
        // add this vol
        volDelta = volDelta + (volume[i].value)
        responseVol.push({
          time: tempCandle.time,
          value: volDelta
        })
        // reset vol
        volDelta = volume[i + 1].value

        // ODDS -----
        // push in array odds
        tempCandle.close = odds[i].value
        responseOdds.push(tempCandle)
        // reset value
        tempCandle = {
          time: odds[i + 1].time,
          open: odds[i + 1].value,
          high: odds[i + 1].value,
          low: odds[i + 1].value,
          close: odds[i + 1].value,
        }
        i = i + 2

      } else {

        // check for max / min
        if (odds[i].value > tempCandle.high) {
          tempCandle.high = odds[i].value
        }
        if (odds[i].value < tempCandle.low) {
          tempCandle.low = odds[i].value
        }

        // add volume
        volDelta = volDelta + (volume[i].value)
      }
    }

    // set the last value for all time frame
    responseOdds[responseOdds.length-1].close = odds[odds.length-1].value
    return [responseOdds, responseVol]
  }

  /*
  **
  *  UTILS
   */
  private removeAllLineSeries() {
    // empty chart already present
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.lineSeriesData.length; i++) {
      this.chart.removeSeries(this.lineSeriesData[i])
    }
    this.lineSeriesData = []
  }

  private removeAllVolumeSeries() {
    // empty chart already present
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.volumeSeriesData.length; i++) {
      this.chart.removeSeries(this.volumeSeriesData[i])
    }
    this.volumeSeriesData = []
  }

  private removeAllCandleSeries() {
    // empty chart already present
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.candlestickData.length; i++) {
      this.chart.removeSeries(this.candlestickData[i])
    }
    this.candlestickData = []
  }

  /*
  **
  *  LEGEND
   */

  totalVolume(runnerIndex: number){

    let total =0

    const temp = (this.legend.time/1000) + this.toAdd
    // tslint:disable-next-line:prefer-for-of
    for (let i=0;i<this.runnersData[runnerIndex].volume.length;i++){
      if(this.runnersData[runnerIndex].volume[i].time > temp){
        break
      } else {
        total += this.runnersData[runnerIndex].volume[i].value
      }
    }

    if(total<1000000){
      return `${Math.round(total /1000)}K`
    } else {
      return `${Math.round((total /1000000)*1000)/1000}M`
    }


  }
}


// increment the color function
export function incrementColor(color, step){
  // tslint:disable-next-line:one-variable-per-declaration
  let colorToInt = parseInt(color.substr(1), 16),
    nStep = parseInt(step);
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


