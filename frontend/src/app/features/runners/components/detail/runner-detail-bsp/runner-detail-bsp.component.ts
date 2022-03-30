import {Component, Input, OnInit} from '@angular/core';
import {RunnersState} from '../../../../../store/runners/runners.reducer';
import {MarketInfoBasic} from '../../../../../model/market/basic/marketInfoBasic';
import {RunnerStats} from '../../../../../model/runner/runnerStats';
import {ChartOptions} from '../../../../../model/chartOptions';
import {RunnerBsp} from '../../../../../model/runner/runnerBsp';
import {date} from 'ngx-custom-validators/src/app/date/validator';
import {
  ma, dma, ema, sma, wma
} from 'moving-averages'
import {MarketSelectionInfo} from '../../../../../model/market/marketSelectionInfo';

@Component({
  selector: 'app-runner-detail-bsp',
  templateUrl: './runner-detail-bsp.component.html',
})
export class RunnerDetailBspComponent implements OnInit {

  @Input()  runnerMarkets: MarketSelectionInfo[]
  @Input()  runnerId: number
  @Input()  numberOfMatch: number
  runnerStats: RunnerStats

  public lineChartOptions: Partial<ChartOptions>;

  data = []

  constructor() {
  }

  ngOnInit(): void {

    this.runnerMarkets = this.runnerMarkets.slice(0, 20).sort((a,b) => new Date(a.openDate).getTime()  - new Date(b.openDate).getTime());

    const bsp = this.runnerMarkets.map(x => {
      if(x.selectionWin){
        return x.winner.bsp
      } else {
        return x.loser.bsp
      }
    })

    this.generateChart(this.winCol(),
      this.loseCol(),
      this.otherCol(),
      this.avgLine(bsp),
      this.avgTotalLine(bsp),
      this.minLine(bsp),
      this.maxLine(bsp)

      // split by last


    )
  }


  generateChart(win:any,lose:any, other: any, avg5:any, avgTotal: any, min:any, max: any) {

    this.lineChartOptions = {
      series: [
        {
          name: 'W',
          type: 'column',
          data: win
        },
        {
          name: 'L',
          type: 'column',
          data: lose
        },
        {
          name: 'N',
          type: 'column',
          data: other
        },
        {
          name: 'EMA 5',
          type: 'line',
          data: avg5,
        },
        {
          name: 'AVG',
          type: 'line',
          data: avgTotal
        },
        {
          name: '',
          type: 'line',
          data: this.generateArray(2)

        },
      ],
      colors : ['#627CF5', '#bc427d','#c6cb31','#3fc8c3', '#913fc8','#32cf5c','#cf3232', '#707070'],
      xaxis: {
        categories: this.runnerMarkets.map(x => x.eventName + ' / ' +  (new Date(x.openDate).getMonth()+1) + '-' + new Date(x.openDate).getDay() + '-' + new Date(x.openDate).getFullYear())
      },
      yaxis: {
        min: 1,
      },
      stroke: {
        width: [0,0,0,2,5,1,1,4]
      },
      chart: {
        type: 'line',
        height: 600,
        animations: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '70%',
          dataLabels: {
            position: 'top' // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter (val) {
            return  val + '';
          }
        }
      },
      theme: {
        mode: 'dark'
      },

    };
  }

  private avgLine(bsp){
    const mvAvg = ema(bsp,5)
    return mvAvg.map(x => x.toFixed(2))
  }

  private avgTotalLine(bsp){
    const avg = (bsp.reduce( (a,b)=>{
      return a+b
      })/bsp.length).toFixed(2)
    return this.generateArray(avg)
  }

  private maxLine(bsp){
    const max = Math.max( ...bsp ).toFixed(2)
    return this.generateArray(max)
  }

  private minLine(bsp){
    const min = Math.min( ...bsp ).toFixed(2)
    return this.generateArray(min)
  }

  private winCol(){
    return  this.runnerMarkets.map(x => {
      if(+x.winner.id===+this.runnerId){
        return x.winner.bsp
      } else {
        return 0
      }
    })
  }

  private loseCol(){
    return this.runnerMarkets.map(x => {
      if (+x.winner.id !== +this.runnerId && x.winner.name!=='The Draw') {
        return x.loser.bsp
      } else {
        return 0
      }
    })
  }

  private otherCol(){
    return this.runnerMarkets.map(x => {
      if(x.winner.name==='The Draw' || !x.winner){
        return x.loser.bsp
      } else {
        return 0
      }
    })
  }

  private generateArray(value: any) {
    const avgArray = []
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.runnerMarkets.length; i++) {
      avgArray.push(value)
    }
    return avgArray
}


}
