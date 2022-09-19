import { Injectable } from '@angular/core';
import {NewTrade} from '../model/report/new/newTrade';
import {LowLayReport} from '../model/report/new/lowLayReport';
import {Utils} from '../model/calculator/utils';

@Injectable({
  providedIn: 'root'
})
export class PassiveStrategyService {

  inputTrades: NewTrade[]
  lowLayReport: LowLayReport
  utils = new Utils()

  constructor() {
  }

  public setData(trades: NewTrade[]){
    this.inputTrades = trades
    this.calculateLowLayReport()
  }

  public getLowLayReport(): LowLayReport {
    return this.lowLayReport
  }

  private returnOddsCount(odd: number, total: number){
    const num = this.utils.sumOfArray(this.inputTrades.map(x => x.trade.trades.filter(y=> y.type==='back' && y.odds === odd).length))
    return{
      count: num,
      percent: num / total
    }
  }

  private calculateLowLayReport(): void {
    const totalOneTen = this.utils.sumOfArray(this.inputTrades.map(x => x.trade.trades.filter(y=> y.type==='lay' && y.odds === 1.1).length))
    const totalOneTwenty = this.utils.sumOfArray(this.inputTrades.map(x => x.trade.trades.filter(y=> y.type==='lay' && y.odds === 1.2).length))
    const totalOneThirty = this.utils.sumOfArray(this.inputTrades.map(x => x.trade.trades.filter(y=> y.type==='lay' && y.odds === 1.3).length))
    const totalOneFourty = this.utils.sumOfArray(this.inputTrades.map(x => x.trade.trades.filter(y=> y.type==='lay' && y.odds === 1.4).length))

    this.lowLayReport = {
      count: this.inputTrades.length,
      avgTradesNumber: {
        total: this.utils.avgOfArrayNumber(this.inputTrades.map(trades => trades.trade.trades.length)),
        back: this.utils.avgOfArrayNumber(this.inputTrades.map(trades => trades.trade.trades.filter(y => y.type === 'back').length)),
        lay: this.utils.avgOfArrayNumber(this.inputTrades.map(trades => trades.trade.trades.filter(y => y.type === 'lay').length)),
      },
      oneTen: {
        count: totalOneTen,
        countPercent: totalOneTen / this.inputTrades.length,
        rr: {
          o116: this.returnOddsCount(1.16, totalOneTen),
          o123: this.returnOddsCount(1.23, totalOneTen),
          o139: this.returnOddsCount(1.39, totalOneTen),
          o159: this.returnOddsCount(1.59, totalOneTen),
          o186: this.returnOddsCount(1.86, totalOneTen),
          o226: this.returnOddsCount(2.26, totalOneTen),
          o284: this.returnOddsCount(2.84, totalOneTen)
        }
      },
      oneTwenty: {
        count: totalOneTwenty,
        countPercent: totalOneTwenty / this.inputTrades.length,
        rr: {
          o134: this.returnOddsCount(1.34, totalOneTwenty),
          o151: this.returnOddsCount(1.51, totalOneTwenty),
          o204: this.returnOddsCount(2.04, totalOneTwenty),
          o310: this.returnOddsCount(3.1, totalOneTwenty),
          o10: this.returnOddsCount(10, totalOneTwenty),
        }
      },
      oneThirty: {
        count: totalOneThirty,
        countPercent: totalOneThirty / this.inputTrades.length,
        rr: {
          o154: this.returnOddsCount(1.54, totalOneThirty),
          o188: this.returnOddsCount(1.88, totalOneThirty),
          o242: this.returnOddsCount(2.42, totalOneThirty),
          o340: this.returnOddsCount(3.4, totalOneThirty),
          o10: this.returnOddsCount(10, totalOneThirty),
        }
      },
      oneForty: {
        count: totalOneFourty,
        countPercent: totalOneFourty / this.inputTrades.length,
        rr: {
          o176: this.returnOddsCount(1.76, totalOneFourty),
          o238: this.returnOddsCount(2.38, totalOneFourty),
          o365: this.returnOddsCount(3.65, totalOneFourty),
          o780: this.returnOddsCount(7.8, totalOneFourty),
          o10: this.returnOddsCount(10, totalOneFourty),
        }
      }
    }
  }
}
