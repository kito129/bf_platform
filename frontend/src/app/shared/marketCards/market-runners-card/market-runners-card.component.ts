import {Component, Input, OnInit} from '@angular/core';
import {MarketRunnersBasic} from '../../../model/market/basic/marketRunnersBasic';
import {MarketInfoBasic} from '../../../model/market/basic/marketInfoBasic';
import {MarketRunnersAdvanced} from '../../../model/market/advanced/marketRunnersAdvanced';
import {MarketInfoAdvanced} from '../../../model/market/advanced/marketInfoAdvanced';

@Component({
  selector: 'app-market-runners-card',
  templateUrl: './market-runners-card.component.html',
})
export class MarketRunnersCardComponent implements OnInit {

  @Input() marketRunnersBasic: MarketRunnersBasic
  @Input() marketRunnersAdvanced: MarketRunnersAdvanced
  @Input() marketInfoBasic: MarketInfoBasic
  @Input() marketInfoAdvanced: MarketInfoAdvanced

  constructor() { }

  ngOnInit(): void {}


}
