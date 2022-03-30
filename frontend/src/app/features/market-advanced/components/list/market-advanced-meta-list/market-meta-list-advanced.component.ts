import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {IsLoading} from '../../../../../model/isLoading';

import * as marketAdvancedActions from '../../../../../store/marketsAdvanced/marketAdvanced.actions';
import * as marketAdvancedSelectors from '../../../../../store/marketsAdvanced/marketAdvanced.selectors';
import {select, Store} from '@ngrx/store';
import {takeUntil} from 'rxjs/operators';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';

import {MarketMetaListV2} from '../../../../../model/market/metalist/metalistV2/marketMetaListV2';
import {MarketMetaListV2Adv} from '../../../../../model/market/metalist/metalistV2/marketMetaListV2Adv';


@Component({
  selector: 'app-market-meta-list-advanced',
  templateUrl: './market-meta-list-advanced.component.html',
})
export class MarketMetaListAdvancedComponent implements OnInit {


  $metaList: Observable<MarketMetaListV2Adv[]>
  $isLoadingMetalist: Observable<IsLoading>
  metaList: MarketMetaListV2Adv[]

  filterName = ''

  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;


  closeResult = '';

  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    this.$metaList = this.store.pipe(select(marketAdvancedSelectors.getMetalistAdv))
    this.$isLoadingMetalist = this.store.pipe(select(marketAdvancedSelectors.isLoadingMarketMetalistAdvanced))

    this.$metaList.pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if(data && this.rows.length===0){
          this.temp = []
          this.metaList = JSON.parse(JSON.stringify(data))
          this.temp = [...this.metaList]
          this.rows = this.metaList
        }
      })
  }

  updateNameFilter(event) {
    const val = event.target.value.toLowerCase();
    this.filterName = val
    // filter our data
    // update the rows
    this.rows = this.temp.filter( (d: MarketMetaListV2) => {
      return (d.marketRunners.runnerWinner.name.toLowerCase().indexOf(val) !== -1 ||
        d.marketRunners.runnerLoser.name.toLowerCase().indexOf(val) !== -1 || !val)
    }).sort((x: MarketMetaListV2, y: MarketMetaListV2) => {
      return x.marketInfo.marketInfo.openDate - y.marketInfo.marketInfo.openDate
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  getData(){
    this.store.dispatch(marketAdvancedActions.getMarketMetalistAdvanced());
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
