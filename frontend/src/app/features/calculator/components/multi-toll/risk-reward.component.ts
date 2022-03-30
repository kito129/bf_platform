import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BackLay} from "../../../../model/calculator/backLay";
import {CalculatorService} from "../../../../services/calculator.service";
import {RiskReward} from "../../../../model/calculator/riskReward";



@Component({
  selector: 'app-risk-reward',
  templateUrl: './risk-reward.component.html',
})
export class RiskRewardComponent implements OnInit {


  public data: RiskReward = this.calculatorService.initializeRiskReward(true)

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {}

  updateEntry(event) {
    this.data.entry = event[0]
    this.inputChange()
  }
  updateStop(event) {
    this.data.stop = event[0]
    this.inputChange()
  }
  updateTarget(event) {
    this.data.target = event[0]
    this.inputChange()
  }


  inputChange() {
    this.data = this.calculatorService.getRiskAndReward(this.data);
  }

  resetData(){
    this.data = this.calculatorService.initializeRiskReward(this.data.isBackBefore);
  }

}
