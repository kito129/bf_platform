import {NewTrade} from '../../report/new/newTrade';

export interface TradeComparator{
  trade: NewTrade
  marketId: string
  tradeId: string
  selectionId: number
  date: number
  n: number
  name: string
  pl: number
  compare?: number
}
