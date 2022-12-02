import {TennisPoint} from '../../point/tennisPoint';
import {FootballPoint} from '../../point/footballPoint';

export interface Trade {
  _id?: string
  created?: number
  updated?: number
  trade: {
    info: TradeInfo
    selections: TradeSelections[]
    trades: Bets[]
    results: TradeResult,
    stats: TradeStatsParams[],
    params: TradeStatsParams[],
    statistic:{
      runnerA: {
        stats1: number
        stats2: number
        stats3: number
        stats4: number
        stats5: number
        stats6: number
        stats7: number
        stats8: number
        stats9: number
        stats10: number
      },
      runnerB: {
        stats1: number
        stats2: number
        stats3: number
        stats4: number
        stats5: number
        stats6: number
        stats7: number
        stats8: number
        stats9: number
        stats10: number
      }
    }
  }
}

export interface TradeInfo{
  setTime: {
    second: number
    third: number
  },
  strategyId: string
  tennisTournamentId: string
  date: number
  marketInfo: {
    marketName: string
    marketId: string
    marketType: string
    eventName: string
    sport: string
  }
  executor: string[]
  exchange: {
    name: string
    commission: number
  }
  note: {
    description: string
    entry: string
    exit: string
    position: string
    mm: string
    odds: string
    post: string
  }
}

export interface TradeResult{
  grossProfit: number,
  netProfit: number,
  rr: number
  commissionPaid: number
  maxRisk: number
  correctionPl: number
  finalScore:{
    tennis: TennisPoint
    football: FootballPoint
  }
}

export interface TradeStatsParams{
  runnerId: number
  stats1: number
  stats2: number
  stats3: number
  stats4: number
  stats5: number
  stats6: number
  stats7: number
  stats8: number
  stats9: number
  stats10: number
}

export interface TradeSelections{
  selectionN: number
  runnerId: number
  runnerName: string
  winner: boolean
  bsp: number
  sets: {
    secondSet: number
    thirdSet: number
  },
  avg: TradeSelectionsAvg
}

export interface TradeSelectionsAvg{
  back: {
    odds: number
    stake: number
    toWin: number
    liability: number
  },
  lay: {
    odds: number
    stake: number
    toWin: number
    liability: number
  }
}

export interface Bets {
  id: number
  selectionN: number
  odds: number
  stake: number
  liability: number
  ifWin: number
  options: string
  type: string
  condition: {
    tennis: {
      isTennis: boolean
      point: TennisPoint
    }
    football: {
      isFootball: boolean
      point: FootballPoint
    }
    horse: {
      isHorse: boolean
    }
    note: string
    time: number
  }
}

export interface CSVTrade {
  date: number
  marketName: string
  result: string
  marketType: string
  duration: number
  winner: string
  loser: string
  winnerBSP: number
  loserBSP: number
  winnerSet2: number
  loserSet2: number
  winnerSet3: number
  loserSet3: number
  winnerAvgBack: number
  winnerAvgBackStake: number
  winnerAvgBackIfWin: number
  winnerAvgLay: number
  winnerAvgLayBank: number
  winnerAvgLayLiability: number
  loserAvgBack: number
  loserAvgBackStake: number
  loserAvgBackIfWin: number
  loserAvgLay: number
  loserAvgBank: number
  loserAvgLiability: number
  empty: null,
  pl: number
  maxRisk: number
  trade?: Trade
}



export interface CSVBetGroup {
  name: string
  id: number
  selectionN: number
  odds: number
  stake: number
  liability: number
  ifWin: number
  options: string
  type: string
  point: TennisPoint | string
  note: string
  time: number
  empty?: null
}

export interface TradeDetail {
  trade: Trade
  bsp: {
    runnerA: number
    runnerB: number
  }
  setOdds:{
    set2: {
      runnerA: number
      runnerB: number
    },
    set3: {
      runnerA: number
      runnerB: number
    }
  }
  avgBets: {
    back: {
      runnerA: number
      runnerB: number
    }
    lay: {
      runnerA: number
      runnerB: number
    }
  }
  data: {
    stockPl: number,
    stockPercent: number
    lastMax: number,
    lastMin:number,
    dd: number,
    up: number,
    ddPercent: number
  }
}

export class TradeForm{
  public info: {
    tennisTournamentId: string,
    strategyId: string
    date: number
    marketInfo: {
      marketName: string
      marketId: string
      sport: string
    }
    executor: string[]
    exchange: {
      name: string
      commission: number
    }
    note: {
      description: string
      entry: string
      exit: string
      position: string
      mm: string
      odds: string
      post: string
    }
  }
  public selections: [{
    runnerId: number
    runnerName: string
    winner: boolean
    bsp: number
    avg: {
      back: {
        odds: number
        stake: number
      },
      lay: {
        odds: number
        bank: number
        liability: number
      }
    }
  }]

  public trades: Bets[]

  public exposition: [{
    back: number
    lay: number
    selectionN: number
  }]

  public result: {
    grossProfit: number,
    netProfit: number,
    rr: number
    commissionPaid: number
    maxRisk: number
    correctionPl: number
    finalScore:{
      tennis: TennisPoint
      football: FootballPoint
    }
  }

  constructor() {
    this.info = {
      strategyId: null,
      tennisTournamentId: null,
      marketInfo: {
        marketName: null,
        marketId: null,
        sport: null
      },
      date: null,
      executor: [],
      exchange: {
        name: 'UK KEVIN',
        commission: 0.02
      },
      note: {
        description: null,
        entry: null,
        exit: null,
        position: null,
        mm: null,
        odds: null,
        post: null
      }
    };

    this.selections = [{
      runnerId: null,
      runnerName: null,
      winner: null,
      bsp: 0,
      avg: {
        back: {
          odds: 0,
          stake: 0,
        },
        lay: {
          odds: 0,
          bank: 0,
          liability: 0,
        }
      }
    }]

    this.trades= []
    this.exposition= [{
      back: 0,
      lay: 0,
      selectionN: 0,
    }]

    this.result= {
      grossProfit: 0,
      netProfit: 0,
      rr: 0,
      maxRisk: 0,
      commissionPaid: 0,
      correctionPl: 0,
      finalScore: {
        tennis: {
          set1: {
            runnerA: 0,
            runnerB: 0
          },
          set2: {
            runnerA: 0,
            runnerB: 0
          },
          set3: {
            runnerA: 0,
            runnerB: 0
          },
          set4: {
            runnerA: 0,
            runnerB: 0
          },
          set5: {
            runnerA: 0,
            runnerB: 0
          },
          currentGame: {
            runnerA: '0',
            runnerB: '0',
            server: null,
          }
        },
        football: {
          home: 0,
          away: 0
        }
      }
    }
  }

}
