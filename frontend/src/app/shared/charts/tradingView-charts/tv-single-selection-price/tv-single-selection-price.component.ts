import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {createChart, LineStyle, PriceScaleMode} from 'lightweight-charts';
import {SelectedTradeCharts} from '../../../../model/study/selectedTradeCharts';
import {RunnerPrices} from '../../../../model/study/runnerPrices';

@Component({
  selector: 'app-tv-single-selection-price',
  templateUrl: './tv-single-selection-price.component.html',
})
export class TvSingleSelectionPriceComponent implements OnInit, AfterViewInit {

  @Input() runnerPrices: RunnerPrices
  @Input() title: string
  @Input() selectedTrades: SelectedTradeCharts[]
  @Input() haveTrade: boolean
  @Input() basketBspTime: number
  @Input() basketBspOdd: number


  private tv: any;
  private chart: any;
  private runnerSeries: any
  private data: {
    time: number,
    value: number
  }[]

  crosshairData = {
    time: 0,
    odds: 0
  }

  constructor(public datePipe: DatePipe) {  }

  ngOnInit(): void {
    this.generateChart()
  }

  ngAfterViewInit() {

    this.setDataTv()
    this.setMarkersAndData()
    this.setPriceLines()
    // fit the content after added data
    this.chart.timeScale().fitContent();
    // crosshair


    this.chart.subscribeCrosshairMove(param => {
      this.crosshairData.time = param.time*1000
      this.crosshairData.odds = param.seriesPrices.get(this.runnerSeries);
      // console.log(param);
    });
  }

  // plot TV trade in div
  private generateChart(){
    this.tv = document.getElementById('TVCharts') as HTMLElement
    this.chart = createChart(this.tv, {
      width: document.getElementById('TvContainer').clientWidth-70,
      height: 600,
      localization: {
        locale: 'gb-GB',
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
        text: this.title,
      },
      crosshair: {
        horzLine: {
          visible: true,
          labelVisible: true,
        },
        vertLine: {
          visible: true,
          labelVisible: true,
        },
        mode: 1,
      },
      timeScale: {
        visible: true,
        timeVisible: true,
        secondsVisible: true
      }
    });
  }


  setDataTv() {

    // set and sort fata
    this.data = this.runnerPrices.prices.map(x => {
      return {
        time: +(x.timestamp)/1000,
        value: +x.ltp,
      }
    })

    // create series
    this.runnerSeries = this.chart.addAreaSeries({
      title: '',
      /*
      autoscaleInfoProvider: () => ({
        priceRange: {
          minValue: 1,
          maxValue: Math.max(...this.data.map(x => x.value)),
        },
        margins: {
          above: 0,
          below: 0,
        },
      }),

       */
    });
    this.runnerSeries.applyOptions({
      priceLineVisible: false,
      visible: true,
      lastValueVisible: false,
    });
  }

  private setMarkersAndData(){

    const markers = []
    const entryTime = []
    let bspTime = 0
    const tradeAddedTime = []

    if(this.haveTrade){
      // i have study with trades
      // check for entryTime
      for(const selectedTrade of this.selectedTrades){
          for (const prices of this.data){
            // time found
            if(prices.time>= selectedTrade.time/1000){
              // check if already added time
              if(!this.findInArray(tradeAddedTime, prices.time)){
                // check if odds is different
                if(prices.value !== selectedTrade.odds ){
                  // add value to data and set time previous
                  const time = prices.time-5
                  const odds = selectedTrade.odds
                  this.data.push({
                    time,
                    value: odds
                  })
                  entryTime.push(time)
                  tradeAddedTime.push(time+5)
                } else {
                  entryTime.push(prices.time)
                  tradeAddedTime.push(prices.time)
                }
              } else {
                entryTime.push(prices.time-5)
              }
              break
          }
        }
      }
      // resort data
      this.data.sort((a,b) =>{
        return a.time - b.time;
      })

      // set new data with odds or old
      this.runnerSeries.setData(this.data);


      for(const [index, value] of this.selectedTrades.entries()){
        const text = value.isBackTrade? 'Back @ ': 'Lay @ '
        const color = value.isBackTrade? '#30d6e5': '#ce86ea'
        const arrow = value.isBackTrade? 'arrowDown': 'arrowUp'
        const position = value.isBackTrade? 'aboveBar': 'belowBar'
        markers.push({
          time: entryTime[index],
          position,
          color,
          shape: arrow,
          size: 2,
          id: 'entry ' + index,
          text: text +  value.odds + '/w ' + +value.stake.toFixed(2) + ' €'
        })
      }
      // check for bspTime
      for (const odds2 of this.data){
        if(odds2.time>= this.selectedTrades[0].bspTime/1000){
          bspTime = odds2.time
          break
        }
      }
    } else {
      // i have basket

      // set data
      this.runnerSeries.setData(this.data);

      // check for bsp basket
      for (const odds2 of this.data){
        if(odds2.time>= this.basketBspTime/1000){
          bspTime = odds2.time
          break
        }
      }
    }

    markers.push({
      time: bspTime,
      position: 'inBar' ,
      color: 'yellow',
      size: 2,
      shape: 'circle',
      id: 'inPlay',
    })

    // set markers
    this.runnerSeries.setMarkers(markers);

  }

  private findInArray(array: number[], toFind: number){
    for(const numb of array){
      if (numb === toFind){
        return true
      }
    }
    return false
  }

  private setPriceLines(){
    // set price lines
    this.runnerSeries.createPriceLine({
      price: 1,
      color: '#ffffff',
      lineWidth: 3,
      lineStyle: LineStyle.Dotted,
      axisLabelVisible: false,
    });
    this.runnerSeries.createPriceLine({
      price: 2,
      color: '#ff4b4b',
      lineWidth: 2,
      lineStyle: LineStyle.SparseDotted,
      axisLabelVisible: false,
    });

    // set bsp price line
    if(this.haveTrade){
      this.runnerSeries.createPriceLine({
        price: this.selectedTrades[0].bsp,
        color: '#dbc535',
        lineWidth: 2,
        lineStyle: LineStyle.LargeDashed,
        axisLabelVisible: true,
        title: 'BSP',
      });
    } else {
      this.runnerSeries.createPriceLine({
        price: this.basketBspOdd,
        color: '#dbc535',
        lineWidth: 2,
        lineStyle: LineStyle.LargeDashed,
        axisLabelVisible: true,
        title: 'BSP',
      });
    }
  }



}
