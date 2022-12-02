import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport} from '../../../../model/report/strategy/starategyReport';

@Component({
  selector: 'app-strategy-report-info',
  templateUrl: './strategy-report-info.component.html',
})
export class StrategyReportInfoComponent implements OnInit {

  @Input() strategyReport: StrategyReport
  @Input() haveStrategy: boolean
  @Input() bank: number

  constructor() {}

  ngOnInit(): void {
  }



}
