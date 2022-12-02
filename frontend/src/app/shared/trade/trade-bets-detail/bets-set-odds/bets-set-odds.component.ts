import {Component, Input, OnInit} from '@angular/core';
import {Trade} from '../../../../model/report/trade/trade';
import {TradeSetOddsAnalyzer, TradeSetOddsAnalyzerInterface} from '../../../../model/report/trade/tradeSetOddsAnalyzer';

@Component({
  selector: 'app-bets-set-odds',
  templateUrl: './bets-set-odds.component.html',
})
export class BetsSetOddsComponent implements OnInit {

  @Input() trade: Trade
  @Input() view: boolean

  analyzer: TradeSetOddsAnalyzerInterface

  collapsed = false

  haveSet2 = false
  haveSet3 = false

  constructor() { }

  ngOnInit(): void {

    this.collapsed = this.view

    this.analyzer = new TradeSetOddsAnalyzer([this.trade]).analyzer[0]

    this.trade.trade.selections[0].sets.secondSet>0 ? this.haveSet2 = true : this.haveSet2 = false
    this.trade.trade.selections[0].sets.thirdSet>0 ? this.haveSet3 = true : this.haveSet3 = false

  }

}
