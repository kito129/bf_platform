import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Note} from "../../../../model/note/note";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-runner-note-delete-modal',
  templateUrl: './note-delete-modal.component.html',
})
export class NoteDeleteModalComponent implements OnInit {

  @Output() noteDeleteEmitter = new EventEmitter();
  @Input()
  noteInput: Note

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {

  }

  openVerticalCenteredModal(content) {
    this.modalService.open(content, {centered: true}).result.then((result) => {
      this.noteDeleteEmitter.emit([this.noteInput._id,result]);
    }).catch((res) => {});
  }

}
