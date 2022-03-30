import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Trade} from '../../../../../../model/report/trade';
import {ChartComponent} from 'ng-apexcharts';
import {CurrencyPipe} from '@angular/common';
import {NewTrade} from '../../../../../../model/report/new/newTrade';

@Component({
  selector: 'app-trade-equity',
  templateUrl: './trade-equity.component.html',
})
export class TradeEquityComponent implements OnInit {

  @Input() allTrades: NewTrade[]
  @Input() labels: string[]

  @Input()
  wantBar: boolean

  @ViewChild('chartObj') chart: ChartComponent;


  public lineChartOptions: Partial<any>;
  public stockArray = []

  constructor(private currencyPipe: CurrencyPipe) { }

  ngOnInit(): void {

    this.generateChart()
  }

  generateChart() {

    this.updateStock()

    // check if want P/L bar or not
    let series = []
    if(this.wantBar){
      series = [
        {
        name: 'Stock',
        type: 'line',
        data: this.stockArray,
        axisName: 'axis1',

      },
        {
          name: 'P/L',
          type: 'column',
          data: this.allTrades.map(x =>x.trade.results.netProfit.toFixed(2)),
          axisName: 'axis2'
        },
      ]
    } else {
      series = [
        {
          name: 'Stock',
          type: 'line',
          data: this.stockArray,
          axisName: 'axis1',

        }
      ]
    }

    // set data and options
    this.lineChartOptions = {
      series,
      colors : ['#ddbf1d','#5a726e'],
      xaxis: {
        categories: this.labels
      },
      yaxis: [
        {
          seriesName: 'axis1',
          opposite: true,
          title: {
            text: 'Stock',
          },
          style: {
            fontSize: '20px',
            fontFamily: undefined
          },
        },
        {
          seriesName: 'axis2',
          opposite: false,
          title: {
            text: 'P/L',
          },
          style: {
            fontSize: '20px',
            fontFamily: undefined
          },
        },
      ],
      tooltip: {
        shared: true,
        style: {
          fontSize: '16px',
          fontFamily: undefined
        },
        y: {
          formatter: (x) => {
            if(x){
              return (this.currencyPipe.transform(x))
            } else {
              return ''
            }
          },
          title: {
            formatter: (seriesName) => seriesName,
          },
        },
      },
      legend: {
        horizontalAlign: 'left',
        offsetX: 40
      },
      chart: {
        type: 'line',
        height: 800,
        animations: {
          enabled: false
        },
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: '80%',
          colors: {
            ranges: [{
              from: -100000000000,
              to: -0.000001,
              color: '#b55b45'
            }, {
              from: 0,
              to: 100000000,
              color: '#3a9643'
            }]
          }
        }
      },
      markers: {
        size: 0,
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1
      },
      theme: {
        mode: 'dark'
      },
      stroke: {
        show: true,
        width: 2,
      }

    };
  }

  updateStock(){
    this.stockArray = []
    let stock=0
    for (const trade of this.allTrades){
      stock+= trade.trade.results.netProfit
      this.stockArray.push(+stock.toFixed(2))
    }
  }

}
