import {Component, Input, OnInit} from '@angular/core';
import {DbState} from '../../../../../../store/dbManager/dbManager.reducer';
import * as dbManagerActions from '../../../../../../store/dbManager/dbManager.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-markets-sports',
  templateUrl: './markets-stats-sports.component.html',
})
export class MarketsStatsSportsComponent implements OnInit {

  @Input()
  dbState: DbState

  constructor() { }

  ngOnInit(): void {
  }

}
