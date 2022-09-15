import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from "../../../../model/report/new/newTrade";

@Component({
  selector: 'app-avg-odds-traded',
  templateUrl: './avg-odds-traded.component.html',
})
export class AvgOddsTradedComponent implements OnInit {

  @Input() trade: NewTrade

  constructor() { }

  ngOnInit(): void {
  }

}
