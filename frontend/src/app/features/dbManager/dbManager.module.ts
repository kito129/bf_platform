// MAIN IMPORT
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {DbManagerManagerComponent} from './components/manager/dbManager-manager.component';
import {FormsModule} from '@angular/forms';


import { DbUpdateUnderOverCommandComponent } from './components/manager/db-update-under-over-command/db-update-under-over-command.component';
import { DbUpdateRunnersStatsComponent } from './components/manager/db-update-runners-stats/db-update-runners-stats.component';
import { DbUpdateRunnersSportComponent } from './components/manager/db-update-runners-sport/db-update-runners-sport.component';




// ROUTER
const routes: Routes = [
  {
    path: '' ,
    component: DbManagerManagerComponent
  },
]



@NgModule({
  declarations: [
    DbManagerManagerComponent,
    DbUpdateUnderOverCommandComponent,
    DbUpdateRunnersStatsComponent,
    DbUpdateRunnersSportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule

  ]
})

export class DbManagerModule { }
