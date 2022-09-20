import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TradeDetail} from '../../../../model/report/trade';
import {SavedReport} from '../../../../model/report/new/savedReport';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {select, Store} from '@ngrx/store';
import * as reportSelectors from '../../../../store/report/report.selectors';
import {takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {ListForm} from '../../../../model/listForm';

@Component({
  selector: 'app-strategy-report-add-trades-to-saved',
  templateUrl: './strategy-report-add-trades-to-saved.component.html',
})
export class StrategyReportAddTradesToSavedComponent implements OnInit, OnDestroy {

  @Input() title: string
  @Input() selected: TradeDetail[]
  @Output() updateSavedReportEmitter = new EventEmitter();

  savedReports: SavedReport[]
  savedReportList: ListForm[]

  selectedId=''

  savedReport: SavedReport

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private modalService: NgbModal,
              private readonly store: Store) { }

  ngOnInit(): void {

    this.store.pipe(select(reportSelectors.getAllSavedReports))
      .pipe(takeUntil(this.destroy$))
      .subscribe( data => {
        console.log(data)
        this.savedReports = data
        this.savedReportList = this.savedReports.map( x => {
          return {
            name: x.savedReport.name,
            id: x._id
          }
        })
      })
  }

  updateSavedReport(content){
    this.modalService.open(content, {centered: true}).result.then((result) => {
      // when click save
      for (const tradeId of this.selected) {
        const id = tradeId.trade._id
        if(!this.savedReport.savedReport.tradesIds.includes(id)){
          this.savedReport.savedReport.tradesIds.push(id)
        }
      }
      this.updateSavedReportEmitter.emit([this.savedReport,result])
    }).finally(()=>{
      // reset for next input
      this.selectedId = ''
      this.savedReport = null

    })
  }

  updateSelection(){
    if(this.selectedId){
      this.savedReport = this.savedReports.filter( x => x._id === this.selectedId)[0]
    } else {
      this.selectedId = ''
    }

  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
