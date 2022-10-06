import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StrategyFilterBsp, StrategyFilterBspClass} from '../../../../../model/report/strategyFilter/strategyFilterBsp';

@Component({
  selector: 'app-strategy-report-trade-filter-params',
  templateUrl: './strategy-report-trade-filter-params.component.html',
})
export class StrategyReportTradeFilterParamsComponent implements OnInit {

  @Output() filterEmitter = new EventEmitter()
  @Output() resetEmitter = new EventEmitter()

  filters: StrategyFilterBsp[]

  constructor() { }

  ngOnInit(): void {
    this.emptyFilter()
  }

  emptyFilter() {
    this.filters = []
    this.filters.push(new StrategyFilterBspClass('New', 1.01, 10000, 2000))
  }

  oddsFilter(){
    this.filters = []
    this.filters.push(new StrategyFilterBspClass('Top Dog [1.01-1.11]', 1.01,1.11,2000))
    this.filters.push(new StrategyFilterBspClass('Mid Dog [1.12-1.20]', 1.12,1.20,2000))
    this.filters.push(new StrategyFilterBspClass('High Dog [1.21-1.30]', 1.21,1.30,2000))

    this.filters.push(new StrategyFilterBspClass('Fav [1.31-1.49]', 1.31,1.49,2000))
    this.filters.push(new StrategyFilterBspClass('Mid Fav [1.50-1.74]', 1.50,1.74,2000))
    this.filters.push(new StrategyFilterBspClass('High Fav [1.75-1.99]', 1.75,1.99,2000))

    this.filters.push(new StrategyFilterBspClass('Underdog [2-4]', 2,4,2000))
    this.filters.push(new StrategyFilterBspClass('Scary [4.01-6]', 4.01,6,2000))
    this.filters.push(new StrategyFilterBspClass('Loser [6.01-1000]', 6.01,1000,2000))

  }

  surfaceFilter(){
    this.filters = []
    this.filters.push(new StrategyFilterBspClass('Hard', 1.01,1000,2000,'HARD'))
    this.filters.push(new StrategyFilterBspClass('Grass', 1.01,1000,2000, 'GRASS'))
    this.filters.push(new StrategyFilterBspClass('Indoor Hard', 1.01,1000,2000, 'INDOOR HARD'))
    this.filters.push(new StrategyFilterBspClass('Clay', 1.01,1000,2000, 'CLAY'))
  }

  sexFilter(){
    this.filters = []
    this.filters.push(new StrategyFilterBspClass('All ATP', 1.01,1000,2000,null,'ALL ATP'))
    this.filters.push(new StrategyFilterBspClass('All WTA', 1.01,1000,2000,null,'ALL WTA' ))
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
    this.filters.push(new StrategyFilterBspClass('New', 1.01,10000, 2000))
  }

  removeFilter(index: number){
    this.filters = this.filters.filter( (x,i) => i!==index)
  }

  duplicateFilter(index: number){
    this.filters.push(new StrategyFilterBspClass(this.filters[index].name, this.filters[index].minOdds,this.filters[index].maxOdds,this.filters[index].bank))
  }


}
