import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TradeDetail} from '../../../../../model/report/trade';
import {SavedReport} from '../../../../../model/report/new/savedReport';
import {ListForm} from '../../../../../model/listForm';
import {Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {select, Store} from '@ngrx/store';
import * as reportSelectors from '../../../../../store/report/report.selectors';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-strategy-report-saved-updates',
  templateUrl: './strategy-report-saved-updates.component.html',
})
export class StrategyReportSavedUpdatesComponent implements OnInit {

  @Input() savedReport: SavedReport
  @Output() updateSavedReportEmitter = new EventEmitter();

  savedReportOutput: SavedReport

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private modalService: NgbModal,
              private readonly store: Store) { }

  ngOnInit(): void {
    this.savedReportOutput = JSON.parse(JSON.stringify(this.savedReport))
  }

  updateSavedReport(content){
    this.modalService.open(content, {centered: true}).result.then((result) => {
      // when click save
      this.savedReportOutput.updated = Date.now()
      this.updateSavedReportEmitter.emit([this.savedReportOutput,result])
    }).finally(()=>{
    })
  }

}
