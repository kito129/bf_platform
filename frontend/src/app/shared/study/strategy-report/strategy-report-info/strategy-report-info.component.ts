import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport} from "../../../../model/report/starategyReport";

@Component({
  selector: 'app-strategy-report-info',
  templateUrl: './strategy-report-info.component.html',
})
export class StrategyReportInfoComponent implements OnInit {

  @Input() strategyReport: StrategyReport

  constructor() {}

  ngOnInit(): void {
  }



}
