import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import * as runnerActions from '../../../../store/runners/runners.action';
import * as runnersSelectors from '../../../../store/runners/runners.selectors';
import {Runner, RunnerInfo} from '../../../../model/runner/runner';
import * as notesSelectors from '../../../../store/notes/notes.selectors';
import {IsLoading} from '../../../../model/isLoading';
import * as tournamentSelectors from '../../../../store/tennis-tournament/tennisTournament.selectors';
import {Note} from '../../../../model/note/note';
import {MarketSelectionInfo} from '../../../../model/market/marketSelectionInfo';
import {TennisTournament} from '../../../../model/tennisTournament/tennisTournament';
import {RunnerMarketsStats} from '../../../../model/runner/runnerMarketsStats';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-detail-runners',
  templateUrl: './runners-detail.component.html',
})
export class RunnersDetailComponent implements OnInit, OnDestroy {

  public runnerId: number;

  // -- SLICE OF STATE --

  // selected Runner Info
  isLoadingSelectedRunner$: Observable<IsLoading>
  runnerInfo$: Observable<RunnerInfo>
  // selected Runner Markets
  runnerMarkets$: Observable<MarketSelectionInfo[]>
  isLoadingRunnerMarkets$: Observable<IsLoading>
  // selected Runner Notes
  runnerNotes$: Observable<Note[]>
  isLoadingNotes$: Observable<IsLoading>
  // tournament List
  tournamentList$: Observable<TennisTournament[]>
  isLoadingAllTournament$: Observable<IsLoading>
  // runners List
  allRunners$: Observable<Runner[]>
  isLoadingAllRunners$: Observable<IsLoading>

  // runner dettail histgram
  marketsStats: RunnerMarketsStats

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router,
              private readonly store: Store,
              private route: ActivatedRoute) {

    this.runnerId = this.route.snapshot.params.runnerId;

    // -- DISPATCH ACTIONS --
    // dispatch action runners detail
    this.store.dispatch(runnerActions.getRunnerById({ runnerId: this.runnerId }));

    // dispatch action markets by runner id
    this.store.dispatch(runnerActions.getMarketsByRunnerId({ runnerId: this.runnerId }));


    // -- SELECTORS FROM STORE --

    // runnerInfo
    this.runnerInfo$ = this.store.pipe(select(runnersSelectors.getSelectedRunnerInfo))
    this.isLoadingSelectedRunner$ = this.store.pipe(select(runnersSelectors.isLoadingSelectedRunner))
    // runnerMarket
    this.runnerMarkets$ = this.store.pipe(select(runnersSelectors.getDetailRunnerMarkets))
    this.isLoadingRunnerMarkets$ = this.store.pipe(select(runnersSelectors.isLoadingRunnerMarkets))
    // notes
    this.runnerNotes$ = this.store.pipe(select(notesSelectors.getNotesByRunnerId(this.runnerId)))
    this.isLoadingNotes$ = this.store.pipe(select(notesSelectors.getNotesLoading))
    // tennis tournament
    this.tournamentList$ = this.store.pipe(select(tournamentSelectors.getAllTennisTournaments))
    this.isLoadingAllTournament$ = this.store.pipe(select(tournamentSelectors.getIsLoadingAllTennisTournament))
    // runners List
    this.allRunners$ = this.store.pipe(select(runnersSelectors.getAllRunners))
    this.isLoadingAllRunners$ = this.store.pipe(select(runnersSelectors.isLoadingAllRunners))

  }

  ngOnInit(): void {

    this.runnerMarkets$
      .pipe(takeUntil(this.destroy$))
      .subscribe( data => {
        if(data){
          this.marketsStats = new RunnerMarketsStats(data, this.runnerId)
        }
      })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  refreshClick(){
    // -- DISPATCH ACTIONS --
    // runners detail
    this.store.dispatch(runnerActions.getRunnerById({ runnerId: this.runnerId }));
    // markets by runner id
    this.store.dispatch(runnerActions.getMarketsByRunnerId({ runnerId: this.runnerId }));
  }


}
