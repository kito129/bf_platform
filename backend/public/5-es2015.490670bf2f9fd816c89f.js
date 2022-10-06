(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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
/* harmony import */ var _store_report_report_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../store/report/report.actions */ "DoIT");








let ReportMainComponent = class ReportMainComponent {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.defaultNavActiveId = 2;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        // isLoading
        this.isLoadingAllStrategy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllStrategyLoading"]));
        this.isLoadingAllNewTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["isLoadingAllNewTrade"]));
        this.isLoadingSavedReport$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["isLoadingSavedReport"]));
        // strategies datatable
        this.allStrategyDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllStrategyDatatable"]));
        this.injury2022Datatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getInjury2022Data"](true)));
        this.injury2021Datatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getInjury2021Data"](true)));
        this.passiveLiveDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getPassiveLiveData"](true)));
        this.passiveDemoDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getPassiveDemoData"](true)));
        this.activeKevinDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getActiveKevinData"](true)));
        this.activeBagnaDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getactiveBagnaData"](true)));
        this.activeKitoDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getActiveKitoData"](true)));
        this.otherDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getOtherData"](true)));
        // strategies trade
        this.injury2022Trade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getInjury2022Data"](false)));
        this.injury2021Trade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getInjury2021Data"](false)));
        this.passiveLiveTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getPassiveLiveData"](false)));
        this.passiveDemoTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getPassiveDemoData"](false)));
        this.activeKevinTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getActiveKevinData"](false)));
        this.activeBagnaTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getactiveBagnaData"](false)));
        this.activeKitoTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getActiveKitoData"](false)));
        this.otherTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getOtherData"](false)));
        // selected strategy
        this.selectedStrategyId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedStrategyId"]));
        this.selectedStrategy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedStrategy"]));
        this.selectedStrategyName$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedStrategyName"]));
        this.selectedStrategyTrades$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedStrategyTrades"]));
        // compare
        this.compareList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getCompareList"]));
        this.comparedStrategy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getComparedData"]));
        this.compareStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getCompareStatus"]));
        // saved report
        this.allSavedReports$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllSavedReports"]));
        this.selectedSavedReport$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedSavedReport"]));
        this.selectedSavedReportName$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedSavedReportName"]));
        this.selectedSavedReportId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedSavedReportId"]));
        this.savedReportDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSavedReportDatatable"]));
        this.selectedSavedReportTrades$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedSavedReportTrades"]));
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    refreshStrategy() {
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_7__["getAllStrategies"]());
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_7__["getAllSavedReport"]());
    }
    refreshTrade() {
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_7__["getAllNewTrades"]());
    }
};
ReportMainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
];
ReportMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-report-main',
        template: _raw_loader_report_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], ReportMainComponent);



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
/* harmony import */ var _components_strategy_modal_strategy_updates_modal_strategy_updates_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/strategy-modal/strategy-updates-modal/strategy-updates-modal.component */ "xiZa");
/* harmony import */ var _components_strategy_modal_strategy_create_modal_strategy_create_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/strategy-modal/strategy-create-modal/strategy-create-modal.component */ "RAyO");
/* harmony import */ var _components_strategy_modal_strategy_note_delete_modal_strategy_delete_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/strategy-modal/strategy-note-delete-modal/strategy-delete-modal.component */ "x1CV");
/* harmony import */ var _components_strategy_datatable_strategy_datatable_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/strategy-datatable/strategy-datatable.component */ "YA5W");
/* harmony import */ var _components_report_main_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/report-main.component */ "+p3/");

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
            _components_strategy_datatable_strategy_datatable_component__WEBPACK_IMPORTED_MODULE_18__["StrategyDatatableComponent"],
            _components_report_main_component__WEBPACK_IMPORTED_MODULE_19__["ReportMainComponent"],
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
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"]
        ]
    })
], ReportModule);



/***/ }),

/***/ "9Hzk":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/strategy-modal/strategy-note-delete-modal/strategy-delete-modal.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-outline-danger btn-xs mr-2\" (click)=\"openVerticalCenteredModal(verticalCenteredModal)\">\r\n  <i class=\"feather icon-x\"></i>\r\n</button>\r\n\r\n<!-- Modal -->\r\n<ng-template #verticalCenteredModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Delete Strategy</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close('by: close icon')\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <p class=\"text-center\">Are you sure to delete this strategy?</p>\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close('cancel')\">Cancel</button>\r\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"modal.close('delete')\">Delete</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "Lix1":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/report-main.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h3 class=\"mb-3\">Report</h3>\r\n  </div>\r\n  <div class=\"d-flex align-items-center flex-wrap text-nowrap\">\r\n    <button type=\"button\" class=\"btn btn-outline-info btn-icon-text mr-2 d-none d-md-block\" (click)=\"refreshTrade()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh Trades\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-outline-warning btn-icon-text mr-2 d-none d-md-block\" (click)=\"refreshStrategy()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh Strategy And Report\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col\">\r\n\r\n  <app-loading-cards *ngIf=\"(isLoadingAllStrategy$ | async).isLoading || (isLoadingAllNewTrade$ | async).isLoading\"></app-loading-cards>\r\n  <!-- TAB DATATABLE-->\r\n  <ul ngbNav #defaultNav=\"ngbNav\" [(activeId)]=\"defaultNavActiveId\" class=\"nav-tabs\">\r\n    <li [ngbNavItem]=\"1\">\r\n      <h4>\r\n        <a ngbNavLink>All Strategy</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"allStrategyDatatable$| async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"2\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-warning\">Saved Report</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <!-- STRATEGY BLOCK -->\r\n        <app-loading-cards *ngIf=\"(isLoadingSavedReport$ | async).isLoading\"></app-loading-cards>\r\n        <div class=\"col grid-margin\" *ngIf=\"(isLoadingSavedReport$ | async).isLoadingSuccess\">\r\n          <app-strategy-datatable\r\n            [strategyDatatable]=\"savedReportDatatable$ | async\"\r\n            [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n            [selectedSavedReportId]=\"(selectedSavedReport$ | async) ? (selectedSavedReport$ | async)._id : null\"\r\n            [compareList]=\"compareList$ | async\"\r\n            [isSaved]=\"true\">\r\n          </app-strategy-datatable>\r\n\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"(selectedSavedReportTrades$ | async) && (selectedSavedReport$ | async)  \"\r\n                                 [selectedStrategyTrades$]=\"selectedSavedReportTrades$\"\r\n                                 [title]=\"selectedSavedReportName$ | async\"\r\n                                 [bank]=\"1000\"\r\n                                 [noBug]=\"false\"\r\n                                 [isSaved]=\"true\"\r\n                                 [savedReportId]=\"selectedSavedReportId$ | async\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">\r\n            </app-strategy-report>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"3\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-danger\">Injury 2022</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"injury2022Trade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"injury2022Trade$\"\r\n                                 [title]=\"'Injury 2022'\"\r\n                                 [bank]=\"35000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">>\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"injury2022Datatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"4\">\r\n      <h4>\r\n        <a ngbNavLink>Injury 2021</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"injury2021Trade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"injury2021Trade$\"\r\n                                 [title]=\"'Injury 2021'\"\r\n                                 [bank]=\"20000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">>\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"injury2021Datatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"6\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-info\">Passive Demo Mar-May 2022</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"passiveDemoTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"passiveDemoTrade$\"\r\n                                 [title]=\"'Passive Demo Mar-May 2022'\"\r\n                                 [bank]=\"10000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">>\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"passiveDemoDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"7\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-success\">Passive Live Sept 2022</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"passiveLiveTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"passiveLiveTrade$\"\r\n                                 [title]=\"'Passive Live Sept 2022'\"\r\n                                 [bank]=\"5000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">>\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"passiveLiveDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"8\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-warning\">Bagna</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"activeBagnaTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"activeBagnaTrade$\"\r\n                                 [title]=\"'Bagna'\"\r\n                                 [bank]=\"2000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">>\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"activeBagnaDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"9\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-warning\">Kevin</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"activeKevinTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"activeKevinTrade$\"\r\n                                 [title]=\"'Kevin'\"\r\n                                 [bank]=\"2000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"activeKevinDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"10\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-warning\">Kito</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"activeKitoTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"activeKitoTrade$\"\r\n                                 [title]=\"'Kito'\"\r\n                                 [bank]=\"2000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"activeKitoDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"11\">\r\n      <h4>\r\n        <a ngbNavLink>Other</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"otherTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"otherTrade$\"\r\n                                 [title]=\"'Other'\"\r\n                                 [bank]=\"2000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"otherDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n\r\n  </ul>\r\n  <div [ngbNavOutlet]=\"defaultNav\" class=\"border border-top-0 p-3\"></div>\r\n\r\n\r\n  <!-- ALWAYS ACTIVE-->\r\n\r\n  <!-- SELECTED REPORT-->\r\n  <div class=\"col grid-margin\">\r\n    <app-strategy-report *ngIf=\"(selectedStrategy$ | async) && (selectedStrategyTrades$ | async) && (selectedStrategyName$ | async)\"\r\n                         [selectedStrategyTrades$]=\"selectedStrategyTrades$\"\r\n                         [selectedStrategy]=\"selectedStrategy$\"\r\n                         [title]=\"selectedStrategyName$ | async\"\r\n                         [isSaved]=\"false\" [noBug]=\"true\">\r\n    </app-strategy-report>\r\n  </div>\r\n\r\n  <!-- COMPARE REPORTS-->\r\n  <div class=\"col grid-margin\" *ngIf=\"(comparedStrategy$ | async).length && (compareStatus$ | async)\">\r\n    <app-strategy-compare class=\"mb-2\" [strategyList$]=\"comparedStrategy$\">\r\n    </app-strategy-compare>\r\n  </div>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "RAyO":
/*!********************************************************************************************************************!*\
  !*** ./src/app/features/report/components/strategy-modal/strategy-create-modal/strategy-create-modal.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: StrategyCreateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyCreateModalComponent", function() { return StrategyCreateModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_strategy_create_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./strategy-create-modal.component.html */ "vkLn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




let StrategyCreateModalComponent = class StrategyCreateModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.addStrategyCreateEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
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
                    name: '',
                    sport: '',
                    year: 200,
                    moneyManagement: '',
                    executor: "",
                    bank: 0,
                    stake: 0,
                    typeOfStake: '',
                    detail: {
                        description: '',
                        entryDescription: '',
                        exitDescription: '',
                        mmDescription: '',
                    }
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

/***/ "YA5W":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/report/components/strategy-datatable/strategy-datatable.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: StrategyDatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyDatatableComponent", function() { return StrategyDatatableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_strategy_datatable_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./strategy-datatable.component.html */ "lVRr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../store/report/report.actions */ "DoIT");






let StrategyDatatableComponent = class StrategyDatatableComponent {
    constructor(store) {
        this.store = store;
        this.rows = [];
        this.temp = [];
        this.loadingIndicator = true;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
        this.tableSize = 30;
        this.page = 1;
        this.isCollapsed = false;
        this.viewId = false;
    }
    ngOnInit() {
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        console.log(val);
        // filter our data
        // update the rows
        this.rows = this.strategyDatatable.filter((d) => {
            return (d.name.toLowerCase().indexOf(val) !== -1 || d.sport.toLowerCase().indexOf(val) !== -1);
        });
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
        console.log(val);
    }
    createModal(event) {
        if (event[1] === 'create') {
            // CREATE runner note
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["createStrategy"]({ strategy: event[0] }));
        }
    }
    updateModal(event) {
        if (event[1] === 'update') {
            event[0].lastUpdate = new Date().getTime();
            // UPDATE runner note
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["updateStrategy"]({ _id: event[0]._id, strategy: event[0] }));
        }
    }
    deleteModal(event) {
        if (event[1] === 'delete') {
            // DELETE runner note
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["deleteStrategy"]({ _id: event[0] }));
        }
    }
    deleteSavedReportModal(event) {
        if (event[1] === 'delete') {
            // DELETE runner note
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["deleteSavedReport"]({ _id: event[0] }));
        }
    }
    clickSelectStrategy(id) {
        if (this.selectedStrategyId === id) {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedStrategy"]({ _id: null }));
        }
        else {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedStrategy"]({ _id: id }));
        }
    }
    addToCompare(id) {
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedStrategy"]({ _id: null }));
        if (this.compareList.indexOf(id) !== -1) {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["removeStrategyInCompare"]({ strategyId: id }));
        }
        else {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["addStrategyInCompare"]({ strategyId: id, first: false }));
        }
    }
    compare() {
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedStrategy"]({ _id: null }));
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["compareStrategy"]());
    }
    compareAll() {
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["resetStrategyCompare"]());
        const notEmpty = this.strategyDatatable.filter(x => x.numberOfTrade);
        for (const at of notEmpty) {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["addStrategyInCompare"]({ strategyId: at._id, first: false }));
        }
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedStrategy"]({ _id: null }));
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["compareStrategy"]());
    }
    resetCompare() {
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedStrategy"]({ _id: null }));
        this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["resetStrategyCompare"]());
    }
    firstToCompare($event, id) {
        $event.preventDefault();
        if (this.compareList.indexOf(id) !== -1) {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["removeStrategyInCompare"]({ strategyId: id }));
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["addStrategyInCompare"]({ strategyId: id, first: true }));
        }
        else {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["addStrategyInCompare"]({ strategyId: id, first: true }));
        }
    }
    // savedReport list
    clickSelectSavedReport(id) {
        if (this.selectedSavedReportId === id) {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedSavedReport"]({ _id: null }));
        }
        else {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedSavedReport"]({ _id: id }));
        }
    }
    updateSavedReport(event) {
        if (event[1] === 'update') {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["updateSavedReport"]({ _id: event[0]._id, savedReport: event[0] }));
        }
    }
};
StrategyDatatableComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
];
StrategyDatatableComponent.propDecorators = {
    strategyDatatable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    compareList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    compareStatus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    isSaved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    selectedStrategyId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    selectedSavedReportId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"],] }]
};
StrategyDatatableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-strategy-datatable',
        template: _raw_loader_strategy_datatable_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["/deep/ .datatable-row-even {background-color: #181818;}"]
    })
], StrategyDatatableComponent);



/***/ }),

/***/ "hBc5":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/strategy-modal/strategy-updates-modal/strategy-updates-modal.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-xs btn-outline-light\" (click)=\"openVerticalCenteredModal(verticalCenteredModal)\">\r\n  <i class=\"feather icon-edit\"></i>\r\n</button>\r\n\r\n<!-- Modal -->\r\n<ng-template #verticalCenteredModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Strategy</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close('close')\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <form class=\"forms-sample grid-margin\" #startegyForm=\"ngForm\" *ngIf=\"strategyOutput!= undefined\" >\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"text-gray\">Name</label>\r\n        <input class=\"form-control\"\r\n               id=\"name\"\r\n               type=\"text\"\r\n               placeholder=\"Name\"\r\n               name=\"name\"\r\n               [(ngModel)]=\"strategyOutput.strategy.info.name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\">Sport</label>\r\n        <ng-select [items]=\"sport\"\r\n                   id=\"sport\"\r\n                   name=\"sport\"\r\n                   bindLabel=\"value\"\r\n                   bindValue=\"value\"\r\n                   placeholder=\"Sport\"\r\n                   [(ngModel)]=\"strategyOutput.strategy.info.sport\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"year\">Year</label>\r\n        <input class=\"form-control\"\r\n               id=\"year\"\r\n               type=\"number\"\r\n               placeholder=\"Year\"\r\n               name=\"year\"\r\n               [(ngModel)]=\"strategyOutput.strategy.info.year\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"executor\">Money Management</label>\r\n        <ng-select [items]=\"['FIXED', 'STOP LOSS', 'EQUITY LINE', 'DD', 'BLACKSWAN']\"\r\n                   id=\"moneyManagement\"\r\n                   name=\"moneyManagement\"\r\n                   placeholder=\"moneyManagement\"\r\n                   [(ngModel)]=\"strategyOutput.strategy.info.moneyManagement\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"bank\">Bank</label>\r\n        <input class=\"form-control\"\r\n               id=\"bank\"\r\n               type=\"number\"\r\n               placeholder=\"Bank\"\r\n               name=\"bank\"\r\n               [(ngModel)]=\"strategyOutput.strategy.info.bank\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"stake\">Stake</label>\r\n        <input class=\"form-control\"\r\n               id=\"stake\"\r\n               type=\"number\"\r\n               placeholder=\"Stake\"\r\n               name=\"stake\"\r\n               [(ngModel)]=\"strategyOutput.strategy.info.stake\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"typeOfStake\">Type of Stake</label>\r\n        <ng-select [items]=\"['fixed', 'percent', 'kelly']\"\r\n                   id=\"typeOfStake\"\r\n                   name=\"typeOfStake\"\r\n                   placeholder=\"typeOfStake\"\r\n                   [(ngModel)]=\"strategyOutput.strategy.info.typeOfStake\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"executor\">Executor</label>\r\n        <ng-select [items]=\"['BAGNA', 'KEVIN', 'KITO', 'ALL', 'DEMO', 'PLATFORM']\"\r\n                   id=\"executor\"\r\n                   name=\"executor\"\r\n                   placeholder=\"executor\"\r\n                   [(ngModel)]=\"strategyOutput.strategy.info.executor\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"description\" class=\"text-gray\">Description</label>\r\n          <textarea class=\"form-control\" id=\"description\" rows=\"5\"  placeholder=\"Description\" name=\"description\"\r\n                    [(ngModel)]=\"strategyOutput.strategy.info.detail.description\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"entryDescription\" class=\"text-gray\">Entry Description</label>\r\n          <textarea class=\"form-control\" id=\"entryDescription\" rows=\"2\"  placeholder=\"Entry Description\" name=\"entryDescription\"\r\n                    [(ngModel)]=\"strategyOutput.strategy.info.detail.entryDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"exitDescription\" class=\"text-gray\">Exit Description</label>\r\n          <textarea class=\"form-control\" id=\"exitDescription\" rows=\"2\"  placeholder=\"Exit Description\" name=\"exitDescription\"\r\n                    [(ngModel)]=\"strategyOutput.strategy.info.detail.exitDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"MMDescription\" class=\"text-gray\">MM Description</label>\r\n          <textarea class=\"form-control\" id=\"MMDescription\" rows=\"3\"  placeholder=\"MM Description\" name=\"MMDescription\"\r\n                    [(ngModel)]=\"strategyOutput.strategy.info.detail.mmDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n\r\n    <p>Strategy created: {{strategyOutput.created | date:'short'}}</p>\r\n    <p *ngIf=\"strategyOutput.lastUpdate !== strategyOutput.created\">Strategy last update: {{strategyOutput.lastUpdate | date:'short'}}</p>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close('close')\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('update')\">Update</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "lVRr":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/strategy-datatable/strategy-datatable.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h3 *ngIf=\"!isSaved\" class=\"text-secondary\">Strategy List</h3>\r\n      <h3 *ngIf=\"isSaved\" class=\"text-warning\">Saved Report List</h3>\r\n\r\n      <button type=\"button\"\r\n              [ngClass]=\"isCollapsed? 'btn btn btn-outline-primary' : 'btn btn btn-primary'\"\r\n              (click)=\"isCollapsed = !isCollapsed\"\r\n              [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">\r\n        View\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <!-- BODY -->\r\n  <div class=\"card-body\" [ngbCollapse]=\"isCollapsed\">\r\n    <!-- ROW -->\r\n    <div class=\"d-flex justify-content-end align-items-center\">\r\n\r\n      <app-strategy-create-modal *ngIf=\"!isSaved\"\r\n                                 class=\"mr-3\"\r\n                                 (addStrategyCreateEmitter)=\"createModal($event)\">\r\n      </app-strategy-create-modal>\r\n\r\n      <button type=\"button\" class=\"btn btn mr-3 mb-2\"\r\n              [ngClass]=\"viewId ? 'btn-primary' : 'btn-outline-primary' \"\r\n              (click)=\"viewId= !viewId\">\r\n        View Id\r\n      </button>\r\n\r\n      <form class=\"form-group\">\r\n        <div class=\"row \">\r\n          <div class=\"col\">\r\n            <div class=\"form-group\">\r\n              <label for=\"name\">Find by Name</label>\r\n              <input\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                id=\"name\"\r\n                placeholder=\"Type name...\"\r\n                name=\"search\"/>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"form-group\">\r\n              <!-- OPTIONS -->\r\n              <label for=\"tableSize\">Table size</label>\r\n              <ng-select id=\"tableSize\"\r\n                         name=\"options\"\r\n                         [(ngModel)]=\"tableSize\"\r\n                         [items]=\"[5, 10,15,20,25,30,40,50,100,200,250,500,1000]\"\r\n                         [clearable]=\"false\">\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <!-- TABLE -->\r\n    <ngx-datatable\r\n      class=\"dark\"\r\n      [rows]=\"strategyDatatable\"\r\n      [loadingIndicator]=\"loadingIndicator\"\r\n      [columnMode]=\"ColumnMode.force\"\r\n      [headerHeight]=\"40\"\r\n      [footerHeight]=\"50\"\r\n      [limit]=tableSize\r\n      rowHeight=\"auto\"\r\n      [reorderable]=\"true\"\r\n      [sorts]=\"!isSaved ? [{prop: 'pl', dir: 'desc'}] : [{prop: 'savedReport.updated', dir: 'desc'}]\">\r\n\r\n      <ngx-datatable-column name=\"Id\" prop=\"_id\" *ngIf=\"viewId\" [width]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Date\" prop=\"savedReport.updated\" *ngIf=\"isSaved\" [width]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value | date:'short' }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Name\" prop=\"name\" [width]=\"3\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Year\" prop=\"year\" *ngIf=\"!isSaved\" [width]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5 [ngClass]=\"value===2021 ? 'text-info' : 'text-light'\">{{ value }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"# of Trade\" prop=\"numberOfTrade\" [width]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h4>{{ value }}</h4>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Executor\" prop=\"executor\" *ngIf=\"!isSaved\" [width]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value}}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Comment\" prop=\"savedReport.savedReport.comment\" *ngIf=\"isSaved\" [width]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value}}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Type\" prop=\"savedReport.savedReport.type\" *ngIf=\"isSaved\" [width]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value}}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Pl\" prop=\"pl\" [width]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h4 [ngClass]=\"value>0 ? 'text-success' : value ===0 ? 'text-warning' : 'text-danger'\">{{ value | currency }}</h4>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Pl %\" prop=\"plPercent\" [width]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5 class=\"text-primary\">{{ value | percent }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Max DD\" prop=\"maxDD\" [width]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5 class=\"text-danger\">{{ value | currency }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <!--\r\n      <ngx-datatable-column name=\"Max DD %\" prop=\"maxDDPercent\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5 class=\"text-danger\">{{ value | percent }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n      -->\r\n\r\n      <ngx-datatable-column name=\"Win ratio\" prop=\"winRatio\" [width]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5 [ngClass]=\"value>0.60 ? 'text-success' : value>0.30 ? 'text-warning' : 'text-danger'\">{{ value | percent }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <!-- TOOLS NOT SAVED-->\r\n      <ngx-datatable-column name=\"Tolls\" prop=\"\" *ngIf=\"!isSaved\" [width]=\"2\">\r\n        <ng-template let-value=\"value\"  ngx-datatable-cell-template>\r\n\r\n          <div class=\"d-flex justify-content-center align-items-center\">\r\n            <button type=\"button\" class=\"btn btn-icon mr-2\" [ngbTooltip]=\"viewReportTooltip\"\r\n                    [ngClass]=\"selectedStrategyId === value._id ? 'btn-info' : 'btn-outline-info'\"\r\n                    (click)=\"clickSelectStrategy(value._id)\"\r\n                    [disabled]=\"value.numberOfTrade===0\">\r\n              <i class=\"feather icon-eye\"></i>\r\n            </button>\r\n            <button type=\"button\"\r\n                    [ngbTooltip]=\"compareTooltip\"\r\n                    class=\"btn btn-icon mr-2\"\r\n                    [ngClass]=\"compareList.indexOf(value._id)===0 ? 'btn-warning': compareList.indexOf(value._id)!==-1 ? 'btn-success' : 'btn-outline-success'\"\r\n                    (click)=\"addToCompare(value._id)\"\r\n                    (contextmenu)=\"firstToCompare($event,value._id)\">\r\n              <i class=\"feather icon-plus-circle\"></i>\r\n            </button>\r\n            <app-delete-modal [id]=\"value.strategy._id\"\r\n                              [ngbTooltip]=\"deleteTooltip\"\r\n                              [options]=\"'Delete'\"\r\n                              [type]=\"'strategy'\"\r\n                              (deleteEmitter)=\"deleteModal($event)\">\r\n            </app-delete-modal>\r\n            <app-strategy-updates-modal [strategyInput$]=\"value.strategy\"\r\n                                        [ngbTooltip]=\"editTooltip\"\r\n                                        (strategyUpdateEmitter)=\"updateModal($event)\">\r\n            </app-strategy-updates-modal>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <!-- TOOLS SAVED-->\r\n      <ngx-datatable-column name=\"Tolls\" prop=\"\" *ngIf=\"isSaved\"  [width]=\"2\">\r\n        <ng-template let-value=\"value\"  ngx-datatable-cell-template>\r\n          <div class=\"d-flex justify-content-center align-items-center\">\r\n            <button type=\"button\" class=\"btn btn-icon mr-2\" [ngbTooltip]=\"viewReportTooltip\"\r\n                    [ngClass]=\"selectedSavedReportId === value._id ? 'btn-info' : 'btn-outline-info'\"\r\n                    (click)=\"clickSelectSavedReport(value._id)\"\r\n                    [disabled]=\"value.numberOfTrade===0\">\r\n              <i class=\"feather icon-eye\"></i>\r\n            </button>\r\n            <app-delete-modal [id]=\"value.strategy._id\"\r\n                              [ngbTooltip]=\"deleteSavedTooltip\"\r\n                              [options]=\"'Delete'\"\r\n                              [type]=\"'saved Report'\"\r\n                              (deleteEmitter)=\"deleteSavedReportModal($event)\">\r\n            </app-delete-modal>\r\n            <app-strategy-report-saved-updates [savedReport]=\"value.savedReport\"\r\n                                               [ngbTooltip]=\"editSavedReportTooltip\"\r\n                                               (updateSavedReportEmitter)=\"updateSavedReport($event)\">\r\n            </app-strategy-report-saved-updates>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n    </ngx-datatable>\r\n\r\n  </div>\r\n  <!-- FOOTER -->\r\n  <div class=\"card-footer\" *ngIf=\"!isCollapsed && !isSaved\">\r\n    <button type=\"button\"\r\n            class=\"btn btn-icon btn-icon-text mr-2\"\r\n            [ngClass]=\"compareStatus ? 'btn-primary' : 'btn-outline-primary' \"\r\n            (click)=\"compare()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"share-2\" appFeatherIcon></i>\r\n      Compare\r\n    </button>\r\n    <button type=\"button\"\r\n            class=\"btn btn-icon btn-outline-info btn-icon-text mr-2\"\r\n            (click)=\"compareAll()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"share-2\" appFeatherIcon></i>\r\n      Compare All\r\n    </button>\r\n    <button type=\"button\"\r\n            class=\"btn btn-icon btn-secondary btn-icon-text mr-2\"\r\n            (click)=\"resetCompare()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"rotate-cw\" appFeatherIcon></i>\r\n      Reset\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- TEMPLATE -->\r\n<ng-template #compareTooltip>\r\n  <p>Add to compare, right click to place first</p>\r\n</ng-template>\r\n\r\n<ng-template #viewReportTooltip>\r\n  <p>View Report</p>\r\n</ng-template>\r\n\r\n<ng-template #editTooltip>\r\n  <p>Edit Strategy</p>\r\n</ng-template>\r\n\r\n<ng-template #editSavedReportTooltip>\r\n  <p>Edit Saved Report</p>\r\n</ng-template>\r\n\r\n<ng-template #deleteTooltip>\r\n  <p>Delete Strategy</p>\r\n</ng-template>\r\n\r\n<ng-template #deleteSavedTooltip>\r\n  <p>Delete SavedReport</p>\r\n</ng-template>\r\n");

/***/ }),

/***/ "vkLn":
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/components/strategy-modal/strategy-create-modal/strategy-create-modal.component.html ***!
  \************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"openVerticalCenteredModal(verticalCenteredModal)\">\r\n  Add new Strategy <i class=\"feather icon-plus\"></i>\r\n</button>\r\n\r\n<!-- Modal -->\r\n<ng-template #verticalCenteredModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create New Strategy</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close('close')\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <form class=\"forms-sample grid-margin\" #startegyForm=\"ngForm\" *ngIf=\"strategy!= undefined\" >\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"text-gray\">Name</label>\r\n        <input class=\"form-control\"\r\n               id=\"name\"\r\n               type=\"text\"\r\n               placeholder=\"Name\"\r\n               name=\"name\"\r\n               [(ngModel)]=\"strategy.strategy.info.name\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\">Sport</label>\r\n        <ng-select [items]=\"sport\"\r\n                   id=\"sport\"\r\n                   name=\"sport\"\r\n                   bindLabel=\"value\"\r\n                   bindValue=\"value\"\r\n                   placeholder=\"Sport\"\r\n                   [(ngModel)]=\"strategy.strategy.info.sport\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"year\">Year</label>\r\n        <input class=\"form-control\"\r\n               id=\"year\"\r\n               type=\"number\"\r\n               placeholder=\"Year\"\r\n               name=\"year\"\r\n               [(ngModel)]=\"strategy.strategy.info.year\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"executor\">Money Management</label>\r\n        <ng-select [items]=\"['FIXED', 'STOP LOSS', 'EQUITY LINE', 'DD', 'BLACKSWAN']\"\r\n                   id=\"moneyManagement\"\r\n                   name=\"moneyManagement\"\r\n                   placeholder=\"moneyManagement\"\r\n                   [(ngModel)]=\"strategy.strategy.info.moneyManagement\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"bank\">Bank</label>\r\n        <input class=\"form-control\"\r\n               id=\"bank\"\r\n               type=\"number\"\r\n               placeholder=\"Bank\"\r\n               name=\"bank\"\r\n               [(ngModel)]=\"strategy.strategy.info.bank\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"stake\">Stake</label>\r\n        <input class=\"form-control\"\r\n               id=\"stake\"\r\n               type=\"number\"\r\n               placeholder=\"Stake\"\r\n               name=\"stake\"\r\n               [(ngModel)]=\"strategy.strategy.info.stake\">\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"typeOfStake\">Type of Stake</label>\r\n        <ng-select [items]=\"['fixed', 'percent', 'kelly']\"\r\n                   id=\"typeOfStake\"\r\n                   name=\"typeOfStake\"\r\n                   placeholder=\"typeOfStake\"\r\n                   [(ngModel)]=\"strategy.strategy.info.typeOfStake\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"executor\">Executor</label>\r\n        <ng-select [items]=\"['BAGNA', 'KEVIN', 'KITO', 'ALL', 'DEMO', 'PLATFORM']\"\r\n                   id=\"executor\"\r\n                   name=\"executor\"\r\n                   placeholder=\"executor\"\r\n                   [(ngModel)]=\"strategy.strategy.info.executor\">\r\n        </ng-select>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"description\" class=\"text-gray\">Description</label>\r\n          <textarea class=\"form-control\" id=\"description\" rows=\"5\"  placeholder=\"Description\" name=\"description\"\r\n                    [(ngModel)]=\"strategy.strategy.info.detail.description\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"entryDescription\" class=\"text-gray\">Entry Description</label>\r\n          <textarea class=\"form-control\" id=\"entryDescription\" rows=\"2\"  placeholder=\"Entry Description\" name=\"entryDescription\"\r\n                    [(ngModel)]=\"strategy.strategy.info.detail.entryDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"exitDescription\" class=\"text-gray\">Exit Description</label>\r\n          <textarea class=\"form-control\" id=\"exitDescription\" rows=\"2\"  placeholder=\"Exit Description\" name=\"exitDescription\"\r\n                    [(ngModel)]=\"strategy.strategy.info.detail.exitDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <label for=\"MMDescription\" class=\"text-gray\">MM Description</label>\r\n          <textarea class=\"form-control\" id=\"MMDescription\" rows=\"3\"  placeholder=\"MM Description\" name=\"MMDescription\"\r\n                    [(ngModel)]=\"strategy.strategy.info.detail.mmDescription\"></textarea>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n\r\n    <p>Strategy created: {{strategy.created | date:'short'}}</p>\r\n    <p *ngIf=\"strategy.lastUpdate !== strategy.created\">Strategy last update: {{strategy.lastUpdate | date:'short'}}</p>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close('close')\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('create')\">Create</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "x1CV":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/features/report/components/strategy-modal/strategy-note-delete-modal/strategy-delete-modal.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: StrategyDeleteModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyDeleteModalComponent", function() { return StrategyDeleteModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_strategy_delete_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./strategy-delete-modal.component.html */ "9Hzk");
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

/***/ "xiZa":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/features/report/components/strategy-modal/strategy-updates-modal/strategy-updates-modal.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: StrategyUpdatesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyUpdatesModalComponent", function() { return StrategyUpdatesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_strategy_updates_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./strategy-updates-modal.component.html */ "hBc5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





let StrategyUpdatesModalComponent = class StrategyUpdatesModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.strategyUpdateEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
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



/***/ })

}]);