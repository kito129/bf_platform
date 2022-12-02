import {Component, Input, OnInit} from '@angular/core';
import {MarketInfoBasic} from '../../../model/market/basic/marketInfoBasic';
import {MarketInfoAdvanced} from '../../../model/market/advanced/marketInfoAdvanced';
import {GoogleSearchTabServiceService} from "../../../services/google-search-tab-service.service";

@Component({
  selector: 'app-market-info-card',
  templateUrl: './market-detail-info-card.component.html',
})
export class MarketInfoCardComponent implements OnInit {

  @Input()  marketInfoBasic: MarketInfoBasic
  @Input()  marketAdvancedInfo: MarketInfoAdvanced

  constructor(private google: GoogleSearchTabServiceService) { }


  ngOnInit(): void {

  }

  searchMarketNameGoogle(toSearch: string){
    this.google.searchMarketNameGoogle(toSearch, 'sofascore')
  }

}
