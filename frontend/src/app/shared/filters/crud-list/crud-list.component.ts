import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {FilterBasket} from '../../../model/market/filter/filterBasket';
import { Store} from '@ngrx/store';
import * as marketBasicActions from '../../../store/markets/markets.actions';
import { Filter} from '../../../model/market/filter/basketFilter';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styles: ['/deep/ .datatable-row-even {background-color: #181818;}']
})
export class CrudListComponent implements OnInit, OnDestroy {

  @Input() filterBaskets: FilterBasket[]
  @Input() currentBasketFilter: Filter[]
  @Input() currentBasket: string[]
  @Input() currentRemoved: string[]
  @Input() selectedFilterBasketId: string
  @Input() selectedFilterBasket: FilterBasket
  @Input() selectedFilterBasket$: Observable<FilterBasket>

  ColumnMode = ColumnMode;

  newName = ''
  name = ''

  tableSize = 10

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
   this.selectedFilterBasket$.pipe(takeUntil(this.destroy$)).subscribe( data => {
     if(data){
       this.name = JSON.parse(JSON.stringify(data.filterBasket.name))
       this.newName = JSON.parse(JSON.stringify(data.filterBasket.name))
     } else {
       this.newName = ''
       this.name = ''
     }
   })
  }


  updateCurrent(){

    const temp: FilterBasket = {
      _id: this.selectedFilterBasket._id,
      created: Date.now(),
      lastUpdate: Date.now(),
      filterBasket: {
        name: this.newName,
        filter: this.currentBasketFilter,
        market: this.currentBasket,
        removed: this.currentRemoved,
        activeFilter: this.currentBasketFilter.filter( x=> x.active).length,
        marketSize: this.currentBasket.length,
        removedSize: this.currentRemoved.length
      }
    }
    this.store.dispatch(marketBasicActions.updateFilterBasket({_id: this.selectedFilterBasketId, filterBasket: temp}));
  }

  saveNew(){

    const temp: FilterBasket = {
      created: Date.now(),
      lastUpdate: Date.now(),
      filterBasket: {
        name: this.newName,
        filter: this.currentBasketFilter,
        market: this.currentBasket,
        removed: this.currentRemoved,
        activeFilter: this.currentBasketFilter.filter( x=> x.active).length,
        marketSize: this.currentBasket.length,
        removedSize: this.currentRemoved.length
      }
    }
    this.store.dispatch(marketBasicActions.createFilterBasket({filterBasket: temp}));
  }

  setFilterBasket(basket: FilterBasket){
    if(basket._id !== this.selectedFilterBasketId){
      this.store.dispatch(marketBasicActions.setSelectedFilterBasket({_id: basket._id, filter: basket.filterBasket.filter, removed: basket.filterBasket.removed}));
    } else {
      this.store.dispatch(marketBasicActions.resetFilter());
      this.store.dispatch(marketBasicActions.resetMarketIdRemovedList());
      this.store.dispatch(marketBasicActions.resetSelectedFilterBasket());
    }
  }

  deleteFilterBasket(basketId: string){
    if(basketId === this.selectedFilterBasketId) {
      this.store.dispatch(marketBasicActions.deleteFilterBasket({_id: basketId}));
      this.store.dispatch(marketBasicActions.resetFilter());
      this.store.dispatch(marketBasicActions.resetMarketIdRemovedList());
      this.store.dispatch(marketBasicActions.resetSelectedFilterBasket());
    } else {
      this.store.dispatch(marketBasicActions.deleteFilterBasket({_id: basketId}));
    }

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
