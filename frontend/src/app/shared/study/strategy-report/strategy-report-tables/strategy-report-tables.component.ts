import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {StrategyReport} from '../../../../model/report/starategyReport';
import {ComparatorTableRow} from '../../../../model/study/study/comparatorTableRow';
import {DatatableComponent, ColumnMode} from '@swimlane/ngx-datatable';
import {CompareStudyCsvGeneratorService} from '../../../../services/compare-study-csv-generator.service';

@Component({
  selector: 'app-strategy-report-tables',
  templateUrl: './strategy-report-tables.component.html',
})
export class StrategyReportTablesComponent implements OnInit {


  @Input() strategyReports: StrategyReport[]
  @Input() strategyWinners: number[][]

  strategyTable: ComparatorTableRow[] = []

  strategyLabels: string[] = []
  strategyPl: number[] = []
  strategyWinRate: number[] = []
  strategyMatch: number[] = []
  strategyPf: number[] = []

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;

  clicked = false


  // width
  colNumberWidth: 25
  colNumberLargeWidth: 70
  colBarWidth: 100

  constructor(private compareStudyCsv: CompareStudyCsvGeneratorService) { }

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
    this.compareStudyCsv.exportToCsv(`${date.getMonth()+1}_${date.getDate()}_${date.getFullYear()}_report.csv`,
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
      this.strategyTable.push({
        studyName: report.title,
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
