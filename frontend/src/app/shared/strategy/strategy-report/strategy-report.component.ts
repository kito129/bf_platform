import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {NewTrade} from '../../../model/report/new/newTrade';
import {Strategy} from '../../../model/report/strategy';
import {StrategyReportClass} from '../../../model/calculator/strategyReport';
import {StrategyReport} from '../../../model/report/starategyReport';
import {Utils} from '../../../model/calculator/utils';
import {SavedReport} from '../../../model/report/new/savedReport';

@Component({
  selector: 'app-strategy-report',
  templateUrl: './strategy-report.component.html',
})
export class StrategyReportComponent implements OnInit, OnDestroy {

  @Input() selectedStrategyTrades$: Observable<NewTrade[]>
  @Input() selectedStrategy: Observable<Strategy>
  @Input() title: string
  @Input() bank: number
  @Input() noBug: boolean
  @Input() isSaved: boolean
  @Input() savedReportId: string
  @Input() savedReport: SavedReport

  isCollapsed = false

  strategyValue: number[] = [0,0,0]
  strategyReport: StrategyReport
  strategyReportClass = new StrategyReportClass()

  trades: NewTrade[] = []
  strategy: Strategy = null
  haveStrategy = false

  bug = true
  visibleReport = false

  defaultNavActiveId = 1
  prevSize = -1

  chartHeight = 650

  riskData: number[][]

  tradeLabels: string[] = []
  tradeRR: number[] = []
  tradePL: number[] = []
  tradePLOrder: number[] = []
  tradeMaxRisk: number[] = []
  tradeRiskOpen: number[]
  tradeRiskIncrease: number[] = []
  tradeRiskDecrease: number[] = []
  tradeRiskClose: number[] = []
  tradeRiskFreeBet: number[] = []
  tradeCommission: number[] = []
  tradeRROrder: number[] = []
  tradeMaxRiskOrder: number[] = []
  tradeCommissionOrder: number[] = []
  tradeCommissionStock: number[][] = []
  numberLabels: string[] = []

  utils = new Utils()

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  ngOnInit(): void {

    if(this.selectedStrategy){
      combineLatest([this.selectedStrategyTrades$, this.selectedStrategy ])
        .pipe(takeUntil(this.destroy$))
        .subscribe( data =>{
          this.strategy = data[1]
          this.calculate(data[0])
          // this.bugFix()
        })
    } else {
      this.selectedStrategyTrades$.pipe(takeUntil(this.destroy$))
        .subscribe( data =>{
          this.calculate(data)
          // this.bugFix()
        })
    }


  }

  private calculate(data: NewTrade[]){
    if(data.length){
      // order and set trade
      const trades: NewTrade[] = data.sort((a,b) => a.trade.info.date-b.trade.info.date)
      this.trades = trades
      const strategy: Strategy = this.strategy

      this.haveStrategy = !!this.selectedStrategy;

      // strategy report
      if(strategy){
        this.strategyReportClass.setData(strategy,trades)
        this.title = strategy.strategy.info.name
        console.log('set with strategy')
      } else if(this.title){
        this.strategyReportClass.setDataNoStrategy(this.title,this.bank,trades)
        console.log('set with NO strategy')
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
            return this.utils.roundNumber(x.trade.results.rr)
          } else {
            return 0
          }
        })
        this.tradeRROrder = this.utils.orderAsc(this.tradeRR)
        // create risk data
        // max
        this.tradeMaxRisk = trades.map(x => {
          if(x.trade.results.maxRisk){
            return this.utils.roundNumber(x.trade.results.maxRisk)
          } else {
            return 0
          }
        })
        this.tradeMaxRiskOrder = this.utils.orderAsc(this.tradeMaxRisk)
        // open
        this.tradeRiskOpen = this.trades.map(x => {
          let stake = 0
          x.trade.trades.map(y => {
            if(y.options && y.options.indexOf('OPEN') !== -1) {
              stake += this.utils.negativeRoundedNumber(y.liability)
            } else
            {
              return 0
            }
          })
          return stake
        })
        // increase
        this.tradeRiskIncrease = this.trades.map(x => {
          let stake = 0
          x.trade.trades.map(y => {
            if(y.options && y.options.indexOf('INCREASE') !== -1) {
              stake += this.utils.negativeRoundedNumber(y.liability)
            } else
              {
                return 0
              }
            })
          return stake
        })
        // decrease
        this.tradeRiskDecrease = this.trades.map(x => {
          let stake = 0
          x.trade.trades.map(y => {
            if(y.options && y.options.indexOf('DECREASE') !== -1) {
              stake += this.utils.negativeRoundedNumber(y.liability)
            } else
            {
              return 0
            }
          })
          return stake
        })
        // close
        this.tradeRiskClose = this.trades.map(x => {
          let stake = 0
          x.trade.trades.map(y => {
            if(y.options && y.options.indexOf('CLOSE') !== -1) {
              stake += this.utils.negativeRoundedNumber(y.liability)
            } else
            {
              return 0
            }
          })
          return stake
        })
        // free bet
        this.tradeRiskFreeBet = this.trades.map(x => {
          let stake = 0
          x.trade.trades.map(y => {
            if(y.options && y.options.indexOf('FREE BET') !== -1) {
              stake += this.utils.negativeRoundedNumber(y.liability)
            } else
            {
              return 0
            }
          })
          return stake
        })
        this.riskData =[
          [this.strategyReport.trades.risk.total.total,
            this.strategyReport.trades.risk.open.total,
            this.strategyReport.trades.risk.increase.total,
            this.strategyReport.trades.risk.decrease.total,
            this.strategyReport.trades.risk.close.total,
            this.strategyReport.trades.risk.freeBet.total],

          [this.strategyReport.trades.risk.total.count,
            this.strategyReport.trades.risk.open.count,
            this.strategyReport.trades.risk.increase.count,
            this.strategyReport.trades.risk.decrease.count,
            this.strategyReport.trades.risk.close.count,
            this.strategyReport.trades.risk.freeBet.count],

          [this.strategyReport.trades.risk.total.avgPerTrade,
            this.strategyReport.trades.risk.open.avgPerTrade,
            this.strategyReport.trades.risk.increase.avgPerTrade,
            this.strategyReport.trades.risk.decrease.avgPerTrade,
            this.strategyReport.trades.risk.close.avgPerTrade,
            this.strategyReport.trades.risk.freeBet.avgPerTrade]
        ]

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
        // create tradePL data
        this.tradePL = trades.map(x => +x.trade.results.netProfit.toFixed(2))
        this.tradePLOrder = this.utils.orderAsc(this.tradePL)

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
