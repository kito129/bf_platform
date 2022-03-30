import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IsLoading} from "../../../model/isLoading";
import {TennisTournament} from "../../../model/tennisTournament/tennisTournament";
import {select, Store} from "@ngrx/store";
import * as tennisTournamentSelectors from "../../../store/tennis-tournament/tennisTournament.selectors";
import * as tennisTournamentActions from "../../../store/tennis-tournament/tennisTournament.actions";

@Component({
  selector: 'app-tennis-tournament-main',
  templateUrl: './tennis-tournament-maincomponent.html',
})
export class TennisTournamentMainComponent implements OnInit {

  tennisTournament$: Observable<TennisTournament[]>
  isLoadingTennisTournament$: Observable<IsLoading>

  constructor(private readonly store: Store) {

  }

  ngOnInit(): void {
    this.tennisTournament$ = this.store.pipe(select(tennisTournamentSelectors.getAllTennisTournaments))
    this.isLoadingTennisTournament$ = this.store.pipe(select(tennisTournamentSelectors.getIsLoadingAllTennisTournament))
  }

  refreshAllTennisTournament(){
    this.store.dispatch(tennisTournamentActions.getAllTennisTournament())
  }

}
