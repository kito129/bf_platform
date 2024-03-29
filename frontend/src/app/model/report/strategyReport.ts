import {Strategy} from './strategy/strategy';
import {Trade} from './trade/trade';
import {Utils} from '../utils';
import {StrategyReport} from './strategy/starategyReport';
import {utils} from 'protractor';

export class StrategyReportClass{

  strategy: Strategy
  title: string = null
  trades: Trade[] = []
  tradesPL: number[] = []
  profitTrades: number[] = []
  lossTrades: number[] = []
  voidTrades: number[] = []
  bank: number

  strategyReport: StrategyReport

  utils = new Utils()

  constructor() {
  }

  // empty previous data
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
  setData(strategy: Strategy, trades: Trade[]){
    this.emptyData()
    this.strategy = strategy
    this.trades = trades
    this.calculateReport()
  }
  setDataNoStrategy(title: string, bank: number, trades: Trade[]){
    this.emptyData()
    this.title = title
    this.bank = bank
    this.trades = trades
    this.strategy = this.utils.generateStrategy(title,bank,'')
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

    // console.log(bank)

    const dd = this.utils.ddOfTrades(this.tradesPL,false, bank)
    const ddPercent = this.utils.ddOfTrades(this.tradesPL,true, bank)

    const tradeOpen = this.trades.map(x => {
      let stake = 0
      x.trade.trades.map(y => {
        if(y.options && y.options.indexOf('OPEN') !== -1) {
          stake += this.utils.negativeRoundedNumber(y.liability)
        } else
        {
          return 0
        }
      })
      return stake
    })
    const tradeIncrease = this.trades.map(x => {
      let stake = 0
      x.trade.trades.map(y => {
        if(y.options && y.options.indexOf('INCREASE') !== -1) {
          stake += this.utils.negativeRoundedNumber(y.liability)
        } else
        {
          return 0
        }
      })
      return stake
    })
    const tradeDecrease = this.trades.map(x => {
      let stake = 0
      x.trade.trades.map(y => {
        if(y.options && y.options.indexOf('DECREASE') !== -1) {
          stake += this.utils.negativeRoundedNumber(y.liability)
        } else
        {
          return 0
        }
      })
      return stake
    })
    // close
    const tradeClose = this.trades.map(x => {
      let stake = 0
      x.trade.trades.map(y => {
        if(y.options && y.options.indexOf('CLOSE') !== -1) {
          stake += this.utils.negativeRoundedNumber(y.liability)
        } else
        {
          return 0
        }
      })
      return stake
    })
    // free bet
    const tradeFreeBet = this.trades.map(x => {
      let stake = 0
      x.trade.trades.map(y => {
        if(y.options && y.options.indexOf('FREE BET') !== -1) {
          stake += this.utils.negativeRoundedNumber(y.liability)
        } else
        {
          return 0
        }
      })
      return stake
    })


    // @ts-ignore
    this.strategyReport = {
      cash: {
        pl: this.utils.sumOfArray(this.tradesPL),
        stake: 0,
        stakePercent: 0,
        bank: 0,
      },
      trades: {
        total: this.tradesPL.length,
        detail: {
          total: {
            count: Math.round((this.tradesPL).length * 100) / 100,
            grossCash: Math.round(this.utils.sumOfArray(this.tradesPL) * 100) / 100,
            averageCash: Math.round(this.utils.avgOfArray(this.tradesPL) * 100) / 100,
            stdvCash: Math.round(this.utils.stdvOfArray(this.tradesPL) * 100) / 100,
            maxCash: Math.round(this.utils.maxOfArray(this.tradesPL) * 100) / 100,
            maxPercent: Math.round(this.utils.maxPercentArray(this.tradesPL) * 100) / 100,
            consecutiveNumber: 0,
            consecutiveAvgNumber: 0,
            consecutiveCash: 0,
            consecutivePercent: 0,
            trades: []
          },
          profit: {
            count: Math.round((this.profitTrades).length * 100) / 100,
            grossCash: Math.round(this.utils.sumOfArray(this.profitTrades) * 100) / 100,
            averageCash: Math.round(this.utils.avgOfArray(this.profitTrades) * 100) / 100,
            stdvCash: Math.round(this.utils.stdvOfArray(this.profitTrades) * 100) / 100,
            maxCash: Math.round(this.utils.maxOfArray(this.profitTrades) * 100) / 100,
            maxPercent: Math.round(this.utils.maxPercentArray(this.profitTrades) * 100) / 100,
            consecutiveNumber: Math.round(this.utils.maxOfConsecutive(consecutiveProfit) * 100) / 100,
            consecutiveAvgNumber: Math.round(this.utils.avgOfConsecutive(consecutiveProfit) * 100) / 100,
            consecutiveCash: Math.round(this.utils.maxOfConsecutivePl(consecutiveProfit) * 100) / 100,
            consecutivePercent: Math.round(this.utils.maxOfConsecutivePl(consecutiveProfit) / this.utils.sumOfArray(this.profitTrades) * 100) / 100,
            trades: consecutiveProfit
          },
          loss: {
            count: Math.round((this.lossTrades).length * 100) / 100,
            grossCash: Math.round(this.utils.sumOfArray(this.lossTrades) * 100) / 100,
            averageCash: Math.round(this.utils.avgOfArray(this.lossTrades) * 100) / 100,
            stdvCash: Math.round(this.utils.stdvOfArray(this.lossTrades) * 100) / 100,
            maxCash: Math.round(this.utils.minOfArray(this.lossTrades) * 100) / 100,
            maxPercent: Math.round(this.utils.minPercentOfArray(this.lossTrades) * 100) / 100,
            consecutiveNumber: Math.round(this.utils.maxOfConsecutive(consecutiveLoss) * 100) / 100,
            consecutiveAvgNumber: Math.round(this.utils.avgOfConsecutive(consecutiveLoss) * 100) / 100,
            consecutiveCash: Math.round(this.utils.minOfConsecutivePl(consecutiveLoss) * 100) / 100,
            consecutivePercent: Math.round(this.utils.minOfConsecutivePl(consecutiveLoss) / this.utils.sumOfArray(this.lossTrades) * 100) / 100,
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
            dd: this.utils.stdvOfArray(dd),
            percent: this.utils.stdvOfArray(ddPercent),
          }
        },
        oddsStats: {
          runnerA: {
            back: Math.round(this.utils.avgOfArray(this.trades.filter(x => x.trade.selections[0].avg.back.odds > 0).map(y => y.trade.selections[0].avg.back.odds)) * 100) / 100,
            lay: Math.round(this.utils.avgOfArray(this.trades.filter(x => x.trade.selections[0].avg.lay.odds > 0).map(y => y.trade.selections[0].avg.lay.odds)) * 100) / 100,
          },
          runnerB: {
            // @ts-ignore
            back: Math.round(this.utils.avgOfArray(this.trades.filter(x => x.trade.selections[1].avg.back.odds > 0).map(y => y.trade.selections[1].avg.back.odds)) * 100) / 100,
            // @ts-ignore
            lay: Math.round(this.utils.avgOfArray(this.trades.filter(x => x.trade.selections[1].avg.lay.odds > 0).map(y => y.trade.selections[1].avg.lay.odds)) * 100) / 100,
          },
          total: {
            // @ts-ignore
            back: Math.round(this.utils.avgOfArray((this.trades.filter(x => x.trade.selections[1].avg.back.odds > 0).map(y => y.trade.selections[1].avg.back.odds)).concat(
              this.trades.filter(x => x.trade.selections[0].avg.back.odds > 0).map(y => y.trade.selections[0].avg.back.odds))) * 100) / 100,
            // @ts-ignore
            lay: Math.round(this.utils.avgOfArray((this.trades.filter(x => x.trade.selections[1].avg.lay.odds > 0).map(y => y.trade.selections[1].avg.lay.odds)).concat(
              this.trades.filter(x => x.trade.selections[0].avg.lay.odds > 0).map(y => y.trade.selections[0].avg.lay.odds))) * 100) / 100,
          }
        },
        commission: {
          total: this.utils.sum(this.trades.map(x => x.trade.results.commissionPaid)),
          avgPerTrade: this.utils.avgOfArray(this.trades.map(x => x.trade.results.commissionPaid)),
          max: this.utils.maxOfArray(this.trades.map(x => x.trade.results.commissionPaid)),
          impactPercent: Math.round(((this.utils.sum(this.trades.map(x => x.trade.results.commissionPaid))) /
            (this.utils.sumOfArray(this.tradesPL)+ this.utils.sum(this.trades.map(x => x.trade.results.commissionPaid))))
            *100)/100 ,
          stdv: 0
        },
        rr: {
          total: Math.round(Math.abs(this.utils.sumOfArray(this.profitTrades)/this.utils.sumOfArray(this.lossTrades)) * 100) / 100,
          avgPerTrade: Math.round(this.utils.avgOfArray(this.trades.map(x=> x.trade.results.rr))*100)/100,
          max: Math.round(this.utils.maxOfArray(this.trades.map(x=> x.trade.results.rr))*100)/100,
          stdv: this.utils.stdvOfArray(this.trades.map(x=> x.trade.results.rr)),
        },
        risk: {
          total: {
            count: this.trades.length,
            total: this.utils.sumOfArray(this.trades.map(x=> x.trade.results.maxRisk)),
            avgPerTrade: this.utils.avgOfArray(this.trades.map(x=> x.trade.results.maxRisk)),
            max: this.utils.minOfArray(this.trades.map(x=> x.trade.results.maxRisk)),
            min: this.utils.maxOfArray(this.trades.map(x=> x.trade.results.maxRisk)),
            stdv: this.utils.stdvOfArray(this.trades.map(x=> x.trade.results.maxRisk)),
          },
          open: {
            total: this.utils.sumOfArray(tradeOpen),
            count: tradeOpen.filter( x =>x <0).length,
            avgPerTrade: tradeOpen.filter( x =>x <0).length ? this.utils.sumOfArray(tradeOpen) / tradeOpen.filter( x =>x <0).length:0,
            max: this.utils.minOfArray(tradeOpen),
            min: this.utils.maxOfArray(tradeOpen),
            stdv: this.utils.stdvOfArray(tradeOpen),
          },
          increase: {
            total: this.utils.sumOfArray(tradeIncrease),
            count: tradeIncrease.filter( x =>x <0).length,
            avgPerTrade: tradeIncrease.filter( x =>x <0).length ? this.utils.sumOfArray(tradeIncrease) / tradeIncrease.filter( x =>x <0).length:0,
            max: this.utils.minOfArray(tradeIncrease),
            min: this.utils.maxOfArray(tradeIncrease),
            stdv: this.utils.stdvOfArray(tradeIncrease),
          },
          decrease: {
            total: this.utils.sumOfArray(tradeDecrease),
            count: tradeDecrease.filter( x =>x <0).length,
            avgPerTrade: tradeDecrease.filter( x =>x <0).length ? this.utils.sumOfArray(tradeDecrease) / tradeDecrease.filter( x =>x <0).length:0,
            max: this.utils.minOfArray(tradeDecrease),
            min: this.utils.maxOfArray(tradeDecrease),
            stdv: this.utils.stdvOfArray(tradeDecrease),
          },
          close: {
            total: this.utils.sumOfArray(tradeClose),
            count: tradeClose.filter( x =>x <0).length,
            avgPerTrade: tradeClose.filter( x =>x <0).length ? this.utils.sumOfArray(tradeClose) / tradeClose.filter( x =>x <0).length:0,
            max: this.utils.minOfArray(tradeClose),
            min: this.utils.maxOfArray(tradeClose),
            stdv: this.utils.stdvOfArray(tradeClose),
          },
          freeBet: {
            total: this.utils.sumOfArray(tradeFreeBet),
            count: tradeFreeBet.filter( x =>x <0).length,
            avgPerTrade: tradeFreeBet.filter( x =>x <0).length ? this.utils.sumOfArray(tradeFreeBet) / tradeClose.filter( x =>x <0).length:0,
            max: this.utils.minOfArray(tradeFreeBet),
            min: this.utils.maxOfArray(tradeFreeBet),
            stdv: this.utils.stdvOfArray(tradeFreeBet),
          },
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
            dd: 0,
            percent: 0,
          },
          avg: {
            dd: 0,
            percent: 0,
          },
          stdv: {
            dd: 0,
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
        },
        commission: {
          total: 0,
          avgPerTrade: 0,
          max: 0,
          impactPercent: 0,
          stdv: 0
        },
        rr: {
          total: 0,
          avgPerTrade: 0,
          max: 0,
          stdv: 0
        },
        risk: {
          total: {
            count:0,
            total: 0,
            avgPerTrade: 0,
            max: 0,
            min: 0,
            stdv: 0,
          },
          open: {
            total: 0,
            count: 0,
            avgPerTrade: 0,
            max: 0,
            min: 0,
            stdv: 0,
          },
          increase: {
            total: 0,
            count: 0,
            avgPerTrade: 0,
            max: 0,
            min: 0,
            stdv: 0,
          },
          decrease: {
            total: 0,
            count: 0,
            avgPerTrade: 0,
            max: 0,
            min: 0,
            stdv: 0,
          },
          close: {
            total: 0,
            count: 0,
            avgPerTrade: 0,
            max: 0,
            min: 0,
            stdv: 0,
          },
          freeBet: {
            total: 0,
            count: 0,
            avgPerTrade: 0,
            max: 0,
            min: 0,
            stdv: 0,
          }
        }
      }
    }
  }
}
