import {Component, Input, OnInit} from '@angular/core';
import {MetalistStats} from '../../../model/market/metalist/metalistStats';

@Component({
  selector: 'app-market-advanced-metalist-stats',
  templateUrl: './market-advanced-metalist-stats.component.html',
})
export class MarketAdvancedMetalistStatsComponent implements OnInit {


  @Input() metalistStats: MetalistStats
  constructor() { }

  ngOnInit(): void {
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

}
