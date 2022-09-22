import {TennisPoint} from '../point/tennisPoint';
import {FootballPoint} from '../point/footballPoint';
import {NewTrade} from './new/newTrade';

export interface Trade {
  _id?: string
  created?: number
  lastUpdate?: number
  trade: {
    info: {
      strategyId: string
      tennisTournamentId: string
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
    selections: [{
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
    trades: {
      back: [{
        selectionN: number
        odds: number
        stake: number
        ifWin: number
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
      }]
      lay: [{
        selectionN: number
        odds: number
        bank: number
        liability: number
        ifWin: number
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
      }]
    }
    exposition: [{
      back: number
      lay: number
      selectionN: number
    }]
    result: {
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
  }
}

export interface TradeDetail {
  trade: NewTrade
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

  public trades: {
    back: [{
      selectionN: number
      odds: number
      stake: number
      ifWin: number
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
    }]
    lay: [{
      selectionN: number
      odds: number
      bank: number
      liability: number
      ifWin: number
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
    }]
  }

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

    this.trades= {
      back: [{
        selectionN: 0,
        odds: null,
        stake: null,
        ifWin: null,
        condition: {
          tennis: {
            isTennis: null,
            point: null,
          },
          football: {
            isFootball: null,
            point: null,
          },
          horse: {
            isHorse: null
          },
          time: 0,
          note: null,
        }
      }],
      lay: [{
        selectionN: 0,
        odds: null,
        bank: null,
        liability: null,
        ifWin: null,
        condition: {
          tennis: {
            isTennis: null,
            point: null,
          },
          football: {
            isFootball: null,
            point: null,
          },
          horse: {
            isHorse: null,
          },
          time: 0,
          note: null,
        }
      }]
    }
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
    this.trades.back.pop()
    this.trades.lay.pop()
  }

}

export class SupportBets{
  odds: number
  stake: number
  selection: {
    runnerId: number,
    runnerName: string,
    winner: number,
    bsp: number
  }
  isBack: boolean
  isLay: boolean
  condition: {
    tennis: {
      isTennis: boolean,
      point: TennisPoint
    }
    football: {
      isFootball: boolean,
      point: FootballPoint,
    }
    horse: {
      isHorse: boolean,
    }
    time: number
    note: null
  }

  constructor() {
    this.odds= 1.01
    this.stake= 100
    this.selection= {
      runnerId: null,
        runnerName: null,
        winner: null,
        bsp: 0
    }
    this.isBack= true
    this.isLay= false
    this.condition= {
      tennis: {
        isTennis: false,
        point: {
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
        }
      },
      football: {
        isFootball: false,
        point: {
          home: 0,
          away: 0
        }
      },
      horse: {
        isHorse: false
      },
      time: 0,
      note: null
    }
  }
}
