import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Basket} from "../../../../../model/study/basket/basket";
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {Store} from "@ngrx/store";
import * as basketActions from "../../../../../store/study/basket/basket.actions";
import {Entry} from "../../../../../model/study/entry/entry";
import * as entryActions from "../../../../../store/study/entry/entry.actions";

@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
})
export class BasketListComponent implements OnInit {

  @Input() baskets: Basket[]
  @Input() selectedBasketId: string

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;

  columns = [
    { name: 'Date', sortable: true},
    { name: 'Name', sortable: true},
    { name: 'Selection', sortable: true},
    { name: 'Tolls', sortable: false},
  ];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.temp = [...this.baskets]
    this.rows = this.baskets
  }

  onClick(id: string) {
    if(this.selectedBasketId === id){
      this.store.dispatch(basketActions.unsetSelectedBasket())
    } else if(id !== this.selectedBasketId) {
      this.store.dispatch(basketActions.setSelectedBasket({id: id}))
    }
  }

  deleteModal(event){
    if(event[1]==='delete'){
      // DELETE runner note
      this.store.dispatch(basketActions.deleteBasket({ _id: event[0] }));
    }
  }

  reset(){
    this.store.dispatch(basketActions.unsetSelectedBasket())
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter(basket => {
      return basket.basket.name.toLowerCase().indexOf(val)!== -1 || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onDuplicateClick(basket: Basket) {
    let newBasket = JSON.parse(JSON.stringify(basket))
    newBasket.created = Date.now()
    newBasket.lastUpdate = Date.now()
    newBasket.basket.name = newBasket.basket.name + ' - DUPLICATE'

    // dispatch actions with duplicated payload
    this.store.dispatch(basketActions.createBasket({ basket: newBasket}))
  }

}
