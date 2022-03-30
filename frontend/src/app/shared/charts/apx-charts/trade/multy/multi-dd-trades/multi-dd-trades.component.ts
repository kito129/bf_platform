import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from "ng-apexcharts";
import {ChartOptions} from "../../../../../../model/chartOptions";
import {CurrencyPipe, PercentPipe} from "@angular/common";

@Component({
  selector: 'app-multi-dd-trades',
  templateUrl: './multi-ddtrades.component.html',
})
export class MultiDdTradesComponent implements OnInit {

  @Input() dd: number[][]
  @Input() seriesName: string[]
  @Input() wantTooltip: boolean
  @Input() wantLegend: boolean
  @Input() height: number
  @Input() title: string
  @Input() isPercent: boolean
  @Input() isCurrency: boolean

  @ViewChild('chartObj') chart: ChartComponent;

  public lineChartOptions: Partial<ChartOptions>;

  constructor(private currencyPipe: CurrencyPipe,
              private percentPipe: PercentPipe) { }

  ngOnInit(): void {

    this.generateChart()
  }

  generateChart() {

    // set stock
    let drawdown = []
    for (let  i=0; i<this.dd.length; i++){
      drawdown.push( {
        name: this.seriesName[i],
        data: this.dd[i],
      })
    }

    // set tooltip
    let tool
    if(this.wantTooltip){
      tool = {
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
                return this.percentPipe.transform(x,'0.02').toString()
              }else {
                return x.toFixed(2)
              }
            } else {
              return ""
            }
          },
          title: {
            formatter: (seriesName) => seriesName,
          },
        },
      }
    }  else {
      tool =  {
        enabled: false
      }
    }

    // legend
    let legend
    if(this.wantLegend){
      legend= {
        horizontalAlign: "left",
        offsetX: 40
      }
    } else {
      legend= {
        show: false,
      }
    }

    // set data and options
    this.lineChartOptions = {
      series: drawdown,
      yaxis: {
        opposite: false,
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
              return ""
            }
          },
        }
      },
      tooltip: tool,
      legend: legend,
      chart: {
        type: "area",
        height: this.height,
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
      plotOptions: {
        bar: {
          horizontal: false,
          barHeight: "80%"
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

    };
  }

}
