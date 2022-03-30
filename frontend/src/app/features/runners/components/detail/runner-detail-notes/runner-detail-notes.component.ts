import {Component, Input, OnInit} from '@angular/core';
import {RunnersState} from "../../../../../store/runners/runners.reducer";
import {Observable, of} from "rxjs";
import {Note} from "../../../../../model/note/note";
import {select, Store} from "@ngrx/store";
import * as notesSelectors from "../../../../../store/notes/notes.selectors";
import * as fromNotes from "../../../../../store/notes/notes.reducers";
import {IsLoading} from "../../../../../model/isLoading";
import {Runner} from "../../../../../model/runner/runner";
import {TennisTournament} from "../../../../../model/tennisTournament/tennisTournament";

@Component({
  selector: 'app-runner-detail-notes',
  templateUrl: './runner-detail-notes.component.html',
})
export class RunnerDetailNotesComponent implements OnInit {


  @Input()
  runnerNotes: Note[]
  @Input()
  tournamentList: TennisTournament[]
  @Input()
  runnersList: Runner[]

  constructor(private store: Store) { }

  ngOnInit(): void {
  }



}
