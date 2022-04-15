import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from '../../../model/report/new/newTrade';
import {TradeDetail} from '../../../model/report/trade';

@Component({
  selector: 'app-trade-detail',
  templateUrl: './trade-detail.component.html',
})
export class TradeDetailComponent implements OnInit {

  @Input() trade: NewTrade

  constructor() { }

  ngOnInit(): void {
  }


}
