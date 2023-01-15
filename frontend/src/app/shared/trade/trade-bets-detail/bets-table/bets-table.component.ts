import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TradeBets} from '../../../../model/report/trade/tradeBets';
import {Utils} from '../../../../model/utils';
import {utils} from 'protractor';

@Component({
  selector: 'app-bets-table',
  templateUrl: './bets-table.component.html',
})
export class BetsTableComponent implements OnInit {

  @Input() bets: TradeBets[]
  @Input() title: string
  @Input() view: boolean
  @Input() tradeEdit: boolean

  @Output() tradeUpdate = new EventEmitter()

  collapsed = false

  utils = new Utils()

  constructor() { }

  ngOnInit(): void {
    this.collapsed = this.view
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

  removeBet(index: number){
    this.bets.splice(index,1)
    this.updateBet()
  }

  updateBet(byLiability?: boolean){
    this.recalculateToWin(byLiability)
    this.tradeUpdate.emit(this.bets)
  }

  recalculateToWin(byLiability: boolean){
    for (const bet of this.bets) {
      if(!byLiability){
        bet.liability = bet.type ==='back' ? bet.stake : this.utils.round2Point(bet.stake * (bet.odds-1))
        bet.toWin = bet.type ==='back' ? this.utils.round2Point(bet.stake * (bet.odds-1)) : bet.stake
      } else {
        bet.stake = bet.type ==='back' ? bet.stake : this.utils.round2Point(bet.liability * (bet.odds-1))
        bet.toWin = bet.type ==='back' ? this.utils.round2Point(bet.stake * (bet.odds-1)) : bet.stake
      }
    }
  }

}
