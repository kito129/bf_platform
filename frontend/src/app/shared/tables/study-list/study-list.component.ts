import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Basket} from "../../../model/study/basket/basket";
import {DatatableComponent, ColumnMode} from "@swimlane/ngx-datatable";
import {Store} from "@ngrx/store";
import * as basketActions from "../../../store/study/basket/basket.actions";

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styles: [
  ]
})
export class StudyListComponent implements OnInit {

  @Input() baskets: Basket[]
  @Input() selectedBasketId: string
  @Input() type: 'basket' | 'entry' | 'study'

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;

  columns = [
    { name: 'date', sortable: true},
    { name: 'name', sortable: true},
    { name: 'description', sortable: true},
    { name: 'select', sortable: false},
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

  countElements(relative: any[]){
    return relative.length
  }

}
