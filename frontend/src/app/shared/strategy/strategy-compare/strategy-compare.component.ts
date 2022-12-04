import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import {CompareStrategy} from '../../../model/report/strategy/compareStrategy';
import {Utils} from '../../../model/utils';
import {StrategyReport} from '../../../model/report/strategy/starategyReport';
import {TradeComparator} from '../../../model/study/report/tradeComparator';
import {takeUntil} from 'rxjs/operators';
import {StrategyReportClass} from '../../../model/report/strategyReport';
import {Trade} from '../../../model/report/trade/trade';

@Component({
  selector: 'app-strategy-compare',
  templateUrl: './strategy-compare.component.html',
})
export class StrategyCompareComponent implements OnInit, OnDestroy {

  constructor() { }

  @Input() strategyList$: Observable<CompareStrategy[]>
  @Input() strategyListNoStrategy: CompareStrategy[]
  @Input() defaultTab: number

  utils = new Utils()

  destroy$: Subject<boolean> = new Subject<boolean>();

  // main studies data
  allTrades: Trade[] = []
  allCompareStrategy: CompareStrategy[] = []

  seriesName: string[] = []
  equity: number[][] = []
  pl: number[][] = []
  ddPercent: number[][] = []
  ddMonetary: number[][] = []
  rr: number[][] = []
  risk: number[][] = []
  maxDDMonetary: number[] = []
  maxDDPercent: number[] = []
  avgDDPercent: number[] = []
  strategyReports: StrategyReport[] = []
  strategyPies: number[][] = []

  trades: TradeComparator[][] = []
  tradesTable: TradeComparator[][] = []
  rows: TradeComparator[][] = []

  // other
  defaultNavActiveId = 1
  dataOk = false
  chartHeight=600

  isCollapsed = false

  public static generateEmptyArray(size: number){
    const temp = []
    for (let j=0; j<size;j++){
      temp.push(null)
    }
    return temp
  }

  ngOnInit(): void {

    if(this.defaultTab){
      this.defaultNavActiveId = this.defaultTab
    }

    // static report for components
    if(this.strategyListNoStrategy){
      this.generateStrategyReports(this.strategyListNoStrategy)
      this.generateDataForChart()
      this.generateCompareTradesTable()
      this.dataOk = true
    } else {
      // from observer
      this.strategyList$
        .pipe(takeUntil(this.destroy$))
        .subscribe( data => {
          if(data){
            this.generateStrategyReports(data)
            this.generateDataForChart()
            this.generateCompareTradesTable()
            this.dataOk = true
          } else {
            this.dataOk = false
          }
        })
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private generateStrategyReports(data: CompareStrategy[]){
    this.allTrades = []
    this.allCompareStrategy = []
    this.allCompareStrategy = data
    for (const strategy of data){
      const tempReport = new StrategyReportClass()

      this.allTrades = this.allTrades.concat(strategy.trades)
      tempReport.setDataNoStrategy(strategy.strategy.strategy.info.name, strategy.strategy.strategy.info.bank, strategy.trades)
      this.strategyPies.push(tempReport.getStrategyPie())
      this.strategyReports.push(tempReport.getStrategyReport())
    }
    // generate sum reports
    /*
    const sumReports = trade StrategyReportClass()
    sumReports.setDataNoStrategy('SUM', 1000,this.allTrades)
    this.strategyPies.push(sumReports.getStrategyPie())
    this.strategyReports.push(sumReports.getStrategyReport())
    this.allCompareStrategy.push({
      strategy: sumReports.strategy,
      trades: this.allTrades
    })
     */
  }

  private generateDataForChart(){
    // series name, this size is the number of study to compare, [0] is to compare
    this.seriesName = this.allCompareStrategy.map(x => x.strategy.strategy.info.name)
    // generate sub trades
    for(const strategy of this.allCompareStrategy){
      let stock =0
      const tempStock = []
      const tempPl = []
      const tempRR = []
      const tempRisk = []
      const tempTrade: TradeComparator[] = []
      let counterTrade =1
      // run over trade and set propriety
      for(const trade of strategy.trades.sort((a,b) => a.trade.info.date - b.trade.info.date)){
        stock += trade.trade.results.netProfit
        tempStock.push(+stock.toFixed(2))
        tempPl.push(+(trade.trade.results.netProfit).toFixed(2))
        tempRR.push(+(trade.trade.results.rr).toFixed(2))
        tempRisk.push(+(trade.trade.results.maxRisk).toFixed(2))

        // tradeComparator
        if (trade.trade.selections[0].avg.back.stake > 0 || trade.trade.selections[0].avg.lay.stake > 0) {
          tempTrade.push({
            marketId: trade.trade.info.marketInfo.marketId,
            trade,
            tradeId: trade._id,
            selectionId: trade.trade.selections[0].runnerId,
            date: trade.trade.info.date,
            n: counterTrade,
            name: trade.trade.info.marketInfo.marketName,
            pl: +trade.trade.results.netProfit.toFixed(2),
          })
        } else if(trade.trade.selections.length>1) {
          tempTrade.push({
            marketId: trade.trade.info.marketInfo.marketId,
            tradeId: trade._id,
            trade,
            // @ts-ignore
            selectionId: trade.trade.selections[1].runnerId,
            date: trade.trade.info.date,
            n: counterTrade,
            name: trade.trade.info.marketInfo.marketName,
            pl: +trade.trade.results.netProfit.toFixed(2),
          })
        }
        counterTrade++
      }

      const ddPercent = this.utils.ddOfTrades(tempPl, true, strategy.strategy.strategy.info.bank)
      const ddMonetary = this.utils.ddOfTrades(tempPl, false, strategy.strategy.strategy.info.bank)
      const maDDMonetary = this.utils.minOfArray(ddMonetary)
      const maxDDPercent = this.utils.minOfArray(ddPercent)
      const avgDDPercent = this.utils.avgOfArray(ddPercent)
      // set to local props
      this.equity.push(tempStock)
      this.pl.push(tempPl)
      this.ddPercent.push(ddPercent)
      this.ddMonetary.push(ddMonetary)
      this.maxDDMonetary.push(maDDMonetary)
      this.maxDDPercent.push(maxDDPercent)
      this.avgDDPercent.push(avgDDPercent)
      this.rr.push(tempRR)
      this.trades.push(tempTrade)
      this.risk.push(tempRisk)
    }

  }

  private generateCompareTradesTable(){

    const maxLength = Math.max(...this.trades.map( x => x.length))
    this.tradesTable = []
    // generate tables
    // tslint:disable-next-line:prefer-for-of
    for (let k=0;k<this.seriesName.length;k++){
      // columns
      this.tradesTable.push(StrategyCompareComponent.generateEmptyArray(maxLength))
    }

    for (let i=0;i<this.seriesName.length;i++){
      for (let j=0;j<this.trades[i].length;j++){
        const trade = this.trades[i][j]
        trade.compare = this.findMatchAndCheckDelta(trade)
        this.tradesTable[i][j] = trade
      }
    }

    // generate row [] vertical with length = # of study inside
    for (let i=0;i<this.tradesTable[0].length;i++){
      const temp = []
      for (let j=0;j<this.seriesName.length;j++){
        temp.push(this.tradesTable[j][i])
      }
      this.rows.push(temp)
    }
  }

  private findMatchAndCheckDelta(compared: TradeComparator): number{

    // find match in first study
    const toCompare = this.trades[0].filter( x => x.marketId === compared.marketId)[0]
    if(toCompare!== undefined){
      let better
      if(compared.pl>toCompare.pl){
        better = true
      }

      if(better){
        if(toCompare.pl*compared.pl>0){
          return compared.pl-toCompare.pl
        } else {
          return Math.abs(compared.pl-toCompare.pl)
        }
      } else {
        if(toCompare.pl*compared.pl>0){
          return compared.pl-toCompare.pl
        } else {
          return compared.pl-toCompare.pl
        }
      }
    } else {
      // if not fin return null
      return null
    }
  }

  passAsObservable(trade: any){
    this.utils.passAsObservable(trade)
  }


}
