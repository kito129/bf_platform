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
  @Input() tradesToAdd: Trade[]
  @Input() tradesToRemove: Trade[]
  @Input() isUpdate: boolean


  constructor(private  store: Store) { }

  ngOnInit(): void {
  }

  saveBacktest(){
    const temp: Trade[] = JSON.parse(JSON.stringify(this.tradesToAdd))
    // action to save backtest adn all trade inside
    this.store.dispatch(reportActions.backtestCreate({backtest: this.backtest, trades: temp}))
  }

  updateBacktest(){
    let tempTrade = null
    let tradeToRemoveIds= null
    if(this.tradesToRemove.length){
      tradeToRemoveIds = this.tradesToRemove.map( x => x._id)
    }
    if(this.tradesToAdd.length){
      tempTrade = this.tradesToAdd
    }
    const tempBacktest: BacktestInterface = JSON.parse(JSON.stringify(this.backtest))
    // set tradesIds
    this.store.dispatch(reportActions.backtestUpdate({_id: tempBacktest._id, backtest: tempBacktest, tradesToUpdate: tempTrade, tradesToRemove: tradeToRemoveIds }))

  }

}
