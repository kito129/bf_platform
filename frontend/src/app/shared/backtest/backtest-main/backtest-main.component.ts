import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Trade} from '../../../model/report/trade/trade';
import {BacktestInterface} from '../../../model/backtest/backtestInterface';
import {IsLoading} from '../../../model/isLoading';
import * as reportActions from '../../../store/report/report.actions';
import {Utils} from '../../../model/utils';

@Component({
  selector: 'app-backtest-main',
  templateUrl: './backtest-main.component.html',
})
export class BacktestMainComponent implements OnInit {

  @Input() backtestMode: boolean
  @Input() backtestList: BacktestInterface[]
  @Input() backtestTradesCount: number
  @Input() backtestTradesList: Trade[]
  @Input() backtestIsLoading: IsLoading

  util = new Utils()

  constructor(private store: Store,) { }

  ngOnInit(): void {}

  changeBacktestMode(){
    this.store.dispatch(reportActions.backtestChangeMode());
  }

}
