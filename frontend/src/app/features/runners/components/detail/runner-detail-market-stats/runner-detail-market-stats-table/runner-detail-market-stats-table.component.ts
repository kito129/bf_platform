import {Component, Input, OnInit} from '@angular/core';
import {RunnerMarketsStatsInterface} from '../../../../../../model/runner/runnerMarketsStats';
import {ColumnMode} from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-runner-detail-market-stats-table',
  templateUrl: './runner-detail-market-stats-table.component.html',
  styles: ['/deep/ .datatable-row-even {background-color: #181818;}']
})
export class RunnerDetailMarketStatsTableComponent implements OnInit {

  @Input() marketStats: RunnerMarketsStatsInterface
  @Input() runnerId: number
  @Input() totalMatch: number
  isCollapsed = true

  ColumnMode = ColumnMode;

  constructor() {
  }

  ngOnInit(): void {
  }
}
