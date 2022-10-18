import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Note} from '../../../model/note/note';
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import * as notesActions from '../../../store/notes/notes.actions';
import {ActivatedRoute, Router} from '@angular/router';
import { Store} from '@ngrx/store';
import {Runner} from '../../../model/runner/runner';
import {Utils} from '../../../model/calculator/utils';

@Component({
  selector: 'app-note-data-table',
  templateUrl: './note-data-table.component.html',
  styles: ['/deep/ .datatable-row-even {background-color: #181818;}']
})
export class NoteDataTableComponent implements OnInit {

  @Input() notes: Note[]

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;

  tableSize = 15
  viewNotes= true

  util = new Utils()

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
  private prevCLick = 'All'

  columns = [
    { name: 'date', sortable: true},
    { prop: 'a', sortable: false},
    { prop: 'b', sortable: false},
    { prop: 'type', sortable: false},
    { prop: 'tolls', sortable: false},
  ];

  constructor(private router: Router,
              private readonly store: Store,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.temp = [...this.notes]
    this.rows = this.notes
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter((d) => {
      return ((d.note.selection.runnerA.name.toLowerCase().indexOf(val) !== -1 && d.note.selection.runnerA.id ===  d.note.selection.injuredId)
        || (d.note.selection.runnerB.name.toLowerCase().indexOf(val) !== -1 && d.note.selection.runnerB.id ===  d.note.selection.injuredId)
        || d.note.description.toLowerCase().indexOf(val) !== -1
        || d.note.validation.validationNote.toLowerCase().indexOf(val) !== -1)
        || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  typeFilter(event: string){

    if(this.prevCLick != event){

      this.checkState(event)
      let val: string
      if(event==='All'){
        val = ''
      } else {
        val = event.toLowerCase()
      }

      if(val === 'retired'){
        // update retired
        this.rows = this.temp.filter((d) =>{
          return d.note.validation.detailValidation.retired === true
            || !val;
        });
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      } else if(val === 'fsretired') {
        // update retired
        this.rows = this.temp.filter((y) =>{
          function checkFirstSet(d: Note) {
            return (d.note.validation.tennisPoints.set2.runnerA === 0 &&
              d.note.validation.tennisPoints.set2.runnerB === 0
              && d.note.validation.tennisPoints.set3.runnerA === 0
              && d.note.validation.tennisPoints.set3.runnerB === 0
              && d.note.validation.tennisPoints.set4.runnerA === 0
              && d.note.validation.tennisPoints.set4.runnerB === 0
              && d.note.validation.tennisPoints.set5.runnerA === 0
              && d.note.validation.tennisPoints.set5.runnerB === 0);
          }
          return y.note.validation.detailValidation.retired === true && checkFirstSet(y)
            || !val;
        });
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;

      } else {
        // update the rows with filter
        this.rows = this.temp.filter((d) =>{
          return d.note.type.toLowerCase().indexOf(val) !== -1
            || !val;
        });
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      }
    }
    this.prevCLick = event.toLowerCase()
  }


  createModal(event){
    if(event[1]==='create'){
      // CREATE runner note
      this.store.dispatch(notesActions.createRunnerNote({ runnerNote: event[0]}));
    }
  }

  updateModal(event){

    if(event[1]==='update'){
      event[0].lastUpdate = new Date().getTime()
      // UPDATE runner note
      this.store.dispatch(notesActions.updateRunnerNote({ _id: event[0]._id, runnerNote: event[0] }));
    }

  }

  deleteModal(event){
    if(event[1]==='delete'){
      // DELETE runner note
      this.store.dispatch(notesActions.deleteRunnerNote({ _id: event[0] }));
    }

  }

  clickOnRunners(id: number){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
      this.router.navigate(['/runners/detail/'+id]));
  }

  private checkState(type: string){
    switch(type) {
    case 'All': {
      this.state.all = !this.state.all
      this.state.medical = false
      this.state.note = false
      this.state.walkover = false
      this.state.nmRetired = false
      this.state.retired = false
      this.state.fsRetired = false
      break;
    }
    case 'Medical': {
      this.state.medical = !this.state.medical
      this.state.all = false
      this.state.note = false
      this.state.walkover = false
      this.state.nmRetired = false
      this.state.retired = false
      this.state.fsRetired = false
        break;
      }
    case 'Note': {
      this.state.note = !this.state.note
      this.state.medical = false
      this.state.all = false
      this.state.walkover = false
      this.state.nmRetired = false
      this.state.retired = false
      this.state.fsRetired = false
      break;
    }
    case 'Walkover': {
      this.state.walkover = !this.state.walkover
      this.state.medical = false
      this.state.note = false
      this.state.all = false
      this.state.nmRetired = false
      this.state.retired = false
      this.state.fsRetired = false
      break;
    }
    case 'No Med Retired': {
      this.state.nmRetired = !this.state.nmRetired
      this.state.medical = false
      this.state.note = false
      this.state.walkover = false
      this.state.all = false
      this.state.retired = false
      this.state.fsRetired = false
      break;
    }
    case 'Retired': {
      this.state.retired = !this.state.retired
      this.state.medical = false
      this.state.note = false
      this.state.walkover = false
      this.state.nmRetired = false
      this.state.all = false
      this.state.fsRetired = false
      break;
    }
      case 'FsRetired': {
        this.state.fsRetired = !this.state.fsRetired
        this.state.medical = false
        this.state.note = false
        this.state.walkover = false
        this.state.nmRetired = false
        this.state.retired = false
        this.state.all = false
        break;
      }
    default: {
        break;
      }
    }
  }

  saveAsCSV() {
    const date = new Date()
    this.util.exportToCsv(`${date.getMonth()+1}_${date.getDate()}_${date.getFullYear()}_tennisTournament.csv`,
      JSON.parse(JSON.stringify(this.notes.map( x => {
        const t = new Date(x.created)
        const d = `${t.getMonth() + 1}/${t.getDate()}/${t.getFullYear()}`
        const s = `${t.getHours()}:${t.getMinutes()}:${t.getSeconds()}`
        const injured = x.note.selection.runnerA.id === x.note.selection.injuredId ? x.note.selection.runnerA : x.note.selection.runnerB
        const other = x.note.selection.runnerA.id !== x.note.selection.injuredId ? x.note.selection.runnerA : x.note.selection.runnerB
        return{
          date: d,
          time: s,
          injuredName: injured.name,
          other: other.name,
          tournament: x.note.tournament,
          phase: x.note.phase,
          injuredOdds: injured.odds,
          otherOdds: other.odds,
          injuredBSP: injured.bsp,
          otherBSP: other.bsp,
          status: x.note.validation.detailValidation.win ? 'WIN' : x.note.validation.detailValidation.lose ? 'LOSE' : 'RETIRED',
          type: x.note.type
        }
      })))
    );
  }
}
