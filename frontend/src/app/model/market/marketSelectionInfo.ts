export interface MarketSelectionInfo {
  _id: string;
  marketId: string,
  marketType: string,
  eventName: string,
  openDate: string,
  name: string,
  sport: string,
  selectionWin: boolean,
  winner:{
    id: number,
    name: string,
    status: string,
    bsp: number,
    maxInPlay: number,
    minInPlay: number,
  }
  loser:{
    id: number,
    name: string,
    status: string,
    bsp: number,
    maxInPlay: number,
    minInPlay: number,
  }
}
