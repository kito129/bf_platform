import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {DatatableComponent, ColumnMode} from "@swimlane/ngx-datatable";
import {Store} from "@ngrx/store";
import {Entry} from "../../../../../model/study/entry/entry";
import * as entryActions from "../../../../../store/study/entry/entry.actions";

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
})
export class EntryListComponent implements OnInit {

  @Input() entries: Entry[]
  @Input() selectedEntryId: string

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;

  columns = [
    { name: 'date', sortable: true},
    { name: 'name', sortable: false},
    { name: 'description', sortable: false},
    { name: 'select', sortable: false},
  ];

  constructor(private store: Store) { }


  ngOnInit(): void {
    this.temp = [...this.entries]
    this.rows = this.entries
  }

  onClick(id: string) {
    if(this.selectedEntryId === id){
      this.store.dispatch(entryActions.unsetSelectedEntry())
    } else if(id !== this.selectedEntryId) {
      this.store.dispatch(entryActions.setSelectedEntry({id: id}))
    }
  }

  onDuplicateClick(entry: Entry) {
    const newEntry = JSON.parse(JSON.stringify(entry))
    newEntry.created = Date.now()
    newEntry.lastUpdate = Date.now()
    newEntry.entry.name = newEntry.entry.name + ' - DUPLICATE'

    // remove id from data
    delete newEntry._id;
    for(const bet of newEntry.entry.bets){
      delete bet._id
    }
    // dispatch actions with duplicated payload
    this.store.dispatch(entryActions.createEntry({ entry: newEntry}))
  }

  reset(){
    this.store.dispatch(entryActions.unsetSelectedEntry())
  }

  deleteModal(event){
    if(event[1]==='delete'){
      // DELETE runner note
      this.store.dispatch(entryActions.deleteEntry({ _id: event[0] }));
    }
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter(function (d) {
      return d.entry.name.toLowerCase().indexOf(val)!== -1 || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


}
