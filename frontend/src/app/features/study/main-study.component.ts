import { Component, OnInit } from '@angular/core';
import * as basketsActions from "../../store/study/basket/basket.actions";
import * as entryActions from "../../store/study/entry/entry.actions";
import * as studyActions from "../../store/study/study/study.actions";
import * as playersActions from "../../store/study/players/players.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-main-study',
  templateUrl: './main-study.component.html',
})
export class MainStudyComponent implements OnInit {

  defaultNavActiveId =  1

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }

  refreshStudy(){
    this.store.dispatch(basketsActions.getAllBaskets())
    this.store.dispatch(entryActions.getAllEntries())
    this.store.dispatch(studyActions.getAllStudies())
    this.store.dispatch(playersActions.getAllPlayers())
  }

}
