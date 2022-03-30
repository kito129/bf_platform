
import { BrowserModule } from '@angular/platform-browser';
import {DEFAULT_CURRENCY_CODE, LOCALE_ID,NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DatePipe } from '@angular/common'
import { CurrencyPipe } from '@angular/common';
import { PercentPipe } from '@angular/common';

// ROUTER
import { AppRoutingModule } from './app-routing.module';
// http interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/interceptor';

// LAYOUT AND GUARD
import { LayoutModule } from './features/layout/layout.module';
import { AuthGuard } from './core/guard/auth.guard';

// PAGE AND ERROR
import { AppComponent } from './app.component';
import { ErrorPageComponent } from './features/error-page/error-page.component';

// OTHER
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {metaReducers, reducers} from './store';
// effects import
import {MarketsEffects} from './store/markets/markets.effects';
import {DbManagerEffects} from './store/dbManager/dbManager.effects';
import {RunnersEffects} from './store/runners/runners.effects';
import {NotesEffects} from './store/notes/notes.effects';
import {ReportEffects} from './store/report/report.effects';
import {TennisTournamentEffects} from './store/tennis-tournament/tennisTournament.effects';
import {BasketEffects} from './store/study/basket/basket.effects';
// dev tools
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {SharedModule} from './shared/shared.module';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';
import {EntryEffects} from './store/study/entry/entry.effects';
import {StudyEffects} from './store/study/study/study.effects';
import {PlayersEffects} from './store/study/players/players.effects';

// FOR LIVE
import {DragulaModule} from 'ng2-dragula';
import {AngularFireModule} from '@angular/fire';

// API REPLACE URL
import {environment} from '../environments/environment';
import {MarketAdvancedEffectEffects} from './store/marketsAdvanced/marketAdvanced.effect';
import { MarketMetaListBasicComponent } from './features/markets/components/list/market-meta-list-basic/market-meta-list-basic.component';
import {MarketsModule} from "./features/markets/markets.module";
import {FeahterIconModule} from "./core/feather-icon/feather-icon.module";

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    MarketMetaListBasicComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        HttpClientModule,
        DataTablesModule,
        SharedModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,

        // firebase
        AngularFireModule.initializeApp(environment.firebaseConfig, 'bfPlatform'),
        // ngrx related imports
        StoreModule.forRoot(reducers, {
            metaReducers
        }),
        EffectsModule.forRoot([
            MarketsEffects,
            DbManagerEffects,
            RunnersEffects,
            NotesEffects,
            ReportEffects,
            TennisTournamentEffects,
            BasketEffects,
            EntryEffects,
            StudyEffects,
            PlayersEffects,
            MarketAdvancedEffectEffects
        ]),
        StoreDevtoolsModule.instrument(),
        SweetAlert2Module.forRoot(),
        DragulaModule.forRoot(),
        MarketsModule,
        FeahterIconModule
    ],
  providers: [
    AuthGuard,
    {
      provide: HIGHLIGHT_OPTIONS, // https://www.npmjs.com/package/ngx-highlightjs
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        }
      }
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR'},
    {provide: LOCALE_ID, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
