import {NewTrade} from './new/newTrade';
import {TennisPoint} from '../point/tennisPoint';
import {Utils} from '../calculator/utils';

export interface TradeSetOddsAnalyzerInterface{
  tradeId: string
  trade: NewTrade
  marketName: string
  date: number
  result: TennisPoint
  runnerA:TradeSetOddsAnalyzerRunnerInterface
  runnerB:TradeSetOddsAnalyzerRunnerInterface
  winner:TradeSetOddsAnalyzerRunnerInterface
}

export interface TradeSetOddsAnalyzerRunnerInterface{
  bsp: number
  set1: number
  set1Notional: number
  set1NotionalDelta: number
  set1Delta: number
  set2: number
  winSet1: boolean
  winSet2: boolean
}

export class TradeSetOddsAnalyzer{

  utils = new Utils()

  analyzer: TradeSetOddsAnalyzerInterface[] = []

  constructor(trades: NewTrade[]) {
    let filtered = trades.filter(y => y.trade.selections[0].sets.secondSet>0 && y.trade.info.marketInfo.marketName.indexOf('/')===-1)
    // remove 0 bsp
    filtered = filtered.filter( x => {
      for (const run of x.trade.selections) {
        if(!run.bsp) return false
      }
      return true
    })
    filtered = this.removeDuplicate(filtered)
    this.analyzer = filtered.map( x => {
      const winnerSet1 = x.trade.results.finalScore.tennis.set1.runnerA > x.trade.results.finalScore.tennis.set1.runnerB ? 0 : 1
      const winnerSet2 = x.trade.results.finalScore.tennis.set2.runnerA > x.trade.results.finalScore.tennis.set2.runnerB ? 0 : 1
      const runnerA = x.trade.selections[0]
      // @ts-ignore
      const runnerB = (x.trade.selections[1] ? x.trade.selections[1] : 0)
      // @ts-ignore
      const runnerAset2Notional = winnerSet1===0? this.utils.roundNumber((runnerA.bsp-1)/4+1) : this.utils.roundNumber(((runnerA.bsp-1)*4)+1)
      // @ts-ignore
      const runnerBset2Notional = winnerSet1===1? this.utils.roundNumber((runnerB.bsp-1)/4+1) : this.utils.roundNumber(((runnerB.bsp-1)*4)+1)

      const temp = {
        trade: x,
        tradeId: x._id,
        marketName: x.trade.info.marketInfo.marketName,
        date: x.trade.info.date,
        result: x.trade.results.finalScore.tennis,
        runnerA:{
          bsp: runnerA.bsp,
          set1: runnerA.sets.secondSet,
          set1Notional: runnerAset2Notional,
          set1NotionalDelta: runnerA.sets.secondSet-runnerAset2Notional,
          set1Delta: this.utils.roundNumber((runnerA.bsp - runnerA.sets.secondSet) / runnerA.bsp),
          set2: runnerA.sets.thirdSet,
          winSet1: winnerSet1 === 0,
          winSet2: winnerSet2 === 0,
        },
        runnerB:{
          // @ts-ignore
          bsp: runnerB.bsp,
          // @ts-ignore
          set1: runnerB.sets.secondSet,
          set1Notional: runnerBset2Notional,
          // @ts-ignore
          set1NotionalDelta: runnerB.sets.secondSet-runnerBset2Notional,
          // @ts-ignore
          set1Delta: this.utils.roundNumber((runnerB.bsp - runnerB.sets.secondSet) / runnerB.bsp),
          // @ts-ignore
          set2: runnerB.sets.thirdSet,
          winSet1: winnerSet1 === 1,
          winSet2: winnerSet2 === 1,
        },
        winner:{
          bsp: 0,
          set1: 0,
          set1Notional: 0,
          set1NotionalDelta: 0,
          set1Delta: 0,
          set2: 0,
          winSet1: false,
          winSet2:false,
        },
      }
      if(winnerSet1===0){
        temp.winner = temp.runnerA
      } else {
        temp.winner = temp.runnerB
      }
      return temp
    })
   }



  removeDuplicate(obj){
    return obj.filter((value, index, self) =>
        index === self.findIndex((t: NewTrade) => (
          t.trade.info.marketInfo.marketName === value.trade.info.marketInfo.marketName
        ))
    )
  }
}
