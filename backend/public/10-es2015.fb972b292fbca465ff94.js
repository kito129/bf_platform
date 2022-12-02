(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "+LW3":
/*!******************************************************************************!*\
  !*** ./src/app/features/notes/components/notes-main/notes-main.component.ts ***!
  \******************************************************************************/
/*! exports provided: NotesMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesMainComponent", function() { return NotesMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_notes_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./notes-main.component.html */ "3we1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_notes_notes_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/notes/notes.selectors */ "Iz9j");
/* harmony import */ var _store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../store/runners/runners.selectors */ "CzFr");
/* harmony import */ var _store_tennis_tournament_tennisTournament_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../store/tennis-tournament/tennisTournament.selectors */ "Jrow");
/* harmony import */ var _store_notes_notes_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../store/notes/notes.actions */ "fNGT");









let NotesMainComponent = class NotesMainComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.notes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_notes_notes_selectors__WEBPACK_IMPORTED_MODULE_5__["getAllNotes"]));
        this.isLoadingNotes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_notes_notes_selectors__WEBPACK_IMPORTED_MODULE_5__["getNotesLoading"]));
        this.runnersList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllRunners"]));
        this.isLoadingAllRunners$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_6__["isLoadingAllRunners"]));
        this.tournamentList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_tennis_tournament_tennisTournament_selectors__WEBPACK_IMPORTED_MODULE_7__["getAllTennisTournaments"]));
        this.isLoadingAllTournament$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_tennis_tournament_tennisTournament_selectors__WEBPACK_IMPORTED_MODULE_7__["getIsLoadingAllTennisTournament"]));
        this.notesStatistics$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_notes_notes_selectors__WEBPACK_IMPORTED_MODULE_5__["getNotesStats"]));
        this.notesStatisticsMonth$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_notes_notes_selectors__WEBPACK_IMPORTED_MODULE_5__["getNotesStatistics"]));
    }
    ngOnInit() {
    }
    refreshAllNotes() {
        this.store.dispatch(_store_notes_notes_actions__WEBPACK_IMPORTED_MODULE_8__["getAllRunnersNotes"]());
    }
};
NotesMainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
NotesMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-notes-main',
        template: _raw_loader_notes_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NotesMainComponent);



/***/ }),

/***/ "3we1":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/notes/components/notes-main/notes-main.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h4 class=\"mb-3 mb-md-0\">Notes</h4>\r\n    <p>Navigate in notes list</p>\r\n  </div>\r\n  <div class=\"d-flex align-items-center flex-wrap text-nowrap\">\r\n    <button type=\"button\" class=\"btn btn-outline-info btn-icon-text mr-2 d-none d-md-block\" (click)=\"refreshAllNotes()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!-- BREADCRUMB -->\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">BF</a></li>\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/notes\">Notes</a></li>\r\n  </ol>\r\n</nav>\r\n<!-- /BREADCRUMB -->\r\n\r\n\r\n<!-- ROW 1-->\r\n<div class=\"col-12\">\r\n  <!-- LIST COMPONENT-->\r\n  <app-loading-cards *ngIf=\"(isLoadingNotes$ | async).isLoading\"></app-loading-cards>\r\n  <app-note-data-table *ngIf=\"(isLoadingNotes$ | async).isLoadingSuccess\"\r\n                       [notes]=\"notes$ | async\">\r\n  </app-note-data-table>\r\n\r\n</div>\r\n\r\n\r\n<!-- DATA CHART-->\r\n\r\n<!-- ROW 1-->\r\n<div class=\"col-12 mt-2\">\r\n  <!-- LIST COMPONENT-->\r\n  <app-loading-cards *ngIf=\"(isLoadingNotes$ | async).isLoading\"></app-loading-cards>\r\n  <app-statistic-main *ngIf=\"(isLoadingNotes$ | async).isLoadingSuccess\"\r\n                      [stats]=\"notesStatistics$ | async\"\r\n                      [month]=\"notesStatisticsMonth$ | async\">\r\n  </app-statistic-main>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "CfRl":
/*!************************************************!*\
  !*** ./src/app/features/notes/notes.module.ts ***!
  \************************************************/
/*! exports provided: NotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesModule", function() { return NotesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/feather-icon/feather-icon.module */ "tyVc");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _components_notes_main_notes_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/notes-main/notes-main.component */ "+LW3");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-custom-validators */ "uxn7");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _components_statistic_main_statistic_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/statistic-main/statistic-main.component */ "npqK");
/* harmony import */ var _components_statistic_table_statistic_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/statistic-table/statistic-table.component */ "Pxo9");

// MAIN IMPORT




// DEPENDENCIES IMPORT


// Ng-ApexCharts

// Ng2-trade

// other module








// ROUTER
const routes = [
    {
        path: '',
        component: _components_notes_main_notes_main_component__WEBPACK_IMPORTED_MODULE_10__["NotesMainComponent"]
    },
];
let NotesModule = class NotesModule {
};
NotesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_notes_main_notes_main_component__WEBPACK_IMPORTED_MODULE_10__["NotesMainComponent"],
            _components_statistic_main_statistic_main_component__WEBPACK_IMPORTED_MODULE_15__["StatisticMainComponent"],
            _components_statistic_table_statistic_table_component__WEBPACK_IMPORTED_MODULE_16__["StatisticTableComponent"],
        ],
        exports: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            src_app_core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__["FeahterIconModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__["CustomFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
        ]
    })
], NotesModule);



/***/ }),

/***/ "JVx0":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/notes/components/statistic-table/statistic-table.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>statistic-table works!</p>\n");

/***/ }),

/***/ "Pxo9":
/*!****************************************************************************************!*\
  !*** ./src/app/features/notes/components/statistic-table/statistic-table.component.ts ***!
  \****************************************************************************************/
/*! exports provided: StatisticTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticTableComponent", function() { return StatisticTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_statistic_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./statistic-table.component.html */ "JVx0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let StatisticTableComponent = class StatisticTableComponent {
    constructor() { }
    ngOnInit() {
    }
};
StatisticTableComponent.ctorParameters = () => [];
StatisticTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-statistic-table',
        template: _raw_loader_statistic_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], StatisticTableComponent);



/***/ }),

/***/ "ggkN":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/notes/components/statistic-main/statistic-main.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- CARD 1-->\n<div class=\"card\">\n  <!-- HEADER -->\n  <div class=\"card-header\">\n    <div class=\"d-flex justify-content-between align-items-baseline\">\n      <h6 class=\"card-title mb-0\">Statistics</h6>\n    </div><!-- /HEADER -->\n  </div>\n  <div class=\"card-body\"><!-- BODY -->\n    <div class=\"d-flex justify-content-around align-items-center\">\n      <h6>{{check}}</h6>\n    </div>\n\n    <div class=\"table-responsive tableFixHead tradesCompareTable\">\n      <table class=\"table table-hover table-bordered\">\n        <thead>\n          <tr>\n            <th class=\"table-dark text-light text-center\"><h6>Month</h6></th>\n            <th class=\"table-dark text-light text-center\"><h6 class=\"text-primary\">Length</h6></th>\n            <th class=\"table-dark text-light text-center\"><h6 class=\"text-success\">Win</h6></th>\n            <th class=\"table-dark text-light text-center\"><h6 class=\"text-success\">Win % </h6></th>\n            <th class=\"table-dark text-light text-center\"><h6 class=\"text-danger\">Loss</h6></th>\n            <th class=\"table-dark text-light text-center\"><h6 class=\"text-danger\">Loss % </h6></th>\n            <th class=\"table-dark text-light text-center\"><h6 class=\"text-warning\">Retired</h6></th>\n            <th class=\"table-dark text-light text-center\"><h6 class=\"text-warning\">Retired %</h6></th>\n            <th class=\"table-dark text-light text-center\"><h6 class=\"text-light\">No Med Ret</h6></th>\n            <th class=\"table-dark text-light text-center\"><h6 class=\"text-light\">No Med Ret %</h6></th>\n            <th class=\"table-dark text-light text-center\"><h6 class=\"text-info\">Check</h6></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th><h4 class=\"text-primary\">Total</h4></th>\n            <th><h4>{{stats.length}}</h4></th>\n            <th><h4 class=\"text-success\">{{stats.medical.winner}}</h4></th>\n            <th><h4 class=\"text-success\">{{stats.medical.winner / stats.length | percent}}</h4></th>\n            <th><h4 class=\"text-danger\">{{stats.medical.looser}}</h4></th>\n            <th><h4 class=\"text-danger\">{{stats.medical.looser / stats.length | percent}}</h4></th>\n            <th><h4 class=\"text-warning\">{{stats.medical.retired}}</h4></th>\n            <th><h4 class=\"text-warning\">{{stats.medical.retired / stats.length | percent}}</h4></th>\n            <th><h4 class=\"text-light\">{{stats.stats.nmRetires}}</h4></th>\n            <th><h4 class=\"text-light\">{{stats.stats.nmRetires / stats.length | percent}}</h4></th>\n            <th><h4>{{stats.medical.winner + stats.medical.looser +  stats.medical.retired}}</h4></th>\n          </tr>\n          <tr>\n            <th><h4 class=\"text-warning\">AVG</h4></th>\n            <th><h4>{{avgLength}}</h4></th>\n            <th><h4 class=\"text-success\">{{avgWin}}</h4></th>\n            <th></th>\n            <th><h4 class=\"text-danger\">{{avgLoss}}</h4></th>\n            <th></th>\n            <th><h4 class=\"text-warning\">{{avgRetired}}</h4></th>\n            <th></th>\n            <th><h4 class=\"text-light\">{{avgNoMed}}</h4></th>\n            <th></th>\n            <th></th>\n          </tr>\n          <tr *ngFor=\"let m of month\">\n            <th><h4>{{m.month}}</h4></th>\n            <th><h6>{{m.noteStats.length}}</h6></th>\n            <th><h6>{{m.noteStats.medical.winner}}</h6></th>\n            <th><h6>{{m.noteStats.medical.winner / m.noteStats.length | percent}}</h6></th>\n            <th><h6>{{m.noteStats.medical.looser}}</h6></th>\n            <th><h6>{{m.noteStats.medical.looser / m.noteStats.length | percent}}</h6></th>\n            <th><h6>{{m.noteStats.medical.retired}}</h6></th>\n            <th><h6>{{m.noteStats.medical.retired / m.noteStats.length | percent}}</h6></th>\n            <th><h6>{{m.noteStats.stats.nmRetires}}</h6></th>\n            <th><h6>{{m.noteStats.stats.nmRetires / m.noteStats.length | percent}}</h6></th>\n            <th><h6>{{m.noteStats.medical.winner + m.noteStats.medical.looser +  m.noteStats.medical.retired}}</h6></th>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <!-- CHART-->\n    <div class=\"mt-2\">\n      <h4>Medical</h4>\n      <app-columns-chart [seriesData]=\"[length]\"\n                               [colors]=\"['blue']\"\n                               [height]=\"800\"\n                               [labels]=\"labels\"\n                               [title]=\"['Medical']\"\n                               [isCurrency]=\"false\"\n                               [isPercent]=\"false\">\n      </app-columns-chart>\n    </div>\n\n    <!-- CHART-->\n    <div class=\"mt-2\">\n      <h4>Win/Loss</h4>\n      <app-columns-chart [seriesData]=\"[win, loss, retired]\"\n                                  [wantStacked]=\"true\"\n                               [colors]=\"['green','red','yellow']\"\n                               [height]=\"800\"\n                               [labels]=\"labels\"\n                               [title]=\"['Win', 'Loss', 'Retired']\"\n                               [isCurrency]=\"false\"\n                               [isPercent]=\"false\">\n      </app-columns-chart>\n    </div>\n\n    <!-- CHART-->\n    <div class=\"mt-2\">\n      <h4>No Medical Retired</h4>\n      <app-columns-chart [seriesData]=\"[nMretired]\"\n                                  [wantStacked]=\"true\"\n                                  [colors]=\"['purple']\"\n                                  [height]=\"600\"\n                                  [labels]=\"labels\"\n                                  [title]=\"['No Medical Retired']\"\n                                  [isCurrency]=\"false\"\n                                  [isPercent]=\"false\">\n      </app-columns-chart>\n    </div>\n\n    <!-- CHART-->\n    <div class=\"mt-2\">\n      <h4>First Set Retired</h4>\n      <app-columns-chart [seriesData]=\"[fSretired]\"\n                                  [wantStacked]=\"true\"\n                                  [colors]=\"['grey']\"\n                                  [height]=\"600\"\n                                  [labels]=\"labels\"\n                                  [title]=\"['First Set Retired']\"\n                                  [isCurrency]=\"false\"\n                                  [isPercent]=\"false\">\n      </app-columns-chart>\n    </div>\n\n\n\n\n\n  </div>\n</div>\n");

/***/ }),

/***/ "npqK":
/*!**************************************************************************************!*\
  !*** ./src/app/features/notes/components/statistic-main/statistic-main.component.ts ***!
  \**************************************************************************************/
/*! exports provided: StatisticMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticMainComponent", function() { return StatisticMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_statistic_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./statistic-main.component.html */ "ggkN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _model_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../model/utils */ "E8uS");




let StatisticMainComponent = class StatisticMainComponent {
    constructor() {
        this.labels = [];
        this.length = [];
        this.win = [];
        this.loss = [];
        this.retired = [];
        this.nMretired = [];
        this.fSretired = [];
        this.check = 0;
        this.avgLength = '0';
        this.avgWin = '0';
        this.avgLoss = '0';
        this.avgRetired = '0';
        this.avgNoMed = '0';
        this.util = new _model_utils__WEBPACK_IMPORTED_MODULE_3__["Utils"]();
    }
    ngOnInit() {
        this.labels = this.month.map(x => x.month);
        this.length = this.month.map(x => x.noteStats.length);
        this.win = this.month.map(x => x.noteStats.medical.winner);
        this.loss = this.month.map(x => x.noteStats.medical.looser);
        this.retired = this.month.map(x => x.noteStats.medical.retired);
        this.nMretired = this.month.map(x => x.noteStats.stats.nmRetires);
        this.fSretired = this.month.map(x => x.noteStats.medical.fsRetired);
        this.check = this.win.reduce((a, b) => a + b) + this.loss.reduce((a, b) => a + b) + this.retired.reduce((a, b) => a + b);
        // check avg
        this.avgLength = this.util.avgOfArray(this.length).toFixed(0);
        this.avgWin = this.util.avgOfArray(this.win).toFixed(0);
        this.avgLoss = this.util.avgOfArray(this.loss).toFixed(0);
        this.avgRetired = this.util.avgOfArray(this.retired).toFixed(0);
        this.avgNoMed = this.util.avgOfArray(this.nMretired).toFixed(0);
    }
};
StatisticMainComponent.ctorParameters = () => [];
StatisticMainComponent.propDecorators = {
    stats: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    month: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
StatisticMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-statistic-main',
        template: _raw_loader_statistic_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], StatisticMainComponent);



/***/ })

}]);