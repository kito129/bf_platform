import {Component, Input, OnInit} from '@angular/core';
import {MarketInfoBasic} from '../../../../model/market/basic/marketInfoBasic';
import {MarketInfoAdvanced} from '../../../../model/market/advanced/marketInfoAdvanced';

@Component({
  selector: 'app-market-info-card',
  templateUrl: './market-detail-info-card.component.html',
})
export class MarketInfoCardComponent implements OnInit {

  @Input()  marketInfoBasic: MarketInfoBasic
  @Input()  marketAdvancedInfo: MarketInfoAdvanced

  constructor() { }


  ngOnInit(): void {

  }

}
