import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CompareStudy} from '../../../../../model/report/compareStudy';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {TradeComparator} from '../../../../../model/study/study/tradeComparator';
import {StrategyReport} from '../../../../../model/report/starategyReport';
import {StrategyReportService} from '../../../../../services/strategy-report.service';
import {Trade} from '../../../../../model/report/trade';
import {Utils} from '../../../../../model/calculator/utils';

@Component({
  selector: 'app-study-comparator',
  templateUrl: './study-comparator.component.html',
})
export class StudyComparatorComponent implements OnInit,OnDestroy {

  @Input() studyList$: Observable<CompareStudy[]>

  utils = new Utils()

  destroy$: Subject<boolean> = new Subject<boolean>();

  // main studies data
  studies: CompareStudy[]

  seriesName: string[] = []
  equity: number[][] = []
  pl: number[][] = []
  ddPercent: number[][] = []
  ddMonetary: number[][] = []
  rr: number[][] = []
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

  constructor() { }

  ngOnInit(): void {

    this.studyList$
      .pipe(takeUntil(this.destroy$))
      .subscribe( data => {
        if(data){
          // generate and set subTrades data
          this.generateSubTrades(data)
          // generate tables
          this.generateTradesTable()
          // strategy report
          this.generateStrategyReports(data)
          this.dataOk = true
        } else {
          this.dataOk = false
        }
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  // generate and Array with all strategy report
  private generateStrategyReports(data: CompareStudy[]){
    for (const study of data){
      const tempReport = new StrategyReportService()

      tempReport.setDataStudy(study.trades,study.study.study.name)
      this.strategyPies.push(tempReport.getStrategyPie())
      this.strategyReports.push(tempReport.getStrategyReport())
    }
  }

  // generate and Array of array with all sub props of trades
  private generateSubTrades(data: CompareStudy[]){

    // series name, this size is the number of study to compare, [0] is to compare
    this.seriesName = data.map(x => x.study.study.name)
    // generate sub trades
    for(const trades of data.map( x => x.trades)){
      let stock =0
      const tempStock = []
      const tempPl = []
      const tempRR = []
      const tempTrade: TradeComparator[] = []
      let counterTrade =1
      // run over trade and set propriety
      for(const trade of trades){
        stock += trade.trade.results.netProfit
        tempStock.push(+stock.toFixed(2))
        tempPl.push(+(trade.trade.results.netProfit).toFixed(2))
        tempRR.push(+(trade.trade.results.rr).toFixed(2))

        // tradeComparator
        // @ts-ignore
        if (trade.trade.selections[0].avg.back.stake > 0 || trade.trade.selections[0].avg.lay.bank > 0) {
          tempTrade.push({
            marketId: trade.trade.info.marketInfo.marketId,
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

      const ddPercent = this.utils.ddOfTrades(tempPl, true, 10000)
      const ddMonetary = this.utils.ddOfTrades(tempPl, false, 10000)
      const maDDMonetary = this.utils.minOfNumberArray(ddMonetary)
      const maxDDPercent = this.utils.minOfNumberArray(ddPercent)
      const avgDDPercent = this.utils.avgOfTrades(ddPercent)
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
    }

  }


  private generateTradesTable(){

    const maxLength = Math.max(...this.trades.map( x => x.length))
    this.tradesTable = []
    // generate tables
    for (let k=0;k<this.seriesName.length;k++){
      // columns
      this.tradesTable.push(this.generateEmptyArray(maxLength))
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

  private generateEmptyArray(size: number){
    const temp = []
    for (let j=0; j<size;j++){
      temp.push(null)
    }
    return temp
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

}
