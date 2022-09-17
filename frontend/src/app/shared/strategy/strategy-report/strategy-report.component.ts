import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {NewTrade} from '../../../model/report/new/newTrade';
import {Strategy} from '../../../model/report/strategy';
import {StrategyReportClass} from '../../../model/calculator/strategyReport';
import {StrategyReport} from '../../../model/report/starategyReport';
import {Utils} from '../../../model/calculator/utils';

@Component({
  selector: 'app-strategy-report',
  templateUrl: './strategy-report.component.html',
})
export class StrategyReportComponent implements OnInit, OnDestroy {

  @Input() selectedStrategyTrades$: Observable<NewTrade[]>
  @Input() selectedStrategy: Strategy
  @Input() title: string
  @Input() bank: number
  @Input() noBug: boolean

  isCollapsed = false

  strategyValue: number[] = [0,0,0]
  strategyReport: StrategyReport
  strategyReportClass = new StrategyReportClass()

  utils = new Utils()

  trades: NewTrade[] = []
  haveStrategy = false

  bug = true
  visibleReport = false

  defaultNavActiveId = 1
  prevSize = -1

  chartHeight = 800

  tradeLabels: string[] = []
  tradeRR: number[] = []
  tradePL: number[] = []
  tradePLOrder: number[] = []
  tradeMaxRisk: number[] = []
  tradeCommission: number[] = []
  tradeRROrder: number[] = []
  tradeMaxRiskOrder: number[] = []
  tradeCommissionOrder: number[] = []
  tradeCommissionStock: number[][] = []
  numberLabels: string[] = []

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  ngOnInit(): void {

    this.selectedStrategyTrades$
        .pipe(takeUntil(this.destroy$))
        .subscribe( data => {
          this.calculate(data)
          this.bugFix()
        })
  }

  private calculate(data: NewTrade[]){
    if(data.length){
      // order and set trade
      const trades: NewTrade[] = data.sort((a,b) => a.trade.info.date-b.trade.info.date)
      this.trades = trades
      let strategy: Strategy = null
      if(this.selectedStrategy){
        strategy = this.selectedStrategy
        this.haveStrategy = true
      } else {
        this.haveStrategy = false
      }

      // strategy report
      if(strategy){
        this.strategyReportClass.setData(strategy,trades)
        this.title = strategy.strategy.info.name
      } else if(this.title){
        this.strategyReportClass.setDataNoStrategy(this.title,this.bank,trades)
      }
      // get strategy report
      this.strategyReport = this.strategyReportClass.getStrategyReport()
      this.strategyValue = this.strategyReportClass.getStrategyPie()
      // trades values
      if(trades){
        // check for reset tab position when selected change
        if(trades.length !== this.prevSize && this.defaultNavActiveId in [4,5,6]){
          // this.defaultNavActiveId = 1
        }
        this.prevSize=trades.length
        // create labels for charts
        let i =0
        this.tradeLabels = trades.map(x => {
          i++
          this.numberLabels.push(i.toString())
          return i.toString() + ') ' + (new Date(x.trade.info.date).getMonth()+1) + '/' + new Date(x.trade.info.date).getDate()+ ' - ' + x.trade.info.marketInfo.marketName
        })
        // create rr data
        this.tradeRR = trades.map(x => {
          if(x.trade.results.rr){
            return +x.trade.results.rr.toFixed(2)
          } else {
            return 0
          }
        })
        this.tradeRROrder = this.utils.orderAsc(this.tradeRR)
        // create max risk data
        this.tradeMaxRisk = trades.map(x => {
          if(x.trade.results.maxRisk){
            return +x.trade.results.maxRisk.toFixed(2)
          } else {
            return 0
          }
        })
        this.tradeMaxRiskOrder = this.utils.orderAsc(this.tradeMaxRisk)
        // create tradePL data
        this.tradePL = trades.map(x => +x.trade.results.netProfit.toFixed(2))
        this.tradePLOrder = this.utils.orderAsc(this.tradePL)
        // create commission data
        this.tradeCommission = trades.map(x => {
          if(x.trade.results.commissionPaid){
            return +x.trade.results.commissionPaid.toFixed(2)
          } else {
            return 0
          }
        })
        this.tradeCommissionStock = [this.utils.getStock(this.tradeCommission,0)]
        this.tradeCommissionOrder = this.utils.orderAsc(this.tradeCommission)

      }
      // finished recalculation and ok to view subcomponent
      this.visibleReport = true
    } else {
      this.visibleReport = false
      this.trades = []
    }
  }

  // temp to fix odds bug
  bugFix(){
    if(this.noBug){
      console.log('no bug')
    } else {
      this.bug = false
      setTimeout(() =>
        {
          this.bug = true
        },
        700);
    }
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }



}
