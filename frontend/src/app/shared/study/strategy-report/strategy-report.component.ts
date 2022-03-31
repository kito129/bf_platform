import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {StrategyReport} from '../../../model/report/starategyReport';
import {Trade} from '../../../model/report/trade';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {NewTrade} from '../../../model/report/new/newTrade';

@Component({
  selector: 'app-strategy-report',
  templateUrl: './strategy-report.component.html',
})
export class StrategyReportComponent implements OnInit, OnDestroy {

  @Input() selectedStrategyReport: StrategyReport
  @Input() selectedStrategyTrades$: Observable<NewTrade[]>
  @Input() selectedStrategyPie: number[] = [0,0,0]

  defaultNavActiveId = 1
  prevSize = -1

  chartHeight = 800

  tradeLabels: string[] = []
  tradeRR: number[] = []
  tradeMaxRisk: number[] = []
  tradeResult: number[] = []
  labels: number[] = []

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  ngOnInit(): void {
    this.selectedStrategyTrades$
      .pipe(takeUntil(this.destroy$))
      .subscribe(tradesList => {
        if(tradesList){
          // check for reset tab position when selected change
          if(tradesList.length !== this.prevSize && this.defaultNavActiveId in [4,5,6]){
            //this.defaultNavActiveId = 1
          }
          this.prevSize=tradesList.length
          // create labels for charts
          let i =0
          this.tradeLabels = tradesList.reverse().map(x => {
            i++
            // + new  Date(x.trade.info.date).getFullYear().toString().substring(2) + '/' + (new Date(x.trade.info.date).getMonth()+1) + '/' + new Date(x.trade.info.date).getDate()+ ' - ' +
            return i.toString() + ') ' + x.trade.info.marketInfo.marketName
          })
          // create rr data
          this.tradeRR = tradesList.map(x => {
            if(x.trade.results.rr){
              return +x.trade.results.rr.toFixed(2)
            } else {
              return 0
            }
          })
          // create max risk data
          this.tradeMaxRisk = tradesList.map(x => {
            if(x.trade.results.maxRisk){
              return +x.trade.results.maxRisk.toFixed(2)
            } else {
              return 0
            }
          })
        }
    })
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }



}
