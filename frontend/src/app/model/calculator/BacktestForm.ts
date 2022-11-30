import {MarketBasic} from '../market/basic/marketBasic';
import {NewTrade} from '../report/new/newTrade';
import {Utils} from '../utils';

export interface BacktestFormInterface{
  side: BacktestSide
  marketInfo: MarketBasic
  tradeForm: NewTrade
}

export interface BacktestSide{
  back:{
    stake: number
    selection: number
  }
  lay:{
    stake: number
    selection: number
  }
}

export class BacktestForm implements BacktestFormInterface{

  private util = new Utils()
  marketInfo: MarketBasic;
  side: BacktestSide;
  tradeForm: NewTrade;

  constructor(market) {
    this.marketInfo = market
    this.side = {
      back:{
        stake: 0,
        selection: 0,
      },
      lay:{
        stake: 0,
        selection: 0,
      }
    }
    this.tradeForm = this.util.generateTradeFromMarket(market)
  }
}
