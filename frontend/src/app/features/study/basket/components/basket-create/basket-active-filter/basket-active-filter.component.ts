import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SelectionBspFilter} from "../../../../../../model/study/basket/filter";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-basket-active-filter',
  templateUrl: './basket-active-filter.component.html',
})
export class BasketActiveFilterComponent implements OnInit {

  @Output() removeBSPEmitter = new EventEmitter
  @Output() removePlayersEmitter = new EventEmitter


  @Input() haveRemove: boolean
  @Input() bspFilter: SelectionBspFilter[]
  @Input() playersFilter: string[]

  constructor(readonly store: Store) { }

  ngOnInit(): void {
  }

  removeFilter(id: number){
    this.removeBSPEmitter.emit([id])
  }

  removePlayerFilter(id: string){
    this.removePlayersEmitter.emit([id])
  }

}
