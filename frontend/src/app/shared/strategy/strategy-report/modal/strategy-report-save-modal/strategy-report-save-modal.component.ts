import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SavedReport} from '../../../../../model/report/new/savedReport';
import {TradeDetail} from '../../../../../model/report/trade';

@Component({
  selector: 'app-strategy-report-save-modal',
  templateUrl: './strategy-report-save-modal.component.html',
})
export class StrategyReportSaveModalComponent implements OnInit {

  @Input() title: string
  @Input() selected: TradeDetail[]
  @Output() saveReportEmitter = new EventEmitter();

  savedReport: SavedReport
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buildSelectedReport()
  }


  saveReport(content){
    this.modalService.open(content, {centered: true}).result.then((result) => {
      // when click save
      this.saveClick()
      this.saveReportEmitter.emit([this.savedReport,result])
    }).finally(()=>{
      // reset for next input
      this.buildSelectedReport()
    })
  }

  buildSelectedReport() {
    this.savedReport = {
      created: Date.now(),
      updated: Date.now(),
      savedReport: {
        name: this.title,
        comment: '',
        type: '',
        tradesIds: []
      }
    }
    this.savedReport.savedReport.name = this.title
  }

  saveClick(){
    // set data
    this.savedReport.savedReport.tradesIds = this.selected.map(x => x.trade._id)

    // check if ok format and emit the value
    console.log(this.savedReport)
  }
}


