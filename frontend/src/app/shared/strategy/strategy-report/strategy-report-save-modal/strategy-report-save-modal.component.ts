import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SavedReport} from '../../../../model/report/new/savedReport';
import {NewTrade} from '../../../../model/report/new/newTrade';
import {TradeDetail} from '../../../../model/report/trade';

@Component({
  selector: 'app-strategy-report-save-modal',
  templateUrl: './strategy-report-save-modal.component.html',
})
export class StrategyReportSaveModalComponent implements OnInit {

  @Input() title: string
  @Input() selected: TradeDetail[]
  @Output() saveReportEmitter = new EventEmitter();

  selectedReport: SavedReport
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.buildSelectedReport()
  }


  saveReport(content){
    this.modalService.open(content, {centered: true}).result.then((result) => {
      // when click save
      this.saveClick()
      this.saveReportEmitter.emit([this.selectedReport,result])
    }).finally(()=>{
      // reset for next input
      this.buildSelectedReport()
    })
  }

  buildSelectedReport() {
    this.selectedReport = {
      created: Date.now(),
      updated: Date.now(),
      savedReport: {
        name: this.title,
        comment: '',
        type: '',
        trade: []
      }
    }
    this.selectedReport.savedReport.name = this.title
  }

  saveClick(){
    // set data
    this.selectedReport.savedReport.trade = this.selected.map(x => x.trade._id)

    // check if ok format and emit the value
    console.log(this.selectedReport)
  }
}


