import { Component, OnInit } from '@angular/core';
// actions
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../../store';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import * as dbManagerActions from '../../../../store/dbManager/dbManager.actions';
import {DbState} from '../../../../store/dbManager/dbManager.reducer';

@Component({
  selector: 'app-markets',
  templateUrl: './markets-view.component.html',
})
export class MarketsViewComponent implements OnInit {

  /**
   * NgbDatepicker
   */
  currentDate: NgbDateStruct;

  dbState: DbState;
  destroy$: Subject<boolean> = new Subject<boolean>();



  constructor(private router: Router,
              private readonly store: Store) {



  }

  ngOnInit(): void {
    this.store.dispatch(dbManagerActions.getSportStatsAction())
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
