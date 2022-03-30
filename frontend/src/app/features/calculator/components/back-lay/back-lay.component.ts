import {Component, OnChanges, OnInit, Output} from '@angular/core';
import {BackLay} from "../../../../model/calculator/backLay";

import {CalculatorService} from '../../../../services/calculator.service'
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-back-lay',
  templateUrl: './back-lay.component.html',
})
export class BackLayComponent implements OnInit {


  public data: BackLay = this.calculatorService.initializeBackLay(true)

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit(): void {}

  updateBackOdds(event){
    this.data.backOdds = event[0]
    this.inputChange()
  }

  updateLayOdds(event){
    this.data.layOdds = event[0]
    this.inputChange()
  }



  inputChange() {
    this.data = this.calculatorService.getBackLaySimple(this.data);
  }

  resetData(){
    this.data = this.calculatorService.initializeBackLay(this.data.isBackBefore);
  }
}
