import {Component, OnDestroy, OnInit} from '@angular/core';
import { combineLatest, Observable, Subject} from 'rxjs';
import {Strategy} from '../../../model/report/strategy';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as reportSelectors from '../../../store/report/report.selectors';
import * as runnerSelectors from '../../../store/runners/runners.selectors';
import {IsLoading} from '../../../model/isLoading';
import {Runner} from '../../../model/runner/runner';
import * as reportActions from '../../../store/report/report.actions';
import {StrategyReport} from '../../../model/report/starategyReport';
import {takeUntil} from 'rxjs/operators';
import {StrategyDatatable} from '../../../model/report/strategyDatatable';
import {NewTrade} from '../../../model/report/new/newTrade';
import {CompareStrategy} from '../../../model/report/new/compareStrategy';
import {StrategyReportClass} from '../../../model/calculator/strategyReport';
import {
  getPassiveDemoData,
  getSelectedSavedReportTrades, getSelectedStrategyName,
  isLoadingSavedReport
} from '../../../store/report/report.selectors';
import {SavedReport} from '../../../model/report/new/savedReport';

@Component({
  selector: 'app-report-main',
  templateUrl: './report-main.component.html',
})
export class ReportMainComponent implements OnInit, OnDestroy {

  defaultNavActiveId = 3

  // isLoading
  isLoadingAllStrategy$: Observable<IsLoading>
  isLoadingAllNewTrade$: Observable<IsLoading>
  isLoadingSavedReport$: Observable<IsLoading>
  // datatable
  allStrategyDatatable$: Observable<StrategyDatatable[] | NewTrade[]>
  injury2021Datatable$: Observable<StrategyDatatable[] | NewTrade[]>
  injury2022Datatable$: Observable<StrategyDatatable[] | NewTrade[]>
  passiveLiveDatatable$: Observable<StrategyDatatable[] | NewTrade[]>
  passiveDemoDatatable$: Observable<StrategyDatatable[] | NewTrade[]>
  activeKevinDatatable$: Observable<StrategyDatatable[] | NewTrade[]>
  activeBagnaDatatable$: Observable<StrategyDatatable[] | NewTrade[]>
  activeKitoDatatable$: Observable<StrategyDatatable[] | NewTrade[]>
  otherDatatable$: Observable<StrategyDatatable[] | NewTrade[]>
  // trade
  allTrade$: Observable<StrategyDatatable[] | NewTrade[]>
  injury2021Trade$: Observable<StrategyDatatable[] | NewTrade[]>
  injury2022Trade$: Observable<StrategyDatatable[] | NewTrade[]>
  passiveLiveTrade$: Observable<StrategyDatatable[] | NewTrade[]>
  passiveDemoTrade$: Observable<StrategyDatatable[] | NewTrade[]>
  activeKevinTrade$: Observable<StrategyDatatable[] | NewTrade[]>
  activeBagnaTrade$: Observable<StrategyDatatable[] | NewTrade[]>
  activeKitoTrade$: Observable<StrategyDatatable[] | NewTrade[]>
  otherTrade$: Observable<StrategyDatatable[] | NewTrade[]>
  // selected strategy
  selectedStrategy$: Observable<Strategy>
  selectedStrategyName$: Observable<string>
  selectedStrategyId$: Observable<string>
  selectedStrategyTrades$: Observable<NewTrade[]>
  // compare strategy
  comparedStrategy$: Observable<CompareStrategy[]>
  compareList$: Observable<string[]>
  compareStatus$: Observable<boolean>

  // saved report
  allSavedReports$: Observable<SavedReport[]>
  selectedSavedReport$: Observable<SavedReport>
  selectedSavedReportId$: Observable<string>
  selectedSavedReportName$: Observable<string>
  savedReportDatatable$: Observable<StrategyDatatable[]>
  selectedSavedReportTrades$: Observable<NewTrade[]>

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router,
              private readonly store: Store) {
  }

  ngOnInit(): void {

    // isLoading
    this.isLoadingAllStrategy$=this.store.pipe(select(reportSelectors.getAllStrategyLoading))
    this.isLoadingAllNewTrade$ = this.store.pipe(select(reportSelectors.isLoadingAllNewTrade))
    this.isLoadingSavedReport$ = this.store.pipe(select(reportSelectors.isLoadingSavedReport))
    // strategies datatable
    this.allStrategyDatatable$ = this.store.pipe(select(reportSelectors.getAllStrategyDatatable))
    this.injury2022Datatable$ = this.store.pipe(select(reportSelectors.getInjury2022Data(true)))
    this.injury2021Datatable$ = this.store.pipe(select(reportSelectors.getInjury2021Data(true)))
    this.passiveLiveDatatable$ = this.store.pipe(select(reportSelectors.getPassiveLiveData(true)))
    this.passiveDemoDatatable$ = this.store.pipe(select(reportSelectors.getPassiveDemoData(true)))
    this.activeKevinDatatable$ = this.store.pipe(select(reportSelectors.getActiveKevinData(true)))
    this.activeBagnaDatatable$ = this.store.pipe(select(reportSelectors.getactiveBagnaData(true)))
    this.activeKitoDatatable$ = this.store.pipe(select(reportSelectors.getActiveKitoData(true)))
    this.otherDatatable$ = this.store.pipe(select(reportSelectors.getOtherData(true)))

    // strategies trade
    this.allTrade$ = this.store.pipe(select(reportSelectors.getAllNewTrade))
    this.injury2022Trade$ = this.store.pipe(select(reportSelectors.getInjury2022Data(false)))
    this.injury2021Trade$ = this.store.pipe(select(reportSelectors.getInjury2021Data(false)))
    this.passiveLiveTrade$ = this.store.pipe(select(reportSelectors.getPassiveLiveData(false)))
    this.passiveDemoTrade$ = this.store.pipe(select(reportSelectors.getPassiveDemoData(false)))
    this.activeKevinTrade$ = this.store.pipe(select(reportSelectors.getActiveKevinData(false)))
    this.activeBagnaTrade$ = this.store.pipe(select(reportSelectors.getactiveBagnaData(false)))
    this.activeKitoTrade$ = this.store.pipe(select(reportSelectors.getActiveKitoData(false)))
    this.otherTrade$ = this.store.pipe(select(reportSelectors.getOtherData(false)))

    // selected strategy
    this.selectedStrategyId$ = this.store.pipe(select(reportSelectors.getSelectedStrategyId))
    this.selectedStrategy$ = this.store.pipe(select(reportSelectors.getSelectedStrategy))
    this.selectedStrategyName$ = this.store.pipe(select(reportSelectors.getSelectedStrategyName))
    this.selectedStrategyTrades$ = this.store.pipe(select(reportSelectors.getSelectedStrategyTrades))
    // compare
    this.compareList$ =  this.store.pipe(select(reportSelectors.getCompareList))
    this.comparedStrategy$ =  this.store.pipe(select(reportSelectors.getComparedData))
    this.compareStatus$ =  this.store.pipe(select(reportSelectors.getCompareStatus))

    // saved report
    this.allSavedReports$ = this.store.pipe(select(reportSelectors.getAllSavedReports))
    this.selectedSavedReport$ = this.store.pipe(select(reportSelectors.getSelectedSavedReport))
    this.selectedSavedReportName$ = this.store.pipe(select(reportSelectors.getSelectedSavedReportName))
    this.selectedSavedReportId$ = this.store.pipe(select(reportSelectors.getSelectedSavedReportId))
    this.savedReportDatatable$ = this.store.pipe(select(reportSelectors.getSavedReportDatatable))
    this.selectedSavedReportTrades$ = this.store.pipe(select(reportSelectors.getSelectedSavedReportTrades))

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  public refreshStrategy(){
    this.store.dispatch(reportActions.getAllStrategies())
    this.store.dispatch(reportActions.getAllSavedReport())
  }

  public refreshTrade(){
    this.store.dispatch(reportActions.getAllNewTrades())
  }

}

