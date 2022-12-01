import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarketBasic} from '../../../../model/market/basic/marketBasic';
import {BacktestForm} from '../../../../model/TV/backtestForm';
import {Utils} from "../../../../model/utils";
import {NewTrade} from "../../../../model/report/new/newTrade";
import {TradeBets} from "../../../../model/report/tradeBets";

@Component({
  selector: 'app-backtest-main',
  templateUrl: './backtest-main.component.html',
})
export class BacktestMainComponent implements OnInit {

  @Input() market : MarketBasic
  @Input() trade : NewTrade
  @Input() backtestForm: BacktestForm
  @Input() backtestTradeBets: TradeBets[]

  @Output() selectionEmitter = new EventEmitter();

  util = new Utils()

  bug = true
  runners = []
  constructor() { }

  ngOnInit(): void {
    if(this.market){
      this.runners = this.market.marketRunners.marketRunners.map(x => {
        return{
          id: x.id,
          name: x.name
        }
      })
    }
    // emit default runner 1
    this.selectionEmitter.emit([this.backtestForm.side.selection])
  }

  // update form form update modal and refresh view
  updateTradeFromEdit(event){
    console.log('updated trade')
    console.log(event)
    this.backtestForm.tradeForm = event[0]
    this.bugFix()
  }

  // return true if trad is valid to add in backtest
  checkTradeValid(){
    const trade = this.backtestForm.tradeForm.trade
    return (trade.trades.length === 0 ||
      trade.info.tennisTournamentId === null);
  }

  addBetsInTrade(){
    console.log('bets ready to be added in trade')
    // generate trade bets and add in trade
    console.log(this.backtestTradeBets)

    // calculate reuslt based on winner of the market, if winner not present leave at 0
  }

  // valid trade to add in backtest list
  addInBacktest(){
    console.log('trade ready to be added in backtest list in state')
    // remove temp _id
    // delete this.backtestForm.tradeForm._id
    console.log(this.backtestForm.tradeForm)
  }

  // emit current selection id to block in father
  selectionUpdate(){
    this.selectionEmitter.emit([this.backtestForm.side.selection])
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
