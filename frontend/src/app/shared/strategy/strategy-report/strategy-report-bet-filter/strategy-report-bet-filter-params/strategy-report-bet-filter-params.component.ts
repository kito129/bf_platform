import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {
  StrategyBetFilters,
  StrategyBetFiltersInterface
} from '../../../../../model/report/strategyFilter/strategyBetFilters';

@Component({
  selector: 'app-strategy-report-bet-filter-params',
  templateUrl: './strategy-report-bet-filter-params.component.html',
})
export class StrategyReportBetFilterParamsComponent implements OnInit {

  @Output() filterEmitter = new EventEmitter()
  @Output() resetEmitter = new EventEmitter()

  filters: StrategyBetFiltersInterface[]

  constructor() { }

  ngOnInit(): void {
    this.emptyFilter()
  }

  emptyFilter() {
    this.filters = []
    this.filters.push(new StrategyBetFilters('New', 1.01, 10000, 2000))
  }

  xFilter(){
    this.filters = []
    this.filters.push(new StrategyBetFilters('Top Dog [1.01-1.11]', 1.01,1.11,2000))
  }

  filterEmit(){
    console.log(this.filters)
    this.filterEmitter.emit(this.filters)
  }

  resetEmit(){
    this.emptyFilter()
    this.resetEmitter.emit('close')
  }

  addFilter(){
    this.filters.push(new StrategyBetFilters('New', 1.01,10000, 2000))
  }

  removeFilter(index: number){
    this.filters = this.filters.filter( (x,i) => i!==index)
  }

  duplicateFilter(index: number){
    this.filters.push(new StrategyBetFilters(this.filters[index].name, 0,0,0))
  }

}
