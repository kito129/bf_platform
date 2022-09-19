import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport} from '../../../../model/report/starategyReport';

@Component({
  selector: 'app-strategy-report-rr',
  templateUrl: './strategy-report-rr.component.html',
})
export class StrategyReportRRComponent implements OnInit {

  @Input() strategyReport: StrategyReport

  constructor() { }

  ngOnInit(): void {
  }

}
