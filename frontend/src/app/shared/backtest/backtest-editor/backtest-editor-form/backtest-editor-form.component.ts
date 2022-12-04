import {Component, Input, OnInit} from '@angular/core';
import {BacktestInterface} from '../../../../model/backtest/backtestInterface';
import {Trade} from '../../../../model/report/trade/trade';
import * as reportActions from '../../../../store/report/report.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-backtest-editor-form',
  templateUrl: './backtest-editor-form.component.html',
})
export class BacktestEditorFormComponent implements OnInit {

  @Input() backtest: BacktestInterface
  @Input() currentTrade: Trade[]
  @Input() isUpdate: boolean

  constructor(private  store: Store) { }

  ngOnInit(): void {
  }

  saveBacktest(){
    // remove id in all trades
    const temp: Trade[] = JSON.parse(JSON.stringify(this.currentTrade))
    // action to save backtest adn all trade inside
    this.store.dispatch(reportActions.backtestCreate({backtest: this.backtest, trades: temp}))
  }

  updateBacktest(){
    // first delete all tarde present in this backtest from DB

    // then save the new trade in DB

    // with the new trade id save that in tradeIds of trade
    this.backtest.backtest.tradesIds = this.currentTrade.map( x=> x._id)

    // only now update backtest in DB

  }

}
