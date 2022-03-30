import {Component, Input, OnInit} from '@angular/core';
import {DbState} from '../../../../../store/dbManager/dbManager.reducer';

@Component({
  selector: 'app-markets-stats-main',
  templateUrl: './markets-stats-main.component.html',
})
export class MarketsStatsMainComponent implements OnInit {

  @Input()
  dbState: DbState

  constructor() { }

  ngOnInit(): void {
  }

}
