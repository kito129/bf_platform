import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from "ng-apexcharts";
import {ChartOptions} from "../../../../../../model/chartOptions";
import {CurrencyPipe, PercentPipe} from "@angular/common";

@Component({
  selector: 'app-multi-rr-trades',
  templateUrl: './multi-rr-trades.component.html',
})
export class MultiRrTradesComponent implements OnInit {


  @Input() seriesName: string[]
  @Input() rr: number[][]

  @ViewChild('chartObj') chart: ChartComponent;


  public lineChartOptions: Partial<ChartOptions>;
  public stockArray = []

  constructor(private percentPipe: PercentPipe) { }

  ngOnInit(): void {

    this.generateChart()
  }

  generateChart() {

    // set stock
    let stockSeries = []
    for (let  i=0; i<this.rr.length; i++){
      stockSeries.push( {
        name: this.seriesName[i],
        data: this.rr[i],
      })
    }

    // set data and options
    this.lineChartOptions = {
      series: stockSeries,
      yaxis: [
        {
          opposite: false,
          title: {
            text: "RR",
          },
          decimalsInFloat: 2
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
              return (this.percentPipe.transform(x))
            } else {
              return ""
            }
          },
          title: {
            formatter: (seriesName) => seriesName,
          },
        },
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      },
      chart: {
        type: "bar",
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
