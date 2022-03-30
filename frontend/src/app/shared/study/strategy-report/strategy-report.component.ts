import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {StrategyReport} from '../../../model/report/starategyReport';
import {Trade} from '../../../model/report/trade';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-strategy-report',
  templateUrl: './strategy-report.component.html',
})
export class StrategyReportComponent implements OnInit, OnDestroy {

  @Input() selectedStrategyReport: StrategyReport
  @Input() selectedStrategyTrades$: Observable<Trade[]>
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
      .subscribe( data => {
        if(data){
          // check for reset tab position when selected change
          if(data.length !== this.prevSize){
            this.defaultNavActiveId = 1
          }
          // create data for charts
          let i =0
          this.tradeLabels = data.map(x => {
            i++
            return i.toString() + ') ' + new  Date(x.trade.info.date).getFullYear().toString().substring(2) + '/' + (new Date(x.trade.info.date).getMonth()+1) + '/' + new Date(x.trade.info.date).getDate()+ ' - ' + x.trade.info.marketInfo.marketName
          })
          this.tradeRR = data.map(x => {
            if(x.trade.result.rr){
              return +x.trade.result.rr.toFixed(2)
            } else {
              return 0
            }
          })
          this.tradeMaxRisk = data.map(x => {
            if(x.trade.result.maxRisk){
              return +x.trade.result.maxRisk.toFixed(2)
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
