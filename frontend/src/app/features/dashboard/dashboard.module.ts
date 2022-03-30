import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FeahterIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";

// Ng2-trade
import { ChartsModule } from 'ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { MarketStatsComponent } from './statsCards/market-stats/market-stats.component';
import { RunnerStatsComponent } from './statsCards/runner-stats/runner-stats.component';
import { NotesStatsComponent } from './statsCards/notes-stats/notes-stats.component';
import { TennisTournamentStatsComponent } from './statsCards/tennis-tournament-stats/tennis-tournament-stats.component';
import { ReportStatsComponent } from './statsCards/report-stats/report-stats.component';
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    MarketStatsComponent,
    RunnerStatsComponent,
    NotesStatsComponent,
    TennisTournamentStatsComponent,
    ReportStatsComponent
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
        SharedModule
    ]
})
export class DashboardModule { }
