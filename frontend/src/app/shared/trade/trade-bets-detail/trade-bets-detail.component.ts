import {Component, Input, OnInit} from '@angular/core';
import {TradeBets} from '../../../model/report/trade/tradeBets';
import {Bets, Trade} from '../../../model/report/trade/trade';
import {Utils} from '../../../model/utils';
import {TennisPoint} from '../../../model/point/tennisPoint';
import {FootballPoint} from '../../../model/point/footballPoint';

@Component({
  selector: 'app-trade-bets-detail',
  templateUrl: './trade-bets-detail.component.html',
})
export class TradeBetsDetailComponent implements OnInit {

  @Input() trade: Trade
  @Input() onlyBets: boolean
  @Input() tradeEdit: boolean

  bets: TradeBets[] = []
  betsA: TradeBets[] = []
  betsB: TradeBets[] = []

  split = true

  util = new Utils()

  constructor() { }

  ngOnInit(): void {
    if(this.trade.trade.trades.length){
      this.bets = this.util.generateBetsFromTrade(this.trade)
      this.betsA = this.util.generateBetsFromTrade(this.trade).filter( x => x.selectionN === 0 )
      this.betsB = this.util.generateBetsFromTrade(this.trade).filter( x => x.selectionN === 1 )
    }
  }

  betUpdate(event:TradeBets[], fromWhere: string){
    let tempBets = []
    for (const trade of event) {
      const temp: Bets = {
        id: trade.id,
        selectionN: trade.selectionN,
        odds: trade.odds,
        stake: trade.stake,
        liability: trade.liability,
        ifWin: trade.toWin,
        options: trade.options,
        type: trade.type,
        condition: {
          tennis: {
            isTennis: true,
            point: trade.point
          },
          football: {
            isFootball: false,
            point: null
          },
          horse: {
            isHorse: false
          },
          note: trade.note,
          time: trade.time
        }
      }
      tempBets.push(temp)
    }
    if (fromWhere==='ALL'){
      this.trade.trade.trades = tempBets
    } else if(fromWhere==='A'){
      tempBets = tempBets.concat(this.trade.trade.trades.filter(x => x.selectionN === 1))
      this.trade.trade.trades = tempBets
    } else if(fromWhere==='B'){
      tempBets = tempBets.concat(this.trade.trade.trades.filter(x => x.selectionN === 0))
      this.trade.trade.trades = tempBets
    }
  }
}
