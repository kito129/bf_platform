import {Component, OnDestroy, OnInit} from '@angular/core';
import { combineLatest, Observable, Subject} from 'rxjs';
import {Trade} from '../../../model/report/trade';
import {Strategy} from '../../../model/report/strategy';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as reportSelectors from '../../../store/report/report.selectors';
import * as runnerSelectors from '../../../store/runners/runners.selectors';
import {IsLoading} from '../../../model/isLoading';
import {Runner} from '../../../model/runner/runner';
import * as reportActions from '../../../store/report/report.actions';
import {StrategyReport} from '../../../model/report/starategyReport';
import {StrategyReportService} from '../../../services/strategy-report.service';
import {takeUntil} from 'rxjs/operators';
import {StrategyDatatable} from '../../../model/report/strategyDatatable';
import {NewTrade} from '../../../model/report/new/newTrade';

@Component({
  selector: 'app-report-main',
  templateUrl: './report-main.component.html',
})
export class ReportMainComponent implements OnInit, OnDestroy {

  defaultNavActiveId = 1

  // trade
  allTrade$: Observable<Trade[]>
  isLoadingAllTrade$: Observable<IsLoading>
  // strategy
  allStrategy$: Observable<Strategy[]>
  isLoadingAllStrategy$: Observable<IsLoading>
  // selected strategy
  selectedStrategy$: Observable<Strategy>
  selectedStrategyId$: Observable<string>
  selectedStrategyTrades$: Observable<NewTrade[]>
  // runners
  allRunners$: Observable<Runner[]>
  isLoadingAllRunners$: Observable<IsLoading>


  // -- NEW TRADE --
  allNewTrade$: Observable<NewTrade[]>
  isLoadingAllNewTrade$: Observable<IsLoading>

  selectedStrategyReport: StrategyReport
  selectedStrategyPie: number[] = [0,0,0]
  visibleReport = false

  strategyDatatable$: Observable<StrategyDatatable[]>

  destroy$: Subject<boolean> = new Subject<boolean>();

  allTradesLabels: string[]


  currentPageSelected = 0


  constructor(private router: Router,
              private readonly store: Store,
              public strategyReportService: StrategyReportService) {
  }

  ngOnInit(): void {

    // get slice for state
    this.allTrade$ = this.store.pipe(select(reportSelectors.getAllTrade))
    this.isLoadingAllTrade$=this.store.pipe(select(reportSelectors.getAllTradeLoading))

    this.allStrategy$ = this.store.pipe(select(reportSelectors.getAllStrategy))
    this.isLoadingAllStrategy$=this.store.pipe(select(reportSelectors.getAllStrategyLoading))

    this.selectedStrategy$ = this.store.pipe(select(reportSelectors.getSelectedStrategy))
    this.selectedStrategyTrades$ = this.store.pipe(select(reportSelectors.getSelectedStrategyTrades))
    this.selectedStrategyId$ = this.store.pipe(select(reportSelectors.getSelectedStrategyId))

    this.allRunners$ = this.store.pipe(select(runnerSelectors.getAllRunners))
    this.isLoadingAllRunners$ = this.store.pipe(select(runnerSelectors.isLoadingAllRunners))




    // -- NEW TRADE --
    this.allNewTrade$ = this.store.pipe(select(reportSelectors.getAllNewTrade))
    this.isLoadingAllNewTrade$ = this.store.pipe(select(reportSelectors.isLoadingAllNewTrade))

    this.strategyDatatable$ = this.store.pipe(select(reportSelectors.getStrategyDatatable))

    // generate strategyReport
    const var$ = combineLatest([this.selectedStrategy$, this.selectedStrategyTrades$])
      .pipe(takeUntil(this.destroy$))
      .subscribe( data =>{
      if(data[0] && data[1].length){

        const strategy: Strategy = data[0]
        const trades: NewTrade[] = data[1]

        // set the data in service
        this.strategyReportService.setData(strategy,trades)
        this.selectedStrategyReport = this.strategyReportService.getStrategyReport()
        this.selectedStrategyPie = this.strategyReportService.getStrategyPie()

        // visible presentational components
        this.visibleReport = true
      } else {
        this.visibleReport = false
      }
    })

    // generate all trade lables list
    this.allTrade$
      .pipe(takeUntil(this.destroy$))
      .subscribe( trades => {
      let i=0
      this.allTradesLabels = trades.map(x => {
        i++
        return i.toString() + ') ' + new  Date(x.trade.info.date).getFullYear().toString().substring(2) + '/' + (new Date(x.trade.info.date).getMonth()+1) + '/' + new Date(x.trade.info.date).getDate()+ ' - ' + x.trade.info.marketInfo.marketName
      })
    })


  }

  setPageNUmber(event){
    this.currentPageSelected = event[0].offset
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public refresh(){

    this.store.dispatch(reportActions.getAllStrategies())
    this.store.dispatch(reportActions.getAllTrades())
  }

}

