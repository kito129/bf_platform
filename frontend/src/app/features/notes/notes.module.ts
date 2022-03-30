// MAIN IMPORT
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// DEPENDENCIES IMPORT
import { FeahterIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";
// Ng2-trade
import { ChartsModule } from 'ng2-charts';
// other module
import {DataTablesModule} from "angular-datatables";
import { NotesMainComponent } from './components/notes-main/notes-main.component';
import { NoteDataTableComponent } from '../../shared/notes/note-data-table/note-data-table.component';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NoteCreateModalComponent} from "../../shared/notes/modal/note-create-modal/note-create-modal.component";
import {NotesUpdatesModalComponent} from "../../shared/notes/modal/notes-updates-modal/notes-updates-modal.component";
import {NoteDeleteModalComponent} from "../../shared/notes/modal/note-delete-modal/note-delete-modal.component";
import {NgSelectModule} from "@ng-select/ng-select";
import {CustomFormsModule} from "ngx-custom-validators";
import {SharedModule} from "../../shared/shared.module";

// ROUTER
const routes: Routes = [
  {
    path: '' ,
    component: NotesMainComponent
  },
]


@NgModule({
  declarations: [
    NotesMainComponent,
  ],
  exports: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FeahterIconModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgApexchartsModule,
    ChartsModule,
    DataTablesModule,
    NgxDatatableModule,
    NgSelectModule,
    CustomFormsModule,
    SharedModule,

  ]
})
export class NotesModule { }
