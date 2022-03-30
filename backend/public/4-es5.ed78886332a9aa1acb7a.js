(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
    /***/
    "3FaM":
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/dashboard/statsCards/tennis-tournament-stats/tennis-tournament-stats.component.html ***!
      \****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FaM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-1\">Tennis Tournament Stats</h6>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h4 class=\"card-title mb-1\">Tennis Tournament</h4>\r\n        <h3 class=\"mb-0\">{{(tennisTournamentStats$ | async).length | number}}</h3>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n        <h5 class=\"card-title mb-1 text-primary\">ATP</h5>\r\n        <h4 class=\"mb-0\">{{(tennisTournamentStats$ | async).federationStats.atp| number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(tennisTournamentStats$ | async).federationStats.atp / (tennisTournamentStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n        <h5 class=\"card-title mb-1 text-danger\">WTA</h5>\r\n        <h4 class=\"mb-0\">{{(tennisTournamentStats$ | async).federationStats.wta | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(tennisTournamentStats$ | async).federationStats.wta / (tennisTournamentStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row grid-margin\">\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-1 text-warning\">Slam</h6>\r\n        <h4 class=\"mb-0\">{{(tennisTournamentStats$ | async).type.slam | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(tennisTournamentStats$ | async).federationStats.wta / (tennisTournamentStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-1 text-success\">Challenger</h6>\r\n        <h4 class=\"mb-0\">{{(tennisTournamentStats$ | async).type.challenger| number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(tennisTournamentStats$ | async).type.challenger / (tennisTournamentStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-1 text-primary\">250</h6>\r\n        <h4 class=\"mb-0\">{{(tennisTournamentStats$ | async).type[\"250\"]| number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(tennisTournamentStats$ | async).type[\"250\"] / (tennisTournamentStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-1 text-info\">500</h6>\r\n        <h4 class=\"mb-0\">{{(tennisTournamentStats$ | async).type[\"500\"]| number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(tennisTournamentStats$ | async).type[\"500\"] / (tennisTournamentStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-1 text-light\">1000</h6>\r\n        <h4 class=\"mb-0\">{{(tennisTournamentStats$ | async).type[\"1000\"]| number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(tennisTournamentStats$ | async).type[\"1000\"] / (tennisTournamentStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/tennisTournament\">Go</button>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "CTtM":
    /*!************************************************************************************!*\
      !*** ./src/app/features/dashboard/statsCards/notes-stats/notes-stats.component.ts ***!
      \************************************************************************************/

    /*! exports provided: NotesStatsComponent */

    /***/
    function CTtM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotesStatsComponent", function () {
        return NotesStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_notes_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./notes-stats.component.html */
      "sLv4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var NotesStatsComponent = /*#__PURE__*/function () {
        function NotesStatsComponent() {
          _classCallCheck(this, NotesStatsComponent);
        }

        _createClass(NotesStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotesStatsComponent;
      }();

      NotesStatsComponent.ctorParameters = function () {
        return [];
      };

      NotesStatsComponent.propDecorators = {
        noteStats$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      NotesStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-notes-stats',
        template: _raw_loader_notes_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], NotesStatsComponent);
      /***/
    },

    /***/
    "IAk5":
    /*!********************************************************!*\
      !*** ./src/app/features/dashboard/dashboard.module.ts ***!
      \********************************************************/

    /*! exports provided: DashboardModule */

    /***/
    function IAk5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/core/feather-icon/feather-icon.module */
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


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./dashboard.component */
      "vsDn");
      /* harmony import */


      var _statsCards_market_stats_market_stats_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./statsCards/market-stats/market-stats.component */
      "gJDZ");
      /* harmony import */


      var _statsCards_runner_stats_runner_stats_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./statsCards/runner-stats/runner-stats.component */
      "d+PR");
      /* harmony import */


      var _statsCards_notes_stats_notes_stats_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./statsCards/notes-stats/notes-stats.component */
      "CTtM");
      /* harmony import */


      var _statsCards_tennis_tournament_stats_tennis_tournament_stats_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./statsCards/tennis-tournament-stats/tennis-tournament-stats.component */
      "ZmqO");
      /* harmony import */


      var _statsCards_report_stats_report_stats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./statsCards/report-stats/report-stats.component */
      "PMtb");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd"); // Ng-ApexCharts
      // Ng2-trade


      var routes = [{
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
      }];

      var DashboardModule = function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      };

      DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"], _statsCards_market_stats_market_stats_component__WEBPACK_IMPORTED_MODULE_10__["MarketStatsComponent"], _statsCards_runner_stats_runner_stats_component__WEBPACK_IMPORTED_MODULE_11__["RunnerStatsComponent"], _statsCards_notes_stats_notes_stats_component__WEBPACK_IMPORTED_MODULE_12__["NotesStatsComponent"], _statsCards_tennis_tournament_stats_tennis_tournament_stats_component__WEBPACK_IMPORTED_MODULE_13__["TennisTournamentStatsComponent"], _statsCards_report_stats_report_stats_component__WEBPACK_IMPORTED_MODULE_14__["ReportStatsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__["FeahterIconModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "Lg3j":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/dashboard/statsCards/report-stats/report-stats.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lg3j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Reports Stats</h6>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "PMtb":
    /*!**************************************************************************************!*\
      !*** ./src/app/features/dashboard/statsCards/report-stats/report-stats.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ReportStatsComponent */

    /***/
    function PMtb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportStatsComponent", function () {
        return ReportStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_report_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./report-stats.component.html */
      "Lg3j");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReportStatsComponent = /*#__PURE__*/function () {
        function ReportStatsComponent() {
          _classCallCheck(this, ReportStatsComponent);
        }

        _createClass(ReportStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReportStatsComponent;
      }();

      ReportStatsComponent.ctorParameters = function () {
        return [];
      };

      ReportStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-report-stats',
        template: _raw_loader_report_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], ReportStatsComponent);
      /***/
    },

    /***/
    "Wfqd":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/dashboard/statsCards/runner-stats/runner-stats.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Wfqd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Runner Stats</h6>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"card-title mb-0\">Runners</h5>\r\n        <h3 class=\"mb-2\">{{(runnerStats$ | async).length | number}}</h3>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-0 text-warning\">Tennis</h6>\r\n        <h4 class=\"mb-2\">{{(runnerStats$ | async).sport.countTennis | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(runnerStats$ | async).sport.countTennis / (runnerStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-0 text-success\">Football</h6>\r\n        <h4 class=\"mb-2\">{{(runnerStats$ | async).sport.countFootball | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(runnerStats$ | async).sport.countFootball / (runnerStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-0 text-danger\">Horse Racing</h6>\r\n        <h4 class=\"mb-2\">{{(runnerStats$ | async).sport.countHorse | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(runnerStats$ | async).sport.countHorse / (runnerStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"card-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/runners\">Go</button>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "ZmqO":
    /*!************************************************************************************************************!*\
      !*** ./src/app/features/dashboard/statsCards/tennis-tournament-stats/tennis-tournament-stats.component.ts ***!
      \************************************************************************************************************/

    /*! exports provided: TennisTournamentStatsComponent */

    /***/
    function ZmqO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TennisTournamentStatsComponent", function () {
        return TennisTournamentStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tennis_tournament_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tennis-tournament-stats.component.html */
      "3FaM");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var TennisTournamentStatsComponent = /*#__PURE__*/function () {
        function TennisTournamentStatsComponent() {
          _classCallCheck(this, TennisTournamentStatsComponent);
        }

        _createClass(TennisTournamentStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return TennisTournamentStatsComponent;
      }();

      TennisTournamentStatsComponent.ctorParameters = function () {
        return [];
      };

      TennisTournamentStatsComponent.propDecorators = {
        tennisTournamentStats$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      TennisTournamentStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tennis-tournament-stats',
        template: _raw_loader_tennis_tournament_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], TennisTournamentStatsComponent);
      /***/
    },

    /***/
    "d+PR":
    /*!**************************************************************************************!*\
      !*** ./src/app/features/dashboard/statsCards/runner-stats/runner-stats.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: RunnerStatsComponent */

    /***/
    function dPR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnerStatsComponent", function () {
        return RunnerStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runner_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runner-stats.component.html */
      "Wfqd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RunnerStatsComponent = /*#__PURE__*/function () {
        function RunnerStatsComponent() {
          _classCallCheck(this, RunnerStatsComponent);
        }

        _createClass(RunnerStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RunnerStatsComponent;
      }();

      RunnerStatsComponent.ctorParameters = function () {
        return [];
      };

      RunnerStatsComponent.propDecorators = {
        runnerStats$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      RunnerStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-runner-stats',
        template: _raw_loader_runner_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RunnerStatsComponent);
      /***/
    },

    /***/
    "gJDZ":
    /*!**************************************************************************************!*\
      !*** ./src/app/features/dashboard/statsCards/market-stats/market-stats.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: MarketStatsComponent */

    /***/
    function gJDZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarketStatsComponent", function () {
        return MarketStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_market_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./market-stats.component.html */
      "u9eJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MarketStatsComponent = /*#__PURE__*/function () {
        function MarketStatsComponent() {
          _classCallCheck(this, MarketStatsComponent);
        }

        _createClass(MarketStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MarketStatsComponent;
      }();

      MarketStatsComponent.ctorParameters = function () {
        return [];
      };

      MarketStatsComponent.propDecorators = {
        marketStats$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      MarketStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-market-stats',
        template: _raw_loader_market_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MarketStatsComponent);
      /***/
    },

    /***/
    "oyVD":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/dashboard/dashboard.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oyVD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h4 class=\"mb-3 mb-md-0\">Welcome to Dashboard</h4>\r\n    <p>Recap of all parameters in site and DB</p>\r\n  </div>\r\n</div>\r\n\r\n<!-- BREADCRUMB -->\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">BF</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Dashboard</li>\r\n  </ol>\r\n</nav>\r\n<!-- /BREADCRUMB -->\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col grid-margin\">\r\n    <app-market-stats [marketStats$]=\"marketsStats$$\"></app-market-stats>\r\n  </div>\r\n  <div class=\"col grid-margin\">\r\n    <app-runner-stats [runnerStats$]=\"runnerStats$$\"></app-runner-stats>\r\n  </div>\r\n</div> <!-- row -->\r\n\r\n<div class=\"row\">\r\n  <div class=\"col grid-margin\">\r\n    <app-tennis-tournament-stats [tennisTournamentStats$]=\"tennisTournamentStats$\"></app-tennis-tournament-stats>\r\n  </div>\r\n  <div class=\"col grid-margin\">\r\n    <app-notes-stats [noteStats$]=\"noteStats$\"></app-notes-stats>\r\n  </div>\r\n</div> <!-- row -->\r\n\r\n\r\n";
      /***/
    },

    /***/
    "sLv4":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/dashboard/statsCards/notes-stats/notes-stats.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sLv4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Note Stats</h6>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"card-title mb-0\">Notes</h5>\r\n        <h3 class=\"mb-2\">{{(noteStats$ | async).length | number}}</h3>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-0 text-danger\">Medical</h6>\r\n        <h4 class=\"mb-2\">{{(noteStats$ | async).stats.medical | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(noteStats$ | async).stats.medical / (noteStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-0 text-secondaty\">Note</h6>\r\n        <h4 class=\"mb-2\">{{(noteStats$ | async).stats.note | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(noteStats$ | async).stats.note / (noteStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-0 text-warning\">Walkover</h6>\r\n        <h4 class=\"mb-2\">{{(noteStats$ | async).stats.walkover | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(noteStats$ | async).stats.walkover / (noteStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-0\">Validated</h6>\r\n        <h4 class=\"mb-2\">{{(noteStats$ | async).stats.validated | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(noteStats$ | async).stats.validated / (noteStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"card-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/notes\">Go</button>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "u9eJ":
    /*!******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/dashboard/statsCards/market-stats/market-stats.component.html ***!
      \******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u9eJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Market Stats</h6>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"card-title mb-0\">Markets</h5>\r\n        <h3 class=\"mb-2\">{{(marketStats$ | async).length | number}}</h3>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-0 text-warning\">Tennis</h6>\r\n        <h4 class=\"mb-2\">{{(marketStats$ | async).sport.countTennis | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(marketStats$ | async).sport.countTennis / (marketStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-0 text-success\">Football</h6>\r\n        <h4 class=\"mb-2\">{{(marketStats$ | async).sport.countFootball | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(marketStats$ | async).sport.countFootball / (marketStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col\">\r\n        <h6 class=\"card-title mb-0 text-danger\">Horse Racing</h6>\r\n        <h4 class=\"mb-2\">{{(marketStats$ | async).sport.countHorse | number}}</h4>\r\n        <div class=\"d-flex align-items-baseline\">\r\n          <p class=\"text-gray\">\r\n            <span>{{(marketStats$ | async).sport.countHorse / (marketStats$ | async).length | percent}}</span>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"card-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" routerLink=\"/markets/list\">Go</button>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "vsDn":
    /*!***********************************************************!*\
      !*** ./src/app/features/dashboard/dashboard.component.ts ***!
      \***********************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function vsDn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "oyVD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_markets_markets_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../store/markets/markets.selectors */
      "iiSl");
      /* harmony import */


      var _store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../store/runners/runners.selectors */
      "CzFr");
      /* harmony import */


      var _store_tennis_tournament_tennisTournament_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../store/tennis-tournament/tennisTournament.selectors */
      "Jrow");
      /* harmony import */


      var _store_notes_notes_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../store/notes/notes.selectors */
      "Iz9j");

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(store) {
          _classCallCheck(this, DashboardComponent);

          this.store = store;
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.marketsStats$$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_markets_markets_selectors__WEBPACK_IMPORTED_MODULE_4__["getMarketStats"]));
            this.runnerStats$$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_5__["getRunnerStats"]));
            this.tennisTournamentStats$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_tennis_tournament_tennisTournament_selectors__WEBPACK_IMPORTED_MODULE_6__["getTennisTournamentStats"]));
            this.noteStats$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_notes_notes_selectors__WEBPACK_IMPORTED_MODULE_7__["getNotesStats"]));
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      };

      DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        preserveWhitespaces: true
      })], DashboardComponent);
      /***/
    }
  }]);
})();