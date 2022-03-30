import {Component, Input, OnInit} from '@angular/core';
import {Trade} from '../../../model/report/trade';
import * as reportActions from '../../../store/report/report.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-trade-tools-actions',
  templateUrl: './trade-tools-actions.component.html',
})
export class TradeToolsActionsComponent implements OnInit {

  @Input() trade: Trade

  constructor(private readonly store: Store,) { }

  ngOnInit(): void {
  }

  createModal(event){
    if(event[1]==='create'){
      // CREATE runner note
      this.store.dispatch(reportActions.createTrade({ trade: event[0]}));
    }
  }

  onDuplicateClick(trade: Trade){
    const newTrade: Trade = JSON.parse(JSON.stringify(trade))
    newTrade._id = undefined
    newTrade.created = Date.now()
    newTrade.lastUpdate = Date.now()
    newTrade.trade.info.marketInfo.marketName = newTrade.trade.info.marketInfo.marketName + ' - DUPLICATE'

    // dispatch actions with duplicated payload
    this.store.dispatch(reportActions.createTrade({ trade: newTrade}))
  }

  updateModal(event){

    if(event[1]==='update'){
      event[0].lastUpdate = new Date().getTime()
      // UPDATE runner note
      this.store.dispatch(reportActions.updateTrade({ _id: event[0]._id, trade: event[0] }));
    }

  }

  deleteModal(event){
    console.log(event)
    if(event[1]==='delete'){
      // DELETE runner note
      this.store.dispatch(reportActions.deleteTrade({ _id: event[0] }));
    }

  }

}
