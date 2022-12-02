import {MarketBasic} from '../market/basic/marketBasic';
import {Trade} from '../report/trade/trade';
import {Utils} from '../utils';

export interface BacktestFormInterface{
  info: BacktestInfo
  marketInfo: MarketBasic
  tradeForm: Trade
  backtestBets: BacktestBets[]
}

export interface BacktestInfo {
  active: string
  selectionN: number
  selectionName: string
  option: string
  back:{
    stake: number
  }
  lay:{
    stake: number
  }
}

export interface BacktestBets{
  time: number
  odds: number[]
  selectionName: string
  selectionN: number
  type: string
  stakeBack: number
  stakeLay: number
  options: string
}


export class BacktestForm implements BacktestFormInterface{

  private util = new Utils()
  marketInfo: MarketBasic;
  info: BacktestInfo;
  tradeForm: Trade;
  backtestBets: BacktestBets []

  constructor(market: MarketBasic, trade: Trade) {
    this.marketInfo = market
    this.info = {
      active: 'Back',
      option: 'OPEN',
      // default entry on runner 1
      selectionN: 0,
      selectionName: market.marketRunners.marketRunners.length ? market.marketRunners.marketRunners[0].name : '',
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
