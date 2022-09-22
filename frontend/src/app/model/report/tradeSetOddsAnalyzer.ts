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
}

export interface TradeSetOddsAnalyzerRunnerInterface{
  bsp: number
  set2: number
  set3: number
  set2Notional: number
  set2NotionalDelta: number
  set2Delta: number
  winSet2: boolean
  winSet3: boolean
}

export class TradeSetOddsAnalyzer{

  utils = new Utils()

  analyzer: TradeSetOddsAnalyzerInterface[] = []

  constructor(trades: NewTrade[]) {
    this.analyzer = trades.filter(y => y.trade.selections[0].sets.secondSet>0).map( x => {
      const winnerSet2 = x.trade.results.finalScore.tennis.set1.runnerA > x.trade.results.finalScore.tennis.set1.runnerB ? 0 : 1
      const winnerSet3 = x.trade.results.finalScore.tennis.set2.runnerA > x.trade.results.finalScore.tennis.set2.runnerB ? 0 : 1
      const runnerA = x.trade.selections[0]
      // @ts-ignore
      const runnerB = (x.trade.selections[1] ? x.trade.selections[1] : 0)
      // @ts-ignore
      const runnerAset2Notional = winnerSet2===0? this.utils.roundNumber((runnerA.bsp-1)/4+1) : this.utils.roundNumber(((runnerA.bsp-1)*4)+1)
      // @ts-ignore
      const runnerBset2Notional = winnerSet2===1? this.utils.roundNumber((runnerB.bsp-1)/4+1) : this.utils.roundNumber(((runnerB.bsp-1)*4)+1)

      return{
        trade: x,
        tradeId: x._id,
        marketName: x.trade.info.marketInfo.marketName,
        date: x.trade.info.date,
        result: x.trade.results.finalScore.tennis,
        runnerA:{
          bsp: runnerA.bsp,
          set2: runnerA.sets.secondSet,
          set2Notional: runnerAset2Notional,
          set2NotionalDelta: runnerA.sets.secondSet-runnerAset2Notional,
          set2Delta: this.utils.roundNumber((runnerA.bsp - runnerA.sets.secondSet) / runnerA.bsp),
          set3: runnerA.sets.secondSet,
          winSet2: winnerSet2 === 0,
          winSet3: winnerSet3 === 0,
        },
        runnerB:{
          // @ts-ignore
          bsp: runnerB.bsp,
          // @ts-ignore
          set2: runnerB.sets.secondSet,
          set2Notional: runnerBset2Notional,
          // @ts-ignore
          set2NotionalDelta: runnerB.sets.secondSet-runnerBset2Notional,
          // @ts-ignore
          set2Delta: this.utils.roundNumber((runnerB.bsp - runnerB.sets.secondSet) / runnerB.bsp),
          // @ts-ignore
          set3: runnerB.sets.secondSet,
          winSet2: winnerSet2 === 1,
          winSet3: winnerSet3 === 1,
        }
      }
    })
   }
}
