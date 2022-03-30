export interface TradeComparator{
  marketId: string
  tradeId: string
  selectionId: number
  date: number
  n: number
  name: string
  pl: number
  compare?: number
}
