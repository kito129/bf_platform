import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport} from '../../../../model/report/strategy/starategyReport';

@Component({
  selector: 'app-strategy-report-dd',
  templateUrl: './strategy-report-dd.component.html',
})
export class StrategyReportDdComponent implements OnInit {

  @Input() strategyReport: StrategyReport
  @Input() haveStrategy: boolean
  @Input() bank: number

  constructor() { }

  ngOnInit(): void {
  }

}
