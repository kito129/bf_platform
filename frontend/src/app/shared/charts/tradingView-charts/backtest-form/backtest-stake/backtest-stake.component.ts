import {Component, Input, OnInit} from '@angular/core';
import {BacktestSide} from '../../../../../model/calculator/BacktestForm';

@Component({
  selector: 'app-backtest-stake',
  templateUrl: './backtest-stake.component.html',
})
export class BacktestStakeComponent implements OnInit {

  @Input() type: 'Back' | 'Lay'
  @Input() stakeForm: BacktestSide

  outlineColor = ''
  normalColor = ''
  stakeButton = [5,10,20,25,30,50,60,80,100]

  constructor() { }

  ngOnInit(): void {
    if(this.type==='Back') {
      this.outlineColor = 'btn btn-outline-primary'
      this.normalColor = 'btn btn-primary'
    } else {
      this.outlineColor = 'btn btn-outline-danger'
      this.normalColor = 'btn btn-danger'
    }
  }

  setBetActiveType(){
    this.stakeForm.active = this.type
  }

  getCorrectSideByType(){
    if(this.type==='Back') return this.stakeForm.back
    else return this.stakeForm.lay
  }

  setStake(stake: number){
    if(this.type==='Back') this.stakeForm.back.stake=stake
    else this.stakeForm.lay.stake=stake
  }

  resetStake(){
    if(this.type==='Back') this.stakeForm.back.stake=100
    else this.stakeForm.lay.stake=100
  }

}
