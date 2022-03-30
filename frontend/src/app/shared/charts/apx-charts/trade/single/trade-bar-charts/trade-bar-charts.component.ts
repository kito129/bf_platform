import {Component, Input, OnInit} from '@angular/core';
import {CurrencyPipe, PercentPipe} from '@angular/common';
import {ChartOptions} from '../../../../../../model/chartOptions';

@Component({
  selector: 'app-trade-bar-charts',
  templateUrl: './trade-bar-charts.component.html',
})
export class TradeBarChartsComponent implements OnInit {

  @Input() data: number[]
  @Input() labels: string[]
  @Input() colors: string[]
  @Input() height: number
  @Input() title: string
  @Input() isCurrency: boolean
  @Input() isPercent: boolean

  public lineChartOptions: Partial<ChartOptions>;

  constructor(private currencyPipe: CurrencyPipe,
              private percentPipe: PercentPipe) {
  }

  ngOnInit(): void {
    this.generateChart()
  }

  generateChart() {
    this.lineChartOptions = {
      series: [
        {
          name: this.title,
          type: 'bar',
          data: this.data,

        },
      ],
      colors : this.colors,
      yaxis: [
        {
          title: {
            text: this.title,
          },
          decimalsInFloat: 2,
          labels:{
            formatter: (x) => {
              if(x){
                if(this.isCurrency){
                  return this.currencyPipe.transform(x).toString()
                } else if(this.isPercent){
                  return this.percentPipe.transform(x,'0.02').toString()
                }else {
                  return x.toFixed(2)
                }
              } else {
                return ''
              }
            },
          }
        },
      ],
      xaxis: {
        categories: this.labels,
      },
      tooltip: {
        shared: false,
        style: {
          fontSize: '16px',
          fontFamily: undefined
        },
        y: {
          formatter: (x) => {
            if(x){
              if(this.isCurrency){
                return this.currencyPipe.transform(x).toString()
              } else if(this.isPercent){
                return this.percentPipe.transform(x, '0.02').toString()
              }else {
                return x.toFixed(2)
              }
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
        height: this.height,
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


}
