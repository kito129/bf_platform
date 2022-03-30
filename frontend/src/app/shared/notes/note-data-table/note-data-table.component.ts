import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Note} from "../../../model/note/note";
import {ColumnMode, DatatableComponent} from '@swimlane/ngx-datatable';
import * as notesActions from '../../../store/notes/notes.actions';
import {ActivatedRoute, Router} from "@angular/router";
import { Store} from "@ngrx/store";
import {Runner} from "../../../model/runner/runner";

@Component({
  selector: 'app-note-data-table',
  templateUrl: './note-data-table.component.html',
})
export class NoteDataTableComponent implements OnInit {


  @Input()
  notes: Note[]

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;

  //for button
  public state= {
    all: true,
    medical: false,
    note: false,
    walkover: false,
    nmRetired: false,
    retired: false,
    fsRetired: false
  }
  private prevCLick: string = 'All'

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
    this.rows = this.temp.filter(function (d) {
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
        this.rows = this.temp.filter(function (d) {
          return d.note.validation.detailValidation.retired === true
            || !val;
        });
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
      } else if(val === 'fsretired') {
        // update retired
        this.rows = this.temp.filter(function (d) {
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

          return d.note.validation.detailValidation.retired === true && checkFirstSet(d)
            || !val;
        });
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;

      } else {
        // update the rows with filter
        this.rows = this.temp.filter(function (d) {
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


}
