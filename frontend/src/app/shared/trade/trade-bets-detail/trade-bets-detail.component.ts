import {Component, Input, OnInit} from '@angular/core';
import {TradeBets} from '../../../model/report/trade/tradeBets';
import {Trade} from '../../../model/report/trade/trade';
import {Utils} from "../../../model/utils";

@Component({
  selector: 'app-trade-bets-detail',
  templateUrl: './trade-bets-detail.component.html',
})
export class TradeBetsDetailComponent implements OnInit {

  @Input() trade: Trade
  @Input() onlyBets: boolean

  bets: TradeBets[] = []
  betsA: TradeBets[] = []
  betsB: TradeBets[] = []

  split = false

  util = new Utils()

  constructor() { }

  ngOnInit(): void {
    if(this.trade.trade.trades.length){
      this.bets = this.util.generateBetsFromTrade(this.trade)
      this.betsA = this.util.generateBetsFromTrade(this.trade).filter( x => x.selectionN === 0 )
      this.betsB = this.util.generateBetsFromTrade(this.trade).filter( x => x.selectionN === 1 )
    }
  }
}
