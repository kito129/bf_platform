import {Injectable} from '@angular/core';
import {Trade} from '../model/report/trade';
import {StrategyReport} from '../model/report/starategyReport';
import {Strategy} from '../model/report/strategy';

import {Utils} from '../model/calculator/utils';
import {NewTrade} from '../model/report/new/newTrade';

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
    this.profitTrades = selectedTrades.filter( x=> x.trade.results.netProfit>0).map(x => x.trade.results.netProfit)
    this.lossTrades = selectedTrades.filter( x=> x.trade.results.netProfit<0).map(x => x.trade.results.netProfit)
    this.voidTrades = selectedTrades.filter( x=> x.trade.results.netProfit === 0).map(x => x.trade.results.netProfit)
    this.generateStrategyReport()
  }

  setDataStudy(selectedTrades: NewTrade[], title: string){
    this.title = title
    this.selectedTrades = selectedTrades
    this.trades = selectedTrades.map(x => x.trade.results.netProfit)
    this.profitTrades = selectedTrades.filter( x=> x.trade.results.netProfit>0).map(x => x.trade.results.netProfit)
    this.lossTrades = selectedTrades.filter( x=> x.trade.results.netProfit<0).map(x => x.trade.results.netProfit)
    this.voidTrades = selectedTrades.filter( x=> x.trade.results.netProfit === 0).map(x => x.trade.results.netProfit)
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
      this.utils.counterOfTrades(this.profitTrades),
      this.utils.counterOfTrades(this.lossTrades),
      this.utils.counterOfTrades(this.voidTrades),
    ]
  }

  generateStrategyReport(){
    const consecutive = this.utils.getConsecutive(this.selectedTrades)
    const consecutiveProfit = consecutive[0]
    const consecutiveLoss = consecutive[1]

    const dd = this.utils.ddOfTrades(this.trades,false, 10000)
    const ddPercent = this.utils.ddOfTrades(this.trades,true, 10000)

    this.strategyReport = {
      cash: {
        pl: this.utils.getPlTrades(this.trades),
        stake: 0,
        stakePercent: 0,
        bank: 0,
      },
      trades: {
        total: this.utils.counterOfTrades(this.trades),
        detail: {
          profit: {
            count: this.utils.counterOfTrades(this.profitTrades),
            grossCash: this.utils.getPlTrades(this.profitTrades),
            averageCash: this.utils.avgOfTrades(this.profitTrades),
            stdvCash: this.utils.stdvOfTrades(this.profitTrades),
            maxCash: this.utils.maxNumberArray(this.profitTrades),
            maxPercent: this.utils.maxPercentNumberArray(this.profitTrades),
            consecutiveNumber: this.utils.maxOfConsecutive(consecutiveProfit),
            consecutiveAvgNumber: this.utils.avgOfConsecutive(consecutiveProfit),
            consecutiveCash: this.utils.maxOfConsecutivePl(consecutiveProfit),
            consecutivePercent: this.utils.maxOfConsecutivePl(consecutiveProfit) / this.utils.getPlTrades(this.profitTrades),
            trades: consecutiveProfit
          },
          loss: {
            count: this.utils.counterOfTrades(this.lossTrades),
            grossCash: this.utils.getPlTrades(this.lossTrades),
            averageCash: this.utils.avgOfTrades(this.lossTrades),
            stdvCash: this.utils.stdvOfTrades(this.lossTrades),
            maxCash: this.utils.minOfNumberArray(this.lossTrades),
            maxPercent: this.utils.minPercentOfNumberArray(this.lossTrades),
            consecutiveNumber: this.utils.maxOfConsecutive(consecutiveLoss),
            consecutiveAvgNumber: this.utils.avgOfConsecutive(consecutiveLoss),
            consecutiveCash: this.utils.minOfConsecutivePl(consecutiveLoss),
            consecutivePercent: this.utils.minOfConsecutivePl(consecutiveLoss) / this.utils.getPlTrades(this.lossTrades),
            trades: consecutiveLoss
          },
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
