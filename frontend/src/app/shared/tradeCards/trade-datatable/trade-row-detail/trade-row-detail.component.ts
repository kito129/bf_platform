import {Component, Input, OnInit} from '@angular/core';
import {TradeRowDetail} from '../../../../model/report/trade';

@Component({
  selector: 'app-trade-row-detail',
  templateUrl: './trade-row-detail.component.html',})
export class TradeRowDetailComponent implements OnInit {

  @Input()
  tradeDetail: TradeRowDetail

  constructor() { }

  ngOnInit(): void {
  }

  containsThisRunnersBets(id: number){
    for(const back of this.tradeDetail.trade.trade.trades){
      if(back.selectionN === id){
        return true
      }
    }
    return  false
  }


}
