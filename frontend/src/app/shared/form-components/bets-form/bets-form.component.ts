import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bets-form',
  templateUrl: './bets-form.component.html',
})
export class BetsFormComponent implements OnInit {

  @Input() isBack: boolean
  @Output() betsFormEmitter = new EventEmitter();
  @Input() stake: number
  @Input() bank: number
  @Input() liability: number
  @Input() odds: number
  @Input() isUpdate: boolean


  data: {
    stake: number
    bank: number
    liability: number
    odds: number
  }

  stakeForm =0

  updateStake(){

    if(!this.isBack){
      this.data.bank = this.stakeForm
      this.data.liability = this.data.bank *(this.data.odds-1)
    } else {
      this.data.stake = this.stakeForm
      this.data.liability =0
    }
    this.emitValue()

  }

  updateOdds(event){
    this.data.odds = event[0]
    this.updateStake()
  }


  emitValue(){
    if(this.isBack){
      this.betsFormEmitter.emit([true, this.data.odds, this.data.stake])
    } else {
      this.betsFormEmitter.emit([false, this.data.odds, this.data.bank, this.data.liability])
    }
  }

  constructor() { }

  ngOnInit(): void {

    if(this.isUpdate){
      this.data = {
        stake: this.stake,
        bank: this.bank,
        liability: this.liability,
        odds: this.odds,
      }
      if(this.isBack){
        this.stakeForm = this.data.stake
      } else {
        this.stakeForm = this.data.bank
      }

    } else {
      this.data = {
        stake: 0,
        bank: 0,
        liability: 0,
        odds: 1.01,
      }
      this.stakeForm = this.data.stake
    }
  }

}
