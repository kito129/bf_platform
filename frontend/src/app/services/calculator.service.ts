import {Injectable} from '@angular/core';
import {BackLay} from '../model/calculator/backLay';
import {RiskReward} from '../model/calculator/riskReward';
import {Ladder} from '../model/calculator/ladder';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  public ladder: Ladder;

  constructor() {

    this.ladder = new Ladder(0.02)
  }

  public getBackLaySimple(data:BackLay): BackLay{

    if(data.backOdds>0 && data.layOdds>0 && data.stakeBack>0 && data.commission>=0 && (data.liability>0 ||data.bank>0 )){

      if(data.isBackBefore){
        // BACK / LAY
        // calculate hedge
        data.bank = ((data.backOdds/(data.layOdds-data.commission))*data.stakeBack)
        data.liability = data.bank*data.layOdds-data.bank

        // calculate win for each bets
        data.winBack = data.stakeBack*data.backOdds-data.stakeBack
        data.winLay = data.bank

        // calculate hedge
        data.net = data.winBack-data.liability
        data.rating = data.winBack/data.liability
        data.isValid = true

      } else {
        // LAY / BACK
        // calculate hedge
        if(data.bank== null){
          data.bank = data.liability*data.layOdds-data.liability
        } else if (data.liability== null){
          data.liability = data.bank*data.layOdds-data.bank
        }

        data.stakeBack = ((data.layOdds-data.commission)/data.backOdds)*data.bank;
        data.winBack = data.backOdds*data.stakeBack-data.stakeBack

        // calculate hedge
        data.net = data.winBack-data.liability
        data.rating = data.winBack/data.liability
        data.isValid = true

      }

    } else {
      data.isValid = false
    }

    return data
  }

  public getRiskAndReward(data: RiskReward){

    if(data.entry>0 && data.stop>0 && data.target>0 && data.monetaryStop!==0 && data.monetaryStop!= null && data.commission>=0) {

      if(data.isBackBefore){

        // BACK / LAY

        data.toEntryStake = data.monetaryStop/((data.entry-1)-(data.entry/data.stop*(data.stop-1)))
        // here commission on win entry
        data.toWinEntry = data.entry*data.toEntryStake-data.toEntryStake-Math.abs(((data.entry*data.toEntryStake-data.toEntryStake)*data.commission))

        // to stop
        data.toStopBank = (data.entry/data.stop)*data.toEntryStake
        data.toStopLiability = data.toStopBank*data.stop-data.toStopBank
        data.toWinStop = data.toStopBank

        // to target
        data.toTargetBank = (data.entry/data.target)*data.toEntryStake
        data.toTargetLiability = data.toTargetBank*data.target-data.toTargetBank
        data.toWinTarget = data.toTargetBank

        // net
        data.net = data.toWinEntry-data.toTargetLiability
        data.rating = -data.net/data.monetaryStop

        // commission
        data.commissionPaid = Math.abs(((data.entry*data.toEntryStake-data.toEntryStake)*data.commission))

      } else {

        // LAY / BACK

        data.toEntryLiability = data.monetaryStop/((data.entry*(data.stop-1)/(data.stop*(data.entry-1)))-1)
        data.toEntryBank = data.toEntryLiability/(data.entry-1)
        // here commission on win entry
        data.toWinEntry = data.toEntryBank-Math.abs((data.toEntryBank*data.commission))

        // to stop
        data.toStopStake = (data.entry/data.stop)*data.toEntryBank
        data.toWinStop = data.toStopStake*data.stop-data.toStopStake

        // to target
        data.toTargetStake = (data.entry/data.target)*data.toEntryBank
        data.toWinTarget = data.toTargetStake*data.target-data.toTargetStake

        // net
        data.net = data.toWinEntry-data.toTargetStake
        data.rating = -data.net/data.monetaryStop

        // commission
        data.commissionPaid = Math.abs(data.toEntryBank*data.commission)

      }

      data.isValid = true
    } else {

      data.isValid = false
    }

    return data

  }

  public initializeBackLay(_value:boolean): BackLay{
    return {
      backOdds: null,
      layOdds: null,
      stakeBack: 100.00000,
      bank: 100.00000,
      liability: null,
      winBack: null,
      winLay: null,
      net: null,
      commission: 0.02000,
      isBackBefore: _value,
      isValid: false,
      rating: null,
      commissionPaid: 0
    }

  }

  public initializeRiskReward(_value:boolean): RiskReward{
    return {
      entry: 0,
      stop: 0,
      target: 0,
      toWinEntry: 0,
      toWinStop: 0,
      toWinTarget: 0,
      monetaryStop: -5,
      monetaryTarget: 0,
      toStopBank: 0,
      toStopLiability:0,
      toStopStake: 0,
      toEntryBank: 0,
      toEntryLiability:0,
      toEntryStake: 0,
      toTargetBank: 0,
      toTargetLiability:0,
      toTargetStake: 0,
      winBack: 0,
      winLay: 0,
      net: 0,
      commission: 0.02000,
      isBackBefore: true,
      isValid: false,
      rating: 0,
      commissionPaid: 0
    }
  }

  // ladder
  // BACK
  public addLadderStake(odds:number, stake: number){
    this.ladder.ladder[odds].backSide.addStake(stake)
    this.ladder.ladderResume.update(this.ladder.ladder)
    this.updateWhatIf()
    this.ladder.calculateBEOdd()
  }
  public removeLadderStake(odds:number, stake: number){
    this.ladder.ladder[odds].backSide.removeStake(stake)
    this.ladder.ladderResume.update(this.ladder.ladder)
    this.updateWhatIf()
    this.ladder.calculateBEOdd()
  }
  public resetLadderStake(){
    for (const i of this.ladder.ladder){
      i.backSide.resetStake()
    }
    this.ladder.ladderResume.update(this.ladder.ladder)
  }

  // LAY
  public addLadderBank(odds:number, stake: number){
    this.ladder.ladder[odds].laySide.addBank(stake)
    this.ladder.ladderResume.update(this.ladder.ladder)
    this.updateWhatIf()
    this.ladder.calculateBEOdd()
  }
  public removeLadderBank(odds:number, stake: number){
    this.ladder.ladder[odds].laySide.removeBank(stake)
    this.ladder.ladderResume.update(this.ladder.ladder)
    this.updateWhatIf()
    this.ladder.calculateBEOdd()
  }
  public resetLadderBank(){
    for (const i of this.ladder.ladder){
      i.laySide.resetBank()
    }
    this.ladder.ladderResume.update(this.ladder.ladder)
    this.updateWhatIf()
  }

  // reset ladder
  public resetLadder(){

    this.resetLadderBank()
    this.resetLadderStake()
  }

  public updateWhatIf(){

    for (const ladderCell of this.ladder.ladder){
      ladderCell.updateWhatIfLevel(this.ladder.ladderResume)
    }
  }
}
