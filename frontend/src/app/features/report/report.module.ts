import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FeahterIconModule} from '../../core/feather-icon/feather-icon.module';
import {
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {ChartsModule} from 'ng2-charts';
import {DataTablesModule} from 'angular-datatables';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgxMaskModule} from 'ngx-mask';
import {CustomFormsModule} from 'ngx-custom-validators';
import {ReportMainComponent} from './report-main.component';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '' ,
    component: ReportMainComponent
  },
]

@NgModule({
  declarations: [
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
    NgbCollapseModule,
    NgbTooltipModule,
    SharedModule,
  ]
})
export class ReportModule { }
