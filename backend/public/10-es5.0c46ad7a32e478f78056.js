(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10], {
    /***/
    "8S3n":
    /*!*************************************************************************!*\
      !*** ./src/app/features/backtest/components/backtest-main.component.ts ***!
      \*************************************************************************/

    /*! exports provided: BacktestMainComponent */

    /***/
    function S3n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BacktestMainComponent", function () {
        return BacktestMainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_backtest_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./backtest-main.component.html */
      "DJso");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../store/report/report.actions */
      "DoIT");
      /* harmony import */


      var _store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../store/report/report.selectors */
      "VGBg");

      var BacktestMainComponent = /*#__PURE__*/function () {
        function BacktestMainComponent(router, store) {
          _classCallCheck(this, BacktestMainComponent);

          this.router = router;
          this.store = store;
          this.defaultNavActiveId = 1;
        }

        _createClass(BacktestMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // get backtest state
            this.$backtestIsLoading = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getBacktestIsLoading"]));
            this.$backtestMode = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getBacktestModeState"]));
            this.$backtestTradesCount = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getBacktestCurrentTradesCount"]));
            this.$allBacktest = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllBacktest"]));
            this.$backtestCurrentTradesList = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getBacktestCurrentTrades"]));
            this.$backtestSelected = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedBacktest"]));
            this.$backtestSelectedId = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedBacktestId"]));
            this.$backtestSelectedTrades = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getSelectedBacktestTrade"]));
            this.$backtestAllTrade = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllBacktestTrade"]));
            this.$isLoadingBacktestAllTrade = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getIsLoadingAllBacktestTrade"]));
            this.$allBacktestAsStrategy = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getAllBacktestAsStrategyDatatable"])); // compare

            this.compareList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getCompareBacktestList"]));
            this.comparedBacktest$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getComparedBacktestData"]));
            this.compareStatus$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getCompareBacktestStatus"]));
          }
        }, {
          key: "refreshBacktest",
          value: function refreshBacktest() {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["backtestGetAll"]());
          }
        }, {
          key: "refreshBacktestTrade",
          value: function refreshBacktestTrade() {
            this.store.dispatch(_store_report_report_actions__WEBPACK_IMPORTED_MODULE_5__["backtestTradeGetAll"]());
          }
        }]);

        return BacktestMainComponent;
      }();

      BacktestMainComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      BacktestMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-backtest-main',
        template: _raw_loader_backtest_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BacktestMainComponent);
      /***/
    },

    /***/
    "DJso":
    /*!*****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/backtest/components/backtest-main.component.html ***!
      \*****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DJso(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h3 class=\"mb-3\">Backtest</h3>\r\n  </div>\r\n  <div class=\"d-flex align-items-center flex-wrap text-nowrap\">\r\n    <button type=\"button\" class=\"btn btn-outline-info btn-icon-text mr-2 d-none d-md-block\" (click)=\"refreshBacktestTrade()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh Backtest Trades\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-outline-warning btn-icon-text mr-2 d-none d-md-block\" (click)=\"refreshBacktest()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh Backtest\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col\">\r\n\r\n  <ul ngbNav #defaultNav=\"ngbNav\" [(activeId)]=\"defaultNavActiveId\" class=\"nav-tabs\">\r\n    <li [ngbNavItem]=\"1\">\r\n      <h4>\r\n        <a ngbNavLink>Backtests</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <app-strategy-datatable [strategyDatatable]=\"$allBacktestAsStrategy | async\"\r\n                                  [isBacktest]=\"true\"\r\n                                  [isSaved]=\"false\"\r\n                                  [selectedBacktestId]=\"$backtestSelectedId | async\"\r\n                                  [compareBacktestStatus]=\"compareStatus$ | async\"\r\n                                  [compareBacktestList]=\"compareList$ | async\" >\r\n          </app-strategy-datatable>\r\n\r\n          <app-strategy-report *ngIf=\"($backtestSelectedTrades | async).length>0\"\r\n                               [selectedStrategyTrades$]=\"$backtestSelectedTrades\"\r\n                               [title]=\"($backtestSelected | async) ? ($backtestSelected | async).backtest.name : 'Backtest' \"\r\n                               [bank]=\"($backtestSelected | async) ? ($backtestSelected | async).backtest.bank : 1000 \"\r\n                               [noBug]=\"true\"\r\n                               [isSaved]=\"false\"\r\n                               [isBacktestReport]=\"true\">\r\n          </app-strategy-report>\r\n\r\n          <!-- COMPARE REPORTS-->\r\n          <div class=\"col mt-2 \" *ngIf=\"(comparedBacktest$ | async).length && (compareStatus$ | async)\">\r\n            <app-strategy-compare class=\"mb-2\" [strategyList$]=\"comparedBacktest$\">\r\n            </app-strategy-compare>\r\n          </div>\r\n\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"2\">\r\n      <h4>\r\n        <a ngbNavLink>All Trades</a>\r\n      </h4>\r\n      <ng-template ngbNavContent>\r\n        <div>\r\n          <app-trades-datatable [trades$]=\"$backtestAllTrade\"\r\n                                [isBackTest]=\"true\"\r\n                                [isSaved]=\"false\"\r\n                                [isBackTestToAdd]=\"false\">\r\n          </app-trades-datatable>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n  </ul>\r\n\r\n  <div [ngbNavOutlet]=\"defaultNav\" class=\"border border-top-0 p-3\"></div>\r\n\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "K3YI":
    /*!******************************************************!*\
      !*** ./src/app/features/backtest/backtest.module.ts ***!
      \******************************************************/

    /*! exports provided: BacktestModule */

    /***/
    function K3YI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BacktestModule", function () {
        return BacktestModule;
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


      var _components_backtest_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/backtest-main.component */
      "8S3n");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");

      var routes = [{
        path: '',
        component: _components_backtest_main_component__WEBPACK_IMPORTED_MODULE_6__["BacktestMainComponent"]
      }];

      var BacktestModule = /*#__PURE__*/_createClass(function BacktestModule() {
        _classCallCheck(this, BacktestModule);
      });

      BacktestModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_backtest_main_component__WEBPACK_IMPORTED_MODULE_6__["BacktestMainComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__["FeahterIconModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]]
      })], BacktestModule);
      /***/
    }
  }]);
})();