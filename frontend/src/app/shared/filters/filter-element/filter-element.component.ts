import {Component, Input, OnInit} from '@angular/core';
import {Filter, FilterType} from '../../../model/market/filter/basketFilter';
import {FormControl} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import * as runnersSelectors from '../../../store/runners/runners.selectors';
import {RunnersList} from '../../../model/runner/runnersList';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-filter-element',
  templateUrl: './filter-element.component.html',
})
export class FilterElementComponent implements OnInit {

  @Input() filter: Filter = null

  currentType: FilterType = null

  filterType: typeof FilterType = FilterType;
  filterTypeArray = Object.keys(this.filterType).filter(e => !isNaN(+e)).map(o => { return {index: +o, name: this.filterType[o]}});

  runnersList$: Observable<RunnersList[]>

  constructor(private readonly store: Store) { }

  ngOnInit(): void {

    this.currentType = this.filter.type

    if(this.filter.name === 'runners'){
      this.runnersList$ = this.store.pipe(select(runnersSelectors.getRunnersListForm))
    }
  }

  activate(){
    this.filter.active = !this.filter.active
  }

  setDate(value: number, isMin: boolean){
    console.log(value[0])
    if(isMin){
      this.filter.min = value[0]
    } else {
      this.filter.max = value[0]
    }
  }

}
