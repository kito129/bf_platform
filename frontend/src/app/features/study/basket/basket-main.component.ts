import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Basket} from '../../../model/study/basket/basket';
import {select, Store} from '@ngrx/store';
import * as basketsSelectors from '../../../store/study/basket/basket.selectors';
import {IsLoading} from '../../../model/isLoading';
import {MarketBasket} from '../../../model/market/marketBasket';
import {takeUntil} from 'rxjs/operators';
import {MarketSinglePrices} from '../../../model/market/marketSinglePrices';

@Component({
  selector: 'app-basket-main',
  templateUrl: './basket-main.component.html',
})
export class BasketMainComponent implements OnInit {

  // baskets
  allBaskets$: Observable<Basket[]>
  isLoadingAllBaskets$: Observable<IsLoading>

  // selected basket
  selectedBasket$: Observable<Basket>
  selectedBasketId$: Observable<string>
  selectedBasketMarketId$: Observable<string>
  isLoadingSelectedBasketMarket$: Observable<IsLoading>
  selectedBasketMarketsData$: Observable<MarketSinglePrices>

  // selected basket markets
  selectedBasketMarketsList$: Observable<MarketBasket[]>
  isLoadingBasketMarkets$: Observable<IsLoading>

  basketBps= {
    time: 0,
    odds: 0
  }
  validBsp = false

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly store: Store) {}

  ngOnInit(): void {

    // baskets
    this.allBaskets$ = this.store.pipe(select(basketsSelectors.getAllBaskets))
    this.isLoadingAllBaskets$ = this.store.pipe(select(basketsSelectors.isLoadingAllBaskets))

    // selected basket
    this.selectedBasket$ = this.store.pipe(select(basketsSelectors.getSelectedBasket))
    this.selectedBasketId$ = this.store.pipe(select(basketsSelectors.getSelectedBasketId))

    // selected basket markets
    this.selectedBasketMarketsList$ = this.store.pipe(select(basketsSelectors.getSelectedBasketMarkets))
    this.isLoadingBasketMarkets$ = this.store.pipe(select(basketsSelectors.isLoadingSelectedBasketMarkets))

    // selected basket, selected  market
    this.selectedBasketMarketId$ = this.store.pipe(select(basketsSelectors.getSelectedBasketMarketId))
    this.selectedBasketMarketsData$ = this.store.pipe(select(basketsSelectors.getSelectedBasketMarketPrices))
    this.isLoadingSelectedBasketMarket$ = this.store.pipe(select(basketsSelectors.isLoadingBasketMarket))

    this.selectedBasketMarketsData$
      .pipe(takeUntil(this.destroy$))
      .subscribe( marketData => {
        if(marketData){
          const runnerId = +marketData.marketOdds.runnerId
          const selectedRunner = marketData.marketRunners.marketRunners.filter(x => +x.id === +runnerId)[0]
          this.basketBps.time = selectedRunner.inPlayTime
          this.basketBps.odds = selectedRunner.inPlayOdds
          this.validBsp = true
        } else {
          this.validBsp = false
        }
      })

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
