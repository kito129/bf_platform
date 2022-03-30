const LADDERS = 1000
const INCREMENTAL = [
  {min:1,max: 1.99,size:0.01},
  {min:2,max: 2.98,size:0.02},
  {min:3,max: 3.95,size:0.05},
  {min:4,max: 5.90,size:0.1},
  {min:6,max: 9.80,size:0.2},
  {min:10,max: 19.5,size:0.5},
  {min:20,max: 49,size:1},
  {min:50,max: 95,size:5},
  {min:100,max: 1000,size:10},
]

export class Ladder {

  public ladder?: LadderLevel[] = []
  public ladderEntry?: LadderEntry
  public commission
  public ladderResume: LadderResume
  public breakEvenOdds: number

  constructor(commission: number) {

    this.ladderEntry = new LadderEntry()
    this.ladderResume = new LadderResume(commission)
    this.commission=0.02
    let j=0
    let i=1.01
    let lastIncremental=0
    let margin = 0.001
    let tickCount = 0

    while (i<=LADDERS) {
      j=0
      while(j<INCREMENTAL.length){
        if(i>=(INCREMENTAL[j].min-margin) && i<=(INCREMENTAL[j].max+margin)){
          this.ladder.push(new LadderLevel(i,tickCount))
          tickCount++
          i = +(i+ INCREMENTAL[j].size).toFixed(2)
          lastIncremental = INCREMENTAL[j].size
          break
        } else if(j===INCREMENTAL.length-1) {
          i = i+lastIncremental
        }
        j++;
      }
    }
  }

   public resetLadder(){
      let tempLadder = []
      let j=0
      let i=1.01
      let lastIncremental=0
      let margin = 0.001
      let tickCount = 0

      while (i<=LADDERS) {
        j=0
        while(j<INCREMENTAL.length){
          if(i>=(INCREMENTAL[j].min-margin) && i<=(INCREMENTAL[j].max+margin)){
            tempLadder.push(new LadderLevel(i,tickCount))
            tickCount++
            i = +(i+ INCREMENTAL[j].size).toFixed(2)
            lastIncremental = INCREMENTAL[j].size
            break
          } else if(j===INCREMENTAL.length-1) {
            i = i+lastIncremental
          }
          j++;
        }
      }
      this.ladder = tempLadder
  }

  public calculateBEOdd(){
    let state
    let checkState
    state = this.ladder[0].whatIf > 0;
    for (let cell of this.ladder){
      checkState = cell.whatIf > 0;
      if(checkState!=state){
        this.breakEvenOdds=cell.odds
        break
      }
    }
  }

}


export class LadderLevel {

  public odds?: number
  public probability?: number
  public ticksUp?: number
  public ticksDown?: number
  public backSide?: LadderLevelBackSide
  public laySide?: LadderLevelLaySide
  public whatIf?: number
  public whatIfStake?: number
  public whatIfBack: boolean

  constructor(i:number, count: number) {

    this.odds = i;
    this.probability = (1/(this.odds))
    this.ticksUp = LADDERS-count
    this.ticksDown = count
    this.backSide= new LadderLevelBackSide(i)
    this.laySide= new LadderLevelLaySide(i)
    this.whatIf= 0
    this.whatIfStake= 0
    this.whatIfBack= false
  }

  public updateWhatIfLevel(resume: LadderResume){

    this.whatIf=0
    this.whatIfStake= 0

    if(resume.totalBackStake>0 || resume.totalLayBank > 0){

      if(resume.avgOddsBack>0){
        // i have to lay
        if(((resume.avgOddsBack*resume.totalBackStake)/this.odds)-resume.totalBackStake>0){

          this.whatIf = this.whatIf + ((((resume.avgOddsBack*resume.totalBackStake)/this.odds)-resume.totalBackStake)*(1-resume.commission))
        } else {

          this.whatIf = this.whatIf + ((((resume.avgOddsBack*resume.totalBackStake)/this.odds)-resume.totalBackStake))
        }
        this.whatIfStake=this.whatIfStake+((resume.avgOddsBack*resume.totalBackStake)/this.odds)
      }
      if(resume.avgOddsLay>0){

        if(resume.totalLayBank-((resume.avgOddsLay*resume.totalLayBank)/this.odds)>0){

          this.whatIf = this.whatIf -((((resume.avgOddsLay*resume.totalLayBank)/this.odds)-resume.totalLayBank)*(1-resume.commission))
        } else {

          this.whatIf = this.whatIf -((((resume.avgOddsLay*resume.totalLayBank)/this.odds)-resume.totalLayBank))
        }
        this.whatIfStake=this.whatIfStake-((resume.avgOddsLay*resume.totalLayBank)/this.odds)

      }

    } else {
      this.whatIf =0
    }
  }
}

export class LadderLevelBackSide{

  public odds?: number
  public stake?: number
  public toWin?: number

  constructor(odds: number) {
    this.stake=0
    this.toWin=0
    this.odds = odds
  }

  public addStake(stake: number){
    this.stake = this.stake +stake
    this.updateToWinLevel()
  }

  public removeStake(stake: number){
    if(this.stake -stake>=0){
      this.stake = this.stake -stake
    } else {
      this.stake =0
    }
    this.updateToWinLevel()
  }

  public resetStake(){
    this.stake = 0
    this.updateToWinLevel()
  }

  private updateToWinLevel(){
    if(this.stake!=0){
      this.toWin = this.odds*this.stake-this.stake
    } else {
      this.toWin=0
    }
  }

}

export class LadderLevelLaySide{


  public odds?: number
  public bank?: number
  public liability?: number
  public toWin?: number


  constructor(odds: number) {
    this.bank=0
    this.toWin=0
    this.odds = odds
  }

  public addBank(bank: number){
    this.bank = this.bank +bank
    this.updateToWinLevel()
  }

  public removeBank(bank: number){
    if(this.bank -bank>=0){
      this.bank = this.bank -bank
    } else {
      this.bank =0
    }
    this.updateToWinLevel()
  }

  public resetBank(){
    this.bank = 0
    this.updateToWinLevel()
  }

  private updateToWinLevel(){
    if(this.bank!=0){
      this.toWin = this.bank
      this.liability = this.bank*this.odds-this.bank
    } else {
      this.toWin=0
      this.liability=0
    }
  }

}

export class LadderEntry{

  public mainStakeBack?: number
  public mainBankLay?: number
  public mainLiabilityLay?: number

  constructor() {

    this.mainBankLay =10
    this.mainLiabilityLay =0
    this.mainStakeBack =10
  }
}

export class LadderResume{

  public avgOddsBack?: number
  public avgOddsLay?: number
  public totalBackStake?: number
  public totalLayBank?: number
  public totalLayLiability?: number
  public totalToWinBack?: number
  public totalToWinLay?: number
  public netBack?: number
  public netLay?: number
  public totalCommission?: number
  public commission?:number
  public breakEvenOdds?: number
  public rating?:number

  constructor(commission: number) {

    this.avgOddsBack=0
    this.avgOddsLay=0
    this.totalBackStake=0
    this.totalLayLiability=0
    this.totalLayBank=0
    this.totalToWinBack =0
    this.totalToWinLay=0
    this.netBack =0
    this.netLay=0
    this.totalCommission=0
    this.commission=commission
    this.breakEvenOdds=0
    this.rating=0
  }
  private reset(){
    this.avgOddsBack=0
    this.avgOddsLay=0
    this.totalBackStake=0
    this.totalLayLiability=0
    this.totalLayBank=0
    this.totalToWinBack =0
    this.totalToWinLay=0
    this.netBack =0
    this.netLay=0
    this.totalCommission=0
    this.rating=0
  }

  public update(ladder: LadderLevel[]){
    this.reset()

    let countBack =0
    let backOddsSum =0
    let countLay =0
    let layOddsSum =0

    for (let ladderCell of ladder){
      // to win
      this.totalToWinLay= this.totalToWinLay + ladderCell.backSide.toWin
      this.totalToWinBack= this.totalToWinBack + ladderCell.laySide.toWin

      // loss
      this.totalBackStake = this.totalBackStake+ ladderCell.backSide.stake
      this.totalLayBank = this.totalLayBank+ ladderCell.laySide.bank

      // odds
      //back
      if(ladderCell.backSide.stake>0){
        backOddsSum = backOddsSum + ladderCell.backSide.stake*ladderCell.backSide.odds
        countBack++
      }
      //lay
      if(ladderCell.laySide.bank>0){
        layOddsSum = layOddsSum +(ladderCell.laySide.bank*ladderCell.laySide.odds)
        countLay++
      }
    }
    this.avgOddsBack = backOddsSum/this.totalBackStake
    this.avgOddsLay = layOddsSum/this.totalLayBank

    // liability for lay side
    if(this.totalLayBank!=0){
      this.totalLayLiability = this.totalLayBank*this.avgOddsLay-this.totalLayBank
    } else {
      this.totalLayLiability=0
    }

    // calculate net
    this.netBack = -this.totalBackStake+this.totalToWinBack
    this.netLay = -this.totalLayLiability+this.totalToWinLay

    // calculate r/R

    if(this.netBack>0 && this.netLay<0){
      this.rating=Math.abs(this.netBack/this.netLay)
    } else if(this.netBack<0 && this.netLay>0) {
      this.rating=Math.abs(this.netLay/this.netBack)
    } else {
      this.rating=0
    }


    // check commission
    if(this.netBack>0){

      this.totalCommission = this.netBack*this.commission
      this.netBack = this.netBack-this.totalCommission
    } else if(this.netLay>0) {

      this.totalCommission = this.netLay*this.commission
      this.netLay = this.netLay-this.totalCommission
    } else {
      this.totalCommission=0
    }

  }
}

