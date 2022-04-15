import {Component, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as marketAdvancedActions from '../../../store/marketsAdvanced/marketAdvanced.actions';
import {Observable, Subject} from 'rxjs';
import * as marketAdvancedSelectors from '../../../store/marketsAdvanced/marketAdvanced.selectors';
import {IsLoading} from '../../../model/isLoading';
import {MarketInfoAdvanced} from '../../../model/market/advanced/marketInfoAdvanced';
import {MarketOddsAdvanced} from '../../../model/market/advanced/marketOddsAdvanced';
import {MarketUpdatesBasic} from '../../../model/market/basic/marketUpdatesBasic';
import {MarketRunnersAdvanced} from '../../../model/market/advanced/marketRunnersAdvanced';
import {takeUntil} from 'rxjs/operators';
import {MarketDetailAdvanced} from '../../../model/market/advanced/marketDetailAdvanced';
import {MarketAdditionalInfoTennis} from '../../../model/market/marketAdditionalInfoTennis';
import * as marketsSelectors from '../../../store/markets/markets.selectors';


@Component({
  selector: 'app-market-advanced-detail',
  templateUrl: './market-advanced-detail.component.html',
})
export class MarketAdvancedDetailComponent implements OnInit {

  @Input() marketIdInput: string
  @Input() wantUpdates: boolean

  public marketId: string;
  public nextMarketId: string;
  isLoadingMarketDetail$: Observable<IsLoading>

  selectedMarketDetail$: Observable<MarketDetailAdvanced>

  selectedMarketInfo$: Observable<MarketInfoAdvanced>
  selectedMarketRunners$: Observable<MarketRunnersAdvanced>
  selectedMarketUpdates$: Observable<MarketUpdatesBasic>
  selectedMarketOdds$: Observable<MarketOddsAdvanced>

  selectedMarketAdditionalInfo$: Observable<MarketAdditionalInfoTennis>
  randomMarketId$: Observable<string>

  haveAdvanced$: Observable<boolean>


  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private router: Router,
              private readonly store: Store,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

    if(this.marketIdInput){
      this.marketId = this.marketIdInput
    } else {
      // get market id from routes parameters
      this.marketId = this.route.snapshot.params.marketId;
    }


    // ACTION
    // market detail
    this.store.dispatch(marketAdvancedActions.getMarketAdvancedDetail({ marketId: this.marketId }));

    this.isLoadingMarketDetail$ = this.store.pipe(select(marketAdvancedSelectors.isLoadingMarketDetail))

    this.selectedMarketDetail$ = this.store.pipe(select(marketAdvancedSelectors.getMarketDetail))

    this.selectedMarketInfo$ = this.store.pipe(select(marketAdvancedSelectors.getMarketInfoAdvanced))
    this.selectedMarketRunners$ = this.store.pipe(select(marketAdvancedSelectors.getMarketRunnersAdvanced))
    this.selectedMarketUpdates$ = this.store.pipe(select(marketAdvancedSelectors.getMarketUpdatesAdvanced))
    this.selectedMarketOdds$ = this.store.pipe(select(marketAdvancedSelectors.getMarketMarketOddsAdvanced))

    // get marketAdditionalInfo
    this.selectedMarketAdditionalInfo$ = this.store.pipe(select(marketAdvancedSelectors.getSelectedMarketAdditionalInfo))

    this.randomMarketId$ = this.store.pipe(select(marketAdvancedSelectors.getRandomMarketId))

    this.haveAdvanced$ = this.store.pipe(select(marketsSelectors.checkIfHaveAdvanced(this.marketId)))

  }

  nextMarket(){
    this.randomMarketId$.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.nextMarketId = data
      })
    this.clickOnWinnerRunners(this.nextMarketId)

  }

  goToBasic(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/markets/detail/' + this.marketId]));
  }

  clickOnWinnerRunners(id: string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/marketAdvanced/detail/'+id]));
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
