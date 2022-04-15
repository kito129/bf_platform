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

  private calculateLowLayReport(): void {
    this.lowLayReport = {
      count: this.inputTrades.length,
      avgTradesNumber: {
        total: this.utils.avgOfArrayNumber(this.inputTrades.map( trades => trades.trade.trades.length)) ,
        back: this.utils.avgOfArrayNumber(this.inputTrades.map( trades => trades.trade.trades.filter(y=> y.type==='back').length)) ,
        lay: this.utils.avgOfArrayNumber(this.inputTrades.map( trades => trades.trade.trades.filter(y=> y.type==='lay').length)) ,
      },
      oneTen: {
        count: this.inputTrades.filter( trades => trades.trade.trades.filter(y=> y.type==='lay' && y.odds === 1.1).length).length,
        countPercent: this.inputTrades.filter( trades => trades.trade.trades.filter(y=> y.type==='lay' && y.odds === 1.1).length).length / this.inputTrades.map( trades => trades.trade.trades.length).length,
        rr:{
          o116:{
            count: this.inputTrades.filter( trades => trades.trade.trades.filter(y=> y.type==='back' && y.odds === 1.16).length).length,
            percent: this.inputTrades.filter( trades => trades.trade.trades.filter(y=> y.type==='back' && y.odds === 1.16).length).length / this.utils.avgOfArrayNumber(this.inputTrades.map( trades => trades.trade.trades.length)),
          },
          o123:{
            count: 0,
            percent: 0,
          },
          o139:{
            count:0,
            percent:0,
          },
          o159:{
            count:0,
            percent:0,
          },
          o186:{
            count:0,
            percent:0,
          },
          o226:{
            count:0,
            percent:0,
          },
          o284:{
            count:0,
            percent:0,
          }
        }
      }
    }

  }
}
