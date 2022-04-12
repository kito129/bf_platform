import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from 'ng-apexcharts';
import {ChartOptions} from '../../../../../../model/chartOptions';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-multi-pl-trades',
  templateUrl: './multi-pl-trades.component.html',
})
export class MultiPlTradesComponent implements OnInit {

  @Input() seriesName: string[]
  @Input() pl: number[][]

  @ViewChild('chartObj') chart: ChartComponent;


  public lineChartOptions: Partial<ChartOptions>;
  public stockArray = []

  constructor(private currencyPipe: CurrencyPipe) { }

  ngOnInit(): void {

    this.generateChart()
  }

  generateChart() {

    // set stock
    const stockSeries = []
    for (let  i=0; i<this.pl.length; i++){
      stockSeries.push( {
        name: this.seriesName[i],
        data: this.pl[i],
      })
    }

    // set data and options
    this.lineChartOptions = {
      series: stockSeries,
      yaxis: [
        {
          opposite: false,
          title: {
            text: 'Stock',
          },
          decimalsInFloat: 2
        },
      ],
      tooltip: {
        shared: false,
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
        type: 'bar',
        height: 900,
        animations: {
          enabled: false
        },
        zoom: {
          type: 'xy',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          autoSelected: 'zoom'
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
        show: false,
        width: 1,
      }

    };
  }
}
