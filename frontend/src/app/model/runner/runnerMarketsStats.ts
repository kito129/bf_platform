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
  }
  marketsInfo: MarketSelectionInfo[]
}

export class RunnerMarketsStats{

  public rangeStats: RunnerMarketsStatsInterface[] = []

  constructor(runnerMarkets: MarketSelectionInfo[], runnerId: number) {
    const ranges: MarketSelectionInfo[][] = []
    ranges.push(runnerMarkets.filter( x => {
      if(x.selectionWin){
        return 1<=x.winner.bsp && x.winner.bsp<1.2
      } else {
        return 1<=x.loser.bsp && x.loser.bsp<1.2
      }
    }))
    ranges.push(runnerMarkets.filter( x => {
      if(x.selectionWin){
        return 1.2<=x.winner.bsp && x.winner.bsp<1.4
      } else {
        return 1.2<=x.loser.bsp && x.loser.bsp<1.4
      }
    }))
    ranges.push(runnerMarkets.filter( x => {
      if(x.selectionWin){
        return 1.4<=x.winner.bsp && x.winner.bsp<1.75
      } else {
        return 1.4<=x.loser.bsp && x.loser.bsp<1.75
      }
    }))
    ranges.push(runnerMarkets.filter( x => {
      if(x.selectionWin){
        return 1.75<=x.winner.bsp && x.winner.bsp< 2.3
      } else {
        return 1.75<=x.loser.bsp && x.loser.bsp< 2.3
      }
    }))
    ranges.push(runnerMarkets.filter( x => {
      if(x.selectionWin){
        return 2.3<=x.winner.bsp && x.winner.bsp< 4
      } else {
        return 2.3<=x.loser.bsp && x.loser.bsp< 4
      }
    }))
    ranges.push(runnerMarkets.filter( x => {
      if(x.selectionWin){
        return 4<=x.winner.bsp && x.winner.bsp< 10
      } else {
        return 4<=x.loser.bsp && x.loser.bsp< 10
      }
    }))
    ranges.push(runnerMarkets.filter( x => {
      if(x.selectionWin){
        return 10<=x.winner.bsp
      } else {
        return 10<=x.loser.bsp
      }
    }))

    const rangeOdds=[1,1.20,1.4,1.75,2.30,4,10,1000]

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
          maxOdds: rangeOdds[i+1],
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
          mean: 0
        },
        marketsInfo: range.sort((a,b)=>{
          return new Date(b.openDate).getTime() - new Date(a.openDate).getTime()
        })
      })
      i++
    }
  }
}
