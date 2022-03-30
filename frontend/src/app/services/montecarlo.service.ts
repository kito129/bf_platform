import { Injectable } from '@angular/core';
import {TradePlSeries} from "../model/calculator/montecarlo";
import {Trade} from "../model/report/trade";
import {StrategyReport} from "../model/report/starategyReport";
import {StrategyReportService} from "./strategy-report.service";
import {Utils} from "../model/calculator/utils";
import {MontecarloParams} from "../model/calculator/montecarloParams";

@Injectable({
  providedIn: 'root'
})
export class MontecarloService {

  originalTradesPL: number[] = []
  originalSeries: TradePlSeries = null

  utils = new Utils()

  constructor() {}

  setTrade(trades: Trade[]){
    this.originalTradesPL = trades.map( x => x.trade.result.netProfit)
    this.originalSeries = this.utils.getTradesSeries(this.originalTradesPL, 'original')
  }

  getMontecarlo(size: number ): TradePlSeries[]{
    let temp = []
    for (let i=0; i<size; i++){
      temp.push(this.utils.getTradesSeries(this.shuffleArray(this.originalTradesPL),i.toString()))
    }
    return temp

  }

  private shuffleArray(array: number[]) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  generateWin(params): boolean[][]{
    let win: boolean[][] = []
    for (let j=0;j<params.size;j++){
      let temp = []
      for (let i=0; i<params.length; i++){
        let u = 0, v = 0;
        while(u === 0) u = Math.random() //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random()
        let value = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
        let x = ( value * params.data.winRateStdv) + params.data.winRate
        if(x<=Math.random()){
          temp.push(true)
        } else {
          temp.push(false)
        }
      }
      win.push(temp)
    }
    return win
  }
}
