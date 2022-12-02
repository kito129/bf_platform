import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Trade} from '../../../../model/report/trade/trade';
import {Utils} from '../../../../model/utils';
import {CompareStrategy} from '../../../../model/report/strategy/compareStrategy';
import {StrategyTradeFilter} from '../../../../model/report/strategyFilter/strategyTradeFiltersInterface';
import {select, Store} from '@ngrx/store';
import * as tennisTournamentSelectors from '../../../../store/tennis-tournament/tennisTournament.selectors';
import {Observable, Subject} from 'rxjs';
import {TennisTournament} from '../../../../model/tennisTournament/tennisTournament';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-strategy-report-trade-filter',
  templateUrl: './strategy-report-trade-filter.component.html',
})
export class StrategyReportTradeFilterComponent implements OnInit, OnDestroy {

  @Input() trades: Trade[]

  tennisTournament: TennisTournament[]

  compare: CompareStrategy[] = []
  utils = new Utils()
  validData = false

  bug = false

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    this.store.pipe(select(tennisTournamentSelectors.getAllTennisTournaments))
      .pipe(takeUntil(this.destroy$))
      .subscribe( tournament => {
      if(tournament.length){
        this.tennisTournament = tournament
      }
    })
  }

  filterEmit(event){
    this.validData = false
    this.compare = []
    if(this.trades.length){
      event.forEach( (filter: StrategyTradeFilter) =>{
        filter.filterData(this.trades, this.tennisTournament )
        if(filter.trades.length){
          this.compare.push({
            strategy: this.utils.generateStrategy(filter.name,filter.bank,null),
            trades: filter.trades
          })
        }
      })
      this.validData = true
    } else {
      this.validData = false
    }
    this.bugFix()
  }

  resetEmitter(event){
    this.validData = false
  }

  // temp to fix odds bug
  bugFix(){
    this.bug = false
    setTimeout(() =>
      {
        this.bug = true
      },
      500);
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
