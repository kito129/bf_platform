import {Component, Input, OnInit} from '@angular/core';
import {MarketAdditionalInfoTennis} from '../../../model/market/marketAdditionalInfoTennis';
import {TennisPoint} from '../../../model/point/tennisPoint';

@Component({
  selector: 'app-market-additional-info',
  templateUrl: './market-additional-info.component.html',
})
export class MarketAdditionalInfoComponent implements OnInit {


  @Input()marketAdditionalInfo: MarketAdditionalInfoTennis

  finalResult: TennisPoint

  constructor() { }

  ngOnInit(): void {

    if(this.marketAdditionalInfo){
      this.finalResult =  {
        set1: {
          runnerA: this.marketAdditionalInfo.marketAdditionalInfoTennis.finalResult.winner.s1,
          runnerB: this.marketAdditionalInfo.marketAdditionalInfoTennis.finalResult.loser.s1
        },
        set2: {
          runnerA: this.marketAdditionalInfo.marketAdditionalInfoTennis.finalResult.winner.s2,
          runnerB: this.marketAdditionalInfo.marketAdditionalInfoTennis.finalResult.loser.s2
        },
        set3: {
          runnerA: this.marketAdditionalInfo.marketAdditionalInfoTennis.finalResult.winner.s3,
          runnerB: this.marketAdditionalInfo.marketAdditionalInfoTennis.finalResult.loser.s3
        },
        set4: {
          runnerA: this.marketAdditionalInfo.marketAdditionalInfoTennis.finalResult.winner.s4,
          runnerB: this.marketAdditionalInfo.marketAdditionalInfoTennis.finalResult.loser.s4
        },
        set5: {
          runnerA: this.marketAdditionalInfo.marketAdditionalInfoTennis.finalResult.winner.s5,
          runnerB: this.marketAdditionalInfo.marketAdditionalInfoTennis.finalResult.loser.s5
        },
        currentGame: {
          runnerA: '',
          runnerB: '',
          server: ''
        }
      }
    }
  }

}
