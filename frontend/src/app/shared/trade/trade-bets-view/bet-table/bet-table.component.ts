import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from '../../../../model/report/new/newTrade';
import {TradeBets} from '../../../../model/report/tradeBets';

@Component({
  selector: 'app-bet-table',
  templateUrl: './bet-table.component.html',
})
export class BetTableComponent implements OnInit {

  @Input() bets: TradeBets[]
  @Input() title: string

  constructor() { }

  ngOnInit(): void {
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
