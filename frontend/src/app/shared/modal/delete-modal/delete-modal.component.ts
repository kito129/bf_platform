import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
})
export class DeleteModalComponent implements OnInit {

  @Input() name: string
  @Input() id: string
  @Input() type: string
  @Output() deleteEmitter = new EventEmitter()
  @Input() options: 'Delete' | 'Duplicate' | 'Update' | 'Create'

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

  }

  openVerticalCenteredModal(content) {
    this.modalService.open(content, {centered: true}).result.then((result) => {
      this.deleteEmitter.emit([this.id, result]);
    }).catch((res) => {});
  }

}
