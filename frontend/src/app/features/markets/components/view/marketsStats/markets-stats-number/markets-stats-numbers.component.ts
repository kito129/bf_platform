import {Component, Input, OnInit} from '@angular/core';
import {DbState} from '../../../../../../store/dbManager/dbManager.reducer';
import {Store} from '@ngrx/store';
import * as dbManagerActions from '../../../../../../store/dbManager/dbManager.actions';


@Component({
  selector: 'app-markets-numbers',
  templateUrl: './markets-stats-numbers.component.html',
})
export class MarketsStatsNumbersComponent implements OnInit {


  @Input()
  dbState: DbState

  constructor(readonly store: Store) {  }

  ngOnInit(): void {


  }
}
