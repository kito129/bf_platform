import { Component, OnInit } from '@angular/core';
import {CalculatorService} from '../../../../services/calculator.service';
import {Ladder} from '../../../../model/calculator/ladder';

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
})
export class LadderComponent implements OnInit {

  ladder: Ladder
  public myMath = Math;

  constructor(private calculatorService: CalculatorService) {

    this.ladder = this.calculatorService.ladder

  }

  ngOnInit(): void {
  }


  // BACK SIDE
  leftClickBack(odds:number, stake:number) {
    this.calculatorService.addLadderStake(odds,stake)
  }
  rightClickBack($event, odds:number, stake:number) {
    $event.preventDefault();
    this.calculatorService.removeLadderStake(odds,stake)
  }
  resetBack(){
    this.calculatorService.resetLadderStake()
  }

  // LAY SIDE
  leftClickLay(odds:number, stake:number) {
    this.calculatorService.addLadderBank(odds,stake)
  }
  rightClickLay($event, odds:number, stake:number) {
    $event.preventDefault();
    this.calculatorService.removeLadderBank(odds,stake)
  }
  resetLay(){
    this.calculatorService.resetLadderBank()
  }

  // to add hedge markets
  public clickNet(odds:number, stake:number){

    if(stake<0){
      this.leftClickBack(odds,-stake)

    } else if(stake>0){
      this.leftClickLay(odds,stake)
    }
  }

  // RESET ALL LADDER
  resetLadder(){
    this.calculatorService.resetLadder()
  }

  // stake click
  public backClickStake(value: number){
    this.ladder.ladderEntry.mainStakeBack = value
  }
  public layClickBank(value: number){
    this.ladder.ladderEntry.mainBankLay = value
  }

  // net bets
  public netBack(){
    this.ladder.ladderEntry.mainStakeBack = this.ladder.ladderResume.totalLayBank

  }
  public netLay(){
    this.ladder.ladderEntry.mainBankLay = this.ladder.ladderResume.totalBackStake

  }

}
