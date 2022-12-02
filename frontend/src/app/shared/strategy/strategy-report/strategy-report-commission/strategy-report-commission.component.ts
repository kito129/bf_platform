import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport} from '../../../../model/report/strategy/starategyReport';

@Component({
  selector: 'app-strategy-report-commission',
  templateUrl: './strategy-report-commission.component.html',
})
export class StrategyReportCommissionComponent implements OnInit {

  @Input() strategyReport: StrategyReport

  constructor() { }

  ngOnInit(): void {
  }

}
