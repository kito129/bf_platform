
// ROUTER
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FeahterIconModule} from '../../core/feather-icon/feather-icon.module';
import {NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {ChartsModule} from 'ng2-charts';
import {DataTablesModule} from 'angular-datatables';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxMaskModule} from 'ngx-mask';
import {CustomFormsModule} from 'ngx-custom-validators';

import {SharedModule} from '../../shared/shared.module';

import {StrategyUpdatesModalComponent} from './components/strategy/modal/strategy-updates-modal/strategy-updates-modal.component';
import {StrategyCreateModalComponent} from './components/strategy/modal/strategy-create-modal/strategy-create-modal.component';
import {StrategyDeleteModalComponent} from './components/strategy/modal/strategy-note-delete-modal/strategy-delete-modal.component';
import { StrategyDatatableComponent } from './components/strategy/strategy-datatable/strategy-datatable.component';
import { ReportMainComponent } from './components/report-main.component';




const routes: Routes = [
  {
    path: '' ,
    component: ReportMainComponent
  },
]


@NgModule({
  declarations: [
    StrategyUpdatesModalComponent,
    StrategyCreateModalComponent,
    StrategyDeleteModalComponent,
    StrategyDatatableComponent,
    ReportMainComponent,
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
    NgxDatatableModule,
    NgSelectModule,
    NgxMaskModule,
    CustomFormsModule,
    NgbNavModule,
    SharedModule,
    NgbCollapseModule

  ]
})
export class ReportModule { }
