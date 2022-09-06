import {Component, OnDestroy, OnInit} from '@angular/core';
import {Filter} from '../../../model/market/filter/basketFilter';
import {select, Store} from '@ngrx/store';
import * as marketSelectors from '../../../store/markets/markets.selectors';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import * as marketBasicActions from '../../../store/markets/markets.actions';

@Component({
  selector: 'app-filters-main',
  templateUrl: './filters-main.component.html',
})
export class FiltersMainComponent implements OnInit, OnDestroy {

  basketFilter$: Observable<Filter[]>
  filter: Filter[] = []

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    this.basketFilter$ = this.store.pipe(select(marketSelectors.getMarketsFilter))

    this.basketFilter$.pipe(takeUntil(this.destroy$))
      .subscribe( f =>{
      if(f){
        this.filter = JSON.parse(JSON.stringify(f))
      }
    })
  }

  submit(){
    // update filters value in store
    this.store.dispatch(marketBasicActions.setFilter({filters: this.filter}));
  }

  reset(){
    this.store.dispatch(marketBasicActions.resetFilter());
    this.store.dispatch(marketBasicActions.resetMarketIdRemovedList());
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
