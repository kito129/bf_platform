import {Component, OnDestroy, OnInit} from '@angular/core';
import { combineLatest, Observable, Subject} from 'rxjs';
import {Strategy} from '../../../model/report/strategy';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as reportSelectors from '../../../store/report/report.selectors';
import * as runnerSelectors from '../../../store/runners/runners.selectors';
import {IsLoading} from '../../../model/isLoading';
import {Runner} from '../../../model/runner/runner';
import * as reportActions from '../../../store/report/report.actions';
import {StrategyReport} from '../../../model/report/starategyReport';
import {takeUntil} from 'rxjs/operators';
import {StrategyDatatable} from '../../../model/report/strategyDatatable';
import {NewTrade} from '../../../model/report/new/newTrade';
import {CompareStrategy} from '../../../model/report/new/compareStrategy';
import {StrategyReportClass} from '../../../model/calculator/strategyReport';

@Component({
  selector: 'app-report-main',
  templateUrl: './report-main.component.html',
})
export class ReportMainComponent implements OnInit, OnDestroy {

  defaultNavActiveId = 1

  // strategy
  allStrategy$: Observable<Strategy[]>
  isLoadingAllStrategy$: Observable<IsLoading>
  // selected strategy
  selectedStrategy$: Observable<Strategy>
  selectedStrategyId$: Observable<string>
  selectedStrategyTrades$: Observable<NewTrade[]>
  strategyDatatable$: Observable<StrategyDatatable[]>

  // -- NEW TRADE --
  allNewTrade$: Observable<NewTrade[]>
  isLoadingAllNewTrade$: Observable<IsLoading>

  allNewTrade2021$: Observable<NewTrade[]>
  allNewTrade2022$: Observable<NewTrade[]>

  allNewTrade2022Demo$: Observable<NewTrade[]>

  allNewTradeKevin$: Observable<NewTrade[]>
  allNewTradeBagna$: Observable<NewTrade[]>
  allNewTradeKito$: Observable<NewTrade[]>

  // compare
  comparedStrategy$: Observable<CompareStrategy[]>
  compareList$: Observable<string[]>
  compareStatus$: Observable<boolean>


  destroy$: Subject<boolean> = new Subject<boolean>();


  constructor(private router: Router,
              private readonly store: Store) {
  }

  ngOnInit(): void {

    // get slice for state
    this.allStrategy$ = this.store.pipe(select(reportSelectors.getAllStrategy))
    this.isLoadingAllStrategy$=this.store.pipe(select(reportSelectors.getAllStrategyLoading))

    this.selectedStrategy$ = this.store.pipe(select(reportSelectors.getSelectedStrategy))
    this.selectedStrategyTrades$ = this.store.pipe(select(reportSelectors.getSelectedStrategyTrades))
    this.selectedStrategyId$ = this.store.pipe(select(reportSelectors.getSelectedStrategyId))

    // -- NEW TRADE --
    this.allNewTrade$ = this.store.pipe(select(reportSelectors.getAllNewTrade))
    this.isLoadingAllNewTrade$ = this.store.pipe(select(reportSelectors.isLoadingAllNewTrade))
    this.strategyDatatable$ = this.store.pipe(select(reportSelectors.getStrategyDatatable))

    // filtered
    this.allNewTrade2021$ = this.store.pipe(select(reportSelectors.getAllNewTrade2021))
    this.allNewTrade2022$ = this.store.pipe(select(reportSelectors.getAllNewTrade2022))
    this.allNewTrade2022Demo$ = this.store.pipe(select(reportSelectors.getAllNewTrade2022Demo))

    this.allNewTradeKevin$ = this.store.pipe(select(reportSelectors.getAllNewTradeKevin))
    this.allNewTradeBagna$ = this.store.pipe(select(reportSelectors.getAllNewTradeBagna))
    this.allNewTradeKito$ = this.store.pipe(select(reportSelectors.getAllNewTradeKito))

    this.compareList$ =  this.store.pipe(select(reportSelectors.getCompareList))
    this.comparedStrategy$ =  this.store.pipe(select(reportSelectors.getComparedData))
    this.compareStatus$ =  this.store.pipe(select(reportSelectors.getCompareStatus))
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public refresh(){
    this.store.dispatch(reportActions.getAllStrategies())
    this.store.dispatch(reportActions.getAllNewTrades())
  }

}

