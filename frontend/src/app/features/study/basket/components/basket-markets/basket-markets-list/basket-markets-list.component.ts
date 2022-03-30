import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MarketBasket} from "../../../../../../model/market/marketBasket";
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {Observable, Subject} from "rxjs";
import {Store} from "@ngrx/store";
import {takeUntil} from "rxjs/operators";
import * as basketsActions from "../../../../../../store/study/basket/basket.actions";

@Component({
  selector: 'app-basket-markets-list',
  templateUrl: './basket-markets-list.component.html',})
export class BasketMarketsListComponent implements OnInit {

  @Input() marketsBasketList$: Observable<MarketBasket[]>
  @Input() selectedBasketMarketId: string
  destroy$: Subject<boolean> = new Subject<boolean>();

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;


  columns = [
    { name: 'date', sortable: true},
    { prop: 'market', sortable: true},
    { name: 'Selection Name', sortable: true},
    { prop: 'BSP', sortable: true},
    { prop: 'Winner', sortable: true},
    { prop: '# Of odds', sortable: true},
  ];

  constructor(private readonly store: Store) {
  }

  ngOnInit(): void {

    this.marketsBasketList$
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      if(data){
        this.temp = [...data]
        this.rows = data
      } else {
        this.temp = []
        this.rows = []
      }
    })

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter(function (d) {
      return d.selection.name.toLowerCase().indexOf(val) !==-1 || !val
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onClick(marketId: string, selectionId: number) {

    if(this.selectedBasketMarketId === marketId){
      this.store.dispatch(basketsActions.unsetSelectedBasketMarket())
    } else if(marketId !== this.selectedBasketMarketId) {
      this.store.dispatch(basketsActions.setSelectedBasketMarket({marketId: marketId, selectionId: selectionId}))
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
