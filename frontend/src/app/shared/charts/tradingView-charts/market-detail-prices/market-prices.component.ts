import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {createChart, ISeriesApi, LineStyle, PriceScaleMode, UTCTimestamp} from 'lightweight-charts';
import { DatePipe } from '@angular/common'
import {MarketBasic} from '../../../../model/market/basic/marketBasic';
import {SelectedTradeCharts} from '../../../../model/study/selectedTradeCharts';


export interface RunnerData{
  runnerId: string,
  data: any[],
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
  private tv: any;
  private chart: any;

  utc = 0
  toAdd = 0

  updates = []

  legend: {
    name: string,
    value: number[],
    time: number,
    openTime: number
  }

  constructor(public datePipe: DatePipe) {  }

  ngOnInit(): void {
    this.creatTvData();
    this.generateUpdatesPoint()

    this.legend ={
      name: '',
      value: [],
      time: null,
      openTime: this.marketDetail.marketInfo.marketInfo.openDate as UTCTimestamp
    }
  }

  ngAfterViewInit() {

    this.generateChart()
    this.setRunnerTvDataInChart()

    this.winnerOnly()

    // this.setMarkersAndData()


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
  private creatTvData(){
    // generate data for all runner
    let firstColor = '#c86f6f'
    let i =0
    for (const odd of this.marketDetail.marketOdds.marketOdds){

      // increment the color for each runner
      firstColor = incrementColor(firstColor,5000)

      // initialize runner data
      const tempRunner: RunnerData = {
        runnerId: odd.runnerId,
        data: [],
        color: firstColor,
        name: this.marketDetail.marketRunners.marketRunners[i].name,
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
      for (const  o of odd.odds){

        const t =  (o.timestamp/1000) + this.toAdd as UTCTimestamp
        const temp = {
          time: t,
          value: o.ltp,
        }
        tempRunner.data.push(temp)
      }
      // add this runner to list of data
      this.runnersData.push(tempRunner)
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
      runnerSerie.setData(this.runnersData[i].data);
      runnerSerie.applyOptions({
        priceLineVisible: false,
        color: this.runnersData[i].color,
        priceLineColor: this.runnersData[i].color,
        lastValueVisible: false,
      });
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
        runnerSerie.setMarkers(this.updates);
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


  // prematch only click
  public preMatchOnlyClick(){



  }

  // go to Inplay click
  public goToInPlayClick(){

  }

  // change the visibility for the runner in this position
  private changeRunnerVisibility(runnerPos: number, status:boolean){
    this.runnersData[runnerPos].visible = status
    this.lineSeriesData[runnerPos].applyOptions({
      visible: status,
    });

  }

  private setTradesMarkers() {
    if (this.trades) {
      const markersA = []
      const markersB = []

      for (const [index, value] of this.trades.entries()) {
        const text = (index+1) + ' @ '
        const color = value.isBackTrade ? '#30d6e5' : '#ce86ea'
        const arrow = value.isBackTrade ? 'arrowDown' : 'arrowUp'
        const position = value.isBackTrade ? 'aboveBar' : 'belowBar'

        const temp = {
          time: (value.time /1000) + this.toAdd as UTCTimestamp,
          position,
          color,
          shape: arrow,
          size: 2,
          id: 'entry ' + index,
          text: text + value.odds + ', ' + +value.stake.toFixed(2) + ' €'
        }
        value.sideA ? markersA.push(temp) : markersB.push(temp)
      }


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

