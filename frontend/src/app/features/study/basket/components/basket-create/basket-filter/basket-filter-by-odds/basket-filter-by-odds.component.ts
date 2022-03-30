import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-basket-filter-by-odds',
  templateUrl: './basket-filter-by-odds.component.html',
})
export class BasketFilterByOddsComponent implements OnInit {

  @Output()
  oddEmitter = new EventEmitter
  @Input() min: number
  @Input() max: number

  odds =  {
    min: 1.01,
    max: 1.01
  }

  valid = true
  constructor() { }

  ngOnInit(): void {
    if(this.min && this.max){
      this.odds.min = this.min
      this.odds.max = this.max
    } else {
      this.odds = {
        min: 1.01,
        max: 1.01
      }
    }
    this.emitOdds()
  }

  emitOdds(){
    this.checkValid()
    if(this.valid){
      this.oddEmitter.emit([this.odds])
    } else {
      this.oddEmitter.emit([null])
    }
  }

  setMin(event){
    this.odds.min = event[0]
    this.emitOdds()
  }
  setMax(event){
    this.odds.max = event[0]
    this.emitOdds()
  }

  checkValid(){
    this.valid = this.odds.min <= this.odds.max;
  }

}
