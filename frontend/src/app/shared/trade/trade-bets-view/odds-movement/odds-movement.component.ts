import {Component, Input, OnInit} from '@angular/core';
import {NewTrade} from "../../../../model/report/new/newTrade";
import {TradeSetOddsAnalyzer, TradeSetOddsAnalyzerInterface} from "../../../../model/report/tradeSetOddsAnalyzer";

@Component({
  selector: 'app-odds-movement',
  templateUrl: './odds-movement.component.html',
})
export class OddsMovementComponent implements OnInit {

  @Input() trade: NewTrade

  analyzer: TradeSetOddsAnalyzerInterface

  constructor() { }

  ngOnInit(): void {

    this.analyzer = new TradeSetOddsAnalyzer([this.trade]).analyzer[0]
  }

}
