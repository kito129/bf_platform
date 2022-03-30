import {Component, Input, OnInit} from '@angular/core';
import {MarketInfoBasic} from "../../../../model/market/basic/marketInfoBasic";
import {Note} from "../../../../model/note/note";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {select} from "@ngrx/core";
import * as formStore from "../../../../store";

@Component({
  selector: 'app-tennis-tournament-detail',
  templateUrl: './tennis-tournament-detail.component.html',
})
export class TennisTournamentDetailComponent implements OnInit {

  @Input()
  tournamentMarket: MarketInfoBasic[]
  @Input()
  tournamentNote: Observable<any>

  constructor(private readonly store: Store,) { }

  ngOnInit(): void {

  }

}
