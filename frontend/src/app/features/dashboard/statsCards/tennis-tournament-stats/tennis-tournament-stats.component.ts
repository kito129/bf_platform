import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {TennisTournamentStats} from "../../../../model/dashboard/tennisTournamentStats";

@Component({
  selector: 'app-tennis-tournament-stats',
  templateUrl: './tennis-tournament-stats.component.html',
})
export class TennisTournamentStatsComponent implements OnInit {

  @Input()
  tennisTournamentStats$: Observable<TennisTournamentStats>

  constructor() { }

  ngOnInit(): void {
  }

}
