import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { MarketAdvancedDetailComponent } from '../../shared/marketCards/market-advanced-detail/market-advanced-detail.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';
import { MarketAdvancedListComponent } from './components/list/market-advanced-list/market-advanced-list.component';
import {FeahterIconModule} from '../../core/feather-icon/feather-icon.module';
import { MarketMetaListAdvancedComponent } from './components/list/market-advanced-meta-list/market-meta-list-advanced.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NgbPopoverModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';


// ROUTER
const routes: Routes = [
  {
    path: 'detail/:marketId' ,
    component: MarketAdvancedDetailComponent
  },
  {
    path: 'metalist' ,
    component: MarketMetaListAdvancedComponent
  },
]

@NgModule({
    declarations: [
        MarketMetaListAdvancedComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        SharedModule,
        FeahterIconModule,
        NgxDatatableModule,
        NgbTooltipModule,
        NgbPopoverModule,
    ]
})
export class MarketAdvancedModule { }
