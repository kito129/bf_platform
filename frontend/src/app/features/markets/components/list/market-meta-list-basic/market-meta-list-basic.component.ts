import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IsLoading} from '../../../../../model/isLoading';
import {DatatableComponent, ColumnMode} from '@swimlane/ngx-datatable';
import {select, Store} from '@ngrx/store';
import {takeUntil} from 'rxjs/operators';
import {MarketMetaListV2} from '../../../../../model/market/metalist/metalistV2/marketMetaListV2';

import * as marketBasicActions from '../../../../../store/markets/markets.actions';
import * as marketBasicSelectors from '../../../../../store/markets/markets.selectors';
import {MarketInfoBasic} from '../../../../../model/market/basic/marketInfoBasic';
import {MarketFilterBasket} from '../../../../../model/market/filter/marketFilterBasket';
import {FilterBasket} from '../../../../../model/market/filter/filterBasket';
import {Filter} from '../../../../../model/market/filter/basketFilter';


@Component({
  selector: 'app-market-meta-list-basic',
  templateUrl: './market-meta-list-basic.component.html',
})
export class MarketMetaListBasicComponent implements OnInit, OnDestroy {


  metaList$: Observable<MarketFilterBasket>
  isLoadingMetalist$: Observable<IsLoading>

  basketFilter$: Observable<Filter[]>

  filterList$: Observable<FilterBasket[]>
  isLoadingFilterList$: Observable<IsLoading>

  selectedFilterBasketId$: Observable<string>
  selectedFilterBasket$: Observable<FilterBasket>

  removedMarket$: Observable<{ marketName: string, marketDate: number, marketId: string }[]>

  filterName = ''
  tableSize = 15

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows: MarketMetaListV2[] = [];
  temp: MarketMetaListV2[] = [];
  loadingIndicator = true
  ColumnMode = ColumnMode;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    this.metaList$ = this.store.pipe(select(marketBasicSelectors.getMetalistBasicBasket))
    this.isLoadingMetalist$ = this.store.pipe(select(marketBasicSelectors.isLoadingMarketMetalistBasic))

    this.isLoadingFilterList$ = this.store.pipe(select(marketBasicSelectors.isLoadingMarketFilter))
    this.filterList$ = this.store.pipe(select(marketBasicSelectors.getMarketFilterList))

    this.basketFilter$ = this.store.pipe(select(marketBasicSelectors.getMarketsFilter))

    this.removedMarket$ = this.store.pipe(select(marketBasicSelectors.getMarketRemoved))

    this.selectedFilterBasketId$ = this.store.pipe(select(marketBasicSelectors.getSelectedFilterBasketId))
    this.selectedFilterBasket$ = this.store.pipe(select(marketBasicSelectors.getSelectedFilterBasket))


    this.metaList$.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        console.log(data)
        if (data) {
          this.rows = data.market
          this.temp = data.market
        }
      })
  }

  updateNameFilter(event) {
    const val = event.target.value.toLowerCase();
    this.filterName = val
    // filter our data
    // update the rows
    this.rows = this.temp.filter( (d: MarketMetaListV2) => {
      // filter by runner name
      return (d.marketRunners.runnerWinner.name.toLowerCase().indexOf(val) !== -1 ||
        d.marketRunners.runnerLoser.name.toLowerCase().indexOf(val) !== -1 ||
        d.marketInfo.marketInfo.eventName.toLowerCase().indexOf(val) !== -1 ||
        !val)
      // sort by date
    }).sort((x: MarketMetaListV2, y: MarketMetaListV2) => {
      return x.marketInfo.marketInfo.openDate - y.marketInfo.marketInfo.openDate
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  // action

  refreshData(){
    this.store.dispatch(marketBasicActions.getAllFilterBasket());
  }

  downloadData(){
    this.store.dispatch(marketBasicActions.getMarketMetalistBasic());
  }

  setInRemovedList(id: string){
    this.store.dispatch(marketBasicActions.setMarketIdInRemoved({marketId: id}));
  }

  resetRemovedList(){
    this.store.dispatch(marketBasicActions.resetMarketIdRemovedList())
  }


  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
