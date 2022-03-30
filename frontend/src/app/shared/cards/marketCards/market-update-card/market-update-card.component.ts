import {Component, Input, OnInit} from '@angular/core';
import {MarketUpdatesBasic} from '../../../../model/market/basic/marketUpdatesBasic';
import {MarketInfoBasic} from '../../../../model/market/basic/marketInfoBasic';
import {MarketInfoAdvanced} from '../../../../model/market/advanced/marketInfoAdvanced';

@Component({
  selector: 'app-market-update-card',
  templateUrl: './market-update-card.component.html',
})
export class MarketUpdateCardComponent implements OnInit {

  @Input() marketUpdates: MarketUpdatesBasic
  @Input() marketInfoBasic: MarketInfoBasic
  @Input() marketInfoAdvanced: MarketInfoAdvanced
  @Input() marketUpdateOnlyData: {
    'timestamp': number,
    'openDate': number,
    'status': string,
    'betDelay': number,
    'inPlay': boolean
  }[]

  inPlayDuration = 0
  notSuspended = false

  constructor() { }

  ngOnInit(): void {
    let openTime = 0
    let closeTime = 0


    if(this.marketInfoBasic){
      openTime = this.marketInfoBasic.marketInfo.openDate
    } else {
      openTime = this.marketInfoAdvanced.marketInfo.openDate
    }

    if(this.marketUpdates){
      let temp: any = this.marketUpdates.marketUpdates.filter(x => {
        return x.status.indexOf('SUSPENDED')!==-1
      })
      temp = temp[temp.length-1]

      if(temp){
        closeTime = temp.timestamp
      }

      if(!closeTime){
        this.notSuspended = true
        closeTime = this.marketUpdates.marketUpdates.filter(x => {
          return x.status.indexOf('CLOSED')!==-1
        })[0].timestamp
      }

      console.log(closeTime)

      this.inPlayDuration = closeTime-openTime
    }

  }

}

