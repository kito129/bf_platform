import {MarketSelectionInfo} from '../market/marketSelectionInfo';

export interface RunnerMarketsStatsInterface{
  range:{
    minOdds: number,
    maxOdds: number,
  }
  match:{
    matchNumber: number,
    winner: number,
    loser: number,
    notWinner: number,
  }
  odds:{
    min: number
    max: number
    mean: number
    name: string
  }
  marketsInfo: MarketSelectionInfo[]
}

export class RunnerMarketsStats{

  public rangeStats: RunnerMarketsStatsInterface[] = []
  public rangeFav: RunnerMarketsStatsInterface[] = []

  constructor(runnerMarkets: MarketSelectionInfo[], runnerId: number) {
    const ranges: MarketSelectionInfo[][] = []
    // filters
    ranges.push(runnerMarkets.filter( x => { return this.checkRange(1, 1.11, x)}))
    ranges.push(runnerMarkets.filter( x => { return this.checkRange(1.12, 1.2, x)}))
    ranges.push(runnerMarkets.filter( x => { return this.checkRange(1.21, 1.30, x)}))
    ranges.push(runnerMarkets.filter( x => { return this.checkRange(1.31, 1.49, x)}))
    ranges.push(runnerMarkets.filter( x => { return this.checkRange(1.50, 1.74, x)}))
    ranges.push(runnerMarkets.filter( x => { return this.checkRange(1.75, 2, x)}))

    ranges.push(runnerMarkets.filter( x => { return this.checkRange(2, 4, x)}))
    ranges.push(runnerMarkets.filter( x => { return this.checkRange(4.01, 6, x)}))
    ranges.push(runnerMarkets.filter( x => { return this.checkRange(6.01, 10000, x)}))

    const rangeOdds=[1,1.12,1.21,1.31,1.5,1.75,2,4,6,1000]
    const rangeName=['Top Dog [1.01-1.11]','Mid Dog [1.12-1.20]','High Dog [1.21-1.30]','Fav [1.31-1.49]','Mid Fav [1.50-1.74]','High Fav [1.75-1.99]','Underdog [2-4]','Scary [4.01-6]','Loser [6.01-1000]']

    let i=0
    for (const range of ranges){

      const bsp = range.map(x => {
        if(x.selectionWin){
          return x.winner.bsp
        } else {
          return x.loser.bsp
        }
      })

      this.rangeStats.push({
        range:{
          minOdds: rangeOdds[i],
          maxOdds: rangeOdds[i+1]-0.01,
        },
        match:{
          matchNumber: range.length,
          winner: range.reduce((sum, record)=> {
            return record.selectionWin ? sum = sum+1 : sum;

          }, 0),
          loser: range.reduce((sum, record) => {
            return !record.selectionWin ? sum = sum+1 : sum;

          }, 0),
          notWinner: range.reduce((sum, record) => {
            return (+record.winner?.id !== +runnerId && !record.winner) ? sum = sum+1 : sum;

          }, 0),
        },
        odds:{
          min: Math.min(...bsp),
          max: Math.max(...bsp),
          mean: 0,
          name: rangeName[i]
        },
        marketsInfo: range.sort((a,b)=>{
          return new Date(b.openDate).getTime() - new Date(a.openDate).getTime()
        })
      })
      i++
    }
  }

  private checkRange(min: number, max:number, value: MarketSelectionInfo){
    if(value.selectionWin){
      return min<=value.winner.bsp && value.winner.bsp<=max
    } else {
      return min<=value.loser.bsp && value.loser.bsp<=max
    }
  }
}
