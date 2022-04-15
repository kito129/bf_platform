import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport} from "../../../../model/report/starategyReport";

@Component({
  selector: 'app-strategy-report-expected-value',
  templateUrl: './strategy-report-expected-value.component.html',
})
export class StrategyReportExpectedValueComponent implements OnInit {

  @Input() strategyReport: StrategyReport

  constructor() { }

  ngOnInit(): void {
  }

}
