import {Component, Input, OnInit} from '@angular/core';
import {TradeBets} from '../../../model/report/tradeBets';
import {NewTrade} from '../../../model/report/new/newTrade';

@Component({
  selector: 'app-trade-bets-view',
  templateUrl: './trade-bets-view.component.html',
})
export class TradeBetsViewComponent implements OnInit {

  @Input() trade: NewTrade

  bets: TradeBets[] = []

  constructor() { }

  ngOnInit(): void {

    // add back
    // tslint:disable-next-line:prefer-for-of
    for(let i=0; i< this.trade.trade.trades.length; i++){
      const selected = this.trade.trade.trades[i]
      this.bets.push({
        type: selected.type,
        selectionN: this.trade.trade.trades[i].selectionN,
        selectionName: this.trade.trade.selections[this.trade.trade.trades[i].selectionN].runnerName,
        odds: this.trade.trade.trades[i].odds,
        stake: this.trade.trade.trades[i].stake,
        toWin: this.trade.trade.trades[i].stake *(this.trade.trade.trades[i].odds -1),
        liability: this.trade.trade.trades[i].stake,
        time: this.trade.trade.trades[i].condition.time,
        point: this.trade.trade.trades[i].condition.tennis.point,
        note: this.trade.trade.trades[i].condition.note
      })
    }
    // sort by time
    this.bets = this.bets.sort((a,b)=>{
      return a.time - b.time
    })
  }

  getSide(index: number, side: number){


    let winA = 0
    let winB = 0

    for(let i =0; i<=index; i++){
      if((this.bets[i].type==='back' && this.bets[i].selectionN ===0) ){
        winA += this.bets[i].toWin
        winB += - this.bets[i].stake
      }
      if((this.bets[i].type==='lay' && this.bets[i].selectionN ===0)){
        winA += - this.bets[i].liability
        winB += + this.bets[i].toWin
      }
      if((this.bets[i].type==='lay' && this.bets[i].selectionN ===1)){
        winA += + this.bets[i].toWin
        winB += - this.bets[i].liability

      } if((this.bets[i].type==='back' && this.bets[i].selectionN ===1)){
        winA += - this.bets[i].stake
        winB += + this.bets[i].toWin
      }
    }

    if(side===0){
      if(winA>0){
        return  Math.round((winA * (1-0.02))*100)/100
      } else{
        return Math.round((winA)*100)/100
      }

    } else if (side===1) {
      if(winB>0){
        return  Math.round((winB * (1-0.02))*100)/100
      } else{
        return Math.round((winB)*100)/100
      }
    }
  }

}
