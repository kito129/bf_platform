import {Component, OnInit, ViewChild} from '@angular/core';
import {MarketsState} from "../../../../../store/markets/markets.reducer";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../../../../store";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import * as dbManagerActions from "../../../../../store/dbManager/dbManager.actions";
import {DbState} from "../../../../../store/dbManager/dbManager.reducer";



@Component({
  selector: 'app-db-update-under-over-command',
  templateUrl: './db-update-under-over-command.component.html',
})
export class DbUpdateUnderOverCommandComponent implements OnInit {

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

  updateSports() {

    this.store.dispatch(dbManagerActions.updateUnderOver());

  }

}
