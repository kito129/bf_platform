import {Component, Input, OnInit} from '@angular/core';
import {MarketBasic, } from '../../../../model/market/basic/marketBasic';
import {SelectedTradeCharts} from '../../../../model/study/selectedTradeCharts';
import {NewTrade} from '../../../../model/report/new/newTrade';

@Component({
  selector: 'app-tv-market-prices-and-trades',
  templateUrl: './tv-market-prices-and-trades.component.html',
})
export class TvMarketPricesAndTradesComponent implements OnInit {

  @Input() trade: NewTrade
  @Input() marketDetail: MarketBasic
  @Input() marketDetailsFound: boolean

  trades: SelectedTradeCharts[] = []

  constructor() { }

  ngOnInit(): void {

    this.trades = []
    // set selected trade proprieties
    for(const trade of this.trade.trade.trades){
      this.trades.push({
        id: trade.id,
        isBackTrade: trade.type === 'back',
        odds: trade.odds,
        stake: trade.stake,
        time: trade.condition.time,
        note: trade.condition.note,
        liability: trade.stake,
        sideA: trade.selectionN===0,
        options: trade.options
      })
    }
  }

}
