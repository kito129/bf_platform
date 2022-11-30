import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarketBasic} from '../../../../model/market/basic/marketBasic';
import {BacktestForm} from '../../../../model/calculator/BacktestForm';
import {NewTrade} from '../../../../model/report/new/newTrade';

@Component({
  selector: 'app-backtest-form',
  templateUrl: './backtest-form.component.html',
})
export class BacktestFormComponent implements OnInit {

  @Input() market : MarketBasic
  @Input() trade: NewTrade
  @Input() backtestBets: any

  @Output() selectionEmitter = new EventEmitter();

  backtestForm: BacktestForm
  bug = true

  selection = []

  constructor() { }

  ngOnInit(): void {
    if(this.market){
      this.backtestForm = new BacktestForm(this.market, this.trade)
      this.selection = this.market.marketRunners.marketRunners.map( x => {
        return{
          id: x.id,
          name: x.name
        }
      })
    }
    this.selectionEmitter.emit([this.backtestForm.side.selection])
  }

  updateTradeFromEdit(event){
    console.log('updated trade')
    console.log(event)
    this.backtestForm.tradeForm = event[0]
    this.bugFix()
  }

  checkTradeValid(){
    const trade = this.backtestForm.tradeForm.trade
    return (trade.trades.length === 0 ||
      trade.info.tennisTournamentId === null);
  }

  addInBackTest(){
    console.log('trade ready to be added in backtest list in state')
    // remove temp _id
    // delete this.backtestForm.tradeForm._id
    console.log(this.backtestForm.tradeForm)
  }

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
