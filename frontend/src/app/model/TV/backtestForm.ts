import {MarketBasic} from '../market/basic/marketBasic';
import {NewTrade} from '../report/new/newTrade';
import {Utils} from '../utils';

export interface BacktestFormInterface{
  side: BacktestSide
  marketInfo: MarketBasic
  tradeForm: NewTrade
  backtestBets: any
}

export interface BacktestSide{
  active: string
  selection: string
  option: string
  back:{
    stake: number
  }
  lay:{
    stake: number
  }
}


export class BacktestForm implements BacktestFormInterface{

  private util = new Utils()
  marketInfo: MarketBasic;
  side: BacktestSide;
  tradeForm: NewTrade;
  backtestBets: any []

  constructor(market: MarketBasic, trade: NewTrade) {
    this.marketInfo = market
    this.side = {
      active: 'Back',
      option: 'OPEN',
      // default entry on runner 1
      selection: market.marketRunners.marketRunners.length ? market.marketRunners.marketRunners[0].name : '',
      back:{
        stake: 100,
      },
      lay:{
        stake: 100,
      }
    }
    this.backtestBets = []
    this.tradeForm = this.util.generateTradeFromMarket(market, trade)
  }
}
