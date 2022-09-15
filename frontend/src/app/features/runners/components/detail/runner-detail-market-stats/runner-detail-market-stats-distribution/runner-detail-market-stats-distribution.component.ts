import {Component, Input, OnInit} from '@angular/core';
import {RunnerMarketsStatsInterface} from "../../../../../../model/runner/runnerMarketsStats";
import {ChartOptions} from "../../../../../../model/chartOptions";

@Component({
  selector: 'app-runner-detail-market-stats-distribution',
  templateUrl: './runner-detail-market-stats-distribution.component.html',
})
export class RunnerDetailMarketStatsDistributionComponent implements OnInit {

  @Input() marketStats: RunnerMarketsStatsInterface[]
  @Input()
  totalMatch: number

  public lineChartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(): void {
    this.generateChart()
  }

  generateChart() {

    this.lineChartOptions = {
      series: [
        {
          name: "W",
          type: "bar",
          data: this.marketStats.map( x => x.match.winner)
        },
        {
          name: "L",
          type: "bar",
          data: this.marketStats.map( x => x.match.loser)
        },
        {
          name: "N",
          type: "bar",
          data: this.marketStats.map( x => x.match.notWinner)
        },
      ],
      colors : ['#627CF5', '#bc427d','#c6cb31'],
      xaxis: {
        categories: this.marketStats.map( x => {return x.range.minOdds + ' - ' + x.range.maxOdds})
      },
      chart: {
        type: "bar",
        animations: {
          enabled: false
        },
        stacked: true
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return  val + "";
          }
        }
      },
      theme: {
        mode: 'dark'
      },

    };
  }

}
