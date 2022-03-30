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
import { DocumentationComponent } from './components/documentation.component';
import { TodoDocumentationComponent } from './components/todo/todo-documentation.component';
import { NoteDocumentationComponent } from './components/completed/note-documentation.component';
import {VersionDocumentationComponent} from "./components/version/version-documentation.component";


// MAIN COMPONENTS
//    MARKETS

//      SUB COMPONENTS


// ROUTER
const routes: Routes = [
  {
    path: '' ,
    component:DocumentationComponent
  }
]


@NgModule({
  declarations: [

  DocumentationComponent,
  TodoDocumentationComponent,
  NoteDocumentationComponent,
  VersionDocumentationComponent

  ],
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

  ]
})
export class DocumentationModule { }
