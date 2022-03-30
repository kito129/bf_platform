import {Component, Input, OnInit} from '@angular/core';
import {StrategyResume, StrategyReport} from "../../../../model/report/starategyReport";

@Component({
  selector: 'app-strategy-report-resume',
  templateUrl: './strategy-report-resume.component.html',
})
export class StrategyReportResumeComponent implements OnInit {

  @Input() title: string

  @Input() strategyResume: StrategyResume


  constructor() { }

  ngOnInit(): void {

  }

}
