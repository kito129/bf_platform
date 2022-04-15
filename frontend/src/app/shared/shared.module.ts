import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PlotlyViaCDNModule } from 'angular-plotly.js';

import {DataTablesModule} from 'angular-datatables';
import {RouterModule} from '@angular/router';
import {NoteDataTableComponent} from './notes/note-data-table/note-data-table.component';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {NoteDeleteModalComponent} from './notes/modal/note-delete-modal/note-delete-modal.component';
import {NotesUpdatesModalComponent} from './notes/modal/notes-updates-modal/notes-updates-modal.component';
import {NoteCreateModalComponent} from './notes/modal/note-create-modal/note-create-modal.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {CustomFormsModule} from 'ngx-custom-validators';
import {NgxMaskModule} from 'ngx-mask';
import {FeahterIconModule} from '../core/feather-icon/feather-icon.module';
import {
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbNavModule,
    NgbPopoverModule, NgbProgressbarModule,
    NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import { TennisPointComponent } from './form-components/point-forms/tennis-point/tennis-point.component';
import { FootballPointComponent } from './form-components/point-forms/football-point/football-point.component';
import { DateFormComponent } from './form-components/date-form/date-form.component';
import { TennisPointPipe } from '../core/pipe/tennis-point.pipe';
import { NoteLastWeekPipe } from '../core/pipe/note-last-week.pipe';
import { NoteLast2WeekPipe } from '../core/pipe/note-last2-week.pipe';
import { TournamentPipe} from '../core/pipe/tournament.pipe'
import { NoteRowDetailComponent } from './notes/note-data-table/note-row-detail/note-row-detail.component';
import {LoadingCardsComponent} from './loading-cards/loading-cards.component';
import { RunnersSelectionFormComponent } from './form-components/selection-forms/runners-selection-form/runners-selection-form.component';
import { OddFormComponent } from './form-components/odd-form/odd-form.component';
import { BetsFormatterComponent } from './formatter/bets-formatter/bets-formatter.component';
import { TradeFormatterComponent } from './formatter/trade-formatter/trade-formatter.component';
import { SportTextComponent } from './formatter/sport-text/sport-text.component';
import { EventNameTextComponent } from './formatter/event-name-text/event-name-text.component';
import { BspComponent } from './formatter/odds-display/bsp/bsp.component';
import { CurrentComponent } from './formatter/odds-display/current/current.component';
import { MaxComponent } from './formatter/odds-display/max/max.component';
import { FilterNameFormatterComponent } from './formatter/filter-name-formatter/filter-name-formatter.component';
import { WinnerFormatterComponent } from './formatter/winner-formatter/winner-formatter.component';
import { PieComponent } from './charts/apx-charts/pie/pie.component';
import {NgApexchartsModule} from 'ng-apexcharts';
import { BetsFormComponent } from './form-components/bets-form/bets-form.component';
import { MarketInfoCardComponent } from './marketCards/market-detail-info-card/market-detail-info-card.component';
import { MarketUpdateCardComponent } from './marketCards/market-update-card/market-update-card.component';
import { MarketRunnersCardComponent } from './marketCards/market-runners-card/market-runners-card.component';
import { TvSingleSelectionPriceComponent } from './charts/tradingView-charts/tv-single-selection-price/tv-single-selection-price.component';
import { DeleteModalComponent } from './modal/delete-modal/delete-modal.component';
import { OptionsSelectorsComponent } from './form-components/options-selectors/options-selectors.component';
import { ListSelectionFormComponent } from './form-components/selection-forms/list-selection-form/list-selection-form.component';
import { StudyListComponent } from './tables/study-list/study-list.component';
import { TradesDatatableComponent } from './trade/trade-datatable/trades-datatable.component';
import { StudyMarketsSelectedDetailComponent } from './study/study-markets-selected-detail/study-markets-selected-detail.component';
import { StrategyReportInfoComponent } from './strategy/strategy-report/strategy-report-info/strategy-report-info.component';
import { StrategyReportResumeComponent } from './strategy/strategy-report/strategy-report-resume/strategy-report-resume.component';
import { StrategyReportComponent } from './strategy/strategy-report/strategy-report.component';
import { StrategyReportExpectedValueComponent } from './strategy/strategy-report/strategy-report-expected-value/strategy-report-expected-value.component';
import { TradeEquityComponent } from './charts/apx-charts/trade/single/trade-equity/trade-equity.component';
import { TradeDDComponent } from './charts/apx-charts/trade/single/trade-dd/trade-dd.component';
import { TradeBarChartsComponent } from './charts/apx-charts/trade/single/trade-bar-charts/trade-bar-charts.component';
import { MultiLineEquityComponent } from './charts/apx-charts/trade/multy/multi-line-equity/multi-line-equity.component';
import { MultiPlTradesComponent } from './charts/apx-charts/trade/multy/multi-pl-trades/multi-pl-trades.component';
import { MultiDdTradesComponent } from './charts/apx-charts/trade/multy/multi-dd-trades/multi-dd-trades.component';
import { MultiRrTradesComponent } from './charts/apx-charts/trade/multy/multi-rr-trades/multi-rr-trades.component';
import { MontecarloStrategyComponent } from './montecarlo/montecarlo-strategy/montecarlo-strategy.component';
import { MontecarloParamsComponent } from './montecarlo/montecarlo-calculator/montercarlo-params/montecarlo-params.component';
import { MontecarloMainComponent } from './montecarlo/montecarlo-calculator/montecarlo-main.component';
import { MontecarloCompareTableComponent } from './montecarlo/montecarlo-strategy/montercarlo-compare-table/montecarlo-compare-table.component';
import { MontecarloRecapComponent } from './montecarlo/montecarlo-strategy/montecarlo-recap/montecarlo-recap.component';

import { TradeHistogramComponent } from './charts/apx-charts/trade/single/trade-histogram/trade-histogram.component';
import { DdMultiChartsComponent } from './charts/apx-charts/trade/dd-multi-charts/dd-multi-charts.component';
import { StrategyReportDdComponent } from './strategy/strategy-report/strategy-report-dd/strategy-report-dd.component';
import { MontecarloResultComponent } from './montecarlo/montecarlo-calculator/montecarlo-result/montecarlo-result.component';
import { MontecarloChartsComponent } from './montecarlo/montecarlo-calculator/montecarlo-charts/montecarlo-charts.component';
import { MontecarloPipe } from '../core/pipe/montecarlo.pipe';
import { RunnerNamePipePipe } from '../core/pipe/runner-name-pipe.pipe';
import { PlayersFilterPipe } from '../core/pipe/players-filter-name-pipe.pipe';
import { StrategyReportMonthComponent } from './strategy/strategy-report/strategy-report-month/strategy-report-month.component';
import { StrategyReportTablesComponent } from './strategy/strategy-report/strategy-report-tables/strategy-report-tables.component';
import { TvAdvancedMultipleSelectionsComponent } from './charts/tradingView-charts/advanced-multiple-selections/tv-advanced-multiple-selections.component';

import { OHLCPipe } from '../core/pipe/ohlc.pipe';
import { CurrencyKPipe } from '../core/pipe/currency-k.pipe';
import { WinnerOddsByMarketAdvancedPipe } from '../core/pipe/winner-odds-by-market-advanced.pipe';
import { MarketAdvancedDatatableComponent } from './tables/market-list/market-advanced-datatable.component';
import { SecAndMinutePipe } from '../core/pipe/sec-and-minute.pipe';
import { TradeBetsViewComponent } from './trade/trade-bets-view/trade-bets-view.component';
import { AdvancedGridComponent } from './charts/tradingView-charts/advanced-grid/advanced-grid.component';
import { ColumnChartComponent } from './charts/apx-charts/all/column-chart/column-chart.component';
import { MarketAdditionalInfoComponent } from './marketCards/market-additional-info/market-additional-info.component';
import {MarketAdvancedMetalistStatsComponent} from './marketCards/market-advanced-metalist-stats/market-advanced-metalist-stats.component';
import {MarketDetailsModalComponent} from './marketCards/marke-basic-detail-modal/market-details-modal.component';
import {MarketDetailPointComponent} from './marketCards/market-detail-point/market-detail-point.component';
import {MarketDetailPricesAnalysisComponent} from './marketCards/market-detail-prices-analysis/market-detail-prices-analysis.component';
import {MarketDetailSameMatchComponent} from './marketCards/market-detail-same-match/market-detail-same-match.component';
import {TvMarketPricesComponent} from './charts/tradingView-charts/market-detail-prices/tv-market-prices.component';
import {MarketsDetailComponent} from './marketCards/market-basic-details/markets-detail.component';
import {MarketAdvancedDetailComponent} from './marketCards/market-advanced-detail/market-advanced-detail.component';
import { FiltersMainComponent } from './filters/filters-main/filters-main.component';
import { FilterElementComponent } from './filters/filter-element/filter-element.component';
import { TradeAndMarketDetailsModalComponent } from './trade/trade-and-market-details-modal/trade-and-market-details-modal.component';
import { TvMarketPricesAndTradesComponent } from './charts/tradingView-charts/tv-market-prices-and-trades/tv-market-prices-and-trades.component';
import { TradeToolsActionsComponent } from './trade/trade-tools-actions/trade-tools-actions.component';
import {TradeCreateModalComponent} from './trade/modal/trade-create-modal/trade-create-modal.component';
import {TradeUpdatesModalComponent} from './trade/modal/trade-updates-modal/trade-updates-modal.component';
import {TradeDetailComponent} from './trade/trade-detail/trade-detail.component';
import { CrudListComponent } from './filters/crud-list/crud-list.component';
import { StrategyCompareComponent } from './strategy/strategy-compare/strategy-compare.component';
import { StrategyCompareReportComponent } from './strategy/strategy-compare/strategy-compare-report/strategy-compare-report.component';
import { StrategyReportPassiveLowLayComponent } from './strategy/strategy-report-passive-low-lay/strategy-report-passive-low-lay.component';

PlotlyViaCDNModule.setPlotlyVersion('1.40.0'); // can be `latest` or any version number (i.e.: '1.40.0')
PlotlyViaCDNModule.setPlotlyBundle('basic'); // optional: can be null (for full) or 'basic', 'cartesian', 'geo', 'gl3d', 'gl2d', 'mapbox' or 'finance'

@NgModule({
    imports: [
        CommonModule,
        PlotlyViaCDNModule,
        DataTablesModule,
        RouterModule,
        NgxDatatableModule,
        NgSelectModule,
        CustomFormsModule,
        NgxMaskModule.forRoot(),
        FeahterIconModule,
        NgbDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        NgApexchartsModule,
        NgbNavModule,
        NgbPopoverModule,
        NgbTooltipModule,
        NgbCollapseModule,
        NgbProgressbarModule
    ],
  declarations: [
    NoteDataTableComponent,
    NoteDeleteModalComponent,
    NotesUpdatesModalComponent,
    NoteCreateModalComponent,
    TennisPointComponent,
    FootballPointComponent,
    DateFormComponent,
    TennisPointPipe,
    NoteRowDetailComponent,
    LoadingCardsComponent,
    RunnersSelectionFormComponent,
    OddFormComponent,
    BetsFormatterComponent,
    TradeFormatterComponent,
    SportTextComponent,
    EventNameTextComponent,
    BspComponent,
    CurrentComponent,
    MaxComponent,
    FilterNameFormatterComponent,
    WinnerFormatterComponent,
    PieComponent,
    BetsFormComponent,
    MarketInfoCardComponent,
    MarketUpdateCardComponent,
    MarketRunnersCardComponent,
    TvSingleSelectionPriceComponent,
    DeleteModalComponent,
    OptionsSelectorsComponent,
    ListSelectionFormComponent,
    StudyListComponent,
    TradesDatatableComponent,
    TradeEquityComponent,
    StudyMarketsSelectedDetailComponent,
    StrategyReportInfoComponent,
    StrategyReportResumeComponent,
    StrategyReportComponent,
    StrategyReportExpectedValueComponent,
    TradeEquityComponent,
    TradeDDComponent,
    TradeBarChartsComponent,
    MultiLineEquityComponent,
    MultiPlTradesComponent,
    MultiDdTradesComponent,
    MultiRrTradesComponent,
    MontecarloStrategyComponent,
    MontecarloParamsComponent,
    MontecarloCompareTableComponent,
    MontecarloRecapComponent,
    TradeHistogramComponent,
    DdMultiChartsComponent,
    StrategyReportDdComponent,
    NoteLastWeekPipe,
    NoteLast2WeekPipe,
    MontecarloMainComponent,
    MontecarloResultComponent,
    MontecarloChartsComponent,
    MontecarloPipe,
    StrategyReportMonthComponent,
    StrategyReportTablesComponent,
    RunnerNamePipePipe,
    PlayersFilterPipe,
    OHLCPipe,
    TvAdvancedMultipleSelectionsComponent,
    MarketAdvancedDatatableComponent,
    CurrencyKPipe,
    WinnerOddsByMarketAdvancedPipe,
    SecAndMinutePipe,
    TradeBetsViewComponent,
    AdvancedGridComponent,
    ColumnChartComponent,
    MarketAdditionalInfoComponent,
    MarketAdvancedMetalistStatsComponent,
    MarketDetailsModalComponent,
    MarketsDetailComponent,
    TvMarketPricesComponent,
    MarketDetailSameMatchComponent,
    MarketDetailPricesAnalysisComponent,
    MarketDetailPointComponent,
    MarketDetailSameMatchComponent,
    TvMarketPricesComponent,
    MarketAdvancedDetailComponent,
    FiltersMainComponent,
    FilterElementComponent,
    TradeAndMarketDetailsModalComponent,
    TvMarketPricesAndTradesComponent,
    TradeToolsActionsComponent,
    TradeCreateModalComponent,
    TradeUpdatesModalComponent,
    TradeDetailComponent,
    CrudListComponent,
    StrategyCompareComponent,
    StrategyCompareReportComponent,
    TournamentPipe,
    StrategyReportPassiveLowLayComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    PlotlyViaCDNModule,
    NoteDataTableComponent,
    ReactiveFormsModule,
    TennisPointComponent,
    FootballPointComponent,
    DateFormComponent,
    TennisPointPipe,
    LoadingCardsComponent,
    RunnersSelectionFormComponent,
    BetsFormatterComponent,
    OddFormComponent,
    SportTextComponent,
    EventNameTextComponent,
    BspComponent,
    FilterNameFormatterComponent,
    WinnerFormatterComponent,
    PieComponent,
    BetsFormComponent,
    MarketInfoCardComponent,
    MarketUpdateCardComponent,
    MarketRunnersCardComponent,
    TvSingleSelectionPriceComponent,
    DeleteModalComponent,
    OptionsSelectorsComponent,
    ListSelectionFormComponent,
    TradesDatatableComponent,
    TradeEquityComponent,
    StudyMarketsSelectedDetailComponent,
    StrategyReportComponent,
    TradeDDComponent,
    MultiLineEquityComponent,
    MultiDdTradesComponent,
    MultiRrTradesComponent,
    MultiPlTradesComponent,
    StrategyReportInfoComponent,
    StrategyReportResumeComponent,
    MontecarloStrategyComponent,
    TradeBarChartsComponent,
    TradeHistogramComponent,
    DdMultiChartsComponent,
    StrategyReportDdComponent,
    NoteCreateModalComponent,
    NoteLastWeekPipe,
    NoteLast2WeekPipe,
    MontecarloParamsComponent,
    MontecarloMainComponent,
    MontecarloPipe,
    StrategyReportTablesComponent,
    RunnerNamePipePipe,
    PlayersFilterPipe,
    TvAdvancedMultipleSelectionsComponent,
    OHLCPipe,
    MarketAdvancedDatatableComponent,
    CurrencyKPipe,
    WinnerOddsByMarketAdvancedPipe,
    SecAndMinutePipe,
    TradeBetsViewComponent,
    MarketAdditionalInfoComponent,
    ColumnChartComponent,
    MarketAdvancedMetalistStatsComponent,
    MarketsDetailComponent,
    TvMarketPricesComponent,
    MarketDetailSameMatchComponent,
    MarketDetailPricesAnalysisComponent,
    MarketDetailPointComponent,
    MarketDetailSameMatchComponent,
    TvMarketPricesComponent,
    MarketDetailsModalComponent,
    MarketAdvancedDetailComponent,
    FiltersMainComponent,
    TradeAndMarketDetailsModalComponent,
    TradeCreateModalComponent,
    TradeUpdatesModalComponent,
    TradeToolsActionsComponent,
    TradeDetailComponent,
    CrudListComponent,
    StrategyCompareComponent,
    TournamentPipe

  ]
})
export class SharedModule { }
