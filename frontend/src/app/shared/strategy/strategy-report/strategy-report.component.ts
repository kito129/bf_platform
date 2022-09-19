import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {NewTrade} from '../../../model/report/new/newTrade';
import {Strategy} from '../../../model/report/strategy';
import {StrategyReportClass} from '../../../model/calculator/strategyReport';
import {StrategyReport} from '../../../model/report/starategyReport';
import {Utils} from "../../../model/calculator/utils";

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

  trades: NewTrade[] = []
  haveStrategy = false

  bug = true
  visibleReport = false

  defaultNavActiveId = 1
  prevSize = -1

  chartHeight = 800

  tradeLabels: string[] = []
  tradeRR: number[] = []
  tradeMaxRisk: number[] = []
  tradeRiskIncrease: number[] = []
  tradeRiskDecrease: number[] = []
  tradeRiskClose: number[] = []
  tradeCommission: number[] = []
  labels: number[] = []

  utils = new Utils()

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
        // create risk data
        // max
        this.tradeMaxRisk = trades.map(x => {
          if(x.trade.results.maxRisk){
            return this.utils.roundNumber(x.trade.results.maxRisk)
          } else {
            return 0
          }
        })
        // increase
        this.tradeRiskIncrease = this.trades.map(x => {
          let stake = 0
          let liability = 0
          x.trade.trades.map(y => {
            console.log(y)
            if(y.options && y.options.indexOf('INCREASE') !== -1) {
              if (y.type.indexOf('BACK') !== -1) {
                stake += this.utils.negativeRoundedNumber(y.liability)
              } else {
                liability+= this.utils.negativeRoundedNumber(y.liability)
              }
            } else
              {
                return 0
              }
            })
          return stake + liability
        })
        // decrease
        this.tradeRiskDecrease = this.trades.map(x => {
          let stake = 0
          let liability = 0
          x.trade.trades.map(y => {
            if(y.options && y.options.indexOf('DECREASE') !== -1) {
              if (y.type.indexOf('BACK') !== -1) {
                stake += this.utils.negativeRoundedNumber(y.liability)
              } else {
                liability+= this.utils.negativeRoundedNumber(y.liability)
              }
            } else
            {
              return 0
            }
          })
          return stake + liability
        })
        // decrease
        this.tradeRiskClose = this.trades.map(x => {
          let stake = 0
          let liability = 0
          x.trade.trades.map(y => {
            if(y.options && y.options.indexOf('CLOSE') !== -1) {
              if (y.type.indexOf('BACK') !== -1) {
                stake += this.utils.negativeRoundedNumber(y.liability)
              } else {
                liability+= this.utils.negativeRoundedNumber(y.liability)
              }
            } else
            {
              return 0
            }
          })
          return stake + liability
        })
        // create max risk data
        this.tradeCommission = trades.map(x => {
          if(x.trade.results.commissionPaid){
            return +x.trade.results.commissionPaid.toFixed(2)
          } else {
            return 0
          }
        })
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

  saveReport(){
    console.log("saving report")
    console.log(this.trades.length)
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }



}
