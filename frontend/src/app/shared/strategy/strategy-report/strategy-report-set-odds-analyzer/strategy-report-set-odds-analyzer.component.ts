import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NewTrade} from '../../../../model/report/new/newTrade';
import {TradeSetOddsAnalyzer, TradeSetOddsAnalyzerInterface} from '../../../../model/report/tradeSetOddsAnalyzer';
import {ColumnMode,SelectionType, DatatableComponent} from '@swimlane/ngx-datatable';
import {CompareStudyCsvGeneratorService} from '../../../../services/compare-study-csv-generator.service';

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
  winnerSetNotionalDeltaAbs: number[] = []
  labelsMarketName: string[] = []

  okValue = false

  selected: any[] = [];
  SelectionType = SelectionType;


  constructor(private compareStudyCsv: CompareStudyCsvGeneratorService) { }

  ngOnInit(): void {

    this.analyzer = new TradeSetOddsAnalyzer(this.trades).analyzer
    this.analyzer = this.analyzer.filter( x=> x.winner.bsp<5)

    this.rows = this.analyzer
    this.temp = this.analyzer

    const winnerSetValue = this.analyzer.map( x => {
      this.labelsMarketName.push(x.marketName + ' : ' + x.result.set1.runnerA + '-' + x.result.set1.runnerB
         + '   ' +x.winner.bsp + ' -> ' + x.winner.set1)
      if(x.runnerA.winSet1){
        return{
          winner: 'A',
          bsp: x.runnerA.bsp,
          setOdds: x.runnerA.set1,
          setNotional: x.runnerA.set1Notional,
          setNotionalDelta: x.runnerA.set1NotionalDelta
        }
      } else {
        return{
          winner: 'B',
          bsp: x.runnerB.bsp,
          setOdds: x.runnerB.set1,
          setNotional: x.runnerB.set1Notional,
          setNotionalDelta: x.runnerB.set1NotionalDelta
        }
      }
    })

    for (const winnerSetValueElement of winnerSetValue) {
      this.winnerSetBsp.push(winnerSetValueElement.bsp)
      this.winnerSetOdds.push(winnerSetValueElement.setOdds)
      this.winnerSetNotional.push(winnerSetValueElement.setNotional)
      this.winnerSetNotionalDelta.push(winnerSetValueElement.setNotionalDelta)
      this.winnerSetNotionalDeltaAbs.push(Math.abs(winnerSetValueElement.setNotionalDelta))
    }
    this.okValue = true
  }


  // click selection
  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  updateFilter() {
    const val = this.search.toLowerCase();
    if(val){
      this.rows = this.temp.filter((d: TradeSetOddsAnalyzerInterface) => {
        return (d.trade.trade.info.marketInfo.marketName.toLowerCase().indexOf(val) !== -1 )|| !val;
      });
      this.table.offset = 0;
    } else {
      this.rows = this.temp
    }
  }

  filterOutlierData() {
    this.rows = this.analyzer.map( x=> x.winner.bsp<6)
    this.temp = this.analyzer.map( x=> x.winner.bsp<6)
  }

  saveAsCSV(){
    const date = new Date()
    this.compareStudyCsv.exportToCsv(`${date.getMonth()+1}_${date.getDate()}_${date.getFullYear()}_oddsAnalyzer.csv`,
      JSON.parse(JSON.stringify(this.analyzer.map( (x:TradeSetOddsAnalyzerInterface) => {
        const t = new Date(x.date)
        const d = `${t.getMonth()+1}/${t.getDate()}/${t.getFullYear()}`
        const fav1 = x.runnerA.set1 < x.runnerB.set1 ? 0 : 1
        const fav2 = x.runnerA.set2 < x.runnerB.set2 ? 0 : 1
        const winner1 = x.runnerA.winSet1 ? 'A': 'B'
        const winner2 = x.runnerA.winSet2 ? 'A': 'B'
        const setA = x.runnerA.set1
        const setB = x.runnerB.set1
        return{
          date: d,
          name: x.marketName,
          empty5: null,
          runnerABsp: x.runnerA.bsp,
          setA,
          runnerANotional: x.runnerA.set1Notional,
          runnerANotionalDelta: x.runnerA.set1NotionalDelta,
          empty4: null,
          runnerBBsp: x.runnerB.bsp,
          setB,
          runnerBNotional: x.runnerB.set1Notional,
          runnerBNotionalDelta: x.runnerB.set1NotionalDelta,
          empty: null,
          winner1,
          winnerSet1IsFav: ((fav1 === 0 && winner1 === 'A') || (fav1 === 1 && winner1 === 'B')),
          winner2,
          winnerSet2IsFav: ((fav2 === 0 && winner2 === 'A') || (fav2 === 1 && winner2 === 'B')),
          empty1: null,
          winnerBsp: x.winner.bsp,
          winnerSet: x.winner.set1,
          winnerNotional: x.winner.set1Notional,
          winnerNotionalDelta: x.winner.set1NotionalDelta,
          empty2: null,
          favBsp: !fav1 ? x.runnerA.bsp : x.runnerB.bsp,
          favSet: !fav1 ? x.runnerA.set1 : x.runnerB.set1,
          favNotional: !fav1 ? x.runnerA.set1Notional : x.runnerB.set1Notional,
          favNotionalDelta: !fav1 ? x.runnerA.set1NotionalDelta : x.runnerB.set1NotionalDelta,
          empty3: null,
          set1A: x.result.set1.runnerA,
          set1B: x.result.set1.runnerB,
          set2A: x.result.set2.runnerA,
          set2B: x.result.set2.runnerB,
          set3A: x.result.set3.runnerA,
          set3B: x.result.set3.runnerB,
        }
      })))
    );
  }

}
