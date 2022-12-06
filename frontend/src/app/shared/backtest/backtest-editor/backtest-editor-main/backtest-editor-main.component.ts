import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Trade} from '../../../../model/report/trade/trade';
import {Backtest, BacktestInterface} from '../../../../model/backtest/backtestInterface';
import {IsLoading} from '../../../../model/isLoading';
import * as reportActions from '../../../../store/report/report.actions';
import {Utils} from '../../../../model/utils';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-backtest-editor-main',
  templateUrl: './backtest-editor-main.component.html',
})
export class BacktestEditorMainComponent implements OnInit, OnDestroy {

  @Input() $backtestTradesToAdd: Observable<Trade[]>
  @Input() $backtestTradesToRemove: Observable<Trade[]>
  @Input() $selectedBacktest: Observable<BacktestInterface>
  @Input() $selectedBacktestTrades: Observable<Trade[]>

  @Input() backtestMode: boolean
  @Input() backtestList: BacktestInterface[]
  @Input() backtestTradesCount: number
  @Input() backtestTradesList: Trade[]
  @Input() backtestIsLoading: IsLoading

  currentBackTest: Backtest
  isUpdate = false

  util = new Utils()

  bug = true

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private store: Store,) { }

  ngOnInit(): void {

    this.currentBackTest = new Backtest()
    this.$selectedBacktest
      .pipe(takeUntil(this.destroy$))
      .subscribe( selected => {
        if (selected!==null && selected !== undefined) {
          this.isUpdate = true
          this.currentBackTest = new Backtest(selected)
          this.bugFix()
        } else {
          this.bugFix()
        }
      })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  backtestPnl(list: Trade[]): number{
    return this.util.sumOfArray(list.map(x => x.trade.results.netProfit))
  }

  backtestROI(list: Trade[]): number{
    return this.util.sumOfArray(list.map(x => x.trade.results.netProfit)) / this.currentBackTest.backtest.bank
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

}
