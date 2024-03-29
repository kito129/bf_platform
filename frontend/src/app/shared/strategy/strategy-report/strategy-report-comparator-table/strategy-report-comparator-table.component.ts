import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {StrategyReport} from '../../../../model/report/strategy/starategyReport';
import {ComparatorTableRow} from '../../../../model/study/report/comparatorTableRow';
import {DatatableComponent, ColumnMode} from '@swimlane/ngx-datatable';
import {Utils} from '../../../../model/utils';

@Component({
  selector: 'app-strategy-report-comparator-table',
  templateUrl: './strategy-report-comparator-table.component.html',
  styles: ['/deep/ .datatable-row-even {background-color: #181818;}']
})
export class StrategyReportComparatorTableComponent implements OnInit {
  @Input() strategyReports: StrategyReport[]
  @Input() strategyWinners: number[][]
  @Input() wantChart: boolean

  strategyTable: ComparatorTableRow[] = []

  strategyLabels: string[] = []
  strategyPl: number[] = []
  strategyWinRate: number[] = []
  strategyMatch: number[] = []
  strategyPf: number[] = []

  util = new Utils()

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;

  clicked = false


  // width
  colNumberWidth: 25
  colNumberLargeWidth: 70
  colBarWidth: 100

  constructor() { }

  ngOnInit(): void {
    this.generateDataForTable()

    this.strategyLabels = this.strategyTable.map( x=> x.studyName)
    this.strategyPl = this.strategyTable.map( x=> x.pl)
    this.strategyWinRate = this.strategyTable.map( x=> x.winRate)
    this.strategyMatch = this.strategyTable.map( x=> x.match)
    this.strategyPf = this.strategyTable.map( x=> x.profitFactor)

    // set data to table
    this.temp = [...this.strategyTable]
    this.rows = this.strategyTable
  }

  saveAsCSV() {
    const date = new Date()
    this.util.exportToCsv(`${date.getMonth()+1}_${date.getDate()}_${date.getFullYear()}_report.csv`,
      this.strategyTable.sort((a,b) => {
        if(a.studyName < b.studyName) { return -1; }
        if(a.studyName > b.studyName) { return 1; }
        return 0;
     })
    );
  }

  generateDataForTable(){
    let i=0
    for (const report of this.strategyReports){
      let title = ''
      if(report.strategy){
        title = report.strategy.strategy.info.name
      } else {
        title = report.title
      }
      this.strategyTable.push({
        studyName: title,
        match: report.trades.total,
        win: this.strategyWinners[i][0],
        loss: this.strategyWinners[i][1],
        void: this.strategyWinners[i][2],
        winRate: this.strategyWinners[i][0] /report.trades.total,
        lossRate: this.strategyWinners[i][1] /report.trades.total,
        voidRate: this.strategyWinners[i][2] /report.trades.total,
        expectedValue: ((this.strategyWinners[i][0] /report.trades.total) * report.trades.detail.profit.averageCash) + ((this.strategyWinners[i][1] /report.trades.total) * report.trades.detail.loss.averageCash) ,
        pl: report.cash.pl,
        maxDD: report.trades.dd.max.dd,
        maxDDPercent: report.trades.dd.max.percent,
        avgDD: report.trades.dd.avg.dd,
        avgDDPercent: report.trades.dd.avg.percent,
        stdvDD: report.trades.dd.stdv.dd,
        stdvDDPercent: report.trades.dd.stdv.percent,
        avgWin: report.trades.detail.profit.averageCash,
        avgLoss: report.trades.detail.loss.averageCash,
        profitFactor: report.trades.detail.profit.grossCash / -report.trades.detail.loss.grossCash,
        profitGross: report.trades.detail.profit.grossCash,
        lossGross: report.trades.detail.loss.grossCash,
        avgConsecutiveWin: report.trades.detail.profit.consecutiveAvgNumber,
        avgConsecutiveLoss: report.trades.detail.loss.consecutiveAvgNumber,
        maxConsecutiveWinCash: report.trades.detail.profit.consecutiveCash,
        maxConsecutiveLossCash: report.trades.detail.loss.consecutiveCash,
        maxConsecutiveWin: report.trades.detail.profit.consecutiveNumber,
        maxConsecutiveLoss: report.trades.detail.loss.consecutiveNumber,
      })
      i++
    }
  }


}
