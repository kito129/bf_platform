
// ROUTER
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FeahterIconModule} from '../../core/feather-icon/feather-icon.module';
import {NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {ChartsModule} from 'ng2-charts';
import {DataTablesModule} from 'angular-datatables';

import {SharedModule} from '../../shared/shared.module';

import {RunnersListComponent} from './components/list/runners-list.component';
import {RunnersDetailComponent} from './components/detail/runners-detail.component';
import { RunnerDetailInfoComponent } from './components/detail/runner-detail-info/runner-detail-info.component';
import { RunnerDetailMarketsComponent } from './components/detail/runner-detail-markets/runner-detail-markets.component';
import { RunnersDataTableListComponent } from './components/list/runners-data-table/runners-data-table-list.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {CustomFormsModule} from 'ngx-custom-validators';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { RunnerDetailNotesComponent } from './components/detail/runner-detail-notes/runner-detail-notes.component';
import { RunnerDetailBspComponent } from './components/detail/runner-detail-bsp/runner-detail-bsp.component';
import { RunnerDetailStatsComponent } from './components/detail/runner-detail-stats/runner-detail-stats.component';
import {RunnerDetailMarketStatsComponent} from './components/detail/runner-detail-market-stats/runner-detail-market-stats.component';
import { RunnerDetailMarketStatsViewComponent } from './components/detail/runner-detail-market-stats/runner-detail-market-stats-view/runner-detail-market-stats-view.component';
import { RunnerDetailMarketStatsGaussianComponent } from './components/detail/runner-detail-market-stats/runner-detail-market-stats-gaussian/runner-detail-market-stats-gaussian.component';
import { RunnerDetailMarketStatsDistributionComponent } from './components/detail/runner-detail-market-stats/runner-detail-market-stats-distribution/runner-detail-market-stats-distribution.component';
const routes: Routes = [
  {
    path: '' ,
    component: RunnersListComponent
  },
  {
    path: 'detail/:runnerId' ,
    component: RunnersDetailComponent
  },
]

@NgModule({
  declarations: [
    RunnersListComponent,
    RunnerDetailInfoComponent,
    RunnerDetailMarketsComponent,
    RunnersDetailComponent,
    RunnersDataTableListComponent,
    RunnerDetailNotesComponent,
    RunnerDetailBspComponent,
    RunnerDetailStatsComponent,
    RunnerDetailMarketStatsComponent,
    RunnerDetailMarketStatsViewComponent,
    RunnerDetailMarketStatsGaussianComponent,
    RunnerDetailMarketStatsDistributionComponent
  ],
    exports: [
        RunnerDetailInfoComponent
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
    SharedModule,
    NgbCollapseModule,
    NgSelectModule,
    CustomFormsModule,
    NgxDatatableModule

  ]
})
export class RunnersModule { }
