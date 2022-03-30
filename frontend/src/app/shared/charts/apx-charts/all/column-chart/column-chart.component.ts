import {Component, Input, OnInit} from '@angular/core';
import {ChartOptions} from '../../../../../model/chartOptions';
import {CurrencyPipe, PercentPipe} from '@angular/common';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
})
export class ColumnChartComponent implements OnInit {

  @Input() data: Observable<number[][]>
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
    if(this.data){
      this.data.pipe(
        debounceTime(300),
        //distinctUntilChanged(),
        takeUntil(this.destroy$)).subscribe( dataSeries => {
        if(dataSeries && dataSeries.length===2){
          this.lineChartOptions.series = [
            {
              data: dataSeries[0]
            },
            {
              data: dataSeries[1]
            }];
        }
      })
    }
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  generateChart() {
    this.lineChartOptions = {
      series: [
        {
          name: this.title[0],
          type: 'bar',
          data: [],
        },
        {
          name: this.title[1],
          type: 'bar',
          data: [],
        },
      ],
      colors : this.colors,
      yaxis: [
        {
          title: {
            text: 'Volume X Odds',
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
                  return Math.round(x*100)/100 + ' €';
                }else if(x<1000000){
                  return Math.round(x/1000) + 'K €';
                } else {
                  return Math.round((x/1000000)*100)/100 + 'M €';
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
          show: true,
          autoSelected: 'zoom',
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
          },
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

