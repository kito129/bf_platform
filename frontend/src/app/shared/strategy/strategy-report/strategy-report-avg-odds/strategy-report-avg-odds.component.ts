import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport} from '../../../../model/report/starategyReport';

@Component({
  selector: 'app-strategy-report-avg-odds',
  templateUrl: './strategy-report-avg-odds.component.html',
})
export class StrategyReportAvgOddsComponent implements OnInit {

  @Input() strategyReport: StrategyReport

  constructor() { }

  ngOnInit(): void {
  }

}
