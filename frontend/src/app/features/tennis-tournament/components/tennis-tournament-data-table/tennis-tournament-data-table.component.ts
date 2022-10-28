import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import * as tennisTournementActions from '../../../../store/tennis-tournament/tennisTournament.actions';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {TennisTournament} from '../../../../model/tennisTournament/tennisTournament';
import * as tennisTournamentActions from '../../../../store/tennis-tournament/tennisTournament.actions';
import {Utils} from "../../../../model/utils";

@Component({
  selector: 'app-tennis-tournament-data-table',
  templateUrl: './tennis-tournament-data-table.component.html',
  styles: ['/deep/ .datatable-row-even {background-color: #181818;}']
})
export class TennisTournamentDataTableComponent implements OnInit {


  @Input() tennisTournaments?: TennisTournament[]

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  loadingIndicator = true
  ColumnMode = ColumnMode;

  columns = [
    { name: 'date', sortable: true},
    { name: 'name', sortable: true},
    { name: 'type', sortable: false},
    { name: 'surface', sortable: true},
    { name: 'drawSize', sortable: true},
    { name: 'qualSize', sortable: true},
    { name: 'tolls', sortable: false},
  ];

  // for button
  public state= {
    all: true,
    medical: false,
    note: false,
    walkover: false,
    nmRetired: false,
    retired: false,
    fsRetired: false
  }

  util = new Utils()

  constructor(private router: Router,
              private readonly store: Store,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.temp = [... this.tennisTournaments]
    this.rows = this.tennisTournaments

  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter( (d) => {
      return d.tournament.detail.name.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  saveAsCSV() {
    const date = new Date()
    this.util.exportToCsv(`${date.getMonth()+1}_${date.getDate()}_${date.getFullYear()}_tennisTournament.csv`,
      JSON.parse(JSON.stringify(this.tennisTournaments.map( x => {
        const t = new Date(x.tournament.detail.openDate)
        const d = `${t.getMonth() + 1}/${t.getDate()}/${t.getFullYear()}`
        return{
          name: this.formatterName(x),
          id: x._id,
          openDate: d,
          surface: x.tournament.detail.surface,
          federation: x.tournament.detail.type.federation,
          point: x.tournament.detail.type.point,
          isSlam: x.tournament.detail.type.isSlam,
          isChallenger: x.tournament.detail.type.isChallenger,
          qualifying: x.tournament.detail.qualifying,
          draw: x.tournament.detail.draw,
        }
      })))
    );
  }

  formatterName(selected: TennisTournament){
    let challenger = ' '
    if (selected.tournament.detail.type.isChallenger) {
      challenger = ' CHALLENGER '
    }
    return selected.tournament.detail.type.federation
      + challenger
      + selected.tournament.detail.name
      + ' '
      + new Date(selected.tournament.detail.openDate).getFullYear();
  }


  buttonFilter(event){
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter((d) => {
      return (d.name.toLowerCase().indexOf(val) !== -1 || !val)
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  createModal(event){
    if(event[1]==='create'){
      // CREATE runner note
      this.store.dispatch(tennisTournementActions.createTennisTournament({ tennisTournament: event[0]}));
    }
  }

  updateModal(event){

    if(event[1]==='update'){
      event[0].lastUpdate = new Date().getTime()
      // UPDATE runner note
      this.store.dispatch(tennisTournementActions.updateTennisTournament({ _id: event[0]._id, tennisTournament: event[0] }));
    }

  }

  deleteModal(event){
    if(event[1]==='delete'){
      // DELETE runner note
      this.store.dispatch(tennisTournementActions.deleteTennisTournament({ _id: event[0] }));
    }

  }


}
