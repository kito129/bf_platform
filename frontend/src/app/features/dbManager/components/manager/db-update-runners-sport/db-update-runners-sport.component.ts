import { Component, OnInit } from '@angular/core';
import {DbState} from "../../../../../store/dbManager/dbManager.reducer";
import {Subject} from "rxjs";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../../../store";
import {takeUntil} from "rxjs/operators";
import * as dbManagerActions from "../../../../../store/dbManager/dbManager.actions";

@Component({
  selector: 'app-db-update-runners-sport',
  templateUrl: './db-update-runners-sport.component.html',
})
export class DbUpdateRunnersSportComponent implements OnInit {

  dbState: DbState;
  destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(private router: Router, private readonly store: Store) {


  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  updateRunnersStats() {

    this.store.dispatch(dbManagerActions.updateRunnersSportAction());

  }

}
