// MAIN IMPORT
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// DEPENDENCIES IMPORT
import { FeahterIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgbDropdownModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
// Ng-ApexCharts
import { NgApexchartsModule } from 'ng-apexcharts';
// Ng2-trade
import { ChartsModule } from 'ng2-charts';
// other module
import {DataTablesModule} from 'angular-datatables';


// MAIN COMPONENTS
//    MARKETS
import { MarketsViewComponent } from './components/view/markets-view.component';
import { MarketsListComponent } from './components/list/markets-list.component';
import { MarketsStatsMainComponent } from './components/view/marketsStats/markets-stats-main.component';
import { MarketsStatsNumbersComponent } from './components/view/marketsStats/markets-stats-number/markets-stats-numbers.component';
import { MarketsStatsSportsComponent } from './components/view/marketsStats/markets-stats-sports/markets-stats-sports.component';
import { MarketsCalendarMainComponent } from './components/view/marktesCalendar/markets-calendar-main.component';
import { MarketsCalendarFilterComponent } from './components/view/marktesCalendar/markets-calendar-filter/markets-calendar-filter.component';
import { MarketsCalendarPickerComponent } from './components/view/marktesCalendar/markets-calendar-picker/markets-calendar-picker.component';
import { MarketsCalendarRangeComponent } from './components/view/marktesCalendar/markets-calendar-range/markets-calendar-range.component';
import { MarketsDataTableListComponent } from './components/list/markets-data-table-list/markets-data-table-list.component';//          MARKET DETAIL
import { SharedModule } from '../../shared/shared.module'
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {MarketMetaListBasicComponent} from './components/list/market-meta-list-basic/market-meta-list-basic.component';
import {MarketsDetailComponent} from '../../shared/marketCards/market-basic-details/markets-detail.component';




// ROUTER
const routes: Routes = [
  {
    path: 'metalist',
    component: MarketMetaListBasicComponent
  },
  {
    path: 'detail/:marketId',
    component: MarketsDetailComponent
  }
]


@NgModule({
    declarations: [
        MarketsListComponent,
        MarketsViewComponent,
        MarketsStatsNumbersComponent,
        MarketsStatsSportsComponent,
        MarketsCalendarFilterComponent,
        MarketsCalendarMainComponent,
        MarketsCalendarPickerComponent,
        MarketsCalendarRangeComponent,
        MarketsStatsMainComponent,
        MarketsDataTableListComponent,

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
        NgxDatatableModule,

    ]
})
export class MarketsModule { }
