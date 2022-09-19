import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TradeDetail} from '../../../model/report/trade';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
})
export class DeleteModalComponent implements OnInit {

  @Input() name: string
  @Input() id: string
  @Input() ids: string[]
  @Input() type: string
  @Output() deleteEmitter = new EventEmitter()
  @Input() options: string
  @Input() isRemove: boolean

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

  }

  openVerticalCenteredModal(content) {
    if (this.isRemove) {
      this.modalService.open(content, {centered: true}).result.then((result) => {
        this.deleteEmitter.emit([this.id, result==='delete' ? 'remove' : 'close' , this.ids]);
      }).catch((res) => {
      });
    } else {
      this.modalService.open(content, {centered: true}).result.then((result) => {
        this.deleteEmitter.emit([this.id, result, this.ids]);
      }).catch((res) => {
      });
    }
  }
}
