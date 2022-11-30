import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NewTrade} from '../../../model/report/new/newTrade';
import {select, Store} from '@ngrx/store';
import * as tennisTournamentSelectors from '../../../store/tennis-tournament/tennisTournament.selectors';
import * as strategySelectors from '../../../store/report/report.selectors';
import {takeUntil} from 'rxjs/operators';
import {TennisTournament} from '../../../model/tennisTournament/tennisTournament';
import {Subject} from 'rxjs';
import {Strategy} from '../../../model/report/strategy';

@Component({
  selector: 'app-trade-detail',
  templateUrl: './trade-detail.component.html',
})
export class TradeDetailComponent implements OnInit,OnDestroy {

  @Input() trade: NewTrade

  tennisTournament: TennisTournament
  strategy: Strategy

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

    this.store.pipe(select(strategySelectors.getStrategyById(this.trade.trade.info.strategyId)))
      .pipe(takeUntil(this.destroy$))
      .subscribe( strategy => {
        if(strategy){
          this.strategy = strategy
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
