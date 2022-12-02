import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SavedReport} from '../../../../../model/report/savedReport';
import {Subject} from 'rxjs';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Store} from '@ngrx/store';

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
