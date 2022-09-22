import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {ChartOptions} from '../../../../model/chartOptions';
import {CurrencyPipe, PercentPipe} from '@angular/common';

@Component({
  selector: 'app-columns-chart',
  templateUrl: './columns-chart.component.html',
})
export class ColumnsChartComponent implements OnInit {

  @Input() seriesData: number[][]
  @Input() wantStacked: boolean
  @Input() labels: string[]
  @Input() colors: string[]
  @Input() height: number
  @Input() title: string[]
  @Input() isCurrency: boolean
  @Input() isPercent: boolean

  destroy$: Subject<boolean> = new Subject<boolean>();

  public lineChartOptions: Partial<ChartOptions>;

  constructor(private currencyPipe: CurrencyPipe,
              private percentPipe: PercentPipe) {
  }

  ngOnInit(): void {
    this.generateChart()
  }


  generateChart() {
    const temp = []

    let i=0
    for (const x of this.seriesData) {
     temp.push({
       name: this.title[i],
       type: 'bar',
       data: x,
       color: this.colors[i]
      })
      i++
    }
    this.lineChartOptions = {
      series: temp,
      colors : this.colors,
      yaxis: [
        {
          title: {
            text: '#',
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
                if(x<1000){
                  return Math.round(x*100)/100 + '';
                }else if(x<1000000){
                  return Math.round(x/1000) + 'K';
                } else {
                  return Math.round((x/1000000)*100)/100 + 'M';
                }
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
        selection: {
          enabled: true
        },
        type: 'bar',
        height: this.height,
        animations: {
          enabled: false
        },
        stacked: this.wantStacked,
        zoom: {
          type: 'x',
          enabled: true,
          autoScaleYaxis: true
        },
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            customIcons: []
          },
          autoSelected: 'zoom'
        },
      },
      dataLabels: {
        enabled: false
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
