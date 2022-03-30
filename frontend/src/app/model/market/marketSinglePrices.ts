import {MarketInfoBasic} from './basic/marketInfoBasic';
import {MarketRunnersBasic} from './basic/marketRunnersBasic';
import {MarketUpdatesBasic} from './basic/marketUpdatesBasic';

export interface MarketSinglePrices{
  marketId: string
  marketInfo: MarketInfoBasic,
  marketRunners: MarketRunnersBasic,
  marketOdds: {
    runnerId: number,
    prices: [{
      timestamp: number,
      ltp: number
    }]
  },
  marketUpdates: MarketUpdatesBasic
}
