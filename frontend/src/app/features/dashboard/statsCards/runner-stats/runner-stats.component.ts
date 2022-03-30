import {Component, Input, OnInit} from '@angular/core';
import {BySportStats} from "../../../../model/dashboard/bySportStats";
import {Observable} from "rxjs";

@Component({
  selector: 'app-runner-stats',
  templateUrl: './runner-stats.component.html',
})
export class RunnerStatsComponent implements OnInit {

  @Input()
  runnerStats$: Observable<BySportStats>

  constructor() { }

  ngOnInit(): void {
  }

}
