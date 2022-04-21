import {Component, OnDestroy, OnInit} from '@angular/core';
import {combineLatest, Observable, Subject} from 'rxjs';
import {Study} from '../../../model/study/study/study';
import {IsLoading} from '../../../model/isLoading';
import {select, Store} from '@ngrx/store';
import * as studySelectors from '../../../store/study/study/study.selectors';
import * as strategySelectors from '../../../store/report/report.selectors';
import {SelectedTradeCharts} from '../../../model/study/selectedTradeCharts';
import {StrategyReport} from '../../../model/report/starategyReport';import {takeUntil} from 'rxjs/operators';
import {MarketSinglePrices} from '../../../model/market/marketSinglePrices';
import {CompareStudy} from '../../../model/report/compareStudy';
import {NewTrade} from '../../../model/report/new/newTrade';
import {StrategyReportClass} from '../../../model/calculator/strategyReport';

@Component({
  selector: 'app-study-main',
  templateUrl: './study-main.component.html',
})
export class StudyMainComponent implements OnInit, OnDestroy {

  // all studies
  allStudies$: Observable<Study[]>
  isLoadingAllStudy$: Observable<IsLoading>
  // selected study
  selectedStudyId$: Observable<string>
  selectedStudy$: Observable<Study>
  // selectedStudy trades
  selectedStudyTrades$: Observable<NewTrade[]>
  isLoadingSelectedStudyTrades$: Observable<IsLoading>
  // selected study and selected study market
  isLoadingSelectedStudyMarket$: Observable<IsLoading>
  selectedStudyMarket$: Observable<MarketSinglePrices>
  selectedStudyMarketId$: Observable<string>
  selectedStudyMarketTrade$: Observable<NewTrade>
  // strategy and strategyReport
  selectedStrategyReport: StrategyReport
  selectedStrategyPie: number[] = [0,0,0]
  selectedTrades: SelectedTradeCharts[] = []
  // comparator
  isLoadingCompare$: Observable<IsLoading>
  compareList$: Observable<string[]>
  comparedStudy$: Observable<CompareStudy[]>


  // other for display
  defaultNavActiveId = 1
  visibleReport= false
  destroy$: Subject<boolean> = new Subject<boolean>();

  strategyReportService = new StrategyReportClass()

  constructor(private readonly store: Store){}

  ngOnInit(): void {

    /*
    * SET SELECTORS FROM STORE
     */

    // studies for list
    this.allStudies$ = this.store.pipe(select(studySelectors.getAllStudies))
    this.isLoadingAllStudy$ = this.store.pipe(select(studySelectors.isLoadingAllStudies))

    // selected study for report
    this.selectedStudyId$ = this.store.pipe(select(studySelectors.getSelectedStudyId))
    this.selectedStudy$ = this.store.pipe(select(studySelectors.getSelectedStudy))
    this.selectedStudyTrades$ = this.store.pipe(select(studySelectors.getSelectedStudyTrades))
    this.isLoadingSelectedStudyTrades$ = this.store.pipe(select(studySelectors.isLoadingSelectedStudyTrades))

    // selected study markets for charts and market detail
    this.selectedStudyMarket$ = this.store.pipe(select(studySelectors.getSelectedStudyMarket))
    this.selectedStudyMarketId$ = this.store.pipe(select(studySelectors.getSelectedStudyMarketId))
    this.selectedStudyMarketTrade$= this.store.pipe(select(studySelectors.getSelectedStudyMarketTrade))
    this.isLoadingSelectedStudyMarket$ = this.store.pipe(select(studySelectors.isLoadingStudyMarketId))

    // selected compare Study
    this.isLoadingCompare$ =  this.store.pipe(select(studySelectors.isLoadingCompare))
    this.compareList$ =  this.store.pipe(select(studySelectors.getCompareList))
    this.comparedStudy$ =  this.store.pipe(select(studySelectors.getComparedData))

    /*
    * SUBSCRIBE TO STATE
     */

    // wait for trade and market
    combineLatest([this.selectedStudyMarketTrade$, this.selectedStudyMarket$, ])
      .pipe(takeUntil(this.destroy$))
      .subscribe( data =>{
      if(data[0] && data[1]) {

        const market: MarketSinglePrices = data[1]
        const trade: NewTrade = data[0]

        this.selectedTrades = []
        // set selected trade proprieties
        for(const backTrade of trade.trade.trades){
          const selectionN = backTrade.selectionN
          this.selectedTrades.push({
            id: backTrade.id,
            isBackTrade: true,
            odds: backTrade.odds,
            stake: backTrade.stake,
            liability: backTrade.liability,
            time: backTrade.condition.time,
            sideA: backTrade.selectionN ===0,
            note: backTrade.condition.note,
            options: backTrade.options
          })
        }
      } else {
        this.selectedTrades = []
      }
    });

    // wait for study and trades of study
    combineLatest([this.selectedStudy$, this.selectedStudyTrades$ ])
      .pipe(takeUntil(this.destroy$))
      .subscribe( data =>{
        if(data[0] && data[1]) {

          const study: Study = data[0]
          const trades: NewTrade[] = data[1]

          this.store
            .pipe(select(strategySelectors.getStrategyById(study.study.strategyId)))
            .pipe(takeUntil(this.destroy$))
            .subscribe( strategy => {
              if(strategy){
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
        } else {
          this.visibleReport = false
        }
    });
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }


}
