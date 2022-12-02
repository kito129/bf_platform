import {Component, Input, OnInit} from '@angular/core';
import {BacktestFormInterface, BacktestInfo} from '../../../../../model/TV/backtestForm';
import {Utils} from "../../../../../model/utils";

@Component({
  selector: 'app-backtest-stake',
  templateUrl: './backtest-stake.component.html',
})
export class BacktestStakeComponent implements OnInit {

  @Input() type: 'Back' | 'Lay'
  @Input() backtestForm: BacktestFormInterface

  outlineColor = ''
  normalColor = ''
  stakeButton = [5,10,20,25,30,50,60,80,100]

  util = new Utils()

  constructor() { }

  ngOnInit(): void {
    if(this.type==='Back') {
      this.outlineColor = 'btn btn-outline-primary'
      this.normalColor = 'btn btn-primary'
      // set default type onInit
      this.backtestForm.info.active = 'back'
    } else {
      this.outlineColor = 'btn btn-outline-danger'
      this.normalColor = 'btn btn-danger'
    }
  }

  setBetActiveType(){
    this.backtestForm.info.active = this.type.toLowerCase()
  }

  getCorrectSideByType(){
    if(this.type==='Back') return this.backtestForm.info.back
    else return this.backtestForm.info.lay
  }

  setStake(stake: number){
    if(this.type==='Back') this.backtestForm.info.back.stake=stake
    else this.backtestForm.info.lay.stake=stake
  }

  resetStake(){
    if(this.type==='Back') this.backtestForm.info.back.stake=100
    else this.backtestForm.info.lay.stake=100
  }

  netStakeStake(){
    if(this.type==='Back') this.backtestForm.info.back.stake = this.util.sumOfArray(this.backtestForm.backtestBets.map( x => x.stakeLay))
    else this.backtestForm.info.lay.stake = this.util.sumOfArray(this.backtestForm.backtestBets.map( x => x.stakeBack))
  }

}
