import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as reportActions from '../../../store/report/report.actions';
import {Observable} from 'rxjs';
import {IsLoading} from '../../../model/isLoading';
import {BacktestInterface} from '../../../model/backtest/backtestInterface';
import {Trade} from '../../../model/report/trade/trade';
import * as reportSelectors from '../../../store/report/report.selectors';
import {StrategyDatatable} from '../../../model/report/strategy/strategyDatatable';
import {CompareStrategy} from '../../../model/report/strategy/compareStrategy';

@Component({
  selector: 'app-backtest-main',
  templateUrl: './backtest-main.component.html',
})
export class BacktestMainComponent implements OnInit {

  $backtestIsLoading: Observable<IsLoading>
  $backtestMode: Observable<boolean>
  $allBacktest: Observable<BacktestInterface[]>
  $backtestTradesCount: Observable<number>
  $backtestCurrentTradesList: Observable<Trade[]>
  $backtestSelected: Observable<BacktestInterface>
  $backtestSelectedId: Observable<string>
  $backtestSelectedTrades: Observable<Trade[]>

  // compare backtest
  comparedBacktest$: Observable<CompareStrategy[]>
  compareList$: Observable<string[]>
  compareStatus$: Observable<boolean>

  $allBacktestAsStrategy: Observable<StrategyDatatable[]>

  $backtestAllTrade: Observable<Trade[]>
  $isLoadingBacktestAllTrade: Observable<IsLoading>

  defaultNavActiveId = 1

  constructor(private router: Router,
              private readonly store: Store) { }

  ngOnInit(): void {
    // get backtest state
    this.$backtestIsLoading = this.store.pipe(select(reportSelectors.getBacktestIsLoading))
    this.$backtestMode = this.store.pipe(select(reportSelectors.getBacktestModeState))
    this.$backtestTradesCount = this.store.pipe(select(reportSelectors.getBacktestCurrentTradesCount))
    this.$allBacktest = this.store.pipe(select(reportSelectors.getAllBacktest))
    this.$backtestCurrentTradesList = this.store.pipe(select(reportSelectors.getBacktestCurrentTrades))
    this.$backtestSelected = this.store.pipe(select(reportSelectors.getSelectedBacktest))
    this.$backtestSelectedId = this.store.pipe(select(reportSelectors.getSelectedBacktestId))
    this.$backtestSelectedTrades = this.store.pipe(select(reportSelectors.getSelectedBacktestTrade))

    this.$backtestAllTrade = this.store.pipe(select(reportSelectors.getAllBacktestTrade))
    this.$isLoadingBacktestAllTrade = this.store.pipe(select(reportSelectors.getIsLoadingAllBacktestTrade))

    this.$allBacktestAsStrategy = this.store.pipe(select(reportSelectors.getAllBacktestAsStrategyDatatable))

    // compare
    this.compareList$ =  this.store.pipe(select(reportSelectors.getCompareBacktestList))
    this.comparedBacktest$ =  this.store.pipe(select(reportSelectors.getComparedBacktestData))
    this.compareStatus$ =  this.store.pipe(select(reportSelectors.getCompareBacktestStatus))
  }

  refreshBacktest(){
    this.store.dispatch(reportActions.backtestGetAll())
  }

  refreshBacktestTrade(){
    this.store.dispatch(reportActions.backtestTradeGetAll())
  }

}
