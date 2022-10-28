import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TradeCalculatorService} from '../../../../services/trade-calculator.service';
import {Bets, NewTrade} from '../../../../model/report/new/newTrade';
import {Utils} from "../../../../model/utils";

@Component({
  selector: 'app-trade-updates-modal',
  templateUrl: './trade-updates-modal.component.html',
})
export class TradeUpdatesModalComponent implements OnInit {

  @Input() tradeInput: NewTrade
  @Output() tradeUpdateEmitter = new EventEmitter()
  public tradeOutput: NewTrade

  public executor = ['BAGNA', 'KEVIN', 'KITO', 'BAGNA KEVIN', 'BAGNA KEVIN KITO', 'BAGNA KITO', 'KEVIN KITO']
  public exchange = ['UK', 'KITO' ]
  public sport = ['TENNIS', 'SOCCER', 'HORSE']

  addTradeCollapse = true
  betsCollapse = false
  noteCollapse = true
  updateBets = true

  utils = new Utils()

  public date = null

  constructor(private modalService: NgbModal,
              private tradeCalculatorService: TradeCalculatorService) {}

  ngOnInit(): void {

  }

  updateDateTrade(event){
    this.tradeOutput.trade.info.date = event[0]
  }

  openVerticalCenteredModal(content) {

    this.tradeOutput = JSON.parse(JSON.stringify(this.tradeInput))

    this.modalService.open(content, {centered: true, size:'xl', backdrop: 'static', keyboard: false}).result.then((result) => {

      // action before pass to action

      const trade: NewTrade ={
        _id: this.tradeOutput._id,
        created: this.tradeOutput.created,
        updated: new Date().getTime(),
        trade: this.tradeOutput.trade
      }
      this.tradeUpdateEmitter.emit([trade, result]);
    }).catch((res) => {});
  }

  setTennisTournament(event){
    this.tradeOutput.trade.info.tennisTournamentId = event[0].id
  }

  setStrategy(event){
    this.tradeOutput.trade.info.strategyId = event[0].id
  }

  setSelectionAvgOdds(event, index){

    if(event[0]){
      // im back
      this.tradeOutput.trade.selections[index].avg.back.odds = event[1]
      this.tradeOutput.trade.selections[index].avg.back.stake = event[2]
    } else {
      // im lay
      this.tradeOutput.trade.selections[index].avg.lay.odds = event[1]
      this.tradeOutput.trade.selections[index].avg.lay.stake = event[2]
      this.tradeOutput.trade.selections[index].avg.lay.liability = event[3]
    }

  }

  /*
  * SELECTIONS
   */
  addSelection(){
    this.tradeOutput.trade.selections.push({
      selectionN: 0,
      sets: {
        secondSet: 0,
        thirdSet: 0
      },
      runnerId: 0,
      runnerName: '',
      winner: false,
      bsp: 0,
      avg: {
        back: {
          odds: 0,
          stake: 0,
          toWin: 0,
          liability: 0
        },
        lay: {
          odds: 0,
          stake: 0,
          liability: 0,
          toWin:0
        }
      }
    })

  }

  removeSelection(selectionIndex: number) {
    if (selectionIndex > -1) {
      this.tradeOutput.trade.selections.splice(selectionIndex, 1);

      // remove all back of this selection
      let k =0
      for (const trade of this.tradeOutput.trade.trades){
        if(trade.selectionN === selectionIndex){
          this.tradeOutput.trade.trades.splice(k, 1);
          k--
        }
        k++
      }
    }
  }

  /*
  * BETS
 */
  addBet() {
    const addedBet: Bets = {
      id: this.tradeOutput.trade.trades.length+1,
      selectionN: 0,
      odds: 1.01,
      stake: 0,
      liability: 0,
      ifWin: 0,
      options: 'OPEN',
      type: 'back',
      condition: {
        tennis: {
          isTennis: true,
          point: this.utils.getEmptyTennisPoint(),
        },
        football: {
          isFootball: false,
          point: {
            home: 0,
            away: 0,
          }
        },
        horse: {
          isHorse: false,
        },
        time: new Date(this.tradeOutput.trade.info.date).getTime(),
        note: '',
      }
    }
    this.tradeOutput.trade.trades.push(addedBet)
  }

  updateBetsDate(event, trade: any){
    trade.condition.time = event[0]
  }

  removeBets(index: number){
    this.tradeOutput.trade.trades.splice(index, 1);
  }


  /*
  * PUBLIC FOR UPDATE IN FORM
  */

  public exchangeChange(){
    switch (this.tradeOutput.trade.info.exchange.name){
      case ('UK'):{
        this.tradeOutput.trade.info.exchange.commission = 0.02
        break
      }
      case ('KITO'):{
        this.tradeOutput.trade.info.exchange.commission = 0.045
        break
      }
      default:{
        this.tradeOutput.trade.info.exchange.commission = 0.02
        break
      }
    }
  }

  setCurrentSelectionName(event, index: number){
    this.tradeOutput.trade.selections[index].runnerId = event[0].id
    this.tradeOutput.trade.selections[index].runnerName = event[0].name
  }

  setBSPOdds(event, index: number){
    this.tradeOutput.trade.selections[index].bsp = event[0]
  }

  setBetsOdds(event, index:number){
    this.tradeOutput.trade.trades[index].odds = event[0]
    this.updateStake(index)
  }

  updateStake(index: number){
    const bet = this.tradeOutput.trade.trades[index]
    bet.liability = bet.type === 'back' ? bet.stake : bet.stake * (bet.odds-1)
    bet.ifWin = bet.type === 'back' ? bet.stake * (bet.odds-1) : bet.stake
    this.updateAvgOddsPlayer()
  }

  updateAvgOddsPlayer(){
    let i =0
    for (const selection of this.tradeOutput.trade.selections) {
      let back = 0
      let lay = 0
      let totStake = 0
      let totBank = 0
      let totLiab = 0
      for (const trade of this.tradeOutput.trade.trades) {
        console.log(trade)
        if(trade.selectionN === i){
          if(trade.type==='back'){
            back += trade.odds*trade.stake
            totStake += trade.stake
          } else {
            lay += trade.odds*trade.stake
            totBank += trade.stake
            totLiab += trade.liability
          }
        }
      }
      if(back && totStake){
        selection.avg.back.odds = Math.round((back / totStake)*100)/100
        selection.avg.back.stake = totStake
      }
      if(lay && totLiab && totBank){
        selection.avg.lay.odds = Math.round((lay / totBank)*100)/100
        selection.avg.lay.liability = totLiab
        selection.avg.lay.stake = totBank
      }
      i++
    }
  }

  updateFinalResultTennis(event){
    if(event[0]){
      this.tradeOutput.trade.results.finalScore.tennis = event[0]
    }
  }

  updateResultTennisBet(event, index: number){
    if(event[0]){
      this.tradeOutput.trade.trades[index].condition.tennis.point = event[0]
    }
  }

  updateFinalResultFootball(event){
    if(event[0]){
      this.tradeOutput.trade.results.finalScore.football = event[0]
    }
  }

  updateBetsView(){
    this.updateAvgOddsPlayer()
    this.updateBets = false
    setTimeout(() =>
      {
        this.updateBets = true
      },
      100);
  }

  updateResultsData(){
    this.tradeOutput.trade.results.rr = Math.round((this.tradeOutput.trade.results.netProfit / (-this.tradeOutput.trade.results.maxRisk)) * 100) / 100
    this.tradeOutput.trade.results.commissionPaid = this.tradeOutput.trade.results.grossProfit>0 ?
      Math.round((this.tradeOutput.trade.results.grossProfit - this.tradeOutput.trade.results.netProfit)*1000)/1000 : 0
  }
}
