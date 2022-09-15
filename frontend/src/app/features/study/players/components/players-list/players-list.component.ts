import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import {Players} from "../../../../../model/study/players/players";
import {Store} from "@ngrx/store";
import * as playersActions from "../../../../../store/study/players/players.actions";
import {Entry} from "../../../../../model/study/entry/entry";
import * as entryActions from "../../../../../store/study/entry/entry.actions";

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styles: ['/deep/ .datatable-row-even {background-color: #181818;}']
})
export class PlayersListComponent implements OnInit {

  @Input() playersList: Players[]
  @Input() selectedPlayerId: string

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  columns = [
    { name: 'Date', sortable: true},
    { name: 'Name', sortable: true},
    { name: 'Selection', sortable: true},
    { name: 'Tolls', sortable: false},
  ];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.temp = [...this.playersList]
    this.rows = this.playersList
  }

  onClick(id: string) {
    if(this.selectedPlayerId === id){
      this.store.dispatch(playersActions.unsetSelectedPlayers())
    } else if(id !== this.selectedPlayerId) {
      this.store.dispatch(playersActions.setSelectedPlayers({id: id}))
    }
  }

  deleteModal(event){
    if(event[1]==='delete'){
      // DELETE runner note
      this.store.dispatch(playersActions.deletePlayers({ _id: event[0] }));
    }
  }

  reset(){
    this.store.dispatch(playersActions.unsetSelectedPlayers())
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter(players =>  {
      return players.players.name.toLowerCase().indexOf(val)!== -1 || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  onDuplicateClick(players: Players) {
    let newPlayers = JSON.parse(JSON.stringify(players))
    newPlayers.created = Date.now()
    newPlayers.lastUpdate = Date.now()
    newPlayers.players.name = newPlayers.players.name + ' - DUPLICATE'

    // remove id from data
    delete newPlayers._id;
    // dispatch actions with duplicated payload
    this.store.dispatch(playersActions.createPlayers({ players: newPlayers}))
  }

}
