import {ConsecutiveTrade} from './report/consecutiveTrade';
import {TradePlSeries} from './calculator/montecarlo';
import { MonthTrade} from './study/study/comparatorTableRow';
import {Bets, CSVBetGroup, CSVTrade, NewTrade} from './report/new/newTrade';
import {Note} from './note/note';
import {min} from 'simple-statistics';
import {Strategy} from './report/strategy';
import {TennisPoint} from './point/tennisPoint';
import {MarketBasic} from './market/basic/marketBasic';
import {FootballPoint} from './point/footballPoint';
import {utils} from 'protractor';
import {MarketSelectionInfo} from './market/marketSelectionInfo';
import {TradeBets} from "./report/tradeBets";

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export class Utils{

  /*
  * Calculator Trade
   */
  getTradesSeries(pl: number[], risks: number[], name: string, bank: number): TradePlSeries{

    const stock: number[] = this.getStock(pl, bank)
    const dd: number[] = this.ddOfTrades(pl, false, bank ? bank : 10000)
    const ddPercent: number[] = this.ddOfTrades(pl, true, bank ? bank : 10000)
    const riskPercent: number[] = []

    // calculate riskPercent
    let j=0
    risks.forEach( (ri) => {
      riskPercent.push(ri/stock[j])
      j++
    })

     const series = pl.map( (x,i) => {
      return {
        id: i+1,
        pl: x,
        risk: risks[i],
        riskPercent: riskPercent[i],
        stock: stock[i],
        dd: dd[i],
        ddPercent: ddPercent[i]
      }
    })

    return {
      name,
      length: pl.length,
      series,
      result: {
        pl: this.sumOfArray(pl),
        dd: {
          max: {
            dd:  Math.min( ...dd ),
            percent: Math.min( ...ddPercent ),
          },
          avg: {
            dd: dd.reduce( (a,b) =>{
              return a+b
            })/dd.length,
            percent: ddPercent.reduce( (a,b) =>{
              return a+b
            })/ddPercent.length,
          },
          stdv: {
            dd:  this.stdvOfArray(dd),
            percent: this.stdvOfArray(ddPercent),
          }
        },
        risk: {
          max: {
            dd:  Math.min( ...risks ),
            percent: Math.min( ...riskPercent ),
          },
          avg: {
            dd: risks.reduce( (a,b) =>{
              return a+b
            })/risks.length,
            percent: riskPercent.reduce( (a,b) =>{
              return a+b
            })/riskPercent.length,
          },
          stdv: {
            dd:  this.stdvOfArray(risks),
            percent: 0,
          }
        }
      }
    }
  }

  getWinRatioTrades(trade: NewTrade[]): number{
    const win = trade.reduce((acc, val) =>{
      return val.trade.results.netProfit>0 ? acc+=1 : acc},0)

    return win / trade.length
  }


  /*
  * Bte group Calculator
  */
  createGroupBetByTrades(trades: NewTrade[]): CSVTrade[]{
    const temp = []
    trades
      .sort((a:NewTrade,b:NewTrade) =>b.trade.trades.length - a.trade.trades.length)
      .forEach((x: NewTrade) => {
        const t = new Date(x.trade.info.date)
        const date = `${t.getMonth() + 1}/${t.getDate()}/${t.getFullYear()}`
        const winner = x.trade.selections.filter( y => y.winner)[0]
        const loser = x.trade.selections.filter( y => !y.winner)[0]
        const winnerIndex = (x.trade.selections[0].winner) ? 0 : 1
        const loserIndex = winnerIndex ? 0 : 1
        const marketType = (x.trade.info.marketInfo.marketName.indexOf(' - Set')!==-1) ? 'Set Winner' : 'Match Odds'
        if(winner && loser){
          // @ts-ignore
          temp.push({
            date,
            marketName: x.trade.info.marketInfo.marketName,
            result: this.getPointInStringWay(x.trade.results.finalScore.tennis),
            marketType,
            duration: 0,
            winner: winner.runnerName,
            loser: loser.runnerName,
            winnerBSP: winner.bsp,
            loserBSP: loser.bsp, // @ts-ignore
            winnerSet2: x.trade.selections[winnerIndex].sets.secondSet, // @ts-ignore
            loserSet2: x.trade.selections[loserIndex].sets.secondSet, // @ts-ignore
            winnerSet3: x.trade.selections[winnerIndex].sets.thirdSet, // @ts-ignore
            loserSet3: x.trade.selections[loserIndex].sets.thirdSet, // @ts-ignore
            winnerAvgBack: x.trade.selections[winnerIndex].avg.back.odds, // @ts-ignore
            winnerAvgBackStake: x.trade.selections[winnerIndex].avg.back.stake, // @ts-ignore
            winnerAvgBackIfWin: x.trade.selections[winnerIndex].avg.back.toWin, // @ts-ignore
            winnerAvgLay: x.trade.selections[winnerIndex].avg.lay.odds, // @ts-ignore
            winnerAvgLayBank: x.trade.selections[winnerIndex].avg.lay.stake, // @ts-ignore
            winnerAvgLayLiability: x.trade.selections[winnerIndex].avg.lay.liability, // @ts-ignore
            loserAvgBack: x.trade.selections[loserIndex].avg.back.odds, // @ts-ignore
            loserAvgBackStake: x.trade.selections[loserIndex].avg.back.stake, // @ts-ignore
            loserAvgBackIfWin: x.trade.selections[loserIndex].avg.back.toWin,      // @ts-ignore
            loserAvgLay: x.trade.selections[loserIndex].avg.lay.odds,      // @ts-ignore
            loserAvgBank: x.trade.selections[loserIndex].avg.lay.stake,      // @ts-ignore
            loserAvgLiability: x.trade.selections[loserIndex].avg.lay.liability,
            empty: null,
            pl: x.trade.results.grossProfit,
            maxRisk: x.trade.results.maxRisk,
            trade: x
          })
        }
        // add element from bets
        this.addPropsToObj(x,temp)
      })
    return temp
  }

  private addPropsToObj(trade: NewTrade, arrayToAdd){
    // add element from bets
    const bets = this.createTradeRowsGrouped(trade)
    // const type = 'ALL'
    // type ==='ALL' ? this.createTradeRows(trade) :type ==='BFL' ? this.createTradeRowsBFLGrouped(trade) :  this.createTradeRowsGrouped(trade)
    // match the key for csv
    for (const [key, value] of Object.entries(bets)) {
      const h = Object.getOwnPropertyNames(value)
      for (const [keyT, valueT] of Object.entries(h)) {
        arrayToAdd[arrayToAdd.length-1][`${valueT}${key}`] = value[`${valueT}`]
      }
    }
  }

  private createTradeRows(trade: NewTrade):CSVBetGroup[]{
    let i =0
    return trade.trade.trades.map( x =>{
      i++
      const sideName = trade.trade.selections[x.selectionN].runnerName
      return {
        name: sideName,
        id: x.id,
        selectionN: x.selectionN,
        odds: x.odds,
        stake: x.stake,
        liability: x.liability,
        ifWin: x.ifWin,
        options: x.options,
        type: x.type,
        point: x.condition.tennis.point,
        note: x.condition.note,
        time: x.condition.time,
        empty: null
      }
    })
  }

  private createTradeRowsGrouped(trade: NewTrade){
    let i =0
    const open = this.getEmptyCSVBetGroup()
    const increase = this.getEmptyCSVBetGroup()
    const decrease = this.getEmptyCSVBetGroup()
    const close = this.getEmptyCSVBetGroup()
    const freeBet = this.getEmptyCSVBetGroup()
    const adj = this.getEmptyCSVBetGroup()

    trade.trade.trades.map( x =>{
      i++
      const sideName = trade.trade.selections[x.selectionN].runnerName
      switch (x.options){
        case ('OPEN'):{
          open.type = x.type
          open.name = sideName
          open.options = 'OPEN'
          const avgOdds = (open.odds * open.stake + x.odds*x.stake)/(open.stake+x.stake)
          open.stake += x.stake
          open.odds = avgOdds
          open.liability = x.type === 'back' ? 0 : open.stake*(open.odds-1)
          open.ifWin = x.type === 'back' ? open.stake*(open.odds-1) : open.stake
          break
        }
        case ('INCREASE MARGIN'):{
          increase.type = x.type
          increase.name = sideName
          increase.options = 'INCREASE MARGIN'
          const avgOdds = (increase.odds * increase.stake + x.odds*x.stake)/(increase.stake+x.stake)
          increase.stake += x.stake
          increase.odds = avgOdds
          increase.liability = x.type === 'back' ? 0 : increase.stake*(increase.odds-1)
          increase.ifWin = x.type === 'back' ? increase.stake*(increase.odds-1) : increase.stake
          break
        }
        case ('DECREASE MARGIN'):{
          decrease.type = x.type
          decrease.name = sideName
          decrease.options = 'DECREASE MARGIN'
          const avgOdds = (decrease.odds * decrease.stake + x.odds*x.stake)/(decrease.stake+x.stake)
          decrease.stake += x.stake
          decrease.odds = avgOdds
          decrease.liability = x.type === 'back' ? 0 : decrease.stake*(decrease.odds-1)
          decrease.ifWin = x.type === 'back' ? decrease.stake*(decrease.odds-1) : decrease.stake
          break
        }
        case ('CLOSE'):{
          close.type = x.type
          close.name = sideName
          close.options = 'CLOSE'
          const avgOdds = (close.odds * close.stake + x.odds*x.stake)/(close.stake+x.stake)
          close.stake += x.stake
          close.odds = avgOdds
          close.liability = x.type === 'back' ? 0 : close.stake*(close.odds-1)
          close.ifWin = x.type === 'back' ? close.stake*(close.odds-1) : close.stake
          break
        }
        case ('FREE BET'):{
          freeBet.type = x.type
          freeBet.name = sideName
          freeBet.options = 'FREE BET'
          const avgOdds = (freeBet.odds * freeBet.stake + x.odds*x.stake)/(freeBet.stake+x.stake)
          freeBet.stake += x.stake
          freeBet.odds = avgOdds
          freeBet.liability = x.type === 'back' ? 0 : freeBet.stake*(freeBet.odds-1)
          freeBet.ifWin = x.type === 'back' ? freeBet.stake*(freeBet.odds-1) : freeBet.stake
          break
        }
        case ('ADJ'):{
          adj.type = x.type
          adj.name = sideName
          adj.options = 'FREE BET'
          const avgOdds = (adj.odds * adj.stake + x.odds*x.stake)/(adj.stake+x.stake)
          adj.stake += x.stake
          adj.odds = avgOdds
          adj.liability = x.type === 'back' ? 0 : adj.stake*(adj.odds-1)
          adj.ifWin = x.type === 'back' ? adj.stake*(adj.odds-1) : adj.stake
          break
        }
      }
      return {
        name: sideName,
        type: x.type,
        options: x.options,
        odds: x.odds,
        stake: x.stake,
        liability: x.liability,
        ifWin: x.ifWin,
        empty: null
      }
    })
    return [open, increase, decrease, close, freeBet, adj]
  }

  private createTradeRowsBFLGrouped(trade: NewTrade){
    let i =0
    const open = this.getEmptyCSVBetGroup()
    const increase = this.getEmptyCSVBetGroup()
    const decrease15 = this.getEmptyCSVBetGroup()
    const decrease25 = this.getEmptyCSVBetGroup()
    const decrease30 = this.getEmptyCSVBetGroup()
    const decreaseOther = this.getEmptyCSVBetGroup()
    const closeFs = this.getEmptyCSVBetGroup()
    const close = this.getEmptyCSVBetGroup()
    const freeBet = this.getEmptyCSVBetGroup()

    trade.trade.trades.map( x =>{
      i++
      const sideName = trade.trade.selections[x.selectionN].runnerName
      switch (x.options){
        case ('OPEN'):{
          open.type = x.type
          open.name = sideName
          open.options = 'OPEN'
          open.point = this.getPointInStringWay(x.condition.tennis.point)
          const avgOdds = (open.odds * open.stake + x.odds*x.stake)/(open.stake+x.stake)
          open.stake += x.stake
          open.odds = avgOdds
          open.liability = x.type === 'back' ? 0 : open.stake*(open.odds-1)
          open.ifWin = x.type === 'back' ? open.stake*(open.odds-1) : open.stake
          break
        }
        case ('INCREASE MARGIN'):{
          increase.type = x.type
          increase.name = sideName
          increase.options = 'INCREASE MARGIN'
          increase.point = this.getPointInStringWay(x.condition.tennis.point)
          const avgOdds = (increase.odds * increase.stake + x.odds*x.stake)/(increase.stake+x.stake)
          increase.stake += x.stake
          increase.odds = avgOdds
          increase.liability = x.type === 'back' ? 0 : increase.stake*(increase.odds-1)
          increase.ifWin = x.type === 'back' ? increase.stake*(increase.odds-1) : increase.stake
          break
        }
        case ('DECREASE MARGIN'):{
          switch (x.stake){
            case (1.5):{
              decrease15.type = x.type
              decrease15.name = sideName
              decrease15.options = 'DECREASE MARGIN'
              decrease15.point = this.getPointInStringWay(x.condition.tennis.point)
              const avgOdds = (decrease15.odds * decrease15.stake + x.odds*x.stake)/(decrease15.stake+x.stake)
              decrease15.stake += x.stake
              decrease15.odds = avgOdds
              decrease15.liability = x.type === 'back' ? 0 : decrease15.stake*(decrease15.odds-1)
              decrease15.ifWin = x.type === 'back' ? decrease15.stake*(decrease15.odds-1) : decrease15.stake
              break
            }
            case (2.5):{
              decrease25.type = x.type
              decrease25.name = sideName
              decrease25.options = 'DECREASE MARGIN'
              decrease25.point = this.getPointInStringWay(x.condition.tennis.point)
              const avgOdds = (decrease25.odds * decrease25.stake + x.odds*x.stake)/(decrease25.stake+x.stake)
              decrease25.stake += x.stake
              decrease25.odds = avgOdds
              decrease25.liability = x.type === 'back' ? 0 : decrease25.stake*(decrease25.odds-1)
              decrease25.ifWin = x.type === 'back' ? decrease25.stake*(decrease25.odds-1) : decrease25.stake
              break
            }
            case (3):{
              decrease30.type = x.type
              decrease30.name = sideName
              decrease30.options = 'DECREASE MARGIN'
              decrease30.point = this.getPointInStringWay(x.condition.tennis.point)
              const avgOdds = (decrease30.odds * decrease30.stake + x.odds*x.stake)/(decrease30.stake+x.stake)
              decrease30.stake += x.stake
              decrease30.odds = avgOdds
              decrease30.liability = x.type === 'back' ? 0 : decrease30.stake*(decrease30.odds-1)
              decrease30.ifWin = x.type === 'back' ? decrease30.stake*(decrease30.odds-1) : decrease30.stake
              break
            }
            default:{
              decreaseOther.type = x.type
              decreaseOther.name = sideName
              decreaseOther.options = 'DECREASE MARGIN'
              decreaseOther.point = this.getPointInStringWay(x.condition.tennis.point)
              const avgOdds = (decreaseOther.odds * decreaseOther.stake + x.odds*x.stake)/(decreaseOther.stake+x.stake)
              decreaseOther.stake += x.stake
              decreaseOther.odds = avgOdds
              decreaseOther.liability = x.type === 'back' ? 0 : decreaseOther.stake*(decreaseOther.odds-1)
              decreaseOther.ifWin = x.type === 'back' ? decreaseOther.stake*(decreaseOther.odds-1) : decreaseOther.stake
              break
            }
          }
          break
        }
        case ('CLOSE'):{
          if(x.condition.tennis.point.set3.runnerA>0 ||x.condition.tennis.point.set3.runnerB>0  ){
            close.type = x.type
            close.name = sideName
            close.options = 'CLOSE'
            close.point = this.getPointInStringWay(x.condition.tennis.point)
            const avgOdds = (close.odds * close.stake + x.odds*x.stake)/(close.stake+x.stake)
            close.stake += x.stake
            close.odds = avgOdds
            close.liability = x.type === 'back' ? 0 : close.stake*(close.odds-1)
            close.ifWin = x.type === 'back' ? close.stake*(close.odds-1) : close.stake
          } else {
            closeFs.type = x.type
            closeFs.name = sideName
            closeFs.options = 'CLOSE'
            closeFs.point = this.getPointInStringWay(x.condition.tennis.point)
            const avgOdds = (closeFs.odds * closeFs.stake + x.odds*x.stake)/(closeFs.stake+x.stake)
            closeFs.stake += x.stake
            closeFs.odds = avgOdds
            closeFs.liability = x.type === 'back' ? 0 : closeFs.stake*(closeFs.odds-1)
            closeFs.ifWin = x.type === 'back' ? closeFs.stake*(closeFs.odds-1) : closeFs.stake
          }
          break
        }
        case ('FREE BET'):{
          freeBet.type = x.type
          freeBet.name = sideName
          freeBet.options = 'FREE BET'
          freeBet.point = this.getPointInStringWay(x.condition.tennis.point)
          const avgOdds = (freeBet.odds * freeBet.stake + x.odds*x.stake)/(freeBet.stake+x.stake)
          freeBet.stake += x.stake
          freeBet.odds = avgOdds
          freeBet.liability = x.type === 'back' ? 0 : freeBet.stake*(freeBet.odds-1)
          freeBet.ifWin = x.type === 'back' ? freeBet.stake*(freeBet.odds-1) : freeBet.stake
          break
        }
      }
      return {
        name: sideName,
        type: x.type,
        options: x.options,
        odds: x.odds,
        stake: x.stake,
        liability: x.liability,
        ifWin: x.ifWin,
        empty: null
      }
    })
    return [open, increase, decrease15, decrease25, decrease30, decreaseOther, closeFs, close, freeBet]
  }

  getEmptyCSVBetGroup():CSVBetGroup{
    return{
      id: 0,
      note: '',
      selectionN: 0,
      time: 0,
      name: '',
      type: '',
      options: '',
      point: '',
      odds: 0,
      stake: 0,
      liability: 0,
      ifWin:0,
      empty: null
    }
  }

  /*
  * Calculator array
   */
  getStock(array: number[], bank: number): number[]{
    let stock = bank
    const stocks = []
    array.forEach( trade => {
      stock+= trade
      stocks.push(stock)
    })
    return stocks
  }

  sumOfArray(array: number[]){
    return array.reduce((a, b) => a + b, 0);
  }

  maxDDOfPl(array: number[], percent: boolean, initialStake: number): number{
    return Math.min(...this.ddOfTrades(array, percent, initialStake))
  }

  stdvOfArray(array: number[]){
    if(array.length){
      const n = array.length
      const mean = array.reduce((a, b) => a + b) / n
      const t = Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
      return Math.round(t*100)/100
    } else {
      return 0
    }
  }

  avgOfArray(array: number[]){
    return array.reduce((acc, val)=>{
      return val ? acc+=val : acc},0) / array.length
  }

  ddOfTrades(array: number[], percent: boolean, initialStake: number): number[]{
    const dd = []
    let stock = initialStake
    let lastMax = initialStake

    // check for dd or last max
    for (const trade of array){
      stock += trade
      if(stock > lastMax){
        lastMax = stock
        dd.push(0)
      } else{
        const res = (percent ? ((stock-lastMax) / lastMax) :  (stock-lastMax))
        if(isFinite(res)){
          dd.push(res)
        } else {
          dd.push(0)
        }
      }
    }
    return dd
  }

  maxOfArray(array: number[]): number{
    return Math.max.apply(Math, array)
  }

  maxPercentArray(array: number[]): number{
    return Math.max.apply(Math, array) / this.sumOfArray(array)
  }

  minOfArray(array: number[]): number{
    return Math.min.apply(Math, array)
  }

  minPercentOfArray(array: number[]): number{
    return Math.min.apply(Math, array) / this.sumOfArray(array)
  }

  orderAscArray(array: number[]): number[]{
    const copy = JSON.parse(JSON.stringify(array))
    return copy.sort((a,b) => a-b)
  }

  orderDescArray(array: number[]): number[]{
    const copy = JSON.parse(JSON.stringify(array))
    return copy.sort((a,b) => b-a)
  }

  /*
  * Format number
  */
  round2Point(values: number): number{
    return Math.round((values*100))/100
  }

  roundNumber(value: number){
    return Math.round(value*100)/100
  }

  positiveRoundedNumber(value: number){
    return -Math.abs(this.roundNumber(value))
  }

  negativeRoundedNumber(value: number){
    return -Math.abs(this.roundNumber(value))
  }

  /*
  * Trade Consecutive
  */
  maxOfConsecutive(trade: NewTrade[][]){
    return  Math.max.apply(Math, trade.map( x => x.length))
  }

  avgOfConsecutive(trade: NewTrade[][]){
    return  trade.map( x => x.length).reduce((acc, val) =>{return val ? acc+=val : acc},
      0) / trade.length
  }

  maxOfConsecutivePl(trades: any[][]){
    return Math.max.apply(Math,trades.map( x => {
      if(x.length){
        return  this.sumOfArray(x.map(y => y.pl))
      } else {
        return 0
      }
    }))
  }

  minOfConsecutivePl(trades: any[][]){
    return Math.min.apply(Math,trades.map( x => {
      if(x.length){
        return  this.sumOfArray(x.map(y => y.pl))
      } else {
        return 0
      }
    }))
  }

  getConsecutive(trades: NewTrade[]){

    const consecutiveProfitTrade: any[] = []
    const consecutiveLossTrade: any[] = []
    let cProfit = false
    let cLoss= false

    let tempProfitTrade: ConsecutiveTrade[] = []
    let tempLossTrade: ConsecutiveTrade[] = []

    for (const trade of trades){
      if(trade.trade.results.netProfit>0){
        cProfit = true
        // im profit
        if(cProfit){
          tempProfitTrade.push({
            pl: trade.trade.results.netProfit,
            date: trade.trade.info.date,
            marketName: trade.trade.info.marketInfo.marketName,
            marketId: trade.trade.info.marketInfo.marketId,
            id: trade._id
          })
        }
        if(cLoss){
          cLoss = false
          consecutiveLossTrade.push(tempLossTrade)
          tempLossTrade = []
        }
      } else if(trade.trade.results.netProfit<0) {
        // im loss
        cLoss = true
        // im profit
        if(cLoss){
          tempLossTrade.push({
            pl: trade.trade.results.netProfit,
            date: trade.trade.info.date,
            marketName: trade.trade.info.marketInfo.marketName,
            marketId: trade.trade.info.marketInfo.marketId,
            id: trade._id
          })
        }
        if(cProfit){
          cProfit = false
          consecutiveProfitTrade.push(tempProfitTrade)
          tempProfitTrade = []
        }
      } else {
        // im void
        if(cProfit){
          cProfit = false
          consecutiveProfitTrade.push(tempProfitTrade)
          tempProfitTrade = []
        }
        if(cLoss){
          cLoss = false
          consecutiveLossTrade.push(tempLossTrade)
          tempLossTrade = []
        }
      }
    }
    return [consecutiveProfitTrade,consecutiveLossTrade]
  }

  /*
  * Quartile and statistics utils
  */
  // sort array ascending
  asc = arr => arr.sort((a, b) => a - b);
  sum = arr => arr.reduce((a, b) => a + b, 0);
  mean = arr => this.sum(arr) / arr.length;
  std = (arr) => {
    const mu = this.mean(arr);
    const diffArr = arr.map(a => (a - mu) ** 2);
    return Math.sqrt(this.sum(diffArr) / (arr.length - 1));
  };
  quantile = (arr, q) => {
    const sorted = this.asc(arr);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;
    if (sorted[base + 1] !== undefined) {
      return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
    } else {
      return sorted[base];
    }
  };
  divideInHistogram(series: number[], n: number){

    let limit = []
    const max = Math.max(...series)
    const minimum = Math.min(...series)
    const delta = Math.abs(max) - Math.abs(minimum)
    const size = delta / n

    const counter = []
    let current =0
    if(max>0 && minimum>0){
      current = minimum
      for (let i=1; i<n;i++){
        current += size
        limit.push(current)
      }
      limit.push(max)
      limit.push(minimum)
      limit = limit.sort((a,b) => a-b)

      limit.forEach( x =>{
        counter.push(0)
      })
      series.forEach( data =>{
        for(let j=0;j<limit.length-1;j++){
          if(data > limit[j] && data <= limit[j+1]){
            counter[j] += 1
            break
          }
        }
      })
    } else {
      current = max
      for (let i=1; i<n;i++){
        current += size
        limit.push(current)
      }
      limit.push(max)
      limit.push(minimum)
      limit.sort((a,b) => b-a)
      limit.forEach( x =>{
        counter.push(0)
      })

      // counter
      series.forEach( data =>{
        for(let j=0;j<limit.length-1;j++){
          if(Math.abs(data) > Math.abs(limit[j]) && Math.abs(data) <= Math.abs(limit[j+1])){
            counter[j] += 1
            break
          }
        }
      })
    }
    console.log(limit)
    counter.pop()
    return [counter, limit]
  }

  /*
  * Month Calculator functions
  */
  getMonthTrades(trades: NewTrade[]): MonthTrade[]{

    const monthLabels = this.getMonthFromDate(trades[0].trade.info.date)
    const recap: MonthTrade[] = []

    monthLabels.forEach( x=> {
      recap.push({
        month: x,
        trades: []
      })
    })

    recap.forEach(month => {
      const _month = month.month.split(' ')[0]
      const _year = +month.month.split(' ')[1]
      trades.some( x => {
        if (monthNames[new Date(x.trade.info.date).getMonth()] === _month && (new Date(x.trade.info.date).getFullYear() === _year)) {
          month.trades.push(x)
        } else if(monthNames[new Date(x.trade.info.date).getMonth()] > _month && (new Date(x.trade.info.date).getFullYear() > _year)){
          return true
        }
      })
    });
    return recap
  }

  getMonthList(): string[]{
    return  monthNames
  }

  getMonthFromDate(time: number): string[]{

    const month: string[] = []
    const oldest: number = time
    const monthTo: number =  this.monthDiff(oldest, Date.now())
    const monthIndex = new Date(oldest).getMonth()
    let year: number = new Date(oldest).getFullYear()-1

    for ( let i=0; i< monthTo; i++){
      const newMonth = monthNames[ (monthIndex+i) % 12]
      if(i % 12 === 0){
        year++
      }
      month.push(`${newMonth} ${year}`)
      // (${year}/${((monthIndex+i) % 12) +1})
    }
    const now = new Date()
    month.push(monthNames[now.getMonth()] + ' ' +  now.getFullYear())
    return month
  }

  private monthDiff(dateFrom, dateTo) {
    return new Date(dateTo).getMonth() - new Date(dateFrom).getMonth()  +
      (12 * (new Date(dateTo).getFullYear() - new Date(dateFrom).getFullYear()))
  }

  /*
  * Month Calculator functions
  */

  public generateStrategy(name: string, bank: number, id: string): Strategy{
    return {
      _id: id ? id : Date.now().toFixed(),
      created: Date.now(),
      lastUpdate: Date.now(),
      strategy: {
        info: {
          name,
          sport: 'TENNIS',
          year: 2022,
          bank,
          executor: '',
          moneyManagement: '',
          stake: 20,
          typeOfStake: '',
          detail: {
            description: '',
            entryDescription: '',
            exitDescription: '',
            mmDescription: '',
          }
        }
      }
    }
  }

  public generateTradeFromMarket(marketInfo: MarketBasic, trade: NewTrade): NewTrade{
    const todayDate = new Date().getTime()
    let selCount = -1
    const selections = []
    const stats = []
    const params = []
    marketInfo.marketRunners.marketRunners.map( x => {
        selCount++
        selections.push({
          selectionN: selCount,
          runnerId: x.id,
          runnerName: x.name,
          winner: x.status === 'WINNER',
          bsp: x.inPlayOdds,
          sets: {
            secondSet: 0,
            thirdSet: 0,
          },
          avg: {
            back: {
              odds: 0,
              stake: 0,
              toWin: 0,
              liability: 0,
            },
            lay: {
              odds: 0,
              stake: 0,
              toWin: 0,
              liability: 0,
            }
          }
        })
        stats.push({
          runnerId: x.id,
          stats1: 0,
          stats2: 0,
          stats3: 0,
          stats4: 0,
          stats5: 0,
          stats6: 0,
          stats7: 0,
          stats8: 0,
          stats9: 0,
          stats10: 0,
        })
        params.push({
          runnerId: x.id,
          params1: 0,
          params2: 0,
          params3: 0,
          params4: 0,
          params5: 0,
          params6: 0,
          params7: 0,
          params8: 0,
          params9: 0,
          params10: 0
        })
    })
    // if have trade

    return {
      _id: todayDate.toString(),
      created: todayDate,
      updated: todayDate,
      trade: {
        info: {
          setTime: {
            second:  trade ? trade.trade.info.setTime.second : 0,
            third: trade ? trade.trade.info.setTime.third : 0,
          },
          strategyId: '',
          tennisTournamentId: trade ? trade.trade.info.tennisTournamentId : '',
          date: marketInfo.marketInfo.marketInfo.openDate,
          marketInfo: {
            marketName: marketInfo.marketInfo.marketInfo.eventName,
            marketId: marketInfo.marketId,
            marketType: marketInfo.marketInfo.marketInfo.marketType,
            eventName: marketInfo.marketInfo.marketInfo.name,
            sport: marketInfo.marketInfo.marketInfo.sport,
          },
          executor: ['BACKTEST'],
          exchange: {
            name: 'BACKTEST',
            commission: 0.02,
          },
          note: {
            description: '',
            entry: '',
            exit: '',
            position: '',
            mm: '',
            odds: '',
            post: '',
          }
        },
        selections,
        trades: [],
        results: {
          grossProfit: 0,
          netProfit: 0,
          rr: 0,
          commissionPaid: 0,
          maxRisk: 0,
          correctionPl: 0,
          finalScore: {
            tennis: trade ? trade.trade.results.finalScore.tennis : this.getEmptyTennisPoint(),
            football:{
              home: 0,
              away: 0
            }
          }
        },
        stats: trade ? trade.trade.stats : stats,
        params: trade ? trade.trade.stats : params,
        statistic: trade ? trade.trade.statistic : {
          runnerA: {
            stats1: 0,
            stats2: 0,
            stats3: 0,
            stats4: 0,
            stats5: 0,
            stats6: 0,
            stats7: 0,
            stats8: 0,
            stats9: 0,
            stats10: 0,
          },
          runnerB: {
            stats1: 0,
            stats2: 0,
            stats3: 0,
            stats4: 0,
            stats5: 0,
            stats6: 0,
            stats7: 0,
            stats8: 0,
            stats9: 0,
            stats10: 0,
          }
        }
      }
    }
  }

  generateBetsFromTrade(trade: NewTrade): TradeBets[]{
    let resp = []
    // tslint:disable-next-line:prefer-for-of
    for(let i=0; i< trade.trade.trades.length; i++){
      const selected = trade.trade.trades[i]
      const selectionN = trade.trade.trades[i].selectionN
      const selectionName = trade.trade.selections[selectionN].runnerName
      const temp = {
        id: selected.id,
        type: selected.type,
        selectionN,
        selectionName,
        odds: selected.odds,
        stake: selected.stake,
        toWin: selected.ifWin,
        liability: selected.liability,
        time: selected.condition.time,
        point: selected.condition.tennis.point,
        note: selected.condition.note,
        options: selected.options
      }
      resp.push(temp)
    }
    // sort by time
    resp = resp.sort((a,b)=>{
      return a.time - b.time
    })
    return resp
  }

  generateBetsFromBacktestBets(backtestBets: any[], trade: NewTrade): TradeBets[]{
    let resp = []
    // tslint:disable-next-line:prefer-for-of
    for(let i=0; i< backtestBets.length; i++){
      const selected = backtestBets[i]
      const selectionN = trade.trade.selections[0].runnerName === selected[2] ? 0 : 1
      const selectionName = selected[2]
      const type = selected[3].toLowerCase()
      const odds = selectionN===0 ? selected[1][0] : selected[1][1]
      const stake = type ==='back' ? selected[4] : selected[5]
      const temp = {
        id: i+1,
        type,
        selectionN,
        selectionName,
        odds,
        stake,
        toWin: type ==='back' ? stake*(odds-1) : stake,
        liability: type ==='back' ? stake : stake*(odds-1),
        time:  selected[0],
        point: this.getEmptyTennisPoint(),
        note: '',
        options: selected[6]
      }
      resp.push(temp)
    }
    // sort by time
    resp = resp.sort((a,b)=>{
      return a.time - b.time
    })
    return resp
  }

  getNotesStats(notes: Note[]){
    return {
      length: notes.length,
        stats: {
      medical: notes.map(x => x.note.type).reduce((acc, val) =>{
        return val === 'Medical' ? acc+=1 : acc;},0),
        note: notes.map(x => x.note.type).reduce((acc, val) =>{
        return val === 'Note' ? acc+=1 : acc;},0),
        walkover: notes.map(x => x.note.type).reduce((acc, val) =>{
        return val === 'Walkover' ? acc+=1 : acc;},0),
        nmRetires: notes.map(x => x.note.type).reduce((acc, val) =>{
        return val === 'No Med Retired' ? acc+=1 : acc;},0),
        validated: notes.map(x => x.note.validation.isValidated).reduce((acc, val) =>{
        return val ? acc+=1 : acc;},0)
    },
      medical: {
        winner: notes.map(x => x.note.validation.detailValidation.win).reduce((acc, val) =>{
          return val ? acc+=1 : acc;},0),
          looser: notes.map(x => x.note.validation.detailValidation.lose).reduce((acc, val) =>{
          return val ? acc+=1 : acc;},0),
          retired: notes.map(x => x.note.validation.detailValidation.retired).reduce((acc, val) =>{
          return val ? acc+=1 : acc;},0),
          fsRetired: notes.map(x => x.note.validation.detailValidation.retired &&
          (x.note.validation.tennisPoints.set2.runnerA ===0
            && x.note.validation.tennisPoints.set2.runnerB ===0
            && x.note.validation.tennisPoints.set3.runnerA ===0
            && x.note.validation.tennisPoints.set3.runnerB ===0
            && x.note.validation.tennisPoints.set4.runnerA ===0
            && x.note.validation.tennisPoints.set4.runnerB ===0
            && x.note.validation.tennisPoints.set5.runnerA ===0
            && x.note.validation.tennisPoints.set5.runnerB ===0)).reduce((acc, val) =>{
          return val
            ? acc+=1
            : acc;
        },0),
      }
    }
  }

  /*
  * Various
  */

  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>{
      if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }

  getPointInStringWay(tennisPoint: TennisPoint){
    let check = ''
    if(tennisPoint.set3.runnerA >0 || tennisPoint.set3.runnerB >0){
      // set 3
      check = check.concat(tennisPoint.set1.runnerA.toString().concat(tennisPoint.set1.runnerB.toString())).concat('-')
      check = check.concat(tennisPoint.set2.runnerA.toString().concat(tennisPoint.set2.runnerB.toString())).concat('-')
      check = check.concat(tennisPoint.set3.runnerA.toString().concat(tennisPoint.set3.runnerB.toString()))
      check =  tennisPoint.currentGame.server ? check.concat(' / ').concat(tennisPoint.currentGame.server) : check
    } else {
      if(tennisPoint.set2.runnerA >0 || tennisPoint.set2.runnerB >0){
        // set 2
        check = check.concat(tennisPoint.set1.runnerA.toString().concat(tennisPoint.set1.runnerB.toString())).concat('-')
        check = check.concat(tennisPoint.set2.runnerA.toString().concat(tennisPoint.set2.runnerB.toString()))
        check =  tennisPoint.currentGame.server ? check.concat(' / ').concat(tennisPoint.currentGame.server) : check
      } else {
        // set 1
        check = check.concat(tennisPoint.set1.runnerA.toString().concat(tennisPoint.set1.runnerB.toString()))
        check =  tennisPoint.currentGame.server ? check.concat(' / ').concat(tennisPoint.currentGame.server) : check
      }
    }
    return check
  }

  getEmptyTennisPoint(): TennisPoint {
    return {
      set1: {
        runnerA: 0,
        runnerB: 0,
      },
      set2: {
        runnerA: 0,
        runnerB: 0,
      },
      set3: {
        runnerA: 0,
        runnerB: 0,
      },
      set4: {
        runnerA: 0,
        runnerB: 0,
      },
      set5: {
        runnerA: 0,
        runnerB: 0,
      },
      currentGame: {
        runnerA: '0',
        runnerB: '0',
        server: 'A',
      }
    }
  }

  exportToCsv(filename: string, rows: object[]) {
    if (!rows || !rows.length) {
      return;
    }
    const separator = ',';
    const keys = Object.keys(rows[0]);
    const csvContent =
      keys.join(separator) +
      '\n' +
      rows.map(row => {
        return keys.map(k => {
          let cell = row[k] === null || row[k] === undefined ? '' : row[k];
          cell = cell instanceof Date
            ? cell.toLocaleString()
            : cell.toString().replace(/"/g, '""');
          if (cell.search(/("|,|\n)/g) >= 0) {
            cell = `"${cell}"`;
          }
          return cell;
        }).join(separator);
      }).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, filename);
    } else {
      const link = document.createElement('a');
      if (link.download !== undefined) {
        // Browsers that support HTML5 download attribute
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', filename);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }

}


