import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './features/layout/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './features/error-page/error-page.component';


const routes: Routes = [
  { path:'auth', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'markets',
        loadChildren: () => import('./features/markets/markets.module').then(m => m.MarketsModule)
      },
      {
        path: 'marketAdvanced',
        loadChildren: () => import('./features/market-advanced/market-advanced.module').then(m => m.MarketAdvancedModule)
      },
      {
        path: 'dbManager',
        loadChildren: () => import('./features/dbManager/dbManager.module').then(m => m.DbManagerModule)
      },
      {
        path: 'calculator',
        loadChildren: () => import('./features/calculator/calculator.module').then(m => m.CalculatorModule)
      },
      {
        path: 'report',
        loadChildren: () => import('./features/report/report.module').then(m => m.ReportModule)
      },
      {
        path: 'runners',
        loadChildren: () => import('./features/runners/runners.module').then(m => m.RunnersModule)
      },
      {
        path: 'tennisTournament',
        loadChildren: () => import('./features/tennis-tournament/tennis-tournament.module').then(m => m.TennisTournamentModule)
      },
      {
        path: 'notes',
        loadChildren: () => import('./features/notes/notes.module').then(m => m.NotesModule)
      },
      {
        path: 'study',
        loadChildren: () => import('./features/study/study.module').then(m => m.StudyModule)
      },
      {
        path: 'live',
        loadChildren: () => import('./features/live/live.module').then(m => m.LiveModule)
      },
      {
        path: 'documentation',
        loadChildren: () => import('./features/documentation/documentation.module').then(m => m.DocumentationModule)
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  {
    path: 'error',
    component: ErrorPageComponent,
    data: {
      type: 404,
      title: 'Page Not Found',
      desc: 'Oopps!! The page you were looking for doesn\'t exist.'
    }
  },
  {
    path: 'error/:type',
    component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
