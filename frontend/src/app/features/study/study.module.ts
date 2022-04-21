
// ROUTER
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FeahterIconModule} from '../../core/feather-icon/feather-icon.module';
import {
    NgbAlertModule,
    NgbDatepickerModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbProgressbarModule, NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {ChartsModule} from 'ng2-charts';
import {DataTablesModule} from 'angular-datatables';
import {SharedModule} from '../../shared/shared.module';
import { MainStudyComponent } from './main-study.component';
import { BasketActiveFilterComponent } from './basket/components/basket-create/basket-active-filter/basket-active-filter.component';
import { BasketCreateComponent } from './basket/components/basket-create/basket-create.component';
import { BasketDetailsComponent } from './basket/components/basket-details/basket-details.component';
import { BasketMainComponent } from './basket/basket-main.component';
import { BasketMarketsListComponent } from './basket/components/basket-markets/basket-markets-list/basket-markets-list.component';
import {CustomFormsModule} from 'ngx-custom-validators';
import {NgSelectModule} from '@ng-select/ng-select';
import { BasketFilterByDateComponent } from './basket/components/basket-create/basket-filter/basket-filter-by-date/basket-filter-by-date.component';
import { BasketFilterByOddsComponent } from './basket/components/basket-create/basket-filter/basket-filter-by-odds/basket-filter-by-odds.component';
import { BasketFilterBySelectionNameComponent } from './basket/components/basket-create/basket-filter/basket-filter-by-selection-name/basket-filter-by-selection-name.component';
import { BasketFilterEventNameComponent } from './basket/components/basket-create/basket-filter/basket-filter-event-name/basket-filter-event-name.component';
import { BasketListComponent } from './basket/components/basket-list/basket-list.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { EntryMainComponent } from './entry/entry-main.component';
import { EntryCreateComponent } from './entry/components/entry-create/entry-create.component';
import { EntryListComponent } from './entry/components/entry-list/entry-list.component';
import { StudyMainComponent } from './study/study-main.component';
import { StudyCreateComponent } from './study/components/study-create/study-create.component';
import { StudyListComponent } from './study/components/study-list/study-list.component';
import { EntryDetailComponent } from './entry/components/entry-detail/entry-detail.component';
import { StudyComparatorComponent } from './study/components/study-comparator/study-comparator.component';
import { StudyComparatorReportComponent } from './study/components/study-comparator/study-comparator-report/study-comparator-report.component';
import { StudyComparatorTradesTableComponent } from './study/components/study-comparator/study-comparator-trades-table/study-comparator-trades-table.component';
import { PlayersMainComponent } from './players/players-main.component';
import { PlayersListComponent } from './players/components/players-list/players-list.component';
import { PlayersCreateComponent } from './players/components/players-create/players-create.component';
import { RuleComponent } from './new/rule/rule.component';
import { RuleListComponent } from './new/rule/rule-list/rule-list.component';
import { RuleEditComponent } from './new/rule/rule-edit/rule-edit.component';

const routes: Routes = [
  {
    path: '' ,
    component: MainStudyComponent
  },
]


@NgModule({
  declarations: [
    MainStudyComponent,
    BasketActiveFilterComponent,
    BasketCreateComponent,
    BasketMainComponent,
    BasketMarketsListComponent,
    BasketFilterByDateComponent,
    BasketFilterByOddsComponent,
    BasketFilterBySelectionNameComponent,
    BasketFilterEventNameComponent,
    BasketListComponent,
    BasketDetailsComponent,
    EntryMainComponent,
    EntryCreateComponent,
    EntryListComponent,
    StudyMainComponent,
    StudyCreateComponent,
    StudyListComponent,
    EntryDetailComponent,
    StudyComparatorComponent,
    StudyComparatorReportComponent,
    StudyComparatorTradesTableComponent,
    PlayersMainComponent,
    PlayersListComponent,
    PlayersCreateComponent,
    RuleComponent,
    RuleListComponent,
    RuleEditComponent,
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
        CustomFormsModule,
        NgSelectModule,
        NgxDatatableModule,
        NgbNavModule,
        NgbAlertModule,
        NgbProgressbarModule,
        NgbTooltipModule

    ]
})
export class StudyModule { }
