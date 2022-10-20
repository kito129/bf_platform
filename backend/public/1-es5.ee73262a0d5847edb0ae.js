(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1], {
    /***/
    "3M7m":
    /*!********************************************************************************!*\
      !*** ./src/app/features/runners/components/detail/runners-detail.component.ts ***!
      \********************************************************************************/

    /*! exports provided: RunnersDetailComponent */

    /***/
    function M7m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnersDetailComponent", function () {
        return RunnersDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runners_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runners-detail.component.html */
      "QnpP");
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


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _store_runners_runners_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../store/runners/runners.action */
      "nJiA");
      /* harmony import */


      var _store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../store/runners/runners.selectors */
      "CzFr");
      /* harmony import */


      var _store_notes_notes_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../store/notes/notes.selectors */
      "Iz9j");
      /* harmony import */


      var _store_tennis_tournament_tennisTournament_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../store/tennis-tournament/tennisTournament.selectors */
      "Jrow");
      /* harmony import */


      var _model_runner_runnerMarketsStats__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../model/runner/runnerMarketsStats */
      "X8Q7");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var RunnersDetailComponent = /*#__PURE__*/function () {
        function RunnersDetailComponent(router, store, route) {
          _classCallCheck(this, RunnersDetailComponent);

          this.router = router;
          this.store = store;
          this.route = route;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.runnerId = this.route.snapshot.params.runnerId; // -- DISPATCH ACTIONS --
          // dispatch action runners detail

          this.store.dispatch(_store_runners_runners_action__WEBPACK_IMPORTED_MODULE_6__["getRunnerById"]({
            runnerId: this.runnerId
          })); // dispatch action markets by runner id

          this.store.dispatch(_store_runners_runners_action__WEBPACK_IMPORTED_MODULE_6__["getMarketsByRunnerId"]({
            runnerId: this.runnerId
          })); // -- SELECTORS FROM STORE --
          // runnerInfo

          this.runnerInfo$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_7__["getSelectedRunnerInfo"]));
          this.isLoadingSelectedRunner$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_7__["isLoadingSelectedRunner"])); // runnerMarket

          this.runnerMarkets$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_7__["getDetailRunnerMarkets"]));
          this.isLoadingRunnerMarkets$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_7__["isLoadingRunnerMarkets"])); // notes

          this.runnerNotes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_notes_notes_selectors__WEBPACK_IMPORTED_MODULE_8__["getNotesByRunnerId"](this.runnerId)));
          this.isLoadingNotes$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_notes_notes_selectors__WEBPACK_IMPORTED_MODULE_8__["getNotesLoading"])); // tennis tournament

          this.tournamentList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_tennis_tournament_tennisTournament_selectors__WEBPACK_IMPORTED_MODULE_9__["getAllTennisTournaments"]));
          this.isLoadingAllTournament$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_tennis_tournament_tennisTournament_selectors__WEBPACK_IMPORTED_MODULE_9__["getIsLoadingAllTennisTournament"])); // runners List

          this.allRunners$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_7__["getAllRunners"]));
          this.isLoadingAllRunners$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_7__["isLoadingAllRunners"]));
        }

        _createClass(RunnersDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.runnerMarkets$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.destroy$)).subscribe(function (data) {
              if (data) {
                _this.marketsStats = new _model_runner_runnerMarketsStats__WEBPACK_IMPORTED_MODULE_10__["RunnerMarketsStats"](data, _this.runnerId);
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.unsubscribe();
          }
        }, {
          key: "refreshClick",
          value: function refreshClick() {
            // -- DISPATCH ACTIONS --
            // runners detail
            this.store.dispatch(_store_runners_runners_action__WEBPACK_IMPORTED_MODULE_6__["getRunnerById"]({
              runnerId: this.runnerId
            })); // markets by runner id

            this.store.dispatch(_store_runners_runners_action__WEBPACK_IMPORTED_MODULE_6__["getMarketsByRunnerId"]({
              runnerId: this.runnerId
            }));
          }
        }]);

        return RunnersDetailComponent;
      }();

      RunnersDetailComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      };

      RunnersDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-detail-runners',
        template: _raw_loader_runners_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RunnersDetailComponent);
      /***/
    },

    /***/
    "4Lc9":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/features/runners/components/list/runners-data-table/runners-data-table-list.component.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: RunnersDataTableListComponent */

    /***/
    function Lc9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnersDataTableListComponent", function () {
        return RunnersDataTableListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runners_data_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runners-data-table.component.html */
      "YtY+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");

      var RunnersDataTableListComponent = /*#__PURE__*/function () {
        function RunnersDataTableListComponent() {
          _classCallCheck(this, RunnersDataTableListComponent);

          this.tableSize = 30;
          this.rows = [];
          this.temp = [];
          this.loadingIndicator = true;
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
          this.columns = [{
            name: 'Name',
            sortable: true
          }, {
            prop: 'Sport',
            sortable: true
          }, {
            prop: 'open',
            sortable: false
          }];
        }

        _createClass(RunnersDataTableListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.temp = _toConsumableArray(this.runners);
            this.rows = this.runners;
          }
        }, {
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data
            // update the rows

            this.rows = this.temp.filter(function (d) {
              return d.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // Whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }]);

        return RunnersDataTableListComponent;
      }();

      RunnersDataTableListComponent.ctorParameters = function () {
        return [];
      };

      RunnersDataTableListComponent.propDecorators = {
        runners: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]]
        }]
      };
      RunnersDataTableListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-runners-datatable-list',
        template: _raw_loader_runners_data_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["/deep/ .datatable-row-even {background-color: #181818;}"]
      })], RunnersDataTableListComponent);
      /***/
    },

    /***/
    "4Ppe":
    /*!************************************************!*\
      !*** ./node_modules/moving-averages/src/ma.js ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function Ppe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common */
      "MW12"); // simple moving average

      /* harmony default export */


      __webpack_exports__["default"] = function (data, size) {
        var length = data.length;

        if (!size) {
          return data.reduce(function (a, b) {
            return a + b;
          }) / length;
        }

        if (size <= 1) {
          return data.slice();
        }

        if (size > length) {
          return Array(length);
        }

        var prepare = size - 1;
        var ret = [];
        var sum = 0;
        var i = 0;
        var counter = 0;
        var datum;

        for (; i < length && counter < prepare; i++) {
          datum = data[i];

          if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum)) {
            sum += datum;
            counter++;
          }
        }

        for (; i < length; i++) {
          datum = data[i];

          if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum)) {
            sum += datum;
          }

          if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(data[i - size])) {
            sum -= data[i - size];
          }

          ret[i] = sum / size;
        }

        return ret;
      };
      /***/

    },

    /***/
    "AFBN":
    /*!*************************************************************************************************************!*\
      !*** ./src/app/features/runners/components/detail/runner-detail-markets/runner-detail-markets.component.ts ***!
      \*************************************************************************************************************/

    /*! exports provided: RunnerDetailMarketsComponent */

    /***/
    function AFBN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnerDetailMarketsComponent", function () {
        return RunnerDetailMarketsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runner_detail_markets_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runner-detail-markets.component.html */
      "SIoh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _model_market_marketForRunnersMarket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../model/market/marketForRunnersMarket */
      "Y9KJ");

      var RunnerDetailMarketsComponent = /*#__PURE__*/function () {
        function RunnerDetailMarketsComponent(route, router) {
          _classCallCheck(this, RunnerDetailMarketsComponent);

          this.route = route;
          this.router = router;
          this.openState = false;
          this.data = [];
          this.rows = [];
          this.temp = [];
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
          this.columns = [{
            name: 'date',
            sortable: true
          }, {
            prop: 'Hour',
            sortable: true
          }, {
            prop: 'Name',
            sortable: true
          }, {
            prop: 'Selection BSP',
            sortable: true
          }, {
            prop: 'Selection BSP',
            sortable: true
          }, {
            prop: 'Selection Min',
            sortable: true
          }, {
            prop: 'Winner',
            sortable: true
          }, {
            prop: 'Open',
            sortable: false
          }];
        }

        _createClass(RunnerDetailMarketsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _iterator = _createForOfIteratorHelper(this.runnerMarkets),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var market = _step.value;
                this.data.push(new _model_market_marketForRunnersMarket__WEBPACK_IMPORTED_MODULE_5__["MarketForRunnersMarket"](market));
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.temp = this.data;
            this.rows = this.data;
          }
        }, {
          key: "changeOpenState",
          value: function changeOpenState() {
            this.openState = this.openState !== true;
          }
        }, {
          key: "clickOnWinnerRunners",
          value: function clickOnWinnerRunners(id) {
            var _this2 = this;

            this.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(function () {
              return _this2.router.navigate(['/runners/detail/' + id]);
            });
          }
        }, {
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data
            // update the rows

            this.rows = this.temp.filter(function (market) {
              return market.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // Whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }]);

        return RunnerDetailMarketsComponent;
      }();

      RunnerDetailMarketsComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      RunnerDetailMarketsComponent.propDecorators = {
        runnerMarkets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        runnerId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]]
        }]
      };
      RunnerDetailMarketsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-runner-detail-markets',
        template: _raw_loader_runner_detail_markets_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["/deep/ .datatable-row-even {background-color: #181818;}"]
      })], RunnerDetailMarketsComponent);
      /***/
    },

    /***/
    "BL0j":
    /*!*************************************************!*\
      !*** ./node_modules/moving-averages/src/dma.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function BL0j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common */
      "MW12"); // Dynamic Weighted Moving Average
      // @param {Number|Array.<Number>} alpha

      /* harmony default export */


      __webpack_exports__["default"] = function (data, alpha, noHead) {
        var length = data.length;

        if (alpha > 1) {
          return Array(length);
        }

        if (alpha === 1) {
          return data.slice();
        }

        var noArrayWeight = !Object(_common__WEBPACK_IMPORTED_MODULE_0__["isArray"])(alpha);
        var ret = [];
        var datum; // period `i`

        var i = 0; // `s` is the value of the DWMA at any time period `i`

        var s = 0; // Handles head

        for (; i < length; i++) {
          datum = data[i];

          if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum) && (noArrayWeight || Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum))) {
            ret[i] = noHead ? 0 : datum;
            s = datum;
            i++;
            break;
          }
        } // Dynamic weights: an array of weights
        // Ref:
        // https://en.wikipedia.org/wiki/Moving_average#Exponential_moving_average
        // with a dynamic alpha


        if (!noArrayWeight) {
          for (; i < length; i++) {
            datum = data[i];
            Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum) && Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(alpha[i]) ? s = ret[i] = alpha[i] * datum + (1 - alpha[i]) * s : ret[i] = ret[i - 1];
          }

          return ret;
        }

        var o = 1 - alpha; // Fixed alpha

        for (; i < length; i++) {
          datum = data[i];
          Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum) ? s = ret[i] = alpha * datum + o * s : ret[i] = ret[i - 1];
        }

        return ret;
      };
      /***/

    },

    /***/
    "Dtud":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./src/app/features/runners/components/detail/runner-detail-market-stats/runner-detail-market-stats-table/runner-detail-market-stats-table.component.ts ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: RunnerDetailMarketStatsTableComponent */

    /***/
    function Dtud(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnerDetailMarketStatsTableComponent", function () {
        return RunnerDetailMarketStatsTableComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runner_detail_market_stats_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runner-detail-market-stats-table.component.html */
      "khbK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");

      var RunnerDetailMarketStatsTableComponent = /*#__PURE__*/function () {
        function RunnerDetailMarketStatsTableComponent() {
          _classCallCheck(this, RunnerDetailMarketStatsTableComponent);

          this.isCollapsed = true;
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
        }

        _createClass(RunnerDetailMarketStatsTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RunnerDetailMarketStatsTableComponent;
      }();

      RunnerDetailMarketStatsTableComponent.ctorParameters = function () {
        return [];
      };

      RunnerDetailMarketStatsTableComponent.propDecorators = {
        marketStats: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        runnerId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        totalMatch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      RunnerDetailMarketStatsTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-runner-detail-market-stats-table',
        template: _raw_loader_runner_detail_market_stats_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["/deep/ .datatable-row-even {background-color: #181818;}"]
      })], RunnerDetailMarketStatsTableComponent);
      /***/
    },

    /***/
    "FnVq":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/detail/runner-detail-notes/runner-detail-notes.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function FnVq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-note-data-table [notes]=\"runnerNotes\">\r\n\r\n</app-note-data-table>\r\n";
      /***/
    },

    /***/
    "KrBI":
    /*!***************************************************!*\
      !*** ./node_modules/moving-averages/src/index.js ***!
      \***************************************************/

    /*! exports provided: dma, sma, ema, ma, wma */

    /***/
    function KrBI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dma */
      "BL0j");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "dma", function () {
        return _dma__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _sma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sma */
      "nWs0");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "sma", function () {
        return _sma__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony import */


      var _ema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ema */
      "vslJ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ema", function () {
        return _ema__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony import */


      var _ma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ma */
      "4Ppe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ma", function () {
        return _ma__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _wma__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./wma */
      "MU/O");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "wma", function () {
        return _wma__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /***/

    },

    /***/
    "MU/O":
    /*!*************************************************!*\
      !*** ./node_modules/moving-averages/src/wma.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function MUO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./common */
      "MW12"); // Weighted moving average

      /* harmony default export */


      __webpack_exports__["default"] = function (data, size) {
        var length = data.length;

        if (size <= 1) {
          return data.slice();
        }

        if (size > length) {
          return Array(length);
        }

        var ret = [];
        var denominator = size * (size + 1) / 2;
        var prepare = size - 1;
        var sum = 0;
        var numerator = 0;
        var datum = 0;
        var i = 0;
        var real = -1;

        for (; i < prepare; i++) {
          datum = data[i];

          if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum)) {
            sum += datum;
            numerator += (i + 1) * datum;
          }
        }

        for (; i < length; i++, real++) {
          datum = data[i];

          if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(datum)) {
            sum += datum;
            numerator += size * datum;
          }

          if (real >= 0 && Object(_common__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(data[real])) {
            sum -= data[real];
          }

          ret[i] = numerator / denominator;
          numerator -= sum;
        }

        return ret;
      };
      /***/

    },

    /***/
    "MW12":
    /*!****************************************************!*\
      !*** ./node_modules/moving-averages/src/common.js ***!
      \****************************************************/

    /*! exports provided: isNumber, isArray */

    /***/
    function MW12(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNumber", function () {
        return isNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isArray", function () {
        return isArray;
      });

      var isNumber = function isNumber(subject) {
        return typeof subject === 'number' // is not NaN: `NaN === NaN` => `false`
        && subject === subject;
      };

      var isArray = Array.isArray;
      /***/
    },

    /***/
    "Qe+5":
    /*!****************************************************************************************************************************************************************************!*\
      !*** ./src/app/features/runners/components/detail/runner-detail-market-stats/runner-detail-market-stats-distribution/runner-detail-market-stats-distribution.component.ts ***!
      \****************************************************************************************************************************************************************************/

    /*! exports provided: RunnerDetailMarketStatsDistributionComponent */

    /***/
    function Qe5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnerDetailMarketStatsDistributionComponent", function () {
        return RunnerDetailMarketStatsDistributionComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runner_detail_market_stats_distribution_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runner-detail-market-stats-distribution.component.html */
      "RG1G");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RunnerDetailMarketStatsDistributionComponent = /*#__PURE__*/function () {
        function RunnerDetailMarketStatsDistributionComponent() {
          _classCallCheck(this, RunnerDetailMarketStatsDistributionComponent);
        }

        _createClass(RunnerDetailMarketStatsDistributionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.generateChart();
          }
        }, {
          key: "generateChart",
          value: function generateChart() {
            this.lineChartOptions = {
              series: [{
                name: 'W',
                type: 'bar',
                data: this.marketStats.map(function (x) {
                  return x.match.winner;
                })
              }, {
                name: 'L',
                type: 'bar',
                data: this.marketStats.map(function (x) {
                  return x.match.loser;
                })
              }, {
                name: 'N',
                type: 'bar',
                data: this.marketStats.map(function (x) {
                  return x.match.notWinner;
                })
              }],
              colors: ['#627CF5', '#bc427d', '#c6cb31'],
              xaxis: {
                categories: this.marketStats.map(function (x) {
                  return x.odds.name;
                })
              },
              chart: {
                type: 'bar',
                animations: {
                  enabled: false
                },
                stacked: true
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function formatter(val) {
                    return val + '';
                  }
                }
              },
              theme: {
                mode: 'dark'
              }
            };
          }
        }]);

        return RunnerDetailMarketStatsDistributionComponent;
      }();

      RunnerDetailMarketStatsDistributionComponent.ctorParameters = function () {
        return [];
      };

      RunnerDetailMarketStatsDistributionComponent.propDecorators = {
        marketStats: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        totalMatch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      RunnerDetailMarketStatsDistributionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-runner-detail-market-stats-distribution',
        template: _raw_loader_runner_detail_market_stats_distribution_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RunnerDetailMarketStatsDistributionComponent);
      /***/
    },

    /***/
    "Qi54":
    /*!********************************************************************************************************************************************************************!*\
      !*** ./src/app/features/runners/components/detail/runner-detail-market-stats/runner-detail-market-stats-gaussian/runner-detail-market-stats-gaussian.component.ts ***!
      \********************************************************************************************************************************************************************/

    /*! exports provided: RunnerDetailMarketStatsGaussianComponent */

    /***/
    function Qi54(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnerDetailMarketStatsGaussianComponent", function () {
        return RunnerDetailMarketStatsGaussianComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runner_detail_market_stats_gaussian_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runner-detail-market-stats-gaussian.component.html */
      "fjN3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RunnerDetailMarketStatsGaussianComponent = /*#__PURE__*/function () {
        function RunnerDetailMarketStatsGaussianComponent() {
          _classCallCheck(this, RunnerDetailMarketStatsGaussianComponent);
        }

        _createClass(RunnerDetailMarketStatsGaussianComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.generateChart();
          }
        }, {
          key: "generateChart",
          value: function generateChart() {
            this.lineChartOptions = {
              series: [{
                name: "Odds PDF",
                type: "line",
                data: this.marketsGaussian.value.map(function (x) {
                  return x.value;
                })
              }],
              colors: ['#b55b45'],
              xaxis: {
                categories: this.marketsGaussian.value.map(function (x) {
                  return x.odds.toFixed(2);
                }),
                labels: {
                  show: true,
                  rotate: -45,
                  rotateAlways: false,
                  hideOverlappingLabels: true,
                  showDuplicates: false
                }
              },
              chart: {
                type: "line",
                animations: {
                  enabled: false
                }
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function formatter(val) {
                    return val + "";
                  }
                }
              },
              theme: {
                mode: 'dark'
              }
            };
          }
        }]);

        return RunnerDetailMarketStatsGaussianComponent;
      }();

      RunnerDetailMarketStatsGaussianComponent.ctorParameters = function () {
        return [];
      };

      RunnerDetailMarketStatsGaussianComponent.propDecorators = {
        marketsGaussian: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      RunnerDetailMarketStatsGaussianComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-runner-detail-market-stats-gaussian',
        template: _raw_loader_runner_detail_market_stats_gaussian_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RunnerDetailMarketStatsGaussianComponent);
      /***/
    },

    /***/
    "QnpP":
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/detail/runners-detail.component.html ***!
      \************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QnpP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h4 class=\"mb-3 mb-md-0\">Runners Detail</h4>\r\n    <p>Study and view single runners detail, stats and prices.</p>\r\n  </div>\r\n  <div class=\"d-flex align-items-center flex-wrap text-nowrap\">\r\n    <button type=\"button\" class=\"btn btn-outline-info btn-icon-text mr-2 d-none d-md-block\" (click)=\"refreshClick()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!-- BREADCRUMB -->\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">BF</a></li>\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/runners\">Runners</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Detail</li>\r\n  </ol>\r\n</nav>\r\n<!-- /BREADCRUMB -->\r\n\r\n<!-- ROW 1-->\r\n<div class=\"col-12\">\r\n  <app-loading-cards *ngIf=\"(isLoadingNotes$ | async).isLoading || (isLoadingAllTournament$ | async).isLoading || (isLoadingAllRunners$ | async).isLoading\"></app-loading-cards>\r\n  <app-loading-cards *ngIf=\"(isLoadingRunnerMarkets$ | async).isLoading\"></app-loading-cards>\r\n  <div class=\"row grid-margin\">\r\n    <div class=\"col\">\r\n      <app-runner-detail-info *ngIf=\"(isLoadingRunnerMarkets$ | async).isLoadingSuccess && (isLoadingSelectedRunner$ | async).isLoadingSuccess\"\r\n                              [runnerInfo]=\"runnerInfo$ | async\"></app-runner-detail-info>\r\n    </div>\r\n    <div class=\"col\">\r\n      <app-runner-detail-stats *ngIf=\"(isLoadingRunnerMarkets$ | async).isLoadingSuccess && (isLoadingSelectedRunner$ | async).isLoadingSuccess\"\r\n                               [runnerMarkets]=\"runnerMarkets$ | async\"\r\n                               [runnerId]=\"runnerId\"\r\n                               title=\"Runner Stats\"\r\n                               height=\"200\">\r\n      </app-runner-detail-stats>\r\n    </div>\r\n  </div>\r\n  <div class=\"row grid-margin\">\r\n    <div class=\"col grid-margin\">\r\n      <app-runner-detail-notes *ngIf=\"(isLoadingNotes$ | async).isLoadingSuccess && (isLoadingAllTournament$ | async).isLoadingSuccess && (isLoadingAllRunners$ | async).isLoadingSuccess\"\r\n                               [runnerNotes]=\"runnerNotes$ | async\"\r\n                               [tournamentList]=\"tournamentList$ | async\"\r\n                               [runnersList]=\"allRunners$ | async\">\r\n      </app-runner-detail-notes>\r\n    </div>\r\n  </div>\r\n  <div class=\"row grid-margin\">\r\n    <div class=\"col-7\">\r\n      <app-runner-detail-markets *ngIf=\"(isLoadingRunnerMarkets$ | async).isLoadingSuccess\"\r\n                                 [runnerMarkets]=\"runnerMarkets$ | async\"\r\n                                 [runnerId]=\"runnerId\">\r\n      </app-runner-detail-markets>\r\n    </div>\r\n    <div class=\"col-5\">\r\n      <app-runner-detail-market-stats-distribution *ngIf=\"(isLoadingRunnerMarkets$ | async).isLoadingSuccess\"\r\n                                                   [marketStats]=\"marketsStats.rangeStats\">\r\n      </app-runner-detail-market-stats-distribution>\r\n    </div>\r\n  </div>\r\n  <div class=\"row grid-margin\">\r\n    <div class=\"col\">\r\n      <app-runner-detail-bsp *ngIf=\"(isLoadingRunnerMarkets$ | async).isLoadingSuccess && (isLoadingSelectedRunner$ | async).isLoadingSuccess\"\r\n                             [runnerMarkets]=\"runnerMarkets$ | async\"\r\n                             [runnerId]=\"runnerId\">\r\n      </app-runner-detail-bsp>\r\n    </div>\r\n  </div>\r\n  <div class=\"row grid-margin\">\r\n    <div class=\"col\">\r\n      <app-runner-detail-market-stats *ngIf=\"(isLoadingRunnerMarkets$ | async).isLoadingSuccess\"\r\n                                      [runnerId]=\"runnerId\"\r\n                                      [runnerMarkets]=\"runnerMarkets$ | async\">\r\n      </app-runner-detail-market-stats>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "RG1G":
    /*!********************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/detail/runner-detail-market-stats/runner-detail-market-stats-distribution/runner-detail-market-stats-distribution.component.html ***!
      \********************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RG1G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h3>Distribution</h3>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <apx-chart\r\n      [series]=\"lineChartOptions.series\"\r\n      [chart]=\"lineChartOptions.chart\"\r\n      [dataLabels]=\"lineChartOptions.dataLabels\"\r\n      [plotOptions]=\"lineChartOptions.plotOptions\"\r\n      [legend]=\"lineChartOptions.legend\"\r\n      [fill]=\"lineChartOptions.fill\"\r\n      [stroke]=\"lineChartOptions.stroke\"\r\n      [tooltip]=\"lineChartOptions.tooltip\"\r\n      [xaxis]=\"lineChartOptions.xaxis\"\r\n      [yaxis]=\"lineChartOptions.yaxis\"\r\n      [theme]=\"lineChartOptions.theme\"\r\n      [colors]=\"lineChartOptions.colors\"\r\n    ></apx-chart>\r\n\r\n  </div><!-- /BODY -->\r\n</div>\r\n<!-- /CARD 1-->\r\n\r\n";
      /***/
    },

    /***/
    "SIoh":
    /*!*****************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/detail/runner-detail-markets/runner-detail-markets.component.html ***!
      \*****************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SIoh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h3>Runner Markets</h3>\r\n      <button type=\"button\" [ngClass]=\"openState ? 'btn btn-outline-primary btn-icon' : 'btn btn-primary btn-icon'\" (click)=\"changeOpenState()\">\r\n        <i class=\"feather icon-chevron-down\"></i>\r\n      </button>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n\r\n  <div [ngbCollapse]=\"openState\"><!-- BODY -->\r\n    <div class=\"card\">\r\n      <div class=\"card-body\">\r\n        <div class=\"d-flex justify-content-end\">\r\n          <form class=\"forms-sample grid-margin\" #searchForm=\"ngForm\">\r\n            <div class=\"row\">\r\n              <input\r\n                class=\"form-control\"\r\n                type=\"text\"\r\n                placeholder=\"Type name...\"\r\n                (keyup)=\"updateFilter($event)\"\r\n              />\r\n            </div>\r\n          </form>\r\n        </div>\r\n        <ngx-datatable\r\n          class=\"dark\"\r\n          [rows]=\"rows\"\r\n          [columns]=\"columns\"\r\n          [columnMode]=\"ColumnMode.force\"\r\n          [headerHeight]=\"40\"\r\n          [footerHeight]=\"50\"\r\n          [limit]=\"20\"\r\n          rowHeight=\"42\"\r\n          [reorderable]=\"true\"\r\n          [sorts]=\"[{prop: 'openDate', dir: 'desc'}]\">\r\n\r\n          <ngx-datatable-column name=\"Date\" prop=\"openDate\">\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <h5>{{ value | date:'shortDate' }}</h5>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Name\" prop=\"\" [width]=\"320\">\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <app-market-details-modal [isBasic]=\"true\"\r\n                                        [marketId]=\"value.marketId\"\r\n                                        [asString]=\"true\"\r\n                                        [text]=\"value.name\"\r\n                                        [wantUpdate]=\"true\">\r\n              </app-market-details-modal>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Winner\" [width]=\"50\"  prop=\"selectionWin\">\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div *ngIf=\"value\" class=\"text-success\">\r\n                <h4><i class=\"feather icon-check\"></i></h4>\r\n              </div>\r\n              <div *ngIf=\"!value\" class=\"text-danger\">\r\n                <h4><i class=\"feather icon-x\"></i></h4>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Selection BSP\" [width]=\"70\" prop=\"selectionBSP\">\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"row\">\r\n                <app-bsp-odd [bspOdd]=\"value\"></app-bsp-odd>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Selection Min\" [width]=\"70\"  prop=\"selectionMin\">\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"row\">\r\n                <h6 *ngIf=\"value>1.01\" class=\"text-danger\">{{value}}</h6>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Selection Max\" [width]=\"70\"  prop=\"selectionMax\">\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <div class=\"row\">\r\n                <h6 class=\"text-primary\">{{value}}</h6>\r\n              </div>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Winner MAX\" [width]=\"70\"  prop=\"winnerMax\">\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <h6>{{value}}</h6>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n          <ngx-datatable-column name=\"Open\" prop=\"marketId\">\r\n            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n              <app-market-details-modal [isBasic]=\"true\"\r\n                                        [marketId]=\"value\">\r\n              </app-market-details-modal>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n\r\n        </ngx-datatable>\r\n      </div>\r\n    </div>\r\n  </div><!-- /BODY -->\r\n</div>\r\n<!-- /CARD 1-->\r\n\r\n";
      /***/
    },

    /***/
    "T/G5":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/detail/runner-detail-bsp/runner-detail-bsp.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TG5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h3>Runner BSP</h3>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <apx-chart\r\n      [series]=\"lineChartOptions.series\"\r\n      [chart]=\"lineChartOptions.chart\"\r\n      [dataLabels]=\"lineChartOptions.dataLabels\"\r\n      [plotOptions]=\"lineChartOptions.plotOptions\"\r\n      [legend]=\"lineChartOptions.legend\"\r\n      [fill]=\"lineChartOptions.fill\"\r\n      [stroke]=\"lineChartOptions.stroke\"\r\n      [tooltip]=\"lineChartOptions.tooltip\"\r\n      [xaxis]=\"lineChartOptions.xaxis\"\r\n      [yaxis]=\"lineChartOptions.yaxis\"\r\n      [theme]=\"lineChartOptions.theme\"\r\n      [colors]=\"lineChartOptions.colors\"\r\n    ></apx-chart>\r\n\r\n  </div><!-- /BODY -->\r\n</div>\r\n<!-- /CARD 1-->\r\n\r\n";
      /***/
    },

    /***/
    "TZ2L":
    /*!****************************************************************************!*\
      !*** ./src/app/features/runners/components/list/runners-list.component.ts ***!
      \****************************************************************************/

    /*! exports provided: RunnersListComponent */

    /***/
    function TZ2L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnersListComponent", function () {
        return RunnersListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runners_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runners-list.component.html */
      "jwdj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../store/runners/runners.selectors */
      "CzFr");

      var RunnersListComponent = /*#__PURE__*/function () {
        function RunnersListComponent(store) {
          _classCallCheck(this, RunnersListComponent);

          this.store = store;
          this.allRunners$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_4__["getAllRunners"]));
          this.isLoadingAllRunners$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_runners_runners_selectors__WEBPACK_IMPORTED_MODULE_4__["isLoadingAllRunners"]));
        }

        _createClass(RunnersListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RunnersListComponent;
      }();

      RunnersListComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      };

      RunnersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-list-runners',
        template: _raw_loader_runners_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RunnersListComponent);
      /***/
    },

    /***/
    "USyV":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/features/runners/components/detail/runner-detail-info/runner-detail-info.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: RunnerDetailInfoComponent */

    /***/
    function USyV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnerDetailInfoComponent", function () {
        return RunnerDetailInfoComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runner_detail_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runner-detail-info.component.html */
      "zKkj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RunnerDetailInfoComponent = /*#__PURE__*/function () {
        function RunnerDetailInfoComponent() {
          _classCallCheck(this, RunnerDetailInfoComponent);
        }

        _createClass(RunnerDetailInfoComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RunnerDetailInfoComponent;
      }();

      RunnerDetailInfoComponent.ctorParameters = function () {
        return [];
      };

      RunnerDetailInfoComponent.propDecorators = {
        runnerInfo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      RunnerDetailInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-runner-detail-info',
        template: _raw_loader_runner_detail_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RunnerDetailInfoComponent);
      /***/
    },

    /***/
    "X8Q7":
    /*!****************************************************!*\
      !*** ./src/app/model/runner/runnerMarketsStats.ts ***!
      \****************************************************/

    /*! exports provided: RunnerMarketsStats */

    /***/
    function X8Q7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnerMarketsStats", function () {
        return RunnerMarketsStats;
      });

      var RunnerMarketsStats = /*#__PURE__*/function () {
        function RunnerMarketsStats(runnerMarkets, runnerId) {
          var _this3 = this;

          _classCallCheck(this, RunnerMarketsStats);

          this.rangeStats = [];
          this.rangeFav = [];
          var ranges = []; // filters

          ranges.push(runnerMarkets.filter(function (x) {
            return _this3.checkRange(1, 1.11, x);
          }));
          ranges.push(runnerMarkets.filter(function (x) {
            return _this3.checkRange(1.12, 1.2, x);
          }));
          ranges.push(runnerMarkets.filter(function (x) {
            return _this3.checkRange(1.21, 1.30, x);
          }));
          ranges.push(runnerMarkets.filter(function (x) {
            return _this3.checkRange(1.31, 1.49, x);
          }));
          ranges.push(runnerMarkets.filter(function (x) {
            return _this3.checkRange(1.50, 1.74, x);
          }));
          ranges.push(runnerMarkets.filter(function (x) {
            return _this3.checkRange(1.75, 2, x);
          }));
          ranges.push(runnerMarkets.filter(function (x) {
            return _this3.checkRange(2, 4, x);
          }));
          ranges.push(runnerMarkets.filter(function (x) {
            return _this3.checkRange(4.01, 6, x);
          }));
          ranges.push(runnerMarkets.filter(function (x) {
            return _this3.checkRange(6.01, 10000, x);
          }));
          var rangeOdds = [1, 1.12, 1.21, 1.31, 1.5, 1.75, 2, 4, 6, 1000];
          var rangeName = ['Top Dog [1.01-1.11]', 'Mid Dog [1.12-1.20]', 'High Dog [1.21-1.30]', 'Fav [1.31-1.49]', 'Mid Fav [1.50-1.74]', 'High Fav [1.75-1.99]', 'Underdog [2-4]', 'Scary [4.01-6]', 'Loser [6.01-1000]'];
          var i = 0;

          for (var _i = 0, _ranges = ranges; _i < _ranges.length; _i++) {
            var range = _ranges[_i];
            var bsp = range.map(function (x) {
              if (x.selectionWin) {
                return x.winner.bsp;
              } else {
                return x.loser.bsp;
              }
            });
            this.rangeStats.push({
              range: {
                minOdds: rangeOdds[i],
                maxOdds: rangeOdds[i + 1] - 0.01
              },
              match: {
                matchNumber: range.length,
                winner: range.reduce(function (sum, record) {
                  return record.selectionWin ? sum = sum + 1 : sum;
                }, 0),
                loser: range.reduce(function (sum, record) {
                  return !record.selectionWin ? sum = sum + 1 : sum;
                }, 0),
                notWinner: range.reduce(function (sum, record) {
                  var _a;

                  return +((_a = record.winner) === null || _a === void 0 ? void 0 : _a.id) !== +runnerId && !record.winner ? sum = sum + 1 : sum;
                }, 0)
              },
              odds: {
                min: Math.min.apply(Math, _toConsumableArray(bsp)),
                max: Math.max.apply(Math, _toConsumableArray(bsp)),
                mean: 0,
                name: rangeName[i]
              },
              marketsInfo: range.sort(function (a, b) {
                return new Date(b.openDate).getTime() - new Date(a.openDate).getTime();
              })
            });
            i++;
          }
        }

        _createClass(RunnerMarketsStats, [{
          key: "checkRange",
          value: function checkRange(min, max, value) {
            if (value.selectionWin) {
              return min <= value.winner.bsp && value.winner.bsp <= max;
            } else {
              return min <= value.loser.bsp && value.loser.bsp <= max;
            }
          }
        }]);

        return RunnerMarketsStats;
      }();
      /***/

    },

    /***/
    "Y9KJ":
    /*!********************************************************!*\
      !*** ./src/app/model/market/marketForRunnersMarket.ts ***!
      \********************************************************/

    /*! exports provided: MarketForRunnersMarket */

    /***/
    function Y9KJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarketForRunnersMarket", function () {
        return MarketForRunnersMarket;
      });

      var MarketForRunnersMarket = /*#__PURE__*/_createClass(function MarketForRunnersMarket(market) {
        _classCallCheck(this, MarketForRunnersMarket);

        this.marketId = market.marketId;
        this.openDate = market.openDate;
        this.name = market.eventName;
        this.winnerName = market.winner.name;

        if (market.selectionWin === true) {
          this.selectionBSP = market.winner.bsp;
          this.selectionMax = market.winner.maxInPlay;
          this.selectionMin = market.winner.minInPlay;
          this.selectionWin = true;
          this.winnerBSP = null;
          this.winnerMax = null;
          this.otherBSP = market.loser.bsp;
          this.otherMax = market.loser.maxInPlay;
          this.otherMin = market.loser.minInPlay;
        } else {
          this.selectionBSP = market.loser.bsp;
          this.selectionMax = market.loser.maxInPlay;
          this.selectionMin = market.loser.minInPlay;
          this.selectionWin = false;
          this.winnerBSP = market.winner.bsp;
          this.winnerMax = market.winner.maxInPlay;
          this.otherBSP = market.winner.bsp;
          this.otherMax = market.winner.maxInPlay;
          this.otherMin = market.winner.minInPlay;
        }
      });
      /***/

    },

    /***/
    "YtY+":
    /*!*********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/list/runners-data-table/runners-data-table.component.html ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YtY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Runners</h6>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <form class=\"forms-sample grid-margin\" #searchForm=\"ngForm\">\r\n          <div class=\"row\">\r\n            <input\r\n              class=\"form-control\"\r\n              type=\"text\"\r\n              placeholder=\"Type name...\"\r\n              (keyup)=\"updateFilter($event)\"/>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <!-- OPTIONS -->\r\n          <label for=\"tableSize\">Table size</label>\r\n          <ng-select id=\"tableSize\"\r\n                     name=\"options\"\r\n                     [(ngModel)]=\"tableSize\"\r\n                     [items]=\"[5, 10,15,20,25,30,40,50,100,200,250,500,1000]\"\r\n                     [clearable]=\"false\">\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ngx-datatable\r\n      class=\"dark\"\r\n      [rows]=\"rows\"\r\n      [columns]=\"columns\"\r\n      [columnMode]=\"ColumnMode.force\"\r\n      [headerHeight]=\"40\"\r\n      [footerHeight]=\"50\"\r\n      [limit]=\"tableSize\"\r\n      rowHeight=\"auto\"\r\n      [reorderable]=\"true\"\r\n      [sorts]=\"[{prop: 'name', dir: 'asc'}]\">\r\n      >\r\n\r\n      <ngx-datatable-column name=\"Name\" prop=\"name\" [width]=\"400\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h4>{{ value }}</h4>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Sport\"  prop=\"sport\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n          <div>\r\n            <app-sport-text [sport]=\"value\"></app-sport-text>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Open\" prop=\"id\">\r\n        <ng-template let-row=\"row\" let-value=\"value\" ngx-datatable-cell-template>\r\n          <button type=\"button\" routerLink='/runners/detail/{{value}}'  class=\"btn btn-primary btn-icon\">\r\n            <i class=\"feather icon-external-link\"></i>\r\n          </button>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n    </ngx-datatable>\r\n\r\n\r\n  </div><!-- /BODY -->\r\n</div>\r\n";
      /***/
    },

    /***/
    "Yz7c":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/features/runners/components/detail/runner-detail-bsp/runner-detail-bsp.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: RunnerDetailBspComponent */

    /***/
    function Yz7c(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnerDetailBspComponent", function () {
        return RunnerDetailBspComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runner_detail_bsp_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runner-detail-bsp.component.html */
      "T/G5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moving_averages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! moving-averages */
      "KrBI");

      var RunnerDetailBspComponent = /*#__PURE__*/function () {
        function RunnerDetailBspComponent() {
          _classCallCheck(this, RunnerDetailBspComponent);

          this.data = [];
        }

        _createClass(RunnerDetailBspComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.runnerMarkets = this.runnerMarkets.slice(0, 20).sort(function (a, b) {
              return new Date(a.openDate).getTime() - new Date(b.openDate).getTime();
            });
            var bsp = this.runnerMarkets.map(function (x) {
              if (x.selectionWin) {
                return x.winner.bsp;
              } else {
                return x.loser.bsp;
              }
            });
            this.generateChart(this.winCol(), this.loseCol(), this.otherCol(), this.avgLine(bsp), this.avgTotalLine(bsp), this.minLine(bsp), this.maxLine(bsp) // split by last
            );
          }
        }, {
          key: "generateChart",
          value: function generateChart(win, lose, other, avg5, avgTotal, min, max) {
            this.lineChartOptions = {
              series: [{
                name: 'W',
                type: 'column',
                data: win
              }, {
                name: 'L',
                type: 'column',
                data: lose
              }, {
                name: 'N',
                type: 'column',
                data: other
              }, {
                name: 'EMA 5',
                type: 'line',
                data: avg5
              }, {
                name: 'AVG',
                type: 'line',
                data: avgTotal
              }, {
                name: '',
                type: 'line',
                data: this.generateArray(2)
              }],
              colors: ['#627CF5', '#bc427d', '#c6cb31', '#3fc8c3', '#913fc8', '#32cf5c', '#cf3232', '#707070'],
              xaxis: {
                categories: this.runnerMarkets.map(function (x) {
                  return x.eventName + ' / ' + (new Date(x.openDate).getMonth() + 1) + '-' + new Date(x.openDate).getDay() + '-' + new Date(x.openDate).getFullYear();
                })
              },
              yaxis: {
                min: 1
              },
              stroke: {
                width: [0, 0, 0, 2, 5, 1, 1, 4]
              },
              chart: {
                type: 'line',
                height: 750,
                animations: {
                  enabled: false
                }
              },
              plotOptions: {
                bar: {
                  horizontal: false,
                  columnWidth: '70%',
                  dataLabels: {
                    position: 'top' // top, center, bottom

                  }
                }
              },
              dataLabels: {
                enabled: false
              },
              fill: {
                opacity: 1
              },
              tooltip: {
                y: {
                  formatter: function formatter(val) {
                    return val + '';
                  }
                }
              },
              theme: {
                mode: 'dark'
              }
            };
          }
        }, {
          key: "avgLine",
          value: function avgLine(bsp) {
            var mvAvg = Object(moving_averages__WEBPACK_IMPORTED_MODULE_3__["ema"])(bsp, 5);
            return mvAvg.map(function (x) {
              return x.toFixed(2);
            });
          }
        }, {
          key: "avgTotalLine",
          value: function avgTotalLine(bsp) {
            var avg = (bsp.reduce(function (a, b) {
              return a + b;
            }) / bsp.length).toFixed(2);
            return this.generateArray(avg);
          }
        }, {
          key: "maxLine",
          value: function maxLine(bsp) {
            var max = Math.max.apply(Math, _toConsumableArray(bsp)).toFixed(2);
            return this.generateArray(max);
          }
        }, {
          key: "minLine",
          value: function minLine(bsp) {
            var min = Math.min.apply(Math, _toConsumableArray(bsp)).toFixed(2);
            return this.generateArray(min);
          }
        }, {
          key: "winCol",
          value: function winCol() {
            var _this4 = this;

            return this.runnerMarkets.map(function (x) {
              if (+x.winner.id === +_this4.runnerId) {
                return x.winner.bsp;
              } else {
                return 0;
              }
            });
          }
        }, {
          key: "loseCol",
          value: function loseCol() {
            var _this5 = this;

            return this.runnerMarkets.map(function (x) {
              if (+x.winner.id !== +_this5.runnerId && x.winner.name !== 'The Draw') {
                return x.loser.bsp;
              } else {
                return 0;
              }
            });
          }
        }, {
          key: "otherCol",
          value: function otherCol() {
            return this.runnerMarkets.map(function (x) {
              if (x.winner.name === 'The Draw' || !x.winner) {
                return x.loser.bsp;
              } else {
                return 0;
              }
            });
          }
        }, {
          key: "generateArray",
          value: function generateArray(value) {
            var avgArray = []; // tslint:disable-next-line:prefer-for-of

            for (var i = 0; i < this.runnerMarkets.length; i++) {
              avgArray.push(value);
            }

            return avgArray;
          }
        }]);

        return RunnerDetailBspComponent;
      }();

      RunnerDetailBspComponent.ctorParameters = function () {
        return [];
      };

      RunnerDetailBspComponent.propDecorators = {
        runnerMarkets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        runnerId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        numberOfMatch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      RunnerDetailBspComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-runner-detail-bsp',
        template: _raw_loader_runner_detail_bsp_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RunnerDetailBspComponent);
      /***/
    },

    /***/
    "dvzB":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/features/runners/components/detail/runner-detail-stats/runner-detail-stats.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: RunnerDetailStatsComponent */

    /***/
    function dvzB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnerDetailStatsComponent", function () {
        return RunnerDetailStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runner_detail_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runner-detail-stats.component.html */
      "y/2r");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RunnerDetailStatsComponent = /*#__PURE__*/function () {
        function RunnerDetailStatsComponent() {
          _classCallCheck(this, RunnerDetailStatsComponent);
        }

        _createClass(RunnerDetailStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.runnerStats = this.calculateStats();
            /**
             * Donut chart options
             */

            this.donutChartOptions = {
              nonAxisSeries: [this.runnerStats.stats.win, this.runnerStats.stats.lose, this.runnerStats.stats.draw, this.runnerStats.stats.notWinner],
              labels: ['Win', 'Lose', 'Draw', 'Not Winner'],
              colors: ['#627CF5', '#bc427d', '#c6cb31', '#feffd5'],
              chart: {
                height: this.height,
                type: 'donut'
              },
              stroke: {
                colors: ['rgba(0,0,0,0)']
              },
              fill: {
                type: 'gradient'
              },
              legend: {
                position: 'left',
                formatter: function formatter(labels, opts) {
                  return labels + ' - ' + opts.w.globals.series[opts.seriesIndex];
                }
              },
              theme: {
                mode: 'dark'
              }
            };
          }
        }, {
          key: "calculateStats",
          value: function calculateStats() {
            var stats = {
              stats: {
                played: 0,
                win: 0,
                lose: 0,
                notWinner: 0,
                draw: 0
              }
            };

            var _iterator2 = _createForOfIteratorHelper(this.runnerMarkets),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var market = _step2.value;

                if (Object.keys(market.winner).length === 0) {
                  stats.stats.notWinner++;
                } else {
                  if (+market.winner.id === +this.runnerId) {
                    stats.stats.win++;
                  } else if (market.winner.name.indexOf('The Draw') !== -1) {
                    stats.stats.draw++;
                  } else {
                    stats.stats.lose++;
                  }
                }

                stats.stats.played++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return stats;
          }
        }]);

        return RunnerDetailStatsComponent;
      }();

      RunnerDetailStatsComponent.ctorParameters = function () {
        return [];
      };

      RunnerDetailStatsComponent.propDecorators = {
        runnerMarkets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        runnerId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      RunnerDetailStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-runner-detail-stats',
        template: _raw_loader_runner_detail_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RunnerDetailStatsComponent);
      /***/
    },

    /***/
    "eytY":
    /*!*********************************************************************************************************!*\
      !*** ./src/app/features/runners/components/detail/runner-detail-notes/runner-detail-notes.component.ts ***!
      \*********************************************************************************************************/

    /*! exports provided: RunnerDetailNotesComponent */

    /***/
    function eytY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnerDetailNotesComponent", function () {
        return RunnerDetailNotesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runner_detail_notes_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runner-detail-notes.component.html */
      "FnVq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var RunnerDetailNotesComponent = /*#__PURE__*/function () {
        function RunnerDetailNotesComponent(store) {
          _classCallCheck(this, RunnerDetailNotesComponent);

          this.store = store;
        }

        _createClass(RunnerDetailNotesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RunnerDetailNotesComponent;
      }();

      RunnerDetailNotesComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      };

      RunnerDetailNotesComponent.propDecorators = {
        runnerNotes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        tournamentList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        runnersList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      RunnerDetailNotesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-runner-detail-notes',
        template: _raw_loader_runner_detail_notes_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RunnerDetailNotesComponent);
      /***/
    },

    /***/
    "f/zu":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/features/runners/components/detail/runner-detail-market-stats/runner-detail-market-stats.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: RunnerDetailMarketStatsComponent */

    /***/
    function fZu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnerDetailMarketStatsComponent", function () {
        return RunnerDetailMarketStatsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_runner_detail_market_stats_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./runner-detail-market-stats.component.html */
      "tHlO");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_runner_runnerMarketsStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../model/runner/runnerMarketsStats */
      "X8Q7");

      var RunnerDetailMarketStatsComponent = /*#__PURE__*/function () {
        function RunnerDetailMarketStatsComponent() {
          _classCallCheck(this, RunnerDetailMarketStatsComponent);
        }

        _createClass(RunnerDetailMarketStatsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.marketsStats = new _model_runner_runnerMarketsStats__WEBPACK_IMPORTED_MODULE_3__["RunnerMarketsStats"](this.runnerMarkets, this.runnerId);
          }
        }]);

        return RunnerDetailMarketStatsComponent;
      }();

      RunnerDetailMarketStatsComponent.ctorParameters = function () {
        return [];
      };

      RunnerDetailMarketStatsComponent.propDecorators = {
        runnerMarkets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        runnerId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      RunnerDetailMarketStatsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-runner-detail-market-stats',
        template: _raw_loader_runner_detail_market_stats_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RunnerDetailMarketStatsComponent);
      /***/
    },

    /***/
    "fjN3":
    /*!************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/detail/runner-detail-market-stats/runner-detail-market-stats-gaussian/runner-detail-market-stats-gaussian.component.html ***!
      \************************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fjN3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Gaussian</h6>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <apx-chart\r\n      [series]=\"lineChartOptions.series\"\r\n      [chart]=\"lineChartOptions.chart\"\r\n      [dataLabels]=\"lineChartOptions.dataLabels\"\r\n      [plotOptions]=\"lineChartOptions.plotOptions\"\r\n      [legend]=\"lineChartOptions.legend\"\r\n      [fill]=\"lineChartOptions.fill\"\r\n      [stroke]=\"lineChartOptions.stroke\"\r\n      [tooltip]=\"lineChartOptions.tooltip\"\r\n      [xaxis]=\"lineChartOptions.xaxis\"\r\n      [yaxis]=\"lineChartOptions.yaxis\"\r\n      [theme]=\"lineChartOptions.theme\"\r\n      [colors]=\"lineChartOptions.colors\"\r\n    ></apx-chart>\r\n\r\n    <div class=\"col\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <h5>Mean: {{marketsGaussian.mean | number: '0.2'}}</h5>\r\n        </div>\r\n        <div class=\"col\">\r\n          <h5>StDev: {{marketsGaussian.stDev | number:'0.2'}}</h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div><!-- /BODY -->\r\n</div>\r\n<!-- /CARD 1-->\r\n\r\n\r\n";
      /***/
    },

    /***/
    "jwdj":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/list/runners-list.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jwdj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h4 class=\"mb-3 mb-md-0\">Runners List</h4>\r\n    <p>Discover db statistics and search runners </p>\r\n  </div>\r\n</div>\r\n\r\n<!-- BREADCRUMB -->\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">BF</a></li>\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/runners\">Runners</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">List</li>\r\n  </ol>\r\n</nav>\r\n<!-- /BREADCRUMB -->\r\n\r\n<!-- ROW 1-->\r\n<div class=\"col-12\">\r\n  <!-- STATS COMPONENTS-->\r\n  <app-loading-cards *ngIf=\"(isLoadingAllRunners$ | async).isLoading\"></app-loading-cards>\r\n  <app-runners-datatable-list *ngIf=\"(isLoadingAllRunners$ | async).isLoadingSuccess\"\r\n                              [runners]=\"allRunners$ | async\">\r\n\r\n  </app-runners-datatable-list>\r\n</div>\r\n<!-- /ROW 1-->\r\n";
      /***/
    },

    /***/
    "khbK":
    /*!******************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/detail/runner-detail-market-stats/runner-detail-market-stats-table/runner-detail-market-stats-table.component.html ***!
      \******************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function khbK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card mt-2\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h3>{{marketStats.odds.name}}</h3>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\">\r\n    <div class=\"col\">\r\n\r\n      <ul class=\"list-group\">\r\n        <li class=\"list-group-item active\">\r\n          <div class=\"d-flex justify-content-around align-items-baseline\">\r\n            <h4>#: {{marketStats.match.matchNumber}} ({{ marketStats.match.matchNumber / totalMatch | percent}})</h4>\r\n            <h3>Win: {{marketStats.match.winner}}</h3>\r\n            <h3>Loss: {{marketStats.match.loser}} </h3>\r\n            <h3>Win Rate: {{ marketStats.match.winner / marketStats.match.matchNumber | percent}}</h3>\r\n            <button type=\"button\" [ngClass]=\"isCollapsed? 'btn btn-outline-dark' : 'btn btn-dark'\"\r\n                    (click)=\"isCollapsed = !isCollapsed\">\r\n              View\r\n            </button>\r\n          </div>\r\n        </li>\r\n        <!-- DATATABLE -->\r\n        <li class=\"list-group-item\" [ngbCollapse]=\"isCollapsed\">\r\n          <ngx-datatable\r\n            class=\"dark material-stripped\"\r\n            [rows]=\"marketStats.marketsInfo\"\r\n            [columnMode]=\"ColumnMode.flex\"\r\n            [headerHeight]=\"40\"\r\n            [footerHeight]=\"50\"\r\n            [limit]=\"30\"\r\n            rowHeight=\"50\"\r\n            [sorts]=\"[{prop: 'openDate', dir: 'desc'}]\">\r\n\r\n            <ngx-datatable-column name=\"Date\" prop=\"openDate\" [flexGrow]=\"1\">\r\n              <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                <h5>\r\n                  {{ value | date:'shortDate' }}\r\n                </h5>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Name\" prop=\"eventName\" [flexGrow]=\"3\">\r\n              <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                <h5>\r\n                  {{ value}}\r\n                </h5>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Winner\" prop=\"winner.id\" [flexGrow]=\"1\">\r\n              <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                <h5 *ngIf=\"+value === +runnerId\">\r\n                  <i data-feather=\"check\" appFeatherIcon class=\"text-success\"></i>\r\n                </h5>\r\n                <h5 *ngIf=\"+value !== +runnerId\">\r\n                  <i data-feather=\"x\" appFeatherIcon class=\"text-danger\"></i>\r\n                </h5>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Selection BSP\" prop=\"selection.bsp\" [flexGrow]=\"1\">\r\n              <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                <app-bsp-odd [bspOdd]=\"value\"></app-bsp-odd>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Selection Max\" prop=\"selection.maxInPlay\" [flexGrow]=\"1\">\r\n              <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                <p class=\"text-primary\">{{value}}</p>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Selection min\" prop=\"selection.minInPlay\" [flexGrow]=\"1\">\r\n              <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                <p class=\"text-danger\">{{value}}</p>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n            <ngx-datatable-column name=\"Detail\" prop=\"marketId\" [flexGrow]=\"1\">\r\n              <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                <app-market-details-modal [isBasic]=\"true\"\r\n                                          [marketId]=\"value\">\r\n                </app-market-details-modal>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n\r\n          </ngx-datatable>\r\n\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n";
      /***/
    },

    /***/
    "nWs0":
    /*!*************************************************!*\
      !*** ./node_modules/moving-averages/src/sma.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function nWs0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dma */
      "BL0j"); // Smoothed moving average

      /* harmony default export */


      __webpack_exports__["default"] = function (data, size) {
        var times = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        return Object(_dma__WEBPACK_IMPORTED_MODULE_0__["default"])(data, times / size, 1);
      };
      /***/

    },

    /***/
    "tHlO":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/detail/runner-detail-market-stats/runner-detail-market-stats.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tHlO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h3>BSP Range</h3>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-6\" *ngFor=\"let stats of marketsStats.rangeStats\">\r\n        <app-runner-detail-market-stats-table [marketStats]=\"stats\"\r\n                                              [runnerId]=\"runnerId\"\r\n                                              [totalMatch]=\"runnerMarkets.length\">\r\n        </app-runner-detail-market-stats-table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "tRKj":
    /*!****************************************************!*\
      !*** ./src/app/features/runners/runners.module.ts ***!
      \****************************************************/

    /*! exports provided: RunnersModule */

    /***/
    function tRKj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RunnersModule", function () {
        return RunnersModule;
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


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _components_list_runners_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/list/runners-list.component */
      "TZ2L");
      /* harmony import */


      var _components_detail_runners_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/detail/runners-detail.component */
      "3M7m");
      /* harmony import */


      var _components_detail_runner_detail_info_runner_detail_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/detail/runner-detail-info/runner-detail-info.component */
      "USyV");
      /* harmony import */


      var _components_detail_runner_detail_markets_runner_detail_markets_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/detail/runner-detail-markets/runner-detail-markets.component */
      "AFBN");
      /* harmony import */


      var _components_list_runners_data_table_runners_data_table_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/list/runners-data-table/runners-data-table-list.component */
      "4Lc9");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-custom-validators */
      "uxn7");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _components_detail_runner_detail_notes_runner_detail_notes_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./components/detail/runner-detail-notes/runner-detail-notes.component */
      "eytY");
      /* harmony import */


      var _components_detail_runner_detail_bsp_runner_detail_bsp_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/detail/runner-detail-bsp/runner-detail-bsp.component */
      "Yz7c");
      /* harmony import */


      var _components_detail_runner_detail_stats_runner_detail_stats_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/detail/runner-detail-stats/runner-detail-stats.component */
      "dvzB");
      /* harmony import */


      var _components_detail_runner_detail_market_stats_runner_detail_market_stats_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/detail/runner-detail-market-stats/runner-detail-market-stats.component */
      "f/zu");
      /* harmony import */


      var _components_detail_runner_detail_market_stats_runner_detail_market_stats_table_runner_detail_market_stats_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/detail/runner-detail-market-stats/runner-detail-market-stats-table/runner-detail-market-stats-table.component */
      "Dtud");
      /* harmony import */


      var _components_detail_runner_detail_market_stats_runner_detail_market_stats_gaussian_runner_detail_market_stats_gaussian_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/detail/runner-detail-market-stats/runner-detail-market-stats-gaussian/runner-detail-market-stats-gaussian.component */
      "Qi54");
      /* harmony import */


      var _components_detail_runner_detail_market_stats_runner_detail_market_stats_distribution_runner_detail_market_stats_distribution_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/detail/runner-detail-market-stats/runner-detail-market-stats-distribution/runner-detail-market-stats-distribution.component */
      "Qe+5"); // ROUTER


      var routes = [{
        path: '',
        component: _components_list_runners_list_component__WEBPACK_IMPORTED_MODULE_11__["RunnersListComponent"]
      }, {
        path: 'detail/:runnerId',
        component: _components_detail_runners_detail_component__WEBPACK_IMPORTED_MODULE_12__["RunnersDetailComponent"]
      }];

      var RunnersModule = /*#__PURE__*/_createClass(function RunnersModule() {
        _classCallCheck(this, RunnersModule);
      });

      RunnersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_list_runners_list_component__WEBPACK_IMPORTED_MODULE_11__["RunnersListComponent"], _components_detail_runner_detail_info_runner_detail_info_component__WEBPACK_IMPORTED_MODULE_13__["RunnerDetailInfoComponent"], _components_detail_runner_detail_markets_runner_detail_markets_component__WEBPACK_IMPORTED_MODULE_14__["RunnerDetailMarketsComponent"], _components_detail_runners_detail_component__WEBPACK_IMPORTED_MODULE_12__["RunnersDetailComponent"], _components_list_runners_data_table_runners_data_table_list_component__WEBPACK_IMPORTED_MODULE_15__["RunnersDataTableListComponent"], _components_detail_runner_detail_notes_runner_detail_notes_component__WEBPACK_IMPORTED_MODULE_19__["RunnerDetailNotesComponent"], _components_detail_runner_detail_bsp_runner_detail_bsp_component__WEBPACK_IMPORTED_MODULE_20__["RunnerDetailBspComponent"], _components_detail_runner_detail_stats_runner_detail_stats_component__WEBPACK_IMPORTED_MODULE_21__["RunnerDetailStatsComponent"], _components_detail_runner_detail_market_stats_runner_detail_market_stats_component__WEBPACK_IMPORTED_MODULE_22__["RunnerDetailMarketStatsComponent"], _components_detail_runner_detail_market_stats_runner_detail_market_stats_table_runner_detail_market_stats_table_component__WEBPACK_IMPORTED_MODULE_23__["RunnerDetailMarketStatsTableComponent"], _components_detail_runner_detail_market_stats_runner_detail_market_stats_gaussian_runner_detail_market_stats_gaussian_component__WEBPACK_IMPORTED_MODULE_24__["RunnerDetailMarketStatsGaussianComponent"], _components_detail_runner_detail_market_stats_runner_detail_market_stats_distribution_runner_detail_market_stats_distribution_component__WEBPACK_IMPORTED_MODULE_25__["RunnerDetailMarketStatsDistributionComponent"]],
        exports: [_components_detail_runner_detail_info_runner_detail_info_component__WEBPACK_IMPORTED_MODULE_13__["RunnerDetailInfoComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__["FeahterIconModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapseModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_16__["NgSelectModule"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__["CustomFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_18__["NgxDatatableModule"]]
      })], RunnersModule);
      /***/
    },

    /***/
    "vslJ":
    /*!*************************************************!*\
      !*** ./node_modules/moving-averages/src/ema.js ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function vslJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _dma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dma */
      "BL0j"); // Exponential moving average with 86% total weight

      /* harmony default export */


      __webpack_exports__["default"] = function (data, size) {
        return Object(_dma__WEBPACK_IMPORTED_MODULE_0__["default"])(data, 2 / (size + 1));
      };
      /***/

    },

    /***/
    "y/2r":
    /*!*************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/detail/runner-detail-stats/runner-detail-stats.component.html ***!
      \*************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function y2r(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\" *ngIf=\"title!==''\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h3>{{title}}</h3>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <apx-chart\r\n      [series]=\"donutChartOptions.nonAxisSeries\"\r\n      [chart]=\"donutChartOptions.chart\"\r\n      [colors]=\"donutChartOptions.colors\"\r\n      [labels]=\"donutChartOptions.labels\"\r\n      [stroke]=\"donutChartOptions.stroke\"\r\n      [legend]=\"donutChartOptions.legend\"\r\n      [dataLabels]=\"donutChartOptions.dataLabels\"\r\n      [theme]=\"donutChartOptions.theme\"\r\n    ></apx-chart>\r\n\r\n  </div><!-- /BODY -->\r\n</div>\r\n<!-- /CARD 1-->\r\n\r\n";
      /***/
    },

    /***/
    "zKkj":
    /*!***********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/runners/components/detail/runner-detail-info/runner-detail-info.component.html ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zKkj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h3>Runner Info</h3>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <p>Name: </p>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h3>{{runnerInfo.name}}</h3>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <p>Sport: </p>\r\n          </div>\r\n          <div class=\"col\">\r\n            <app-sport-text [sport]=\"runnerInfo.sport\"></app-sport-text>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <p>Match Played: </p>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h5>{{runnerInfo.match}}</h5>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n\r\n\r\n  </div><!-- /BODY -->\r\n</div>\r\n<!-- /CARD 1-->\r\n\r\n";
      /***/
    }
  }]);
})();