import {Strategy} from '../report/strategy';
import {NewTrade} from '../report/new/newTrade';
import {Utils} from './utils';
import {StrategyReport} from '../report/starategyReport';

export class StrategyReportClass{

  // props
  strategy: Strategy
  title: string = null
  trades: NewTrade[] = []
  tradesPL: number[] = []
  profitTrades: number[] = []
  lossTrades: number[] = []
  voidTrades: number[] = []
  bank: number

  strategyReport: StrategyReport

  utils = new Utils()

  constructor() {
  }

  // empty previus data
  emptyData(){
    this.strategy = null
    this.title = ''
    this.trades = []
    this.tradesPL = []
    this.profitTrades= []
    this.lossTrades = []
    this.voidTrades = []
    this.bank = 0
  }

  // setter data
  setData(strategy: Strategy, trades: NewTrade[]){
    this.emptyData()
    this.strategy = strategy
    this.trades = trades
    this.calculateReport()
  }
  setDataNoStrategy(title: string, bank: number, trades: NewTrade[]){
    this.emptyData()
    this.title = title
    this.bank = bank
    this.trades = trades
    this.calculateReport()
  }

  calculateReport(){
    this.tradesPL = this.trades.map(x => x.trade.results.netProfit)
    this.profitTrades = this.trades.filter(x=> x.trade.results.netProfit > 0.5).map(x => x.trade.results.netProfit)
    this.lossTrades = this.trades.filter(x=> x.trade.results.netProfit < -0.5).map(x => x.trade.results.netProfit)
    this.voidTrades = this.trades.filter(x=>  x.trade.results.netProfit <= 0.5 && x.trade.results.netProfit >= -0.5 ).map(x => x.trade.results.netProfit)
    this.generateStrategyReport()
  }

  // getter report and pie
  getStrategyReport(): StrategyReport{
    return this.strategyReport
  }
  getStrategyPie(): number[]{
    return [
      this.profitTrades.length,
      this.lossTrades.length,
      this.voidTrades.length,
    ]
  }

  // main function
  private generateStrategyReport(){
    const consecutive = this.utils.getConsecutive(this.trades)
    const consecutiveProfit = consecutive[0]
    const consecutiveLoss = consecutive[1]

    let bank = 0
    if(this.strategy){
      bank = this.strategy.strategy.info.bank>0 ? this.strategy.strategy.info.bank : this.bank
    }

    const dd = this.utils.ddOfTrades(this.tradesPL,false, bank)
    const ddPercent = this.utils.ddOfTrades(this.tradesPL,true, bank)

    // @ts-ignore
    this.strategyReport = {
      cash: {
        pl: this.utils.getSumOfArrayNumber(this.tradesPL),
        stake: 0,
        stakePercent: 0,
        bank: 0,
      },
      trades: {
        total: this.tradesPL.length,
        detail: {
          total: {
            count: Math.round((this.tradesPL).length * 100) / 100,
            grossCash: Math.round(this.utils.getSumOfArrayNumber(this.tradesPL) * 100) / 100,
            averageCash: Math.round(this.utils.avgOfArrayNumber(this.tradesPL) * 100) / 100,
            stdvCash: Math.round(this.utils.stdvOfTrades(this.tradesPL) * 100) / 100,
            maxCash: Math.round(this.utils.maxNumberArray(this.tradesPL) * 100) / 100,
            maxPercent: Math.round(this.utils.maxPercentNumberArray(this.tradesPL) * 100) / 100,
            consecutiveNumber: 0,
            consecutiveAvgNumber: 0,
            consecutiveCash: 0,
            consecutivePercent: 0,
            trades: []
          },
          profit: {
            count: Math.round((this.profitTrades).length * 100) / 100,
            grossCash: Math.round(this.utils.getSumOfArrayNumber(this.profitTrades) * 100) / 100,
            averageCash: Math.round(this.utils.avgOfArrayNumber(this.profitTrades) * 100) / 100,
            stdvCash: Math.round(this.utils.stdvOfTrades(this.profitTrades) * 100) / 100,
            maxCash: Math.round(this.utils.maxNumberArray(this.profitTrades) * 100) / 100,
            maxPercent: Math.round(this.utils.maxPercentNumberArray(this.profitTrades) * 100) / 100,
            consecutiveNumber: Math.round(this.utils.maxOfConsecutive(consecutiveProfit) * 100) / 100,
            consecutiveAvgNumber: Math.round(this.utils.avgOfConsecutive(consecutiveProfit) * 100) / 100,
            consecutiveCash: Math.round(this.utils.maxOfConsecutivePl(consecutiveProfit) * 100) / 100,
            consecutivePercent: Math.round(this.utils.maxOfConsecutivePl(consecutiveProfit) / this.utils.getSumOfArrayNumber(this.profitTrades) * 100) / 100,
            trades: consecutiveProfit
          },
          loss: {
            count: Math.round((this.lossTrades).length * 100) / 100,
            grossCash: Math.round(this.utils.getSumOfArrayNumber(this.lossTrades) * 100) / 100,
            averageCash: Math.round(this.utils.avgOfArrayNumber(this.lossTrades) * 100) / 100,
            stdvCash: Math.round(this.utils.stdvOfTrades(this.lossTrades) * 100) / 100,
            maxCash: Math.round(this.utils.minOfNumberArray(this.lossTrades) * 100) / 100,
            maxPercent: Math.round(this.utils.minPercentOfNumberArray(this.lossTrades) * 100) / 100,
            consecutiveNumber: Math.round(this.utils.maxOfConsecutive(consecutiveLoss) * 100) / 100,
            consecutiveAvgNumber: Math.round(this.utils.avgOfConsecutive(consecutiveLoss) * 100) / 100,
            consecutiveCash: Math.round(this.utils.minOfConsecutivePl(consecutiveLoss) * 100) / 100,
            consecutivePercent: Math.round(this.utils.minOfConsecutivePl(consecutiveLoss) / this.utils.getSumOfArrayNumber(this.lossTrades) * 100) / 100,
            trades: consecutiveLoss
          },
          void: {
            count: this.voidTrades.length,
          }
        },
        dd: {
          max: {
            dd: Math.min(...dd),
            percent: Math.min(...ddPercent),
          },
          avg: {
            dd: dd.reduce((a, b) => {
              return a + b
            }) / this.tradesPL.length,
            percent: ddPercent.reduce((a, b) => {
              return a + b
            }) / ddPercent.length,
          },
          stdv: {
            dd: this.utils.stdvOfTrades(dd),
            percent: this.utils.stdvOfTrades(ddPercent),
          }
        },
        oddsStats: {
          runnerA: {
            back: Math.round(this.utils.avgOfArrayNumber(this.trades.filter(x => x.trade.selections[0].avg.back.odds >0).map(y => y.trade.selections[0].avg.back.odds)) *100)/100,
            lay: Math.round(this.utils.avgOfArrayNumber(this.trades.filter(x => x.trade.selections[0].avg.lay.odds >0).map(y => y.trade.selections[0].avg.lay.odds)) *100)/100,
          },
          runnerB: {
            // @ts-ignore
            back: Math.round(this.utils.avgOfArrayNumber(this.trades.filter(x => x.trade.selections[1].avg.back.odds >0).map(y => y.trade.selections[1].avg.back.odds)) *100)/100,
            // @ts-ignore
            lay: Math.round(this.utils.avgOfArrayNumber(this.trades.filter(x => x.trade.selections[1].avg.lay.odds >0).map(y => y.trade.selections[1].avg.lay.odds)) *100)/100,
          },
          total: {
            // @ts-ignore
            back: Math.round(this.utils.avgOfArrayNumber((this.trades.filter(x => x.trade.selections[1].avg.back.odds >0).map(y => y.trade.selections[1].avg.back.odds)).concat(
              this.trades.filter(x => x.trade.selections[0].avg.back.odds >0).map(y => y.trade.selections[0].avg.back.odds))) *100)/100,
            // @ts-ignore
            lay: Math.round(this.utils.avgOfArrayNumber((this.trades.filter(x => x.trade.selections[1].avg.lay.odds >0).map(y => y.trade.selections[1].avg.lay.odds)).concat(
              this.trades.filter(x => x.trade.selections[0].avg.lay.odds >0).map(y => y.trade.selections[0].avg.lay.odds))) *100)/100,
          }
        }
      }
    }

    if(this.title){
      this.strategyReport.title = this.title
    } else {
      this.strategyReport.strategy = this.strategy
    }
  }

  // support function
  getEmptyStrategyReport(title: string): StrategyReport{
    return {
      strategy: null,
      title,
      cash: {
        pl: 0,
        stake: 0,
        stakePercent: 0,
        bank: 0,
      },
      trades: {
        total: 0,
        detail: {
          total: {
            count: 0,
            grossCash: 0,
            averageCash: 0,
            stdvCash: 0,
            maxCash: 0,
            maxPercent: 0,
            consecutiveNumber: 0,
            consecutiveAvgNumber: 0,
            consecutiveCash: 0,
            consecutivePercent: 0,
            trades: [],
          },
          profit: {
            count: 0,
            grossCash: 0,
            averageCash: 0,
            stdvCash: 0,
            maxCash: 0,
            maxPercent: 0,
            consecutiveNumber: 0,
            consecutiveAvgNumber: 0,
            consecutiveCash: 0,
            consecutivePercent: 0,
            trades: [],
          },
          loss: {
            count: 0,
            grossCash: 0,
            averageCash: 0,
            stdvCash: 0,
            maxCash: 0,
            maxPercent: 0,
            consecutiveNumber: 0,
            consecutiveAvgNumber: 0,
            consecutiveCash: 0,
            consecutivePercent: 0,
            trades: [],
          },
          void: {
            count: 0,
          }
        },
        dd: {
          max: {
            dd:  0,
            percent: 0,
          },
          avg: {
            dd: 0,
            percent: 0,
          },
          stdv: {
            dd:  0,
            percent: 0,
          }
        },
        oddsStats: {
          runnerA: {
            back: 0,
            lay: 0,
          },
          runnerB: {
            back: 0,
            lay: 0,
          },
          total: {
            back: 0,
            lay: 0,
          }
        }
      }
    }
  }
}
