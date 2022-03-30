import {Component, Input, OnInit} from '@angular/core';
import {Note} from '../../../../model/note/note';

@Component({
  selector: 'app-live-dragula-note-detail',
  templateUrl: './live-dragula-note-detail.component.html',
})
export class LiveDragulaNoteDetailComponent implements OnInit {

  @Input() notes: Note[]

  today = Date.now()

  constructor() { }

  ngOnInit(): void {
  }

}
