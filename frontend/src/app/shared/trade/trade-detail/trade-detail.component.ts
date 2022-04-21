import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from '../../../model/report/new/newTrade';
import {TradeDetail} from '../../../model/report/trade';

@Component({
  selector: 'app-trade-detail',
  templateUrl: './trade-detail.component.html',
})
export class TradeDetailComponent implements OnInit {

  @Input() trade: NewTrade

  notePresent = false

  constructor() { }

  ngOnInit(): void {

    for (const props in this.trade.trade.info.note) {
      if (this.trade.trade.info.note[props] === null || this.trade.trade.info.note[props] === '') {
        this.notePresent = false
      } else {
        this.notePresent = true
        break
      }
    }
  }


}
