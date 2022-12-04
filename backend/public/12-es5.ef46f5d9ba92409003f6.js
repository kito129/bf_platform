(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12], {
    /***/
    "41OF":
    /*!**************************************************!*\
      !*** ./src/app/features/report/report.module.ts ***!
      \**************************************************/

    /*! exports provided: ReportModule */

    /***/
    function OF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportModule", function () {
        return ReportModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../core/feather-icon/feather-icon.module */
      "tyVc");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-apexcharts */
      "CV0D");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-mask */
      "tmjD");
      /* harmony import */


      var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-custom-validators */
      "uxn7");
      /* harmony import */


      var _report_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./report-main.component */
      "8dNn");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");

      var routes = [{
        path: '',
        component: _report_main_component__WEBPACK_IMPORTED_MODULE_14__["ReportMainComponent"]
      }];

      var ReportModule = /*#__PURE__*/_createClass(function ReportModule() {
        _classCallCheck(this, ReportModule);
      });

      ReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_report_main_component__WEBPACK_IMPORTED_MODULE_14__["ReportMainComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__["FeahterIconModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_10__["NgxDatatableModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_12__["NgxMaskModule"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_13__["CustomFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]]
      })], ReportModule);
      /***/
    },

    /***/
    "8dNn":
    /*!**********************************************************!*\
      !*** ./src/app/features/report/report-main.component.ts ***!
      \**********************************************************/

    /*! exports provided: ReportMainComponent */

    /***/
    function dNn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportMainComponent", function () {
        return ReportMainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_report_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./report-main.component.html */
      "JCnR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../store/report/report.selectors */
      "VGBg");
      /* harmony import */


      var _store_report_report_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../store/report/report.actions */
      "DoIT");

      var ReportMainComponent = /*#__PURE__*/function () {
        function ReportMainComponent(router, store) {
          _classCallCheck(this, ReportMainComponent);

          this.router = router;
          this.store = store;
          this.defaultNavActiveId = 3;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(ReportMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // isLoading
            this.isLoadingAllStrategy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllStrategyLoading"]));
            this.isLoadingAllNewTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["isLoadingAllNewTrade"]));
            this.isLoadingSavedReport$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["isLoadingSavedReport"])); // strategies datatable

            this.allStrategyDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllStrategyDatatable"]));
            this.injury2022Datatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getInjury2022Data"](true)));
            this.injury2021Datatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getInjury2021Data"](true)));
            this.passiveLiveDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getPassiveLiveData"](true)));
            this.passiveDemoDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getPassiveDemoData"](true)));
            this.activeKevinDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getActiveKevinData"](true)));
            this.activeBagnaDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getactiveBagnaData"](true)));
            this.activeKitoDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getActiveKitoData"](true)));
            this.otherDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getOtherData"](true))); // strategies trade

            this.allTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllNewTrade"]));
            this.injury2022Trade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getInjury2022Data"](false)));
            this.injury2021Trade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getInjury2021Data"](false)));
            this.passiveLiveTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getPassiveLiveData"](false)));
            this.passiveDemoTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getPassiveDemoData"](false)));
            this.activeKevinTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getActiveKevinData"](false)));
            this.activeBagnaTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getactiveBagnaData"](false)));
            this.activeKitoTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getActiveKitoData"](false)));
            this.otherTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getOtherData"](false))); // selected strategy

            this.selectedStrategyId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedStrategyId"]));
            this.selectedStrategy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedStrategy"]));
            this.selectedStrategyName$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedStrategyName"]));
            this.selectedStrategyTrades$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedStrategyTrades"])); // compare

            this.compareList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getCompareList"]));
            this.comparedStrategy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getComparedData"]));
            this.compareStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getCompareStatus"])); // saved report

            this.selectedSavedReport$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedSavedReport"]));
            this.selectedSavedReportName$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedSavedReportName"]));
            this.selectedSavedReportId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedSavedReportId"]));
            this.savedReportDatatable$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSavedReportDatatable"]));
            this.selectedSavedReportTrades$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedSavedReportTrades"])); // compare saved report

            this.compareSavedReportList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getCompareSavedReportList"]));
            this.comparedSavedReport$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getComparedSavedReportData"]));
            this.compareStatusSavedReport$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getCompareSavedReportStatus"]));
            this.lastTradeDate$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getLastTradeUploadedDate"]));
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }, {
          key: "refreshStrategy",
          value: function refreshStrategy() {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_7__["getAllStrategies"]());
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_7__["getAllSavedReport"]());
          }
        }, {
          key: "refreshTrade",
          value: function refreshTrade() {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_7__["getAllNewTrades"]());
          }
        }]);

        return ReportMainComponent;
      }();

      ReportMainComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      };

      ReportMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-report-main',
        template: _raw_loader_report_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ReportMainComponent);
      /***/
    },

    /***/
    "JCnR":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/report/report-main.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JCnR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h3 class=\"mb-3\">Report</h3>\r\n  </div>\r\n  <div class=\"d-flex align-items-center flex-wrap text-nowrap\">\r\n    <h5 class=\"mr-3\">Last Trade Uploaded on {{lastTradeDate$ | async | date}}</h5>\r\n    <button type=\"button\" class=\"btn btn-outline-info btn-icon-text mr-2 d-none d-md-block\" (click)=\"refreshTrade()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh Trades\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-outline-warning btn-icon-text mr-2 d-none d-md-block\" (click)=\"refreshStrategy()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh Strategy And Report\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col\">\r\n\r\n  <app-loading-cards *ngIf=\"(isLoadingAllStrategy$ | async).isLoading || (isLoadingAllNewTrade$ | async).isLoading\"></app-loading-cards>\r\n  <!-- TAB DATATABLE-->\r\n  <ul ngbNav #defaultNav=\"ngbNav\" [(activeId)]=\"defaultNavActiveId\" class=\"nav-tabs\">\r\n    <li [ngbNavItem]=\"1\">\r\n      <h4>\r\n        <a ngbNavLink>All Trades</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"(isLoadingAllNewTrade$ | async).isLoadingSuccess \"\r\n                                 [selectedStrategyTrades$]=\"allTrade$\"\r\n                                 [title]=\"'All Trade'\"\r\n                                 [bank]=\"1000\"\r\n                                 [noBug]=\"false\"\r\n                                 [isSaved]=\"false\">\r\n            </app-strategy-report>\r\n\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"2\">\r\n      <h4>\r\n        <a ngbNavLink>All Strategy</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"allStrategyDatatable$| async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"3\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-warning\">Saved Report</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <!-- STRATEGY BLOCK -->\r\n        <app-loading-cards *ngIf=\"(isLoadingSavedReport$ | async).isLoading\"></app-loading-cards>\r\n        <div *ngIf=\"(isLoadingSavedReport$ | async).isLoadingSuccess\">\r\n          <app-strategy-datatable\r\n            [strategyDatatable]=\"savedReportDatatable$ | async\"\r\n            [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n            [selectedSavedReportId]=\"(selectedSavedReport$ | async) ? (selectedSavedReport$ | async)._id : null\"\r\n            [compareList]=\"compareList$ | async\"\r\n            [isSaved]=\"true\"\r\n            [compareSavedReportList]=\"compareSavedReportList$ | async\"\r\n            [compareSavedReportStatus]=\"compareStatusSavedReport$ | async\"\r\n            [compareStatus]=\"compareStatus$ | async\" >\r\n          </app-strategy-datatable>\r\n\r\n          <div>\r\n            <app-strategy-report *ngIf=\"(selectedSavedReportTrades$ | async) && (selectedSavedReport$ | async)  \"\r\n                                 [selectedStrategyTrades$]=\"selectedSavedReportTrades$\"\r\n                                 [title]=\"selectedSavedReportName$ | async\"\r\n                                 [bank]=\"1000\"\r\n                                 [noBug]=\"false\"\r\n                                 [isSaved]=\"true\"\r\n                                 [savedReportId]=\"selectedSavedReportId$ | async\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">\r\n            </app-strategy-report>\r\n          </div>\r\n\r\n          <!-- COMPARE REPORTS-->\r\n          <div class=\"col grid-margin\" *ngIf=\"(comparedSavedReport$ | async).length && (compareStatusSavedReport$ | async)\">\r\n            <app-strategy-compare class=\"mb-2\" [strategyList$]=\"comparedSavedReport$\">\r\n            </app-strategy-compare>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"4\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-danger\">Injury 2022</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"injury2022Trade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"injury2022Trade$\"\r\n                                 [title]=\"'Injury 2022'\"\r\n                                 [bank]=\"35000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">>\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"injury2022Datatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"5\">\r\n      <h4>\r\n        <a ngbNavLink>Injury 2021</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"injury2021Trade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"injury2021Trade$\"\r\n                                 [title]=\"'Injury 2021'\"\r\n                                 [bank]=\"20000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">>\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"injury2021Datatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"6\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-info\">Passive Demo Mar-May 2022</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"passiveDemoTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"passiveDemoTrade$\"\r\n                                 [title]=\"'Passive Demo Mar-May 2022'\"\r\n                                 [bank]=\"10000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">>\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"passiveDemoDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"7\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-success\">Passive Live Sept 2022</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"passiveLiveTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"passiveLiveTrade$\"\r\n                                 [title]=\"'Passive Live Sept 2022'\"\r\n                                 [bank]=\"5000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">>\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"passiveLiveDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"8\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-warning\">Bagna</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"activeBagnaTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"activeBagnaTrade$\"\r\n                                 [title]=\"'Bagna'\"\r\n                                 [bank]=\"2000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">>\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"activeBagnaDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"9\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-warning\">Kevin</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"activeKevinTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"activeKevinTrade$\"\r\n                                 [title]=\"'Kevin'\"\r\n                                 [bank]=\"2000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"activeKevinDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"10\">\r\n      <h4>\r\n        <a ngbNavLink class=\"text-warning\">Kito</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"activeKitoTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"activeKitoTrade$\"\r\n                                 [title]=\"'Kito'\"\r\n                                 [bank]=\"2000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"activeKitoDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"11\">\r\n      <h4>\r\n        <a ngbNavLink>Other</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <!-- STRATEGY BLOCK -->\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-report *ngIf=\"otherTrade$ | async\"\r\n                                 [selectedStrategyTrades$]=\"otherTrade$\"\r\n                                 [title]=\"'Other'\"\r\n                                 [bank]=\"2000\"\r\n                                 [noBug]=\"true\"\r\n                                 [savedReport]=\"selectedSavedReport$ | async\">\r\n            </app-strategy-report>\r\n          </div>\r\n          <div class=\"col grid-margin\">\r\n            <app-strategy-datatable\r\n              [strategyDatatable]=\"otherDatatable$ | async\"\r\n              [selectedStrategyId]=\"selectedStrategyId$ | async\"\r\n              [compareList]=\"compareList$ | async\">\r\n            </app-strategy-datatable>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n\r\n  </ul>\r\n  <div [ngbNavOutlet]=\"defaultNav\" class=\"border border-top-0 p-3\"></div>\r\n\r\n\r\n  <!-- ALWAYS ACTIVE-->\r\n\r\n  <!-- SELECTED REPORT-->\r\n  <div class=\"col grid-margin\">\r\n    <app-strategy-report *ngIf=\"(selectedStrategy$ | async) && (selectedStrategyTrades$ | async) && (selectedStrategyName$ | async)\"\r\n                         [selectedStrategyTrades$]=\"selectedStrategyTrades$\"\r\n                         [selectedStrategy]=\"selectedStrategy$\"\r\n                         [title]=\"selectedStrategyName$ | async\"\r\n                         [isSaved]=\"false\" [noBug]=\"true\">\r\n    </app-strategy-report>\r\n  </div>\r\n\r\n  <!-- COMPARE REPORTS-->\r\n  <div class=\"col grid-margin\" *ngIf=\"(comparedStrategy$ | async).length && (compareStatus$ | async)\">\r\n    <app-strategy-compare class=\"mb-2\" [strategyList$]=\"comparedStrategy$\">\r\n    </app-strategy-compare>\r\n  </div>\r\n\r\n</div>\r\n\r\n";
      /***/
    }
  }]);
})();