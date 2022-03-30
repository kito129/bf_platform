import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import * as marketActions from '../../../../store/markets/markets.actions';
import {IsLoading} from '../../../../model/isLoading';
import {Note} from '../../../../model/note/note';

import {MarketInfoBasic} from '../../../../model/market/basic/marketInfoBasic';
import * as notesSelectors from '../../../../store/notes/notes.selectors';
import * as marketsSelectors from '../../../../store/markets/markets.selectors';
import * as marketsAdvancedSelectors from '../../../../store/marketsAdvanced/marketAdvanced.selectors';
import {MarketUpdatesBasic} from '../../../../model/market/basic/marketUpdatesBasic';
import {MarketRunnersBasic} from '../../../../model/market/basic/marketRunnersBasic';
import {MarketOddsBasic} from '../../../../model/market/basic/marketOddsBasic';
import {MarketBasic} from '../../../../model/market/basic/marketBasic';
import {takeUntil} from 'rxjs/operators';
import {MarketAdditionalInfoTennis} from '../../../../model/market/marketAdditionalInfoTennis';



@Component({
  selector: 'app-market-detail-basic',
  templateUrl: './markets-detail.component.html',
  preserveWhitespaces: true
})
export class MarketsDetailComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();

  @Input() marketIdInput: string
  @Input() dontWantUpdate: boolean

  public marketId: string;
  public nextMarketId: string;

  selectedMarket$: Observable<MarketBasic>
  selectedMarketInfo$: Observable<MarketInfoBasic>
  selectedMarketUpdates$: Observable<MarketUpdatesBasic>
  selectedMarketSelections$: Observable<MarketRunnersBasic>
  selectedMarketPrices$: Observable<MarketOddsBasic>
  isLoadingSelectedMarket$: Observable<IsLoading>

  selectedMarketAdditionalInfo$: Observable<MarketAdditionalInfoTennis>

  sameMatchMarkets$: Observable<MarketInfoBasic[]>
  isLoadingSameMatchMarkets$: Observable<IsLoading>

  notes$: Observable<Note[]>
  isLoadingNotes$: Observable<IsLoading>

  randomMarketId$: Observable<string>


  haveAdvanced$: Observable<boolean>

  constructor(private router: Router,
              private readonly store: Store,
              private route: ActivatedRoute) {}

  ngOnInit(): void {

    if(!this.marketIdInput){

      // get market id from routes parameters
      this.marketId = this.route.snapshot.params.marketId;
    } else {
      this.marketId = this.marketIdInput
    }


    // ACTION
    // market detail
    this.store.dispatch(marketActions.getMarketDetail({ marketId: this.marketId }));

    // same match markets
    //this.store.dispatch(marketActions.getMarketsSameMatch({ marketId: this.marketId }));

    // get market Selected proprieties
    this.selectedMarket$ = this.store.pipe(select(marketsSelectors.getSelectedMarket))
    this.isLoadingSelectedMarket$ = this.store.pipe(select(marketsSelectors.isLoadingSelectedMarket))
    // get marketInfo
    this.selectedMarketInfo$ = this.store.pipe(select(marketsSelectors.getSelectedMarketInfo))
    // get marketUpdate
    this.selectedMarketUpdates$ = this.store.pipe(select(marketsSelectors.getSelectedMarketUpdates))
    // get marketSelections
    this.selectedMarketSelections$ = this.store.pipe(select(marketsSelectors.getSelectedMarketSelections))
    // get marketPrices
    this.selectedMarketPrices$ = this.store.pipe(select(marketsSelectors.getSelectedMarketPrices))
    // get marketAdditionalInfo
    this.selectedMarketAdditionalInfo$ = this.store.pipe(select(marketsSelectors.getSelectedMarketAdditionalInfo))

    // same match markets
    this.sameMatchMarkets$ = this.store.pipe(select(marketsSelectors.getSameMatchMarkets))
    this.isLoadingSameMatchMarkets$ = this.store.pipe(select(marketsSelectors.isLoadingSameMatchMarkets))

    // get notes for point-forms
    this.notes$ = this.store.pipe(select(notesSelectors.getAllNotes))
    this.isLoadingNotes$ = this.store.pipe(select(notesSelectors.getNotesLoading))


    this.randomMarketId$ = this.store.pipe(select(marketsSelectors.getRandomMarketId))

    this.haveAdvanced$ = this.store.pipe(select(marketsAdvancedSelectors.checkIfHaveAdvanced(this.marketId)))
  }


  nextMarket(){
    this.randomMarketId$.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
       this.nextMarketId = data
      })
    this.clickOnWinnerRunners(this.nextMarketId)
  }

  clickOnWinnerRunners(id: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/markets/detail/'+id]));
  }

  goToAdvanced(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/marketAdvanced/detail/' + this.marketId]));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}


