import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarketBasic} from '../../../../model/market/basic/marketBasic';
import {BacktestForm} from '../../../../model/TV/backtestForm';
import {Utils} from '../../../../model/utils';
import {NewTrade} from '../../../../model/report/new/newTrade';
import {TradeBets} from '../../../../model/report/tradeBets';

@Component({
  selector: 'app-backtest-main',
  templateUrl: './backtest-main.component.html',
})
export class BacktestMainComponent implements OnInit {

  @Input() originalMarket : MarketBasic
  @Input() originalTrade : NewTrade
  @Input() backtestForm: BacktestForm
  @Input() backtestTradeBets: TradeBets[]

  util = new Utils()

  bug = true
  runners:  {count: number,
            name: string}[] = []
  constructor() { }

  // -- COMPONENT LIFETIME --
  ngOnInit(): void {
    if(this.originalMarket){
      let j = -1
      this.runners = this.originalMarket.marketRunners.marketRunners.map(x => {
        j++
        return{
          count: j,
          name: x.name
        }
      })
    }
    // emit default selectionN 0
    this.backtestForm.info.selectionN = 0
  }

  // -- TRADE MANIPULATE --
  // update backtestForm from update modal and refresh view
  updateBacktestTradeFromEdit(event){
    console.log('updated trade')
    console.log(event)
    this.backtestForm.tradeForm = event[0]
    this.bugFix()
  }

  // return true if trade is valid to add in backtest
  checkTradeValid(){
    const trade = this.backtestForm.tradeForm.trade
    return (
      trade.trades.length === 0 ||
      trade.info.tennisTournamentId === null ||
      trade.info.tennisTournamentId === '' ||
      (trade.results.finalScore.tennis.set1.runnerA === 0 &&
      trade.results.finalScore.tennis.set1.runnerB === 0) ||
      (trade.selections.filter( x => x.winner).length===0)
    )
  }

  // emit current selection id to block in father
  selectionNUpdate(){
    this.backtestForm.info.selectionN = this.runners.findIndex(x => x.name ===this.backtestForm.info.selectionName)
  }

  // convert bets to trade bets and add in trade from, then refresh trade view
  addBetsInTrade(){
    console.log('bets ready to be added in trade')

    // generate trade bets and add in trade
    this.backtestForm.tradeForm.trade.trades = this.util.generateBetsFromTradeBets(this.backtestTradeBets)

    // calculate result based on winner of the market, if winner not present leave at 0
    this.backtestForm.tradeForm.trade.results = this.util.generateTradeResultsFromTrade(this.backtestForm.tradeForm)

    // calculate avg for each selection
    const avg = this.util.generateAvgOddsTrade(this.backtestForm.tradeForm)
    let i = 0
    for (const selection of this.backtestForm.tradeForm.trade.selections) {
      selection.avg = avg[i]
      i++
    }
    // refresh
    this.bugFix()
  }

  // valid trade to add in backtest list
  addTradeInBacktest(){
    console.log('trade ready to be added in backtest list in state')
    // remove temp _id
    // delete this.backtestForm.tradeForm._id
    console.log(this.backtestForm.tradeForm)


    //from here
  }

  // -- SUPPORT --
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
