import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
})
export class CalculatorComponent implements OnInit {


  defaultNavActiveId:number = 1

  constructor() { }

  ngOnInit(): void {
  }

}
