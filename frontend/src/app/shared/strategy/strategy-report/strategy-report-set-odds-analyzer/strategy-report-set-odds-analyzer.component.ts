import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NewTrade} from '../../../../model/report/new/newTrade';
import {TradeSetOddsAnalyzer, TradeSetOddsAnalyzerInterface} from '../../../../model/report/tradeSetOddsAnalyzer';
import {ColumnMode,SelectionType, DatatableComponent} from '@swimlane/ngx-datatable';
import {of} from "rxjs";

@Component({
  selector: 'app-strategy-report-set-odds-analyzer',
  templateUrl: './strategy-report-set-odds-analyzer.component.html',
})
export class StrategyReportSetOddsAnalyzerComponent implements OnInit {

  @Input() trades: NewTrade[]

  analyzer: TradeSetOddsAnalyzerInterface[] = null

  ColumnMode = ColumnMode;
  tableSize = 30
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows = [];
  temp =[] ;

  limitSuccessMin= -0.1
  limitSuccessMax= 0.1

  limitWarningMin= 0.15
  limitWarningMax= 0.15

  search=''

  winnerSetBsp: number[] = []
  winnerSetOdds: number[] = []
  winnerSetNotional: number[] = []
  winnerSetNotionalDelta: number[] = []
  labelsMarketName: string[] = []

  okValue = false

  selected: any[] = [];
  SelectionType = SelectionType;


  constructor() { }

  ngOnInit(): void {
    this.analyzer = new TradeSetOddsAnalyzer(this.trades).analyzer
    this.rows = this.analyzer
    this.temp = this.analyzer

    const winnerSetValue = this.analyzer.map( x => {
      this.labelsMarketName.push(x.marketName + ' : ' + x.result.set1.runnerA + '-' + x.result.set1.runnerB)
      if(x.runnerA.winSet2){
        return{
          winner: 'A',
          bsp: x.runnerA.bsp,
          setOdds: x.runnerA.set2,
          setNotional: x.runnerA.set2Notional,
          setNotionalDelta: x.runnerA.set2NotionalDelta
        }
      } else {
        return{
          winner: 'B',
          bsp: x.runnerB.bsp,
          setOdds: x.runnerB.set2,
          setNotional: x.runnerB.set2Notional,
          setNotionalDelta: x.runnerB.set2NotionalDelta
        }
      }
    })

    for (const winnerSetValueElement of winnerSetValue) {
      this.winnerSetBsp.push(winnerSetValueElement.bsp)
      this.winnerSetOdds.push(winnerSetValueElement.setOdds)
      this.winnerSetNotional.push(winnerSetValueElement.setNotional)
      this.winnerSetNotionalDelta.push(winnerSetValueElement.setNotionalDelta)
    }
    this.okValue = true
  }


  // click selection
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  updateFilter(){

  }

}
