import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NewTrade} from '../../../model/report/new/newTrade';
import {TradeDetail} from '../../../model/report/trade';
import {select, Store} from '@ngrx/store';
import * as tennisTournamentSelectors from '../../../store/tennis-tournament/tennisTournament.selectors';
import {takeUntil} from 'rxjs/operators';
import {TennisTournament} from '../../../model/tennisTournament/tennisTournament';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-trade-detail',
  templateUrl: './trade-detail.component.html',
})
export class TradeDetailComponent implements OnInit,OnDestroy {

  @Input() trade: NewTrade

  tennisTournament: TennisTournament

  notePresent = false

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    this.store.pipe(select(tennisTournamentSelectors.getTennisTournamentsById(this.trade.trade.info.tennisTournamentId)))
      .pipe(takeUntil(this.destroy$))
      .subscribe( tournament => {
        if(tournament){
          this.tennisTournament = tournament
        }
      })

    for (const props in this.trade.trade.info.note) {
      if (this.trade.trade.info.note[props] === null || this.trade.trade.info.note[props] === '') {
        this.notePresent = false
      } else {
        this.notePresent = true
        break
      }
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


}
