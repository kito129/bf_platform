import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ChartComponent} from 'ng-apexcharts';
import {ChartOptions} from '../../../../../../model/chartOptions';
import {Utils} from '../../../../../../model/utils';
import {CurrencyPipe, PercentPipe} from '@angular/common';
import {NewTrade} from '../../../../../../model/report/new/newTrade';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
@Component({
  selector: 'app-trade-dd',
  templateUrl: './trade-dd.component.html',})
export class TradeDDComponent implements OnInit {

  @Input() allTrades: Observable<NewTrade[]>
  @Input() labels: string[]
  ddPercent: number[]
  ddMonetary: number[]
  @Input() bank: number
  @Input() wantPercent: boolean
  @Input() wantMonetary: boolean

  utils = new Utils()

  @ViewChild('chartObj') chart: ChartComponent;

  public lineChartOptionsMonetary: Partial<ChartOptions>;
  public lineChartOptionsPercent: Partial<ChartOptions>;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private currencyPipe: CurrencyPipe,
              private percentPipe: PercentPipe) { }

  ngOnInit(): void {

    this.allTrades.pipe(takeUntil(this.destroy$))
      .subscribe( trades => {
        const net = trades.map(x => x.trade.results.netProfit)
        this.ddPercent = this.utils.ddOfTrades(net, true, this.bank ? this.bank: 10000)
        this.ddMonetary = this.utils.ddOfTrades(net, false, this.bank ? this.bank: 10000)
        this.generateChart()
      })


  }

  generateChart() {

    this.lineChartOptionsMonetary = {
      series: [
        {
          name: 'DD Monetary',
          type: 'area',
          data: this.ddMonetary
        }
      ],
      colors : ['#b55b45','#de8e7a'],
      xaxis: {
        categories: this.labels
      },
      yaxis: {
        opposite: false,
        decimalsInFloat: 2,
        title: {
          text: 'DD Monetary',
          style: {
            color: '#00E396',
            fontSize: '20px',
            fontFamily: undefined
          }
        },
        labels:{
          formatter: (x) => {
            if(x){
              return this.currencyPipe.transform(x).toString()
            } else {
              return ''
            }
          },
        }
      },
      tooltip: {
        shared: true,
        style: {
          fontSize: '16px',
          fontFamily: undefined
        },
        y: {
          formatter: (x) => {
            if(x){
              return this.currencyPipe.transform(x).toString()
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
        type: 'area',
        height: 600,
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
          barHeight: '80%'
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

    this.lineChartOptionsPercent= {
      series: [
        {
          name: 'DD %',
          type: 'area',
          data: this.ddPercent
        }
      ],
      colors : ['#b55b45','#de8e7a'],
      xaxis: {
        categories: this.labels
      },
      yaxis: {
        opposite: false,
        decimalsInFloat: 2,
        title: {
          text: 'DD %',
          style: {
            color: '#00E396',
            fontSize: '20px',
            fontFamily: undefined
          }
        },
        labels:{
          formatter: (x) => {
            if(x){
              return this.percentPipe.transform(x).toString()
            } else {
              return ''
            }
          },
        }
      },
      tooltip: {
        shared: true,
        style: {
          fontSize: '16px',
          fontFamily: undefined
        },
        y: {
          formatter: (x) => {
            if(x){
              return (x*100).toFixed(2)
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
        type: 'area',
        height: 600,
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
          barHeight: '80%'
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
