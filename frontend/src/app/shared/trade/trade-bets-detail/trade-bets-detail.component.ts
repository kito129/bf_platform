import {Component, Input, OnInit} from '@angular/core';
import {TradeBets} from '../../../model/report/tradeBets';
import {NewTrade} from '../../../model/report/new/newTrade';

@Component({
  selector: 'app-trade-bets-detail',
  templateUrl: './trade-bets-detail.component.html',
})
export class TradeBetsDetailComponent implements OnInit {

  @Input() trade: NewTrade
  @Input() onlyBets: boolean

  bets: TradeBets[] = []
  betsA: TradeBets[] = []
  betsB: TradeBets[] = []

  split = false


  constructor() { }

  ngOnInit(): void {
    if(this.trade.trade.trades.length){
      this.bets = this.generateTrade(this.trade)
      this.betsA = this.generateTrade(this.trade).filter( x => x.selectionN === 0 )
      this.betsB = this.generateTrade(this.trade).filter( x => x.selectionN === 1 )
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
