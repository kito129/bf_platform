import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {NoteStats} from "../../../../model/dashboard/noteStats";

@Component({
  selector: 'app-notes-stats',
  templateUrl: './notes-stats.component.html',
})
export class NotesStatsComponent implements OnInit {

  @Input()
  noteStats$: Observable<NoteStats>

  constructor() { }

  ngOnInit(): void {
  }

}
