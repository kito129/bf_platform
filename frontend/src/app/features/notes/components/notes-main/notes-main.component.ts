import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IsLoading} from '../../../../model/isLoading';
import {Note} from '../../../../model/note/note';
import {Router} from '@angular/router';
import {select, Store} from '@ngrx/store';
import * as notesSelectors from '../../../../store/notes/notes.selectors';
import * as runnersSelectors from '../../../../store/runners/runners.selectors';
import * as tournamentSelectors from '../../../../store/tennis-tournament/tennisTournament.selectors';
import {Runner} from '../../../../model/runner/runner';
import * as notesActions from '../../../../store/notes/notes.actions';
import {TennisTournament} from "../../../../model/tennisTournament/tennisTournament";
import {NoteStats} from "../../../../model/dashboard/noteStats";
import {getNotesStatistics} from "../../../../store/notes/notes.selectors";

@Component({
  selector: 'app-notes-main',
  templateUrl: './notes-main.component.html',
})
export class NotesMainComponent implements OnInit {

  notes$: Observable<Note[]>
  runnersList$: Observable<Runner[]>
  isLoadingNotes$: Observable<IsLoading>
  isLoadingAllRunners$: Observable<IsLoading>

  tournamentList$: Observable<TennisTournament[]>
  isLoadingAllTournament$: Observable<IsLoading>

  notesStatistics$: Observable<NoteStats>
  notesStatisticsMonth$: Observable<any[]>


  constructor(private router: Router,
              private readonly store: Store) {

    this.notes$ = this.store.pipe(select(notesSelectors.getAllNotes))
    this.isLoadingNotes$ = this.store.pipe(select(notesSelectors.getNotesLoading))
    this.runnersList$ = this.store.pipe(select(runnersSelectors.getAllRunners))
    this.isLoadingAllRunners$ = this.store.pipe(select(runnersSelectors.isLoadingAllRunners))
    this.tournamentList$ = this.store.pipe(select(tournamentSelectors.getAllTennisTournaments))
    this.isLoadingAllTournament$ = this.store.pipe(select(tournamentSelectors.getIsLoadingAllTennisTournament))

    this.notesStatistics$ = this.store.pipe(select(notesSelectors.getNotesStats))
    this.notesStatisticsMonth$ = this.store.pipe(select(notesSelectors.getNotesStatistics))
  }

  ngOnInit(): void {
  }

  refreshAllNotes(){
    this.store.dispatch(notesActions.getAllRunnersNotes())
  }

}
