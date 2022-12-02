import {Trade} from '../../report/trade/trade';

export interface TradeComparator{
  trade: Trade
  marketId: string
  tradeId: string
  selectionId: number
  date: number
  n: number
  name: string
  pl: number
  compare?: number
}
