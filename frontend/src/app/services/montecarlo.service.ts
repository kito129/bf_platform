import { Injectable } from '@angular/core';
import {TradePlSeries} from '../model/calculator/montecarlo';
import {Utils} from '../model/calculator/utils';
import {NewTrade} from '../model/report/new/newTrade';

@Injectable({
  providedIn: 'root'
})
export class MontecarloService {

  originalTradesPL: number[] = []
  originalRisk: number[] = []
  originalSeries: TradePlSeries = null

  utils = new Utils()

  constructor() {}

  setTrade(trades: NewTrade[]){
    this.originalTradesPL = trades.map( x => x.trade.results.netProfit)
    this.originalRisk = trades.map( x => x.trade.results.netProfit)
    this.originalSeries = this.utils.getTradesSeries(this.originalTradesPL, this.originalRisk,'original', null)
  }

  getMontecarlo(size: number ): TradePlSeries[]{
    const temp = []
    for (let i=0; i<size; i++){
      temp.push(this.utils.getTradesSeries(this.shuffleArray(this.originalTradesPL),this.originalRisk,i.toString(), null))
    }
    return temp

  }

  private shuffleArray(array: number[]) {
    let currentIndex = array.length
    let temporaryValue = 0
    let randomIndex = 0

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the oddsImplicit element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  generateWin(params): boolean[][]{
    const win: boolean[][] = []
    for (let j=0;j<params.size;j++){
      const temp = []
      // tslint:disable-next-line:prefer-for-of
      for (let i=0; i<params.length; i++){
        let u = 0
        let v = 0;
        while(u === 0) u = Math.random() // Converting [0,1) to (0,1)
        while(v === 0) v = Math.random()
        const value = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
        const x = ( value * params.data.winRateStdv) + params.data.winRate
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
