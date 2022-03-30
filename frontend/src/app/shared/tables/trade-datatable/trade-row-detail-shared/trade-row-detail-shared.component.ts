import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from '../../../../model/report/new/newTrade';

@Component({
  selector: 'app-trade-row-detail-shared',
  templateUrl: './trade-row-detail-shared.component.html',
})
export class TradeRowDetailSharedComponent implements OnInit {

  @Input() trade: NewTrade

  constructor() { }

  ngOnInit(): void {
  }

  containsThisRunnersBets(id: number){
    for(const back of this.trade.trade.trades){
      if(back.selectionN === id){
        return true
      }
    }
    return  false
  }


}
