import {Component, Input, OnInit} from '@angular/core';
import {TradeBets} from '../../../model/report/tradeBets';
import {NewTrade} from '../../../model/report/new/newTrade';
import {generate} from 'rxjs';

@Component({
  selector: 'app-trade-bets-view',
  templateUrl: './trade-bets-view.component.html',
})
export class TradeBetsViewComponent implements OnInit {

  @Input() trade: NewTrade
  @Input() onlyBets: boolean
  tradeA: NewTrade = null
  tradeB: NewTrade = null

  bets: TradeBets[] = []
  betsA: TradeBets[] = []
  betsB: TradeBets[] = []

  collapsed = false

  constructor() { }

  ngOnInit(): void {
    if(this.trade.trade.trades.length){
      this.tradeA = JSON.parse(JSON.stringify(this.trade))
      this.tradeB = JSON.parse(JSON.stringify(this.trade))
      this.tradeA.trade.trades = this.tradeA.trade.trades.filter( x => x.selectionN ===0)
      this.tradeB.trade.trades = this.tradeB.trade.trades.filter( x => x.selectionN ===1)

      this.bets = this.generateTrade(this.trade)
      this.betsA = this.generateTrade(this.tradeA)
      this.betsB = this.generateTrade(this.tradeB)
    }
  }

  generateTrade(trade: NewTrade){
    let resp = []
    for(let i=0; i< trade.trade.trades.length; i++){
      const selected = this.trade.trade.trades[i]
      const selectionN = this.trade.trade.trades[i].selectionN
      const selectionName = this.trade.trade.selections[selectionN].runnerName
      const temp = {
        id: selected.id,
        type: selected.type,
        selectionN,
        selectionName,
        odds: selected.odds,
        stake: selected.stake,
        toWin: selected.ifWin,
        liability: selected.liability,
        time: selected.condition.time,
        point: selected.condition.tennis.point,
        note: selected.condition.note,
        options: selected.options
      }
      resp.push(temp)
    }
    // sort by time
    resp = resp.sort((a,b)=>{
      return a.time - b.time
    })
    return resp
  }

}
