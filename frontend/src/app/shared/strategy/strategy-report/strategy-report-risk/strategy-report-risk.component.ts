import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport} from '../../../../model/report/starategyReport';

@Component({
  selector: 'app-strategy-report-risk',
  templateUrl: './strategy-report-risk.component.html',
})
export class StrategyReportRiskComponent implements OnInit {

  @Input() strategyReport: StrategyReport

  constructor() { }

  ngOnInit(): void {
  }

}
