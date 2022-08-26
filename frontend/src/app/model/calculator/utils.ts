import {Trade} from '../report/trade';
import {ConsecutiveTrade} from '../report/consecutiveTrade';
import {TradePlSeries} from './montecarlo';
import { Month} from '../study/study/comparatorTableRow';
import {NewTrade} from '../report/new/newTrade';
import {Note} from "../note/note";

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export class Utils{

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
  * Calculator function
   */
  getTradesSeries(trades: number[], risks: number[], name: string, bank: number): TradePlSeries{

    const stock: number[] = this.getStock(trades, bank)
    const dd: number[] = this.ddOfTrades(trades, false, bank ? bank : 10000)
    const ddPercent: number[] = this.ddOfTrades(trades, true, bank ? bank : 10000)
    const riskPercent: number[] = []

    // calculate riskPercent
    let j=0
    risks.forEach( (ri) => {
      riskPercent.push(ri/stock[j])
      j++
    })

     const series = trades.map( (x,i) => {
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
      length: trades.length,
      series,
      result: {
        pl: this.getSumOfArrayNumber(trades),
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
            dd:  this.stdvOfTrades(dd),
            percent: this.stdvOfTrades(ddPercent),
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
            dd:  this.stdvOfTrades(risks),
            percent: 0,
          }
        }
      }
    }
  }

  /*
  * Calculator function
   */
  getStock(trades: number[], bank: number): number[]{
    let stock = bank
    const stocks = []
    trades.forEach( trade => {
      stock+= trade
      stocks.push(stock)
    })
    return stocks
  }

  getSumOfArrayNumber(trade: number[]){
    return trade.reduce((a, b) => a + b, 0);
  }

  getWinRatioTrades(trade: NewTrade[]): number{
    const win = trade.reduce((acc, val) =>{
      return val.trade.results.netProfit>0 ? acc+=1 : acc},0)

    return win / trade.length
  }

  maxDDOfTrades(trades: number[], percent: boolean, initialStake: number): number{
    return Math.min(...this.ddOfTrades(trades, percent, initialStake))
  }

  stdvOfTrades(value: number[]){
    if(value.length){
      const n = value.length
      const mean = value.reduce((a, b) => a + b) / n
      return Math.sqrt(value.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
    } else {
      return 0
    }
  }

  avgOfArrayNumber(value: number[]){
    return value.reduce((acc, val)=>{
      return val ? acc+=val : acc},0) / value.length
  }

  ddOfTrades(values: number[], percent: boolean, initialStake: number): number[]{
    const dd = []
    let stock = initialStake
    let lastMax = initialStake

    // check for dd or last max
    for (const trade of values){
      stock += trade
      if(stock > lastMax){
        lastMax = stock
        dd.push(0)
      } else{
        dd.push((percent ? ((stock-lastMax) / lastMax) :  (stock-lastMax)))
      }
    }
    return dd
  }

  maxNumberArray(values: number[]){
    return Math.max.apply(Math, values)
  }

  maxPercentNumberArray(values: number[]){
    return Math.max.apply(Math, values) / this.getSumOfArrayNumber(values)
  }

  minOfNumberArray(values: number[]){
    return Math.min.apply(Math, values)
  }

   minPercentOfNumberArray(values: number[]){
    return Math.min.apply(Math, values) / this.getSumOfArrayNumber(values)
  }


  /*
  * Trade Consecutive
 */
   maxOfConsecutive(trade: Trade[][]){
    return  Math.max.apply(Math, trade.map( x => x.length))
  }

  avgOfConsecutive(trade: Trade[][]){
    return  trade.map( x => x.length).reduce((acc, val) =>{return val ? acc+=val : acc},
      0) / trade.length
  }

  maxOfConsecutivePl(trades: any[][]){
    return Math.max.apply(Math,trades.map( x => {
      if(x.length){
        return  this.getSumOfArrayNumber(x.map(y => y.pl))
      } else {
        return 0
      }
    }))
  }

  minOfConsecutivePl(trades: any[][]){
    return Math.min.apply(Math,trades.map( x => {
      if(x.length){
        return  this.getSumOfArrayNumber(x.map(y => y.pl))
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
  * quartile and statistics utils
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
    const min = Math.min(...series)
    const delta = Math.abs(max) - Math.abs(min)
    const size = delta / n

    const counter = []
    let current =0
    if(max>0 && min>0){
      current = min
      for (let i=1; i<n;i++){
        current += size
        limit.push(current)
      }
      limit.push(max)
      limit.push(min)
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
      limit.push(min)
      limit.sort((a,b) => b-a)


      limit.forEach( x =>{
        counter.push(0)
      })
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
  * periodic functions
  */

  getMonthTrades(trades: NewTrade[]): Month[]{

    const monthLabels = this.getMonthFromDate(trades[0].trade.info.date)
    const recap: Month[] = []

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

  public generateStrategy(name: string, bank: number){
    return {
      _id: Date.now().toFixed(),
      created: 1,
      lastUpdate: 1,
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


}
