import {Injectable} from '@angular/core';
import {Trade} from '../model/report/trade';
import {StrategyReport} from '../model/report/starategyReport';
import {Strategy} from '../model/report/strategy';

import {Utils} from '../model/calculator/utils';
import {NewTrade} from '../model/report/new/newTrade';
import {number} from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class StrategyReportService {

  // here props

  selectedStrategy: Strategy
  title: string = null
  selectedTrades: NewTrade[]
  trades: number[]
  profitTrades: number[]
  lossTrades: number[]
  voidTrades: number[]

  strategyReport: StrategyReport

  utils = new Utils()

  constructor() {
  }

  /*
  * Main  Function
   */

  // get data from Main Components amd generate report
  setData(strategy: Strategy, selectedTrades: NewTrade[]){
    this.selectedStrategy = strategy
    this.selectedTrades = selectedTrades
    this.trades = selectedTrades.map(x => x.trade.results.netProfit)
    this.profitTrades = selectedTrades.filter( x=> x.trade.results.netProfit > 0.5).map(x => x.trade.results.netProfit)
    this.lossTrades = selectedTrades.filter( x=> x.trade.results.netProfit < -0.5).map(x => x.trade.results.netProfit)
    this.voidTrades = selectedTrades.filter( x=>  x.trade.results.netProfit <= 0.5 && x.trade.results.netProfit >= -0.5 ).map(x => x.trade.results.netProfit)
    this.generateStrategyReport()
  }

  setDataStudy(selectedTrades: NewTrade[], title: string){
    this.title = title
    this.selectedTrades = selectedTrades
    this.trades = selectedTrades.map(x => x.trade.results.netProfit)
    this.profitTrades = selectedTrades.filter( x=> x.trade.results.netProfit > 0.5).map(x => x.trade.results.netProfit)
    this.lossTrades = selectedTrades.filter( x=> x.trade.results.netProfit < -0.5).map(x => x.trade.results.netProfit)
    this.voidTrades = selectedTrades.filter( x=>  x.trade.results.netProfit <= 0.5 && x.trade.results.netProfit >= -0.5 ).map(x => x.trade.results.netProfit)
    this.generateStrategyReport()
  }


  getStrategyReport(): StrategyReport{
    return this.strategyReport
  }

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
        }
      }
    }
  }

  getStrategyPie(): number[]{
    return [
      this.profitTrades.length,
      this.lossTrades.length,
      this.voidTrades.length,
    ]
  }

  generateStrategyReport(){
    const consecutive = this.utils.getConsecutive(this.selectedTrades)
    const consecutiveProfit = consecutive[0]
    const consecutiveLoss = consecutive[1]

    let stake = 1000
    if(this.selectedStrategy){
      stake = this.selectedStrategy.strategy.info.bank>0 ? this.selectedStrategy.strategy.info.bank : 1000
    }

    const dd = this.utils.ddOfTrades(this.trades,false, stake)
    const ddPercent = this.utils.ddOfTrades(this.trades,true, stake)

    this.strategyReport = {
      cash: {
        pl: this.utils.getPlTrades(this.trades),
        stake: 0,
        stakePercent: 0,
        bank: 0,
      },
      trades: {
        total: this.trades.length,
        detail: {
          total: {
            count: Math.round((this.trades).length*100)/100,
            grossCash: Math.round(this.utils.getPlTrades(this.trades)*100)/100,
            averageCash: Math.round(this.utils.avgOfArrayNumber(this.trades)*100)/100,
            stdvCash: Math.round(this.utils.stdvOfTrades(this.trades)*100)/100,
            maxCash: Math.round(this.utils.maxNumberArray(this.trades)*100)/100,
            maxPercent: Math.round(this.utils.maxPercentNumberArray(this.trades)*100)/100,
            consecutiveNumber:0,
            consecutiveAvgNumber: 0,
            consecutiveCash: 0,
            consecutivePercent: 0,
            trades: []
          },
          profit: {
            count: Math.round((this.profitTrades).length*100)/100,
            grossCash: Math.round(this.utils.getPlTrades(this.profitTrades)*100)/100,
            averageCash: Math.round(this.utils.avgOfArrayNumber(this.profitTrades)*100)/100,
            stdvCash: Math.round(this.utils.stdvOfTrades(this.profitTrades)*100)/100,
            maxCash: Math.round(this.utils.maxNumberArray(this.profitTrades)*100)/100,
            maxPercent: Math.round(this.utils.maxPercentNumberArray(this.profitTrades)*100)/100,
            consecutiveNumber: Math.round(this.utils.maxOfConsecutive(consecutiveProfit)*100)/100,
            consecutiveAvgNumber: Math.round(this.utils.avgOfConsecutive(consecutiveProfit)*100)/100,
            consecutiveCash: Math.round(this.utils.maxOfConsecutivePl(consecutiveProfit)*100)/100,
            consecutivePercent: Math.round(this.utils.maxOfConsecutivePl(consecutiveProfit) / this.utils.getPlTrades(this.profitTrades)*100)/100,
            trades: consecutiveProfit
          },
          loss: {
            count: Math.round((this.lossTrades).length*100)/100,
            grossCash: Math.round(this.utils.getPlTrades(this.lossTrades)*100)/100,
            averageCash: Math.round(this.utils.avgOfArrayNumber(this.lossTrades)*100)/100,
            stdvCash: Math.round(this.utils.stdvOfTrades(this.lossTrades)*100)/100,
            maxCash: Math.round(this.utils.minOfNumberArray(this.lossTrades)*100)/100,
            maxPercent: Math.round(this.utils.minPercentOfNumberArray(this.lossTrades)*100)/100,
            consecutiveNumber: Math.round(this.utils.maxOfConsecutive(consecutiveLoss)*100)/100,
            consecutiveAvgNumber: Math.round(this.utils.avgOfConsecutive(consecutiveLoss)*100)/100,
            consecutiveCash: Math.round(this.utils.minOfConsecutivePl(consecutiveLoss)*100)/100,
            consecutivePercent: Math.round(this.utils.minOfConsecutivePl(consecutiveLoss) / this.utils.getPlTrades(this.lossTrades)*100)/100,
            trades: consecutiveLoss
          },
          void: {
            count: this.voidTrades.length,
          }
        },
        dd: {
          max: {
            dd:  Math.min( ...dd ),
            percent: Math.min( ...ddPercent ),
          },
          avg: {
            dd: dd.reduce( (a,b) =>{
              return a+b
            })/this.trades.length,
            percent: ddPercent.reduce( (a,b) =>{
              return a+b
            })/ddPercent.length,
          },
          stdv: {
            dd:  this.utils.stdvOfTrades(dd),
            percent: this.utils.stdvOfTrades(ddPercent),
          }
        }
      }
    }

    if(this.title){
      this.strategyReport.title = this.title
    } else {
      this.strategyReport.strategy = this.selectedStrategy
    }
  }

  /*
  * Utils function
 */

  resetStrategyReport(){
    this.strategyReport = {
      strategy: null,
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
            trades: [[]]
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
            trades: [[]]
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
            trades: [[]]
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
        }
      }
    }
  }

}
