import {MarketSelectionInfo} from './marketSelectionInfo';

export class MarketForRunnersMarket{
  marketId: string
  openDate: string
  name: string
  selectionId: number
  selectionBSP: number
  selectionMax: number
  selectionMin: number
  selectionWin: boolean
  otherId: number
  otherBSP: number
  otherMax: number
  otherMin: number
  winnerName: string
  winnerBSP: number
  winnerMax: number

  constructor(market: MarketSelectionInfo) {
    this.marketId = market.marketId
    this.openDate = market.openDate
    this.name = market.eventName
    this.winnerName = market.winner.name
    if(market.selectionWin === true){
      this.selectionBSP = market.winner.bsp
      this.selectionMax = market.winner.maxInPlay
      this.selectionMin = market.winner.minInPlay

      this.selectionWin = true

      this.winnerBSP = null
      this.winnerMax = null

      this.otherBSP = market.loser.bsp
      this.otherMax = market.loser.maxInPlay
      this.otherMin = market.loser.minInPlay

    } else {
      this.selectionBSP = market.loser.bsp
      this.selectionMax = market.loser.maxInPlay
      this.selectionMin = market.loser.minInPlay

      this.selectionWin = false

      this.winnerBSP = market.winner.bsp
      this.winnerMax = market.winner.maxInPlay

      this.otherBSP = market.winner.bsp
      this.otherMax = market.winner.maxInPlay
      this.otherMin = market.winner.minInPlay
    }
  }
}
