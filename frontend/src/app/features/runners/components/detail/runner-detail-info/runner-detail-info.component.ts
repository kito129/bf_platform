import {Component, Input, OnInit} from '@angular/core';
import {RunnersState} from "../../../../../store/runners/runners.reducer";
import {RunnerInfo} from "../../../../../model/runner/runner";

@Component({
  selector: 'app-runner-detail-info',
  templateUrl: './runner-detail-info.component.html',
})
export class RunnerDetailInfoComponent implements OnInit {

  @Input()
  runnerInfo: RunnerInfo

  constructor() { }

  ngOnInit(): void {
  }

}
