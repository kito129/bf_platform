import {Component, Input, OnInit} from '@angular/core';
import {BySportStats} from "../../../../model/dashboard/bySportStats";
import {Observable} from "rxjs";

@Component({
  selector: 'app-market-stats',
  templateUrl: './market-stats.component.html',
})
export class MarketStatsComponent implements OnInit {

  @Input()
  marketStats$: Observable<BySportStats>

  constructor() { }

  ngOnInit(): void {
  }

}
