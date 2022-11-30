import {Component, Input, OnInit} from '@angular/core';
import {MarketInfoBasic} from '../../../model/market/basic/marketInfoBasic';
import {MarketInfoAdvanced} from '../../../model/market/advanced/marketInfoAdvanced';

@Component({
  selector: 'app-market-info-card',
  templateUrl: './market-detail-info-card.component.html',
})
export class MarketInfoCardComponent implements OnInit {

  @Input()  marketInfoBasic: MarketInfoBasic
  @Input()  marketAdvancedInfo: MarketInfoAdvanced

  constructor() { }


  ngOnInit(): void {

  }

  searchMarketNameGoogle(toSearch: string){
    const URL = 'https://www.google.com/search?q=' + toSearch + ' sofascore';
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    window.moveTo(0,0);
    window.open(URL, toSearch, 'height= 950, width=850, left='+(viewportWidth-300)+', top=0');
  }

}
