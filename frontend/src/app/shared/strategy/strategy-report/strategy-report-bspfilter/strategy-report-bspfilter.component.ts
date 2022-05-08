import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from '../../../../model/report/new/newTrade';
import {Utils} from '../../../../model/calculator/utils';
import {CompareStrategy} from '../../../../model/report/new/compareStrategy';

@Component({
  selector: 'app-strategy-report-bspfilter',
  templateUrl: './strategy-report-bspfilter.component.html',
})
export class StrategyReportBSPFilterComponent implements OnInit {

  @Input() trades: NewTrade[]

  compare:CompareStrategy[] = []
  utils = new Utils()
  validData = false

  constructor() { }

  ngOnInit(): void {
  }

  filterEmit(event){
    this.validData = false
    this.compare = []
    if(this.trades.length){
      event.forEach( filter =>{
        filter.filter(this.trades)
        this.compare.push({
          strategy: this.utils.generateStrategy(filter.name,filter.bank),
          trades: filter.trades
        })
      })
      this.validData = true
    } else {
      this.validData = false
    }
  }

  resetEmitter(){
    this.validData = false
  }
}
