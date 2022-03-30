import {Component, Input, OnInit} from '@angular/core';
import {TennisPoint} from "../../../model/point/tennisPoint";
import {FootballPoint} from "../../../model/point/footballPoint";

@Component({
  selector: 'app-trade-formatter',
  templateUrl: './trade-formatter.component.html',
})
export class TradeFormatterComponent implements OnInit {

  @Input() odds: number
  @Input() type: number
  @Input() stake: number
  @Input() bank: number
  @Input() liability: number
  @Input() toWin: number
  @Input() time: number
  @Input() tennisPoint: TennisPoint
  @Input() footballPoint: FootballPoint
  @Input() note: string


  constructor() { }

  ngOnInit(): void {
  }

}
