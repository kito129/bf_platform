import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IsLoading} from "../../../model/isLoading";
import {Entry} from "../../../model/study/entry/entry";
import {select, Store} from "@ngrx/store";
import * as entrySelectors from "../../../store/study/entry/entry.selectors";

@Component({
  selector: 'app-entry-main',
  templateUrl: './entry-main.component.html',
})
export class EntryMainComponent implements OnInit {

  // entries
  allEntries$: Observable<Entry[]>
  isLoadingAllEntry$: Observable<IsLoading>

  selectedEntryId$: Observable<string>
  selectedEntry$: Observable<Entry>

  constructor(private readonly store: Store) {}

  ngOnInit(): void {

    // entries
    this.isLoadingAllEntry$ = this.store.pipe(select(entrySelectors.isLoadingAllEntries))
    this.allEntries$ = this.store.pipe(select(entrySelectors.getAllEntries))

    // selected entry
    this.selectedEntryId$ = this.store.pipe(select(entrySelectors.getSelectedEntryId))
    this.selectedEntry$ = this.store.pipe(select(entrySelectors.getSelectedEntry))

  }



}
