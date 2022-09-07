import {Component, Input, OnInit} from '@angular/core';
import {RunnerMarketsStats} from '../../../../../model/runner/runnerMarketsStats';
import {RunnerMarketsGaussian} from '../../../../../model/runner/runnerMarketsGaussianInterface';
import {MarketSelectionInfo} from '../../../../../model/market/marketSelectionInfo';
@Component({
  selector: 'app-runner-detail-market-stats',
  templateUrl: './runner-detail-market-stats.component.html',
})
export class RunnerDetailMarketStatsComponent implements OnInit {


  @Input() runnerMarkets: MarketSelectionInfo[]
  @Input() runnerId: number
  marketsStats: RunnerMarketsStats
  constructor() { }

  ngOnInit(): void {
    this.marketsStats = new RunnerMarketsStats(this.runnerMarkets, this.runnerId)
  }
}
