import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FeahterIconModule} from '../../core/feather-icon/feather-icon.module';
import {BacktestMainComponent} from './components/backtest-main.component';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../../shared/shared.module';


const routes: Routes = [
  {
    path: '' ,
    component: BacktestMainComponent
  },
]


@NgModule({
  declarations: [
    BacktestMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FeahterIconModule,
    NgbNavModule,
    SharedModule,
  ]
})
export class BacktestModule { }
