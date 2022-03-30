import {Component, Input, OnInit} from '@angular/core';
import {StrategyReport} from "../../../../../../model/report/starategyReport";
import {Pie} from "../../../../../../model/apxCharts/pie";

@Component({
  selector: 'app-study-comparator-report',
  templateUrl: './study-comparator-report.component.html',
})
export class StudyComparatorReportComponent implements OnInit {

  @Input() strategyReport: StrategyReport[]
  @Input() strategyPie: number[][]

  constructor() { }

  ngOnInit(): void {

  }

}
