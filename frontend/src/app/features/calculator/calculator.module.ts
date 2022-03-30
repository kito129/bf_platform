// MAIN IMPORT
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// DEPENDENCIES IMPORT
import { FeahterIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import {NgbDropdownModule, NgbDatepickerModule, NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
// Ng-ApexCharts
import { NgApexchartsModule } from "ng-apexcharts";
// Ng2-trade
import { ChartsModule } from 'ng2-charts';
// other module
import {DataTablesModule} from "angular-datatables";
import { CalculatorComponent } from './components/calculator.component';
import { BackLayComponent } from './components/back-lay/back-lay.component';
import { RiskRewardComponent } from './components/multi-toll/risk-reward.component';
import { LadderComponent } from './components/ladder/ladder.component';
import {SharedModule} from "../../shared/shared.module";

// MAIN COMPONENTS


// ROUTER
const routes: Routes = [
  {
    path: '' ,
    component: CalculatorComponent
  },
]


@NgModule({
    declarations: [

        CalculatorComponent,
        BackLayComponent,
        RiskRewardComponent,
        LadderComponent,

    ],
    exports: [
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
        NgbNavModule,

    ]
})
export class CalculatorModule { }
