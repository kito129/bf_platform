import {Component, Input, OnInit} from '@angular/core';
import {Note} from "../../../../model/note/note";
import {select, Store} from "@ngrx/store";
import * as tennisTournamentSelectors from "../../../../store/tennis-tournament/tennisTournament.selectors";

@Component({
  selector: 'app-note-row-detail',
  templateUrl: './note-row-detail.component.html',
})
export class NoteRowDetailComponent implements OnInit {

  @Input()
  noteDetail: Note

  constructor(private readonly store: Store) {  }

  ngOnInit(): void {
  }


  getTennisTournamentName(id: string){
    return this.store.pipe(select(tennisTournamentSelectors.getTennisTournamentNameById(id)))
  }

}
