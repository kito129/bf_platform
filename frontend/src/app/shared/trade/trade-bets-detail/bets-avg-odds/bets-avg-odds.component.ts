import {Component, Input, OnInit} from '@angular/core';
import {Trade} from "../../../../model/report/trade/trade";

@Component({
  selector: 'app-bets-avg-odds',
  templateUrl: './bets-avg-odds.component.html',
})
export class BetsAvgOddsComponent implements OnInit {

  @Input() trade: Trade
  @Input() view: boolean

  collapsed = false
  winner = 0

  constructor() { }

  ngOnInit(): void {
    this.collapsed = this.view

    this.trade.trade.selections[0].winner ? this.winner =0 : this.winner =1
  }

}
