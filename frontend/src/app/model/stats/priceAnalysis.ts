import {PriceStats} from "./priceStats";

export class PriceAnalysis {
  marketId?: string
  runnerId?: string
  runnerName?: string
  updates?: {
    open?: {
      timestamp?: number,
      price?: number
    }
    inPlay?: {
      timestamp?: number,
      price?: number
    }
    closed?: {
      timestamp?: number,
      price?: number
    }
  }
  odds?: {
    preMatch?: {
      odds?: [
        {
          timestamp?: number,
          ltp: number,
        }],
      stats?: PriceStats
    }
    inPlay?: {
      odds?: [
        {
          timestamp?: number,
          ltp: number,
        }],
      stats?: PriceStats

    }
  }

  constructor(odds: any, marketId: string, runner: any, oddsLen: number, inPlay: number) {

    // basic info
    this.marketId =marketId
    this.runnerId = odds.runnerId
    this.runnerName = runner.name
    this.updates = {
      open: {
        timestamp: odds.odds[0].timestamp,
        price: runner.openOdds,
      },
      inPlay: {
        timestamp: runner.inPlayTime,
        price: runner.inPlayOdds,
      },
      closed: {
        timestamp: odds.odds[oddsLen-1].timestamp,
        price: runner.closedOdds,
      }
    }
    // create empty object
    this.odds = {
      preMatch: {
        odds: [ {
          timestamp:0,
          ltp: 0,
        }],
        stats: {}
      },
      inPlay: {
        odds: [ {
          timestamp:0,
          ltp: 0,
        }],
        stats: {}
      }
    }
    this.odds.preMatch.odds.pop()
    this.odds.inPlay.odds.pop()

    // populate
    for (let odd of odds.odds){
      if(odd.timestamp<inPlay+7200000){
        // premacth
        this.odds.preMatch.odds.push(odd)
      } else if (odd.timestamp>=inPlay+7200000) {

        // inPlay
        this.odds.inPlay.odds.push(odd)
      }
    }


    // STATS
    //this.odds.inPlay.stats = trade PriceStats(this.odds.inPlay.odds)
    //this.odds.preMatch.stats = trade PriceStats(this.odds.preMatch.odds)

  }

}
