import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from '../../../../model/report/new/newTrade';

@Component({
  selector: 'app-strategy-report-bet-filter',
  templateUrl: './strategy-report-bet-filter.component.html',
})
export class StrategyReportBetFilterComponent implements OnInit {

  @Input() trades: NewTrade[]

  constructor() { }

  ngOnInit(): void {
  }

}
