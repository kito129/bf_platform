import {MarketInfoBasic} from "./basic/marketInfoBasic";

export interface MarketBasket {
  marketId: string,
  marketInfo: MarketInfoBasic,
  selection: {
    id: number,
    name: string,
    inPlayOdds: number,
    inPlayIndex: number,
    lengthOddsInPlay: number
  }
}
