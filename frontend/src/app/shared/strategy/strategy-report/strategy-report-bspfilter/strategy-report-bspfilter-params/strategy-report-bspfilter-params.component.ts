import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StrategyFilterBsp, StrategyFilterBspClass} from '../../../../../model/report/strategyFilter/strategyFilterBsp';

@Component({
  selector: 'app-strategy-report-bspfilter-params',
  templateUrl: './strategy-report-bspfilter-params.component.html',
})
export class StrategyReportBspfilterParamsComponent implements OnInit {

  @Output() filterEmitter = new EventEmitter()
  @Output() resetEmitter = new EventEmitter()

  filters: StrategyFilterBsp[]

  constructor() { }

  ngOnInit(): void {
    this.reset()
  }

  reset(){
    this.filters = []
    this.filters.push(new StrategyFilterBspClass('low', 1.01,1.2,2000))
    this.filters.push(new StrategyFilterBspClass('mid', 1.21,1.60,2000))
    this.filters.push(new StrategyFilterBspClass('high', 1.61,2,2000))
    //this.resetEmit()
  }

  filterEmit(){
    this.filterEmitter.emit(this.filters)
  }

  resetEmit(){
    this.resetEmitter.emit('close')
  }

  addFilter(){
    this.filters.push(new StrategyFilterBspClass('new', 1.01,1.2, 2000))
  }

  removeFilter(index: number){
    this.filters = this.filters.filter( (x,i) => i!==index)
  }


}
