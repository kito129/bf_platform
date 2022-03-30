import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Trade} from "../../../../../../model/report/trade";
import {ChartComponent} from "ng-apexcharts";
import {CurrencyPipe} from "@angular/common";
import {ChartOptions} from "../../../../../../model/chartOptions";

@Component({
  selector: 'app-multi-line-equity',
  templateUrl: './multi-line-equity.component.html',
})
export class MultiLineEquityComponent implements OnInit {

  @Input() stock: number[][]
  @Input() seriesName: string[]
  @Input() wantTooltip: boolean
  @Input() wantLegend: boolean
  @Input() height: number

  @ViewChild('chartObj') chart: ChartComponent;


  public lineChartOptions: Partial<ChartOptions>;

  constructor(private currencyPipe: CurrencyPipe) { }

  ngOnInit(): void {

    this.generateChart()
  }

  generateChart() {

    // leggend
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
              return (x).toFixed(2) + '€'
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

    // set stock
    let stockSeries = []
    for (let  i=0; i<this.stock.length; i++){
      stockSeries.push( {
        name: this.seriesName[i],
        data: this.stock[i],
      })
    }

    // set data and options
    this.lineChartOptions = {
      series: stockSeries,
      yaxis: [
        {
          opposite: false,
          title: {
            text: "Stock",
          },
          decimalsInFloat: 2
        },
      ],
      tooltip: tool,
      legend: legend,
      chart: {
        type: "line",
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
      markers: {
        size: 0,
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
