import {Component, Input, OnInit} from '@angular/core';
import {RunnerStats} from '../../../../../model/runner/runnerStats';
import {ChartOptions} from '../../../../../model/chartOptions';
import {MarketSelectionInfo} from '../../../../../model/market/marketSelectionInfo';

@Component({
  selector: 'app-runner-detail-stats',
  templateUrl: './runner-detail-stats.component.html',
})
export class RunnerDetailStatsComponent implements OnInit {

  @Input()  runnerMarkets: MarketSelectionInfo[]
  @Input()  runnerId: number
  runnerStats: RunnerStats
  @Input()  title: string
  @Input()  height: number

  public donutChartOptions: Partial<ChartOptions>;

  constructor() {}

  ngOnInit(): void {

    this.runnerStats = this.calculateStats()

    /**
     * Donut chart options
     */
    this.donutChartOptions = {
      nonAxisSeries: [
          this.runnerStats.stats.win, this.runnerStats.stats.lose, this.runnerStats.stats.draw, this.runnerStats.stats.notWinner
      ],
      labels: ['Win', 'Lose', 'Draw', 'Not Winner'],
      colors: ['#627CF5', '#bc427d','#c6cb31','#feffd5'],
      chart: {
        height: this.height,
        type: 'donut'

      },
      stroke: {
        colors: ['rgba(0,0,0,0)']
      },
      fill: {
        type: 'gradient'
      },
      legend: {
        position: 'left',
        formatter(labels, opts) {
          return labels + ' - ' + opts.w.globals.series[opts.seriesIndex];
        }
      },
      theme: {
        mode: 'dark'
      },
    };
  }

  calculateStats(): RunnerStats{
    const stats: RunnerStats = {
      stats:{
        played:0,
        win:0,
        lose:0,
        notWinner:0,
        draw:0
      }
    }

    for (const market of this.runnerMarkets){
      if(Object.keys(market.winner).length === 0){
        stats.stats.notWinner++
      } else {
        if(+market.winner.id===+this.runnerId){
          stats.stats.win++
        } else if(market.winner.name.indexOf('The Draw')!==-1){
          stats.stats.draw++
        } else {
          stats.stats.lose++
        }
      }
      stats.stats.played++
    }

    return stats


  }

}
