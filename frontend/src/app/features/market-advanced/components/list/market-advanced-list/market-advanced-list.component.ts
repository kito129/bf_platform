import { Component, OnInit } from '@angular/core';

import * as marketAdvancedActions from '../../../../../store/marketsAdvanced/marketAdvanced.actions';
import * as marketAdvancedSelectors from '../../../../../store/marketsAdvanced/marketAdvanced.selectors';
import {Observable} from 'rxjs';
import {IsLoading} from '../../../../../model/isLoading';
import {MarketInfoAdvanced} from '../../../../../model/market/advanced/marketInfoAdvanced';
import {select, Store} from '@ngrx/store';

@Component({
  selector: 'app-market-advanced-list',
  templateUrl: './market-advanced-list.component.html',
})
export class MarketAdvancedListComponent implements OnInit {

  $allMarkets: Observable<MarketInfoAdvanced[]>
  $isLoadingAllMarkets: Observable<IsLoading>

  $volumeStats: Observable<number[][]>


  labels: string[]

  constructor(private readonly store: Store) {

    this.labels = [
      'volumeUnder1k',
      'volumeUnder2k',
      'volumeUnder3k',
      'volumeUnder4k',
      'volumeUnder5k',
      'volumeUnder6k',
      'volumeUnder7k',
      'volumeUnder8k',
      'volumeUnder9k',
      'volumeUnder10k',
      'volumeBetween10k20k',
      'volumeBetween20k30k',
      'volumeBetween30k50k',
      'volumeBetween50k100k',
      'volumeBetween100k200k',
      'volumeBetween200k500k',
      'volumeBetween500k1m',
      'volumeBetween1m2m',
      'volumeBetween2m5m',
      'volumeUpper5m',
    ]
  }

  ngOnInit(): void {
    this.$allMarkets = this.store.pipe(select(marketAdvancedSelectors.getMarketsList))
    this.$isLoadingAllMarkets = this.store.pipe(select(marketAdvancedSelectors.isLoadingMarketsList))

    this.$volumeStats = this.store.pipe(select(marketAdvancedSelectors.getMarketsVolumeStats))

  }

  refreshAdvanced(){
    this.store.dispatch(marketAdvancedActions.getMarketsAdvancedList())
  }

}
