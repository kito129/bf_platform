import {Component, Input, OnInit} from '@angular/core';
import {RunnerMarketsStatsInterface} from '../../../../../../model/runner/runnerMarketsStats';
import {ColumnMode} from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-runner-detail-market-stats-view',
  templateUrl: './runner-detail-market-stats-view.component.html',
})
export class RunnerDetailMarketStatsViewComponent implements OnInit {

  @Input() marketStats: RunnerMarketsStatsInterface
  @Input() runnerId: number
  @Input() totalMatch: number
  isCollapsed = true

  ColumnMode = ColumnMode;

  constructor() { }

  ngOnInit(): void {
  }

}
