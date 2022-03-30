import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {BySportStats} from "../../model/dashboard/bySportStats";
import {TennisTournamentStats} from "../../model/dashboard/tennisTournamentStats";
import {NoteStats} from "../../model/dashboard/noteStats";

import * as marketsSelectors from "../../store/markets/markets.selectors";
import * as runnersSelectors from "../../store/runners/runners.selectors";
import * as tennisTournamentSelectors from "../../store/tennis-tournament/tennisTournament.selectors";
import * as notesSelectors from "../../store/notes/notes.selectors";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  preserveWhitespaces: true
})
export class DashboardComponent implements OnInit {


  marketsStats$$: Observable<BySportStats>
  runnerStats$$: Observable<BySportStats>
  tennisTournamentStats$: Observable<TennisTournamentStats>
  noteStats$: Observable<NoteStats>

  constructor(private readonly store: Store) {
  }

  ngOnInit() {

    this.marketsStats$$ = this.store.pipe(select(marketsSelectors.getMarketStats))
    this.runnerStats$$ = this.store.pipe(select(runnersSelectors.getRunnerStats))
    this.tennisTournamentStats$ = this.store.pipe(select(tennisTournamentSelectors.getTennisTournamentStats))
    this.noteStats$ = this.store.pipe(select(notesSelectors.getNotesStats))
  }

}
