import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TennisTournamentMainComponent} from "./components/tennis-tournament-main.component";
import {TennisTournamentDetailComponent} from "./components/tennis-tournament-detail/tennis-tournament-detail.component";
import {FormsModule} from "@angular/forms";
import {FeahterIconModule} from "../../core/feather-icon/feather-icon.module";
import {TennisTournamentCreateModalComponent} from "./components/modal/tennis-tournament-create-modal/tennis-tournament-create-modal.component";
import {TennisTournamentUpdatesModalComponent} from "./components/modal/tennis-tournament-updates-modal/tennis-tournament-updates-modal.component";
import {TennisTournamentDataTableComponent} from "./components/tennis-tournament-data-table/tennis-tournament-data-table.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgSelectModule} from "@ng-select/ng-select";
import {NgbDatepickerModule} from "@ng-bootstrap/ng-bootstrap";
import {SharedModule} from "../../shared/shared.module";


// ROUTER
const routes: Routes = [
  {
    path: '' ,
    component: TennisTournamentMainComponent
  },
  {
    path: 'detail/:tournamentId' ,
    component: TennisTournamentDetailComponent,
  },
]

@NgModule({
  declarations: [
    TennisTournamentMainComponent,
    TennisTournamentDetailComponent,
    TennisTournamentCreateModalComponent,
    TennisTournamentUpdatesModalComponent,
    TennisTournamentDataTableComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        FeahterIconModule,
        NgxDatatableModule,
        NgSelectModule,
        NgbDatepickerModule,
        SharedModule,
    ]
})
export class TennisTournamentModule { }
