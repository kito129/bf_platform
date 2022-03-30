(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "+59F":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/strategy/strategy-datatable/strategy-datatable.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">All Strategy</h6>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <app-strategy-create-modal class=\"mr-2\" (addStrategyCreateEmitter)=\"createModal($event)\"></app-strategy-create-modal>\r\n\r\n\r\n    <div class=\"d-flex justify-content-end align-items-baseline\">\r\n      <form class=\"forms-sample grid-margin\" #searchForm=\"ngForm\">\r\n        <div class=\"row\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            placeholder=\"Type name...\"\r\n            (keyup)=\"updateFilter($event)\"\r\n          />\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <ngx-datatable\r\n      class=\"dark\"\r\n      [rows]=\"rows\"\r\n      [loadingIndicator]=\"loadingIndicator\"\r\n      [columnMode]=\"ColumnMode.force\"\r\n      [headerHeight]=\"40\"\r\n      [footerHeight]=\"50\"\r\n      [limit]=\"15\"\r\n      rowHeight=\"auto\"\r\n      [reorderable]=\"true\"\r\n      [sorts]=\"[{prop: 'openDate', dir: 'desc'}]\">\r\n      >\r\n      <ngx-datatable-column name=\"Name\" prop=\"name\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Sport\" prop=\"sport\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <app-sport-text [sport]=\"value\"></app-sport-text>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"# of Trade\" prop=\"numberOfTrade\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Pl\" prop=\"pl\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value | currency }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Max DD\" prop=\"maxDD\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value | currency }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Max DD %\" prop=\"maxDDPercent\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value | percent }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Win ratio\" prop=\"winRatio\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value | percent }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Tolls\" prop=\"strategy\">\r\n        <ng-template let-value=\"value\"  ngx-datatable-cell-template>\r\n\r\n          <div class=\"d-flex justify-content-center align-items-center\">\r\n\r\n            <button type=\"button\" class=\"btn btn-icon mr-2\" [ngClass]=\"selectedStrategyId === value._id ? 'btn-info' : 'btn-outline-info'\"\r\n                    (click)=\"clickSelectStrategy(value._id)\" >\r\n              <i class=\"feather icon-eye\"></i>\r\n            </button>\r\n\r\n            <app-delete-modal [id]=\"value._id\"\r\n                              [options]=\"'Delete'\"\r\n                              [type]=\"'strategy'\"\r\n                              (deleteEmitter)=\"deleteModal($event)\">\r\n            </app-delete-modal>\r\n\r\n            <app-strategy-updates-modal [strategyInput$]=\"value\"\r\n                                        (strategyUpdateEmitter)=\"updateModal($event)\">\r\n\r\n            </app-strategy-updates-modal>\r\n          </div>\r\n\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n    </ngx-datatable>\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "+p3/":
/*!*********************************************************************!*\
  !*** ./src/app/features/report/components/report-main.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReportMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportMainComponent", function() { return ReportMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report-main.component.html */ "Lix1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../store/report/report.selectors */ "VGBg");
/* harmony import */ var _store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/runners/runners.selectors */ "CzFr");
/* harmony import */ var _store_report_report_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../store/report/report.actions */ "DoIT");
/* harmony import */ var _services_strategy_report_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/strategy-report.service */ "sTJy");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");











let ReportMainComponent = class ReportMainComponent {
    constructor(router, store, strategyReportService) {
        this.router = router;
        this.store = store;
        this.strategyReportService = strategyReportService;
        this.defaultNavActiveId = 1;
        this.selectedStrategyPie = [0, 0, 0];
        this.visibleReport = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.currentPageSelected = 0;
    }
    ngOnInit() {
        // get slice for state
        this.allTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllTrade"]));
        this.isLoadingAllTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllTradeLoading"]));
        this.allStrategy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllStrategy"]));
        this.isLoadingAllStrategy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllStrategyLoading"]));
        this.selectedStrategy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedStrategy"]));
        this.selectedStrategyTrades$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedStrategyTrades"]));
        this.selectedStrategyId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedStrategyId"]));
        this.allRunners$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_7__["getAllRunners"]));
        this.isLoadingAllRunners$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_7__["isLoadingAllRunners"]));
        this.strategyDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getStrategyDatatable"]));
        // generate strategyReport
        const var$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.selectedStrategy$, this.selectedStrategyTrades$])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$))
            .subscribe(data => {
            if (data[0] && data[1].length) {
                const strategy = data[0];
                const trades = data[1];
                // set the data in service
                this.strategyReportService.setData(strategy, trades);
                this.selectedStrategyReport = this.strategyReportService.getStrategyReport();
                this.selectedStrategyPie = this.strategyReportService.getStrategyPie();
                // visible presentational components
                this.visibleReport = true;
            }
            else {
                this.visibleReport = false;
            }
        });
        // generate all trade lables list
        this.allTrade$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(this.destroy$))
            .subscribe(trades => {
            let i = 0;
            this.allTradesLabels = trades.map(x => {
                i++;
                return i.toString() + ') ' + new Date(x.trade.info.date).getFullYear().toString().substring(2) + '/' + (new Date(x.trade.info.date).getMonth() + 1) + '/' + new Date(x.trade.info.date).getDate() + ' - ' + x.trade.info.marketInfo.marketName;
            });
        });
    }
    setPageNUmber(event) {
        this.currentPageSelected = event[0].offset;
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    refresh() {
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_8__["getAllStrategies"]());
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_8__["getAllTrades"]());
    }
};
ReportMainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _services_strategy_report_service__WEBPACK_IMPORTED_MODULE_9__["StrategyReportService"] }
];
ReportMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-report-main',
        template: _raw_loader_report_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ReportMainComponent);



/***/ }),

/***/ "3TDb":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/report/components/strategy/modal/strategy-note-delete-modal/strategy-delete-modal.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: StrategyDeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyDeleteModalComponent", function() { return StrategyDeleteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_strategy_delete_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./strategy-delete-modal.component.html */ "KAN7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




let StrategyDeleteModalComponent = class StrategyDeleteModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.strategyDeleteEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    ngOnInit() {
    }
    openVerticalCenteredModal(content) {
        this.modalService.open(content, { centered: true }).result.then((result) => {
            console.log(this.strategy._id);
            this.strategyDeleteEmitter.emit([this.strategy._id, result]);
        }).catch((res) => { });
    }
};
StrategyDeleteModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
StrategyDeleteModalComponent.propDecorators = {
    strategyDeleteEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    strategy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
StrategyDeleteModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-strategy-delete-modal',
        template: _raw_loader_strategy_delete_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], StrategyDeleteModalComponent);



/***/ }),

/***/ "3ld1":
/*!********************************************************************************************************************!*\
  !*** ./src/app/features/report/components/strategy/modal/strategy-create-modal/strategy-create-modal.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: StrategyCreateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyCreateModalComponent", function() { return StrategyCreateModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_strategy_create_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./strategy-create-modal.component.html */ "TfeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




let StrategyCreateModalComponent = class StrategyCreateModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.addStrategyCreateEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.color = ['primary', 'secondary', 'danger', 'warning'];
        this.sport = ['TENNIS', 'FOOTBALL', 'HORSE RACING'];
    }
    ngOnInit() {
        this.constructStrategy();
    }
    openVerticalCenteredModal(content) {
        this.modalService.open(content, { centered: true }).result.then((result) => {
            this.addStrategyCreateEmitter.emit([this.strategy, result]);
        }).finally(() => {
            // reset for next input
            this.constructStrategy();
        });
    }
    constructStrategy() {
        this.strategy = {
            created: new Date().getTime(),
            lastUpdate: new Date().getTime(),
            strategy: {
                info: {
                    name: null,
                    openDate: null,
                    stopDate: null,
                    sport: null,
                    detail: {
                        description: null,
                        entryDescription: null,
                        exitDescription: null,
                        mmDescription: null,
                    },
                }
            }
        };
    }
};
StrategyCreateModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
StrategyCreateModalComponent.propDecorators = {
    addStrategyCreateEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
StrategyCreateModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-strategy-create-modal',
        template: _raw_loader_strategy_create_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], StrategyCreateModalComponent);



/***/ }),

/***/ "41OF":
/*!**************************************************!*\
  !*** ./src/app/features/report/report.module.ts ***!
  \**************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/feather-icon/feather-icon.module */ "tyVc");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-datatables */ "njyG");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-custom-validators */ "uxn7");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _components_strategy_modal_strategy_updates_modal_strategy_updates_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/strategy/modal/strategy-updates-modal/strategy-updates-modal.component */ "5/WV");
/* harmony import */ var _components_strategy_modal_strategy_create_modal_strategy_create_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/strategy/modal/strategy-create-modal/strategy-create-modal.component */ "3ld1");
/* harmony import */ var _components_strategy_modal_strategy_note_delete_modal_strategy_delete_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/strategy/modal/strategy-note-delete-modal/strategy-delete-modal.component */ "3TDb");
/* harmony import */ var _components_strategy_strategy_datatable_strategy_datatable_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/strategy/strategy-datatable/strategy-datatable.component */ "eLsF");
/* harmony import */ var _components_report_main_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/report-main.component */ "+p3/");
/* harmony import */ var _components_strategyUploader_strategy_uploader_main_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/strategyUploader/strategy-uploader-main.component */ "Sojj");
/* harmony import */ var _components_strategyUploader_strategy_uploader_insert_strategy_uploader_insert_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/strategyUploader/strategy-uploader-insert/strategy-uploader-insert.component */ "sOAS");

// ROUTER





















const routes = [
    {
        path: '',
        component: _components_report_main_component__WEBPACK_IMPORTED_MODULE_19__["ReportMainComponent"]
    },
];
let ReportModule = class ReportModule {
};
ReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_strategy_modal_strategy_updates_modal_strategy_updates_modal_component__WEBPACK_IMPORTED_MODULE_15__["StrategyUpdatesModalComponent"],
            _components_strategy_modal_strategy_create_modal_strategy_create_modal_component__WEBPACK_IMPORTED_MODULE_16__["StrategyCreateModalComponent"],
            _components_strategy_modal_strategy_note_delete_modal_strategy_delete_modal_component__WEBPACK_IMPORTED_MODULE_17__["StrategyDeleteModalComponent"],
            _components_strategy_strategy_datatable_strategy_datatable_component__WEBPACK_IMPORTED_MODULE_18__["StrategyDatatableComponent"],
            _components_report_main_component__WEBPACK_IMPORTED_MODULE_19__["ReportMainComponent"],
            _components_strategyUploader_strategy_uploader_main_component__WEBPACK_IMPORTED_MODULE_20__["StrategyUploaderMainComponent"],
            _components_strategyUploader_strategy_uploader_insert_strategy_uploader_insert_component__WEBPACK_IMPORTED_MODULE_21__["StrategyUploaderInsertComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__["FeahterIconModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"],
            angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"],
            ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__["CustomFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"]
        ]
    })
], ReportModule);



/***/ }),

/***/ "5/WV":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/features/report/components/strategy/modal/strategy-updates-modal/strategy-updates-modal.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: StrategyUpdatesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyUpdatesModalComponent", function() { return StrategyUpdatesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_strategy_updates_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./strategy-updates-modal.component.html */ "pid3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





let StrategyUpdatesModalComponent = class StrategyUpdatesModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        // @ts-ignore
        this.strategyUpdateEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.color = ['primary', 'secondary', 'danger', 'warning'];
        this.sport = ['TENNIS', 'FOOTBALL', 'HORSE RACING'];
    }
    ngOnInit() {
    }
    openVerticalCenteredModal(content) {
        this.strategyOutput = JSON.parse(JSON.stringify(this.strategyInput$));
        this.modalService.open(content, { centered: true }).result.then((result) => {
            this.strategyUpdateEmitter.emit([this.strategyOutput, result]);
        }).catch((res) => { });
    }
};
StrategyUpdatesModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
StrategyUpdatesModalComponent.propDecorators = {
    strategyUpdateEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    strategyInput$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
StrategyUpdatesModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-strategy-updates-modal',
        template: _raw_loader_strategy_updates_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], StrategyUpdatesModalComponent);



/***/ }),

/***/ "EyB9":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/strategyUploader/strategy-uploader-main.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col\">\r\n  <div class=\"d-flex justify-content-end align-items-baseline\">\r\n    <button type=\"button\"\r\n            class=\"btn btn-outline-danger btn-icon-text mr-2 d-none d-md-block\"\r\n            (click)=\"addNewMarket()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"add\" appFeatherIcon></i>\r\n      Add New Market\r\n    </button>\r\n  </div>\r\n  <ul ngbNav #defaultNav=\"ngbNav\" [(activeId)]=\"defaultNavActiveId\" class=\"nav-tabs\">\r\n    <!-- ALL MARKET IN LIST-->\r\n    <li *ngFor=\"let market of strategyUploaderMatch, index as i\" [ngbNavItem]=\"i+1\">\r\n      <h5>\r\n        <a ngbNavLink>\r\n          <div class=\"form-group\">\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   [(ngModel)]=\"market.info.name\" name=\"name\">\r\n          </div>\r\n\r\n        </a>\r\n      </h5>\r\n      <ng-template ngbNavContent>\r\n        <app-strategy-uploader-insert [market]=\"market\"\r\n                                      (deleteMarketEmitter)=\"deleteMarket($event)\">\r\n        </app-strategy-uploader-insert>\r\n      </ng-template>\r\n    </li>\r\n  </ul>\r\n\r\n  <div [ngbNavOutlet]=\"defaultNav\" class=\"border border-top-0 p-3\"></div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "KAN7":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/strategy/modal/strategy-note-delete-modal/strategy-delete-modal.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Button trigger trade-modal -->\r\n<button type=\"button\" class=\"btn btn-outline-danger btn-xs mr-2\" (click)=\"openVerticalCenteredModal(verticalCenteredModal)\">\r\n  <i class=\"feather icon-x\"></i>\r\n</button>\r\n\r\n<!-- Modal -->\r\n<ng-template #verticalCenteredModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete Strategy</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close('by: close icon')\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <p class=\"text-center\">Are you sure to delete this strategy?</p>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close('cancel')\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.close('delete')\">Delete</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "Lix1":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/report-main.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h4 class=\"mb-3 mb-md-0\">Report</h4>\r\n    <p>Report </p>\r\n  </div>\r\n  <div class=\"d-flex align-items-center flex-wrap text-nowrap\">\r\n    <button type=\"button\" class=\"btn btn-outline-info btn-icon-text mr-2 d-none d-md-block\" (click)=\"refresh()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!-- BREADCRUMB -->\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">BF</a></li>\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/report\">Report</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Main</li>\r\n  </ol>\r\n</nav>\r\n<!-- /BREADCRUMB -->\r\n\r\n<div class=\"col\">\r\n  <ul ngbNav #defaultNav=\"ngbNav\" [(activeId)]=\"defaultNavActiveId\" class=\"nav-tabs\">\r\n    <li [ngbNavItem]=\"1\">\r\n      <h5>\r\n        <a ngbNavLink>All Trades</a>\r\n      </h5>\r\n      <ng-template ngbNavContent>\r\n\r\n        <div class=\"col-12\">\r\n          <div class=\"col grid-margin\">\r\n            <app-loading-cards *ngIf=\"(isLoadingAllTrade$ | async).isLoading\"></app-loading-cards>\r\n            <app-trade-datatable *ngIf=\"(isLoadingAllTrade$ | async).isLoadingSuccess\"\r\n                                 [trades$]=\"allTrade$\"\r\n                                 [showDuplicate]=\"true\"\r\n                                 [pageNumber]=\"currentPageSelected\"\r\n                                 (pageEmitter)=\"setPageNUmber($event)\">\r\n            </app-trade-datatable>\r\n          </div>\r\n\r\n          <div class=\"col grid-margin\">\r\n            <app-loading-cards *ngIf=\"(isLoadingAllTrade$ | async).isLoading\"></app-loading-cards>\r\n            <app-trade-equity *ngIf=\"(isLoadingAllTrade$ | async).isLoadingSuccess\"\r\n                              [allTrades]=\"allTrade$ | async\"\r\n                              [labels]=\"allTradesLabels\"\r\n                              [wantBar]=\"true\">\r\n\r\n            </app-trade-equity>\r\n          </div>\r\n\r\n          <div class=\"col grid-margin\">\r\n            <app-loading-cards *ngIf=\"(isLoadingAllTrade$ | async).isLoading\"></app-loading-cards>\r\n            <app-trade-dd *ngIf=\"(isLoadingAllTrade$ | async).isLoadingSuccess\"\r\n                          [allTrades]=\"allTrade$ | async\"\r\n                          [labels]=\"allTradesLabels\">\r\n\r\n            </app-trade-dd>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"2\">\r\n      <h5>\r\n        <a ngbNavLink>Strategy</a>\r\n      </h5>\r\n      <ng-template ngbNavContent>\r\n\r\n        <div class=\"col-12\">\r\n\r\n          <div class=\"col grid-margin\">\r\n            <app-loading-cards *ngIf=\"(isLoadingAllStrategy$ | async).isLoading|| (isLoadingAllTrade$ | async).isLoading\"></app-loading-cards>\r\n            <app-strategy-report *ngIf=\"(isLoadingAllStrategy$ | async).isLoadingSuccess\r\n                                && (isLoadingAllTrade$ | async).isLoadingSuccess\r\n                                && visibleReport\r\n                                && (selectedStrategy$ | async)\"\r\n                                 [selectedStrategyReport]=\"selectedStrategyReport\"\r\n                                 [selectedStrategyPie]=\"selectedStrategyPie\"\r\n                                 [selectedStrategyTrades$]=\"selectedStrategyTrades$\">\r\n            </app-strategy-report>\r\n          </div>\r\n\r\n          <div class=\"col grid-margin\">\r\n            <app-loading-cards *ngIf=\"(isLoadingAllStrategy$ | async).isLoading\"></app-loading-cards>\r\n            <app-strategy-datatable *ngIf=\"(isLoadingAllStrategy$ | async).isLoadingSuccess\"\r\n                                    [strategyDatatable]=\"strategyDatatable$ | async\"\r\n                                    [selectedStrategyId]=\"selectedStrategyId$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n\r\n    <li [ngbNavItem]=\"3\">\r\n      <h5>\r\n        <a ngbNavLink>Strategy Uploader</a>\r\n      </h5>\r\n      <ng-template ngbNavContent>\r\n        <div class=\"col-12\">\r\n          <app-strategy-uploader-main></app-strategy-uploader-main>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n\r\n  </ul>\r\n\r\n  <div [ngbNavOutlet]=\"defaultNav\" class=\"border border-top-0 p-3\"></div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "Sojj":
/*!*************************************************************************************************!*\
  !*** ./src/app/features/report/components/strategyUploader/strategy-uploader-main.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: StrategyUploaderMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyUploaderMainComponent", function() { return StrategyUploaderMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_strategy_uploader_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./strategy-uploader-main.component.html */ "EyB9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let StrategyUploaderMainComponent = class StrategyUploaderMainComponent {
    constructor() {
        this.strategyUploaderMatch = [];
        this.defaultNavActiveId = 1;
    }
    ngOnInit() {
    }
    addNewMarket() {
        this.strategyUploaderMatch.push({
            info: {
                name: 'NewMarket' + (this.strategyUploaderMatch.length + 1),
                id: Date.now(),
                lastUpdate: Date.now(),
            },
            trade: null,
        });
    }
    deleteMarket(index) {
        this.strategyUploaderMatch.splice(index, 1);
    }
};
StrategyUploaderMainComponent.ctorParameters = () => [];
StrategyUploaderMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-strategy-uploader-main',
        template: _raw_loader_strategy_uploader_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], StrategyUploaderMainComponent);



/***/ }),

/***/ "TfeN":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/strategy/modal/strategy-create-modal/strategy-create-modal.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Button trigger trade-modal -->\r\n<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"openVerticalCenteredModal(verticalCenteredModal)\">\r\n  Add new Strategy <i class=\"feather icon-plus\"></i>\r\n</button>\r\n\r\n<!-- Modal -->\r\n<ng-template #verticalCenteredModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create New Strategy</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close('close')\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <form class=\"forms-sample grid-margin\" #startegyForm=\"ngForm\" *ngIf=\"strategy!= undefined\" >\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"text-gray\">Name</label>\r\n        <input class=\"form-control\"\r\n               id=\"name\"\r\n               type=\"text\"\r\n               placeholder=\"Name\"\r\n               name=\"name\"\r\n               [(ngModel)]=\"strategy.strategy.info.name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\">Sport</label>\r\n        <ng-select [items]=\"sport\"\r\n                   id=\"sport\"\r\n                   name=\"sport\"\r\n                   bindLabel=\"value\"\r\n                   bindValue=\"value\"\r\n                   placeholder=\"Color\"\r\n                   [(ngModel)]=\"strategy.strategy.info.sport\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"description\" class=\"text-gray\">Description</label>\r\n          <textarea class=\"form-control\" id=\"description\" rows=\"5\"  placeholder=\"Description\" name=\"description\"\r\n                    [(ngModel)]=\"strategy.strategy.info.detail.description\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"entryDescription\" class=\"text-gray\">Entry Description</label>\r\n          <textarea class=\"form-control\" id=\"entryDescription\" rows=\"2\"  placeholder=\"Entry Description\" name=\"entryDescription\"\r\n                    [(ngModel)]=\"strategy.strategy.info.detail.entryDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"exitDescription\" class=\"text-gray\">Exit Description</label>\r\n          <textarea class=\"form-control\" id=\"exitDescription\" rows=\"2\"  placeholder=\"Exit Description\" name=\"exitDescription\"\r\n                    [(ngModel)]=\"strategy.strategy.info.detail.exitDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"MMDescription\" class=\"text-gray\">MM Description</label>\r\n          <textarea class=\"form-control\" id=\"MMDescription\" rows=\"3\"  placeholder=\"MM Description\" name=\"MMDescription\"\r\n                    [(ngModel)]=\"strategy.strategy.info.detail.mmDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n\r\n    <p>Strategy created: {{strategy.created | date:'short'}}</p>\r\n    <p *ngIf=\"strategy.lastUpdate !== strategy.created\">Strategy last update: {{strategy.lastUpdate | date:'short'}}</p>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close('close')\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('create')\">Create</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "dode":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/strategyUploader/strategy-uploader-insert/strategy-uploader-insert.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col\">\r\n  <div class=\"d-flex justify-content-end align-items-baseline\">\r\n    <button type=\"button\"\r\n            class=\"btn btn-outline-danger btn-icon-text mr-2 d-none d-md-block\"\r\n            (click)=\"deleteMarket()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"trash-2\" appFeatherIcon></i>\r\n      Delete Market\r\n    </button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "eLsF":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/report/components/strategy/strategy-datatable/strategy-datatable.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: StrategyDatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyDatatableComponent", function() { return StrategyDatatableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_strategy_datatable_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./strategy-datatable.component.html */ "+59F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _store_report_report_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../store/report/report.actions */ "DoIT");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");






let StrategyDatatableComponent = class StrategyDatatableComponent {
    constructor(store) {
        this.store = store;
        this.rows = [];
        this.temp = [];
        this.loadingIndicator = true;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
    }
    ngOnInit() {
        this.rows = this.strategyDatatable;
        this.temp = [...this.strategyDatatable];
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        // update the rows
        this.rows = this.temp.filter((d) => {
            return (d.name.toLowerCase().indexOf(val) !== -1 || d.sport.toLowerCase().indexOf(val) !== -1 || !val);
        });
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    createModal(event) {
        if (event[1] === 'create') {
            // CREATE runner note
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_4__["createStrategy"]({ strategy: event[0] }));
        }
    }
    updateModal(event) {
        if (event[1] === 'update') {
            event[0].lastUpdate = new Date().getTime();
            // UPDATE runner note
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_4__["updateStrategy"]({ _id: event[0]._id, strategy: event[0] }));
        }
    }
    deleteModal(event) {
        if (event[1] === 'delete') {
            // DELETE runner note
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_4__["deleteStrategy"]({ _id: event[0] }));
        }
    }
    clickSelectStrategy(id) {
        if (this.selectedStrategyId === id) {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_4__["setSelectedStrategy"]({ _id: null }));
        }
        else {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_4__["setSelectedStrategy"]({ _id: id }));
        }
    }
};
StrategyDatatableComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
StrategyDatatableComponent.propDecorators = {
    strategyDatatable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"],] }],
    selectedStrategyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
StrategyDatatableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-strategy-datatable',
        template: _raw_loader_strategy_datatable_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], StrategyDatatableComponent);



/***/ }),

/***/ "pid3":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/strategy/modal/strategy-updates-modal/strategy-updates-modal.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Button trigger trade-modal -->\r\n<button type=\"button\" class=\"btn btn-xs btn-outline-light\" (click)=\"openVerticalCenteredModal(verticalCenteredModal)\">\r\n  <i class=\"feather icon-edit\"></i>\r\n</button>\r\n\r\n<!-- Modal -->\r\n<ng-template #verticalCenteredModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Strategy</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close('close')\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <form class=\"forms-sample grid-margin\" #strategyForm=\"ngForm\" *ngIf=\"strategyOutput!= undefined\" >\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"text-gray\">Name</label>\r\n        <input class=\"form-control\"\r\n               id=\"name\"\r\n               type=\"text\"\r\n               placeholder=\"Name\"\r\n               name=\"name\"\r\n               [(ngModel)]=\"strategyOutput.strategy.info.name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\">Sport</label>\r\n        <ng-select [items]=\"sport\"\r\n                   id=\"sport\"\r\n                   name=\"sport\"\r\n                   bindLabel=\"value\"\r\n                   bindValue=\"value\"\r\n                   placeholder=\"Color\"\r\n                   [(ngModel)]=\"strategyOutput.strategy.info.sport\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"description\" class=\"text-gray\">Description</label>\r\n          <textarea class=\"form-control\" id=\"description\" rows=\"5\"  placeholder=\"Description\" name=\"description\"\r\n                    [(ngModel)]=\"strategyOutput.strategy.info.detail.description\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"entryDescription\" class=\"text-gray\">Entry Description</label>\r\n          <textarea class=\"form-control\" id=\"entryDescription\" rows=\"2\"  placeholder=\"Entry Description\" name=\"entryDescription\"\r\n                    [(ngModel)]=\"strategyOutput.strategy.info.detail.entryDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"exitDescription\" class=\"text-gray\">Exit Description</label>\r\n          <textarea class=\"form-control\" id=\"exitDescription\" rows=\"2\"  placeholder=\"Exit Description\" name=\"exitDescription\"\r\n                    [(ngModel)]=\"strategyOutput.strategy.info.detail.exitDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"MMDescription\" class=\"text-gray\">MM Description</label>\r\n          <textarea class=\"form-control\" id=\"MMDescription\" rows=\"3\"  placeholder=\"MM Description\" name=\"MMDescription\"\r\n                    [(ngModel)]=\"strategyOutput.strategy.info.detail.mmDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <p>Strategy created: {{strategyOutput.created | date:'short'}}</p>\r\n    <p *ngIf=\"strategyOutput.lastUpdate !== strategyOutput.created\">Strategy update: {{strategyOutput.lastUpdate | date:'short'}}</p>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close('close')\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('update')\">Update</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "sOAS":
/*!****************************************************************************************************************************!*\
  !*** ./src/app/features/report/components/strategyUploader/strategy-uploader-insert/strategy-uploader-insert.component.ts ***!
  \****************************************************************************************************************************/
/*! exports provided: StrategyUploaderInsertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyUploaderInsertComponent", function() { return StrategyUploaderInsertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_strategy_uploader_insert_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./strategy-uploader-insert.component.html */ "dode");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let StrategyUploaderInsertComponent = class StrategyUploaderInsertComponent {
    constructor() {
        this.deleteMarketEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"];
    }
    ngOnInit() {
    }
    deleteMarket() {
        this.deleteMarketEmitter.emit('delete');
    }
};
StrategyUploaderInsertComponent.ctorParameters = () => [];
StrategyUploaderInsertComponent.propDecorators = {
    market: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    deleteMarketEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
StrategyUploaderInsertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-strategy-uploader-insert',
        template: _raw_loader_strategy_uploader_insert_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], StrategyUploaderInsertComponent);



/***/ })

}]);