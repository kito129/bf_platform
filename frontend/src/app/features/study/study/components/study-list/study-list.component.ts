import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Study} from "../../../../../model/study/study/study";
import {ColumnMode, DatatableComponent} from "@swimlane/ngx-datatable";
import {Store} from "@ngrx/store";
import * as studyActions from "../../../../../store/study/study/study.actions";

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
})
export class StudyListComponent implements OnInit {

  @Input() studies: Study[]
  @Input() selectedStudyId: string
  @Input() compareList: string[]

  @ViewChild(DatatableComponent) table: DatatableComponent;

  rows = [];
  temp =[] ;
  ColumnMode = ColumnMode;

  basketFilter: number[] = [1.05, 1.10, 1.20, 1.30, 1.40, 1.50, 1.60, 1.70, 1.80, 1.90, 2]
  selectedBasketFilter: number = null
  type: string[] = ['back', 'lay', 'chunks']
  selectedType: string = null

  columns = [
    { name: 'Date', sortable: true},
    { name: 'Name', sortable: true},
    { name: 'Type', sortable: false},
    { name: 'Tools', sortable: false},
  ];

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.temp = [...this.studies]
    this.rows = this.studies
  }

  selectClick(id: string) {
    if( this.selectedStudyId && this.selectedStudyId === id){
      this.store.dispatch(studyActions.unsetSelectedStudy())
    } else if(id !== this.selectedStudyId) {
      this.store.dispatch(studyActions.setSelectedStudy({id: id}))
    }
  }

  addToCompare(id: string){
    if(this.compareList.indexOf(id) !==-1){
      this.store.dispatch(studyActions.removeStudyInCompare({studyId: id}))
    } else {
      this.store.dispatch(studyActions.addStudyInCompare({studyId: id, first:false}))
    }
  }

  addAllInFilterToCompare(){
    this.resetCompare()
    this.store.dispatch(studyActions.addStudiesInCompare({studyIds: this.rows.map( x => x._id)}))
  }

  firstToCompare($event, id: string){
    $event.preventDefault();
    if(this.compareList.indexOf(id) !==-1){
      this.store.dispatch(studyActions.removeStudyInCompare({studyId: id}))
      this.store.dispatch(studyActions.addStudyInCompare({studyId: id, first:true}))
    } else {
      this.store.dispatch(studyActions.addStudyInCompare({studyId: id, first:true}))
    }
  }

  compare(){
    this.store.dispatch(studyActions.compareStudy({studyIds: this.compareList}))
  }

  resetCompare(){
    this.store.dispatch(studyActions.resetStudyCompare())
    this.store.dispatch(studyActions.unsetSelectedStudy())
    this.store.dispatch(studyActions.unsetSelectedStudyMarket())
  }

  deleteModal(event){
    if(event[1]==='delete'){
      // DELETE runner note
      this.store.dispatch(studyActions.deleteStudy({ _id: event[0] }));
    }
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
    // filter our data
    // update the rows
    this.rows = this.temp.filter( row =>{
      return row.study.name.toLowerCase().indexOf(val)!== -1 || !val;
    });
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  setBasketFilter(){
    if(this.selectedBasketFilter){
      if(this.selectedType){
        this.rows = this.temp.filter(row => {
          return row.study.name.toLowerCase().indexOf(`basket ${this.selectedBasketFilter}`)!== -1 && row.study.name.toLowerCase().indexOf(`${this.selectedType}`)!== -1
        });
      } else {
        this.rows = this.temp.filter(row => {
          return row.study.name.toLowerCase().indexOf(`basket ${this.selectedBasketFilter}`)!== -1
        });
      }

    } else {
      this.rows = this.temp
    }
    this.table.offset = 0;
  }

  setType(){
    if(this.selectedType){
      if(this.selectedBasketFilter){
        this.rows = this.temp.filter(row => {
          return row.study.name.toLowerCase().indexOf(`basket ${this.selectedBasketFilter}`)!== -1 && row.study.name.toLowerCase().indexOf(this.selectedType)!== -1
        });
      } else {
        this.rows = this.temp.filter(row => {
          return row.study.name.toLowerCase().indexOf(this.selectedType)!== -1
        });
      }
    } else {
      this.rows = this.temp
    }
    this.table.offset = 0;
  }

}
