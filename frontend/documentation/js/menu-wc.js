'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">betfairplatform documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-1cf0ad3a4e184ca08d427812f373b098"' : 'data-target="#xs-components-links-module-AppModule-1cf0ad3a4e184ca08d427812f373b098"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-1cf0ad3a4e184ca08d427812f373b098"' :
                                            'id="xs-components-links-module-AppModule-1cf0ad3a4e184ca08d427812f373b098"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ErrorPageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-0a55b1c9961b30f75fbb32bc78c65466"' : 'data-target="#xs-components-links-module-AuthModule-0a55b1c9961b30f75fbb32bc78c65466"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-0a55b1c9961b30f75fbb32bc78c65466"' :
                                            'id="xs-components-links-module-AuthModule-0a55b1c9961b30f75fbb32bc78c65466"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CalculatorModule.html" data-type="entity-link" >CalculatorModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CalculatorModule-f7ffdf55d6bd079a52e39e2f9e2f3c5c"' : 'data-target="#xs-components-links-module-CalculatorModule-f7ffdf55d6bd079a52e39e2f9e2f3c5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CalculatorModule-f7ffdf55d6bd079a52e39e2f9e2f3c5c"' :
                                            'id="xs-components-links-module-CalculatorModule-f7ffdf55d6bd079a52e39e2f9e2f3c5c"' }>
                                            <li class="link">
                                                <a href="components/BackLayComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BackLayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CalculatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CalculatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LadderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LadderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RiskRewardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RiskRewardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-b2f8cf18027b275dcae21b5c95ae61e9"' : 'data-target="#xs-components-links-module-DashboardModule-b2f8cf18027b275dcae21b5c95ae61e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-b2f8cf18027b275dcae21b5c95ae61e9"' :
                                            'id="xs-components-links-module-DashboardModule-b2f8cf18027b275dcae21b5c95ae61e9"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketStatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesStatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ReportStatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnerStatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnerStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TennisTournamentStatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TennisTournamentStatsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DbManagerModule.html" data-type="entity-link" >DbManagerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DbManagerModule-f02d3d80d50b6594a79d8bda240bbe69"' : 'data-target="#xs-components-links-module-DbManagerModule-f02d3d80d50b6594a79d8bda240bbe69"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DbManagerModule-f02d3d80d50b6594a79d8bda240bbe69"' :
                                            'id="xs-components-links-module-DbManagerModule-f02d3d80d50b6594a79d8bda240bbe69"' }>
                                            <li class="link">
                                                <a href="components/DbManagerManagerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbManagerManagerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DbUpdateRunnersSportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbUpdateRunnersSportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DbUpdateRunnersStatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbUpdateRunnersStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DbUpdateUnderOverCommandComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DbUpdateUnderOverCommandComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentationModule.html" data-type="entity-link" >DocumentationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DocumentationModule-5ef0ed4bd9180a29335c41f2f96c2643"' : 'data-target="#xs-components-links-module-DocumentationModule-5ef0ed4bd9180a29335c41f2f96c2643"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DocumentationModule-5ef0ed4bd9180a29335c41f2f96c2643"' :
                                            'id="xs-components-links-module-DocumentationModule-5ef0ed4bd9180a29335c41f2f96c2643"' }>
                                            <li class="link">
                                                <a href="components/DocumentationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteDocumentationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteDocumentationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TodoDocumentationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TodoDocumentationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/VersionDocumentationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VersionDocumentationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FeahterIconModule.html" data-type="entity-link" >FeahterIconModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-FeahterIconModule-052d1f6b935da0a8041a2e5d38791e32"' : 'data-target="#xs-directives-links-module-FeahterIconModule-052d1f6b935da0a8041a2e5d38791e32"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-FeahterIconModule-052d1f6b935da0a8041a2e5d38791e32"' :
                                        'id="xs-directives-links-module-FeahterIconModule-052d1f6b935da0a8041a2e5d38791e32"' }>
                                        <li class="link">
                                            <a href="directives/FeatherIconDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FeatherIconDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-8dba8544771abe84e3ab66c48878657d"' : 'data-target="#xs-components-links-module-LayoutModule-8dba8544771abe84e3ab66c48878657d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-8dba8544771abe84e3ab66c48878657d"' :
                                            'id="xs-components-links-module-LayoutModule-8dba8544771abe84e3ab66c48878657d"' }>
                                            <li class="link">
                                                <a href="components/BaseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BaseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-LayoutModule-8dba8544771abe84e3ab66c48878657d"' : 'data-target="#xs-directives-links-module-LayoutModule-8dba8544771abe84e3ab66c48878657d"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-LayoutModule-8dba8544771abe84e3ab66c48878657d"' :
                                        'id="xs-directives-links-module-LayoutModule-8dba8544771abe84e3ab66c48878657d"' }>
                                        <li class="link">
                                            <a href="directives/ContentAnimateDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ContentAnimateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LiveModule.html" data-type="entity-link" >LiveModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LiveModule-40a96411dc832351484eb1ef8e5c7cff"' : 'data-target="#xs-components-links-module-LiveModule-40a96411dc832351484eb1ef8e5c7cff"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LiveModule-40a96411dc832351484eb1ef8e5c7cff"' :
                                            'id="xs-components-links-module-LiveModule-40a96411dc832351484eb1ef8e5c7cff"' }>
                                            <li class="link">
                                                <a href="components/LiveDragulaComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveDragulaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiveDragulaElementComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveDragulaElementComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiveDragulaNoteDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveDragulaNoteDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LiveDragulaNotesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LiveDragulaNotesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainLiveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainLiveComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarketAdvancedModule.html" data-type="entity-link" >MarketAdvancedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MarketAdvancedModule-9e36a41f4a8e908e53e03d15d942d5a1"' : 'data-target="#xs-components-links-module-MarketAdvancedModule-9e36a41f4a8e908e53e03d15d942d5a1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MarketAdvancedModule-9e36a41f4a8e908e53e03d15d942d5a1"' :
                                            'id="xs-components-links-module-MarketAdvancedModule-9e36a41f4a8e908e53e03d15d942d5a1"' }>
                                            <li class="link">
                                                <a href="components/MarketAdvancedDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketAdvancedDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketAdvancedListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketAdvancedListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MarketsModule.html" data-type="entity-link" >MarketsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-MarketsModule-9b6817cafcddc009621a0d61a32e15fc"' : 'data-target="#xs-components-links-module-MarketsModule-9b6817cafcddc009621a0d61a32e15fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MarketsModule-9b6817cafcddc009621a0d61a32e15fc"' :
                                            'id="xs-components-links-module-MarketsModule-9b6817cafcddc009621a0d61a32e15fc"' }>
                                            <li class="link">
                                                <a href="components/MarketDetailPointComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketDetailPointComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketDetailPricesAnalysisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketDetailPricesAnalysisComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketDetailPricesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketDetailPricesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketDetailSameMatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketDetailSameMatchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketsCalendarFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketsCalendarFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketsCalendarMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketsCalendarMainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketsCalendarPickerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketsCalendarPickerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketsCalendarRangeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketsCalendarRangeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketsDataTableListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketsDataTableListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketsDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketsDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketsStatsMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketsStatsMainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketsStatsNumbersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketsStatsNumbersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketsStatsSportsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketsStatsSportsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketsViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketsViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotesModule.html" data-type="entity-link" >NotesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NotesModule-4517e1668abf2ee94d1ec44c90424c0a"' : 'data-target="#xs-components-links-module-NotesModule-4517e1668abf2ee94d1ec44c90424c0a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NotesModule-4517e1668abf2ee94d1ec44c90424c0a"' :
                                            'id="xs-components-links-module-NotesModule-4517e1668abf2ee94d1ec44c90424c0a"' }>
                                            <li class="link">
                                                <a href="components/NotesMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesMainComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ReportModule.html" data-type="entity-link" >ReportModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ReportModule-384bcf4e1761391d470d9db47b33ab71"' : 'data-target="#xs-components-links-module-ReportModule-384bcf4e1761391d470d9db47b33ab71"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ReportModule-384bcf4e1761391d470d9db47b33ab71"' :
                                            'id="xs-components-links-module-ReportModule-384bcf4e1761391d470d9db47b33ab71"' }>
                                            <li class="link">
                                                <a href="components/ReportMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ReportMainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyCreateModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyCreateModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyDatatableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyDatatableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyDeleteModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyDeleteModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyUpdatesModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyUpdatesModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyUploaderInsertComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyUploaderInsertComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyUploaderMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyUploaderMainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TradeCreateModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradeCreateModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TradeDatatableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradeDatatableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TradeRowDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradeRowDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TradeUpdatesModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradeUpdatesModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RunnersModule.html" data-type="entity-link" >RunnersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RunnersModule-7f3d787d26d1cccfc0d6786ca0f1dd53"' : 'data-target="#xs-components-links-module-RunnersModule-7f3d787d26d1cccfc0d6786ca0f1dd53"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RunnersModule-7f3d787d26d1cccfc0d6786ca0f1dd53"' :
                                            'id="xs-components-links-module-RunnersModule-7f3d787d26d1cccfc0d6786ca0f1dd53"' }>
                                            <li class="link">
                                                <a href="components/RunnerDetailBspComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnerDetailBspComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnerDetailInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnerDetailInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnerDetailMarketStatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnerDetailMarketStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnerDetailMarketStatsDistributionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnerDetailMarketStatsDistributionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnerDetailMarketStatsGaussianComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnerDetailMarketStatsGaussianComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnerDetailMarketStatsViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnerDetailMarketStatsViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnerDetailMarketsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnerDetailMarketsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnerDetailNotesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnerDetailNotesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnerDetailStatsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnerDetailStatsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnersDataTableComponentList.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnersDataTableComponentList</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnersDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnersDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnersListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnersListComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-50ee19062278ca6c80e36f603e15b2d5"' : 'data-target="#xs-components-links-module-SharedModule-50ee19062278ca6c80e36f603e15b2d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-50ee19062278ca6c80e36f603e15b2d5"' :
                                            'id="xs-components-links-module-SharedModule-50ee19062278ca6c80e36f603e15b2d5"' }>
                                            <li class="link">
                                                <a href="components/AdvancedGridComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdvancedGridComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BetsFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetsFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BetsFormatterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BetsFormatterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BspComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BspComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ColumnChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ColumnChartComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CurrentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DateFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DateFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DdMultiChartsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DdMultiChartsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventNameTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventNameTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FilterNameFormatterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterNameFormatterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FootballPointComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FootballPointComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListSelectionFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListSelectionFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoadingCardsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoadingCardsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketAdvancedDatatableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketAdvancedDatatableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketInfoCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketInfoCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketRunnersCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketRunnersCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MarketUpdateCardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MarketUpdateCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MaxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaxComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MontecarloChartsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MontecarloChartsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MontecarloCompareTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MontecarloCompareTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MontecarloMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MontecarloMainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MontecarloParamsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MontecarloParamsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MontecarloRecapComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MontecarloRecapComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MontecarloResultComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MontecarloResultComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MontecarloStrategyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MontecarloStrategyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultiDdTradesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultiDdTradesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultiLineEquityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultiLineEquityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultiPlTradesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultiPlTradesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MultiRrTradesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MultiRrTradesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteCreateModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteCreateModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteDataTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteDataTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteDeleteModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteDeleteModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NoteRowDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteRowDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotesUpdatesModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotesUpdatesModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OddFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OddFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/OptionsSelectorsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OptionsSelectorsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PieComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RunnersSelectionFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnersSelectionFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SportTextComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SportTextComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyReportDdComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyReportDdComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyReportExpectedValueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyReportExpectedValueComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyReportInfoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyReportInfoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyReportMonthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyReportMonthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyReportResumeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyReportResumeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StrategyReportTablesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StrategyReportTablesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyMarketsSelectedDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyMarketsSelectedDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyTradesDatatableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyTradesDatatableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TennisPointComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TennisPointComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TradeBarChartsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradeBarChartsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TradeBetsViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradeBetsViewComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TradeDDComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradeDDComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TradeEquityComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradeEquityComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TradeFormatterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradeFormatterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TradeHistogramComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradeHistogramComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TradeRowDetailSharedComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TradeRowDetailSharedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TvAdvancedMultipleSelectionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TvAdvancedMultipleSelectionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TvSingleSelectionPriceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TvSingleSelectionPriceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WinnerFormatterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WinnerFormatterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-50ee19062278ca6c80e36f603e15b2d5"' : 'data-target="#xs-pipes-links-module-SharedModule-50ee19062278ca6c80e36f603e15b2d5"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-50ee19062278ca6c80e36f603e15b2d5"' :
                                            'id="xs-pipes-links-module-SharedModule-50ee19062278ca6c80e36f603e15b2d5"' }>
                                            <li class="link">
                                                <a href="pipes/CurrencyKPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CurrencyKPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/MontecarloPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MontecarloPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NoteLast2WeekPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteLast2WeekPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/NoteLastWeekPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NoteLastWeekPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/OHLCPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OHLCPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/PlayersFilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayersFilterPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/RunnerNamePipePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RunnerNamePipePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/SecAndMinutePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SecAndMinutePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TennisPointPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TennisPointPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/WinnerOddsByMarketAdvancedPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WinnerOddsByMarketAdvancedPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StudyModule.html" data-type="entity-link" >StudyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StudyModule-78a223089d6864b40a3e07cf6f92fbc8"' : 'data-target="#xs-components-links-module-StudyModule-78a223089d6864b40a3e07cf6f92fbc8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StudyModule-78a223089d6864b40a3e07cf6f92fbc8"' :
                                            'id="xs-components-links-module-StudyModule-78a223089d6864b40a3e07cf6f92fbc8"' }>
                                            <li class="link">
                                                <a href="components/BasketActiveFilterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketActiveFilterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasketCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasketDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasketFilterByDateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketFilterByDateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasketFilterByOddsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketFilterByOddsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasketFilterBySelectionNameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketFilterBySelectionNameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasketFilterEventNameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketFilterEventNameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasketListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasketMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketMainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasketMarketsListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasketMarketsListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntryCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntryCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntryDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntryDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntryListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntryListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EntryMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EntryMainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MainStudyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MainStudyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayersCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayersCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayersListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayersListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PlayersMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PlayersMainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyComparatorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyComparatorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyComparatorReportComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyComparatorReportComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyComparatorTradesTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyComparatorTradesTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyCreateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyCreateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyMainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyMmChartsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyMmChartsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyMmComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyMmComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyMmDatatableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyMmDatatableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudyMmParamsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudyMmParamsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TennisTournamentModule.html" data-type="entity-link" >TennisTournamentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TennisTournamentModule-9ca8ca529f61c9c9e71d4def2d842a5e"' : 'data-target="#xs-components-links-module-TennisTournamentModule-9ca8ca529f61c9c9e71d4def2d842a5e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TennisTournamentModule-9ca8ca529f61c9c9e71d4def2d842a5e"' :
                                            'id="xs-components-links-module-TennisTournamentModule-9ca8ca529f61c9c9e71d4def2d842a5e"' }>
                                            <li class="link">
                                                <a href="components/TennisTournamentCreateModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TennisTournamentCreateModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TennisTournamentDataTableComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TennisTournamentDataTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TennisTournamentDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TennisTournamentDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TennisTournamentMainComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TennisTournamentMainComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TennisTournamentUpdatesModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TennisTournamentUpdatesModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/StudyListComponent-1.html" data-type="entity-link" >StudyListComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateBasketOptionClass.html" data-type="entity-link" >CreateBasketOptionClass</a>
                            </li>
                            <li class="link">
                                <a href="classes/Ladder.html" data-type="entity-link" >Ladder</a>
                            </li>
                            <li class="link">
                                <a href="classes/LadderData.html" data-type="entity-link" >LadderData</a>
                            </li>
                            <li class="link">
                                <a href="classes/LadderEntry.html" data-type="entity-link" >LadderEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/LadderLevel.html" data-type="entity-link" >LadderLevel</a>
                            </li>
                            <li class="link">
                                <a href="classes/LadderLevelBackSide.html" data-type="entity-link" >LadderLevelBackSide</a>
                            </li>
                            <li class="link">
                                <a href="classes/LadderLevelLaySide.html" data-type="entity-link" >LadderLevelLaySide</a>
                            </li>
                            <li class="link">
                                <a href="classes/LadderResume.html" data-type="entity-link" >LadderResume</a>
                            </li>
                            <li class="link">
                                <a href="classes/MarketForRunnersMarket.html" data-type="entity-link" >MarketForRunnersMarket</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceAnalysis.html" data-type="entity-link" >PriceAnalysis</a>
                            </li>
                            <li class="link">
                                <a href="classes/PriceStats.html" data-type="entity-link" >PriceStats</a>
                            </li>
                            <li class="link">
                                <a href="classes/RunnerMarketsGaussian.html" data-type="entity-link" >RunnerMarketsGaussian</a>
                            </li>
                            <li class="link">
                                <a href="classes/RunnerMarketsStats.html" data-type="entity-link" >RunnerMarketsStats</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectionBspFilter.html" data-type="entity-link" >SelectionBspFilter</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectionName.html" data-type="entity-link" >SelectionName</a>
                            </li>
                            <li class="link">
                                <a href="classes/SupportBets.html" data-type="entity-link" >SupportBets</a>
                            </li>
                            <li class="link">
                                <a href="classes/TradeForm.html" data-type="entity-link" >TradeForm</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utils.html" data-type="entity-link" >Utils</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BasketEffects.html" data-type="entity-link" >BasketEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CalculatorService.html" data-type="entity-link" >CalculatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompareStudyCsvGeneratorService.html" data-type="entity-link" >CompareStudyCsvGeneratorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DbManagerEffects.html" data-type="entity-link" >DbManagerEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DbManagerService.html" data-type="entity-link" >DbManagerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EntryEffects.html" data-type="entity-link" >EntryEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiveCommandService.html" data-type="entity-link" >LiveCommandService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LiveService.html" data-type="entity-link" >LiveService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarketAdvancedEffectEffects.html" data-type="entity-link" >MarketAdvancedEffectEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarketAdvancedService.html" data-type="entity-link" >MarketAdvancedService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarketsEffects.html" data-type="entity-link" >MarketsEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MarketService.html" data-type="entity-link" >MarketService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MmCalculatorService.html" data-type="entity-link" >MmCalculatorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MontecarloService.html" data-type="entity-link" >MontecarloService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotesEffects.html" data-type="entity-link" >NotesEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotesService.html" data-type="entity-link" >NotesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlayersEffects.html" data-type="entity-link" >PlayersEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportEffects.html" data-type="entity-link" >ReportEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReportService.html" data-type="entity-link" >ReportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RunnersEffects.html" data-type="entity-link" >RunnersEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RunnersService.html" data-type="entity-link" >RunnersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StrategyReportService.html" data-type="entity-link" >StrategyReportService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudyEffects.html" data-type="entity-link" >StudyEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StudyService.html" data-type="entity-link" >StudyService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TennisTournamentEffects.html" data-type="entity-link" >TennisTournamentEffects</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TennisTournamentService.html" data-type="entity-link" >TennisTournamentService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TradeCalculatorService.html" data-type="entity-link" >TradeCalculatorService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/TokenInterceptor.html" data-type="entity-link" >TokenInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AppState.html" data-type="entity-link" >AppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BackLay.html" data-type="entity-link" >BackLay</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Basket.html" data-type="entity-link" >Basket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BasketForm.html" data-type="entity-link" >BasketForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BasketStates.html" data-type="entity-link" >BasketStates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Bets.html" data-type="entity-link" >Bets</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BySportStats.html" data-type="entity-link" >BySportStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ComparatorTableRow.html" data-type="entity-link" >ComparatorTableRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CompareStudy.html" data-type="entity-link" >CompareStudy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ConsecutiveTrade.html" data-type="entity-link" >ConsecutiveTrade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CreateBasketOption.html" data-type="entity-link" >CreateBasketOption</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/CsvData.html" data-type="entity-link" >CsvData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DateStruct.html" data-type="entity-link" >DateStruct</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DbState.html" data-type="entity-link" >DbState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Entry.html" data-type="entity-link" >Entry</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntryOptions.html" data-type="entity-link" >EntryOptions</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EntryStates.html" data-type="entity-link" >EntryStates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Exposition.html" data-type="entity-link" >Exposition</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Filter.html" data-type="entity-link" >Filter</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FootballPoint.html" data-type="entity-link" >FootballPoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GridData.html" data-type="entity-link" >GridData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IsLoading.html" data-type="entity-link" >IsLoading</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ListForm.html" data-type="entity-link" >ListForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LiveRow.html" data-type="entity-link" >LiveRow</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LiveRunner.html" data-type="entity-link" >LiveRunner</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Market.html" data-type="entity-link" >Market</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketAdvanced.html" data-type="entity-link" >MarketAdvanced</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketAdvancedInfo.html" data-type="entity-link" >MarketAdvancedInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketAdvancedPrices.html" data-type="entity-link" >MarketAdvancedPrices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketAdvancedSelections.html" data-type="entity-link" >MarketAdvancedSelections</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketAdvancedState.html" data-type="entity-link" >MarketAdvancedState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketAdvancedTypeHead.html" data-type="entity-link" >MarketAdvancedTypeHead</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketBasket.html" data-type="entity-link" >MarketBasket</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketInfo.html" data-type="entity-link" >MarketInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketPrices.html" data-type="entity-link" >MarketPrices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketSelectionInfo.html" data-type="entity-link" >MarketSelectionInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketSelections.html" data-type="entity-link" >MarketSelections</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketSinglePrices.html" data-type="entity-link" >MarketSinglePrices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketsState.html" data-type="entity-link" >MarketsState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketsWinner.html" data-type="entity-link" >MarketsWinner</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MarketUpdates.html" data-type="entity-link" >MarketUpdates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MenuItem.html" data-type="entity-link" >MenuItem</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Mm.html" data-type="entity-link" >Mm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MmResult.html" data-type="entity-link" >MmResult</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MontecarloParams.html" data-type="entity-link" >MontecarloParams</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/MontecarloRecap.html" data-type="entity-link" >MontecarloRecap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Month.html" data-type="entity-link" >Month</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Note.html" data-type="entity-link" >Note</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotesStates.html" data-type="entity-link" >NotesStates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NoteStats.html" data-type="entity-link" >NoteStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pie.html" data-type="entity-link" >Pie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Players.html" data-type="entity-link" >Players</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlayersForm.html" data-type="entity-link" >PlayersForm</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PlayersStates.html" data-type="entity-link" >PlayersStates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Point.html" data-type="entity-link" >Point</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ReportStates.html" data-type="entity-link" >ReportStates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RiskReward.html" data-type="entity-link" >RiskReward</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Runner.html" data-type="entity-link" >Runner</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RunnerBsp.html" data-type="entity-link" >RunnerBsp</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RunnerData.html" data-type="entity-link" >RunnerData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RunnerDataAdvanced.html" data-type="entity-link" >RunnerDataAdvanced</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RunnerInfo.html" data-type="entity-link" >RunnerInfo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RunnerMarketsGaussianInterface.html" data-type="entity-link" >RunnerMarketsGaussianInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RunnerMarketsStatsInterface.html" data-type="entity-link" >RunnerMarketsStatsInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RunnerPrices.html" data-type="entity-link" >RunnerPrices</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RunnersList.html" data-type="entity-link" >RunnersList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RunnersState.html" data-type="entity-link" >RunnersState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/RunnerStats.html" data-type="entity-link" >RunnerStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SelectedTradeCharts.html" data-type="entity-link" >SelectedTradeCharts</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SportStats.html" data-type="entity-link" >SportStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Strategy.html" data-type="entity-link" >Strategy</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrategyList.html" data-type="entity-link" >StrategyList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrategyReport.html" data-type="entity-link" >StrategyReport</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrategyResume.html" data-type="entity-link" >StrategyResume</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StrategyUploader.html" data-type="entity-link" >StrategyUploader</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Study.html" data-type="entity-link" >Study</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/StudyStates.html" data-type="entity-link" >StudyStates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TennisPoint.html" data-type="entity-link" >TennisPoint</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TennisTournament.html" data-type="entity-link" >TennisTournament</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TennisTournamentList.html" data-type="entity-link" >TennisTournamentList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TennisTournamentStates.html" data-type="entity-link" >TennisTournamentStates</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TennisTournamentStats.html" data-type="entity-link" >TennisTournamentStats</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Trade.html" data-type="entity-link" >Trade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TradeBets.html" data-type="entity-link" >TradeBets</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TradeComparator.html" data-type="entity-link" >TradeComparator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TradePlSeries.html" data-type="entity-link" >TradePlSeries</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TradeRowDetail.html" data-type="entity-link" >TradeRowDetail</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});