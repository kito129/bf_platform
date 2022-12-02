import {Component, Input, OnInit} from '@angular/core';
import {StrategyResume, StrategyReport} from "../../../../model/report/strategy/starategyReport";

@Component({
  selector: 'app-strategy-report-resume',
  templateUrl: './strategy-report-resume.component.html',
})
export class StrategyReportResumeComponent implements OnInit {

  @Input() title: string

  @Input() strategyResumeProfit: StrategyResume
  @Input() strategyResumeLoss: StrategyResume
  @Input() strategyResumeTotal: StrategyResume


  constructor() { }

  ngOnInit(): void {

  }

}
