import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IsLoading} from "../../../model/isLoading";
import {Players} from "../../../model/study/players/players";
import {select, Store} from "@ngrx/store";
import * as playersSelectors from "../../../store/study/players/players.selectors";

@Component({
  selector: 'app-players-main',
  templateUrl: './players-main.component.html',
})
export class PlayersMainComponent implements OnInit {

  // players
  allPlayers$: Observable<Players[]>
  isLoadingAllPlayers$: Observable<IsLoading>

  // selected players
  selectedPlayers$: Observable<Players>
  selectedPlayersId$: Observable<string>

  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    // players
    this.allPlayers$ = this.store.pipe(select(playersSelectors.getAllPlayers))
    this.isLoadingAllPlayers$ = this.store.pipe(select(playersSelectors.isLoadingAllPlayers))

    // selected players
    this.selectedPlayers$ = this.store.pipe(select(playersSelectors.getSelectedPlayers))
    this.selectedPlayersId$ = this.store.pipe(select(playersSelectors.getSelectedPlayerId))
  }

}
