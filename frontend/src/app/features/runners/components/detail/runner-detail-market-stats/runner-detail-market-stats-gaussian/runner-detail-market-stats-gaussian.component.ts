import {Component, Input, OnInit} from '@angular/core';
import {MarketInfoBasic} from "../../../../../../model/market/basic/marketInfoBasic";
import {
  RunnerMarketsGaussian,
  RunnerMarketsGaussianInterface
} from "../../../../../../model/runner/runnerMarketsGaussianInterface";
import {ChartOptions} from "../../../../../../model/chartOptions";

@Component({
  selector: 'app-runner-detail-market-stats-gaussian',
  templateUrl: './runner-detail-market-stats-gaussian.component.html',
})
export class RunnerDetailMarketStatsGaussianComponent implements OnInit {

  @Input()
  marketsGaussian: RunnerMarketsGaussianInterface

  public lineChartOptions: Partial<ChartOptions>;

  constructor() { }

  ngOnInit(): void {

    this.generateChart()
  }

  generateChart() {

    this.lineChartOptions = {
      series: [
        {
          name: "Odds PDF",
          type: "line",
          data: this.marketsGaussian.value.map( x=> x.value)
        },
      ],
      colors : ['#b55b45'],
      xaxis: {
        categories: this.marketsGaussian.value.map( x=> x.odds.toFixed(2)),
        labels: {
          show: true,
          rotate: -45,
          rotateAlways: false,
          hideOverlappingLabels: true,
          showDuplicates: false
        },
      },
      chart: {
        type: "line",
        animations: {
          enabled: false
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
