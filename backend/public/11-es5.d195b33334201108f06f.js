(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11], {
    /***/
    "HU0q":
    /*!***************************************************************************************************************************!*\
      !*** ./src/app/features/market-advanced/components/list/market-advanced-meta-list/market-meta-list-advanced.component.ts ***!
      \***************************************************************************************************************************/

    /*! exports provided: MarketMetaListAdvancedComponent */

    /***/
    function HU0q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarketMetaListAdvancedComponent", function () {
        return MarketMetaListAdvancedComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_market_meta_list_advanced_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./market-meta-list-advanced.component.html */
      "LhMe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _store_marketsAdvanced_marketAdvanced_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../store/marketsAdvanced/marketAdvanced.actions */
      "jWzE");
      /* harmony import */


      var _store_marketsAdvanced_marketAdvanced_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../store/marketsAdvanced/marketAdvanced.selectors */
      "x9Rk");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");

      var MarketMetaListAdvancedComponent = /*#__PURE__*/function () {
        function MarketMetaListAdvancedComponent(store) {
          _classCallCheck(this, MarketMetaListAdvancedComponent);

          this.store = store;
          this.filterName = '';
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.rows = [];
          this.temp = [];
          this.loadingIndicator = true;
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["ColumnMode"];
          this.closeResult = '';
        }

        _createClass(MarketMetaListAdvancedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.$metaList = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_store_marketsAdvanced_marketAdvanced_selectors__WEBPACK_IMPORTED_MODULE_5__["getMetalistAdv"]));
            this.$isLoadingMetalist = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_store_marketsAdvanced_marketAdvanced_selectors__WEBPACK_IMPORTED_MODULE_5__["isLoadingMarketMetalistAdvanced"]));
            this.$metaList.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(function (data) {
              if (data && _this.rows.length === 0) {
                _this.temp = [];
                _this.metaList = JSON.parse(JSON.stringify(data));
                _this.temp = _toConsumableArray(_this.metaList);
                _this.rows = _this.metaList;
              }
            });
          }
        }, {
          key: "updateNameFilter",
          value: function updateNameFilter(event) {
            var val = event.target.value.toLowerCase();
            this.filterName = val; // filter our data
            // update the rows

            this.rows = this.temp.filter(function (d) {
              return d.marketRunners.runnerWinner.name.toLowerCase().indexOf(val) !== -1 || d.marketRunners.runnerLoser.name.toLowerCase().indexOf(val) !== -1 || !val;
            }).sort(function (x, y) {
              return x.marketInfo.marketInfo.openDate - y.marketInfo.marketInfo.openDate;
            }); // Whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }, {
          key: "getData",
          value: function getData() {
            this.store.dispatch(_store_marketsAdvanced_marketAdvanced_actions__WEBPACK_IMPORTED_MODULE_4__["getMarketMetalistAdvanced"]());
          } // tslint:disable-next-line:use-lifecycle-interface

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }]);

        return MarketMetaListAdvancedComponent;
      }();

      MarketMetaListAdvancedComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]
        }];
      };

      MarketMetaListAdvancedComponent.propDecorators = {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["DatatableComponent"]]
        }]
      };
      MarketMetaListAdvancedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-market-meta-list-advanced',
        template: _raw_loader_market_meta_list_advanced_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MarketMetaListAdvancedComponent);
      /***/
    },

    /***/
    "LhMe":
    /*!*******************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/market-advanced/components/list/market-advanced-meta-list/market-meta-list-advanced.component.html ***!
      \*******************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LhMe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h4 class=\"mb-3 mb-md-0\">Tennis Market Advanced</h4>\r\n  </div>\r\n  <div class=\"d-flex align-items-center flex-wrap text-nowrap\">\r\n    <button type=\"button\" class=\"btn btn-outline-success btn-icon mr-2 d-none d-md-block\" (click)=\"getData()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"download-cloud\" appFeatherIcon></i>\r\n      Download Market\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!-- BREADCRUMB -->\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">BF</a></li>\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/market/list\">Tennis Market Advanced</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">List</li>\r\n  </ol>\r\n</nav>\r\n<!-- /BREADCRUMB -->\r\n\r\n<!-- ROW 1-->\r\n<div class=\"col-12\">\r\n  <!-- LIST COMPONENT-->\r\n\r\n  <app-loading-cards *ngIf=\"($isLoadingMetalist | async).isLoading\"></app-loading-cards>\r\n  <div *ngIf=\"($isLoadingMetalist | async).isLoadingSuccess\">\r\n\r\n    <!-- NAME FILTER -->\r\n    <div class=\"d-flex justify-content-end align-items-baseline\">\r\n      <form class=\"forms-sample grid-margin\" #searchForm=\"ngForm\">\r\n        <div class=\"row\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            placeholder=\"Type name...\"\r\n            (keyup)=\"updateNameFilter($event)\"\r\n          />\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <!-- DATATABLE -->\r\n    <ngx-datatable\r\n      class=\"dark\"\r\n      [rows]=\"rows\"\r\n      [columnMode]=\"ColumnMode.flex\"\r\n      [headerHeight]=\"40\"\r\n      [footerHeight]=\"50\"\r\n      [limit]=\"20\"\r\n      rowHeight=\"50\"\r\n      [sorts]=\"[{prop: 'marketInfo.marketInfo.metadata.inPlayTime', dir: 'desc'}]\">\r\n\r\n      <ngx-datatable-column name=\"Date\" prop=\"marketInfo.marketInfo.metadata.inPlayTime\" [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>\r\n            {{ value | date:'shortDate' }}\r\n          </h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Winner\" prop=\"marketRunners.runnerWinner.name\" [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6 [ngClass]=\"value.toLowerCase().indexOf(filterName)!==-1 && filterName !=='' ? 'text-warning' :''\">\r\n            {{value}}\r\n          </h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Loser\" prop=\"marketRunners.runnerLoser.name\" [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6 [ngClass]=\"value.toLowerCase().indexOf(filterName)!==-1 && filterName !=='' ? 'text-warning' :''\">\r\n            {{value}}\r\n          </h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Duration\" prop=\"marketInfo.marketInfo.metadata.inPlayDuration\" [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6 [ngClass]=\"value >=2400000 && value <14400000  ? 'text-success' : 'text-danger'\">{{ value | secAndMinute }}</h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Winner BSP\" prop=\"marketRunners.runnerWinner.inPlayOdds\" [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6>{{value}}</h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Loser BSP\" prop=\"marketRunners.runnerLoser.inPlayOdds\" [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6>{{value}}</h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"correctSuspended\" prop=\"marketInfo.marketInfo.metadata.correctSuspended\"  [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6 [ngClass]=\"value ? 'text-success' : 'text-danger'\">{{ value }}</h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"runnersCorrectBSP\" prop=\"marketInfo.marketInfo.metadata.runnersCorrectBSP\"  [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6 [ngClass]=\"value >=2 ? 'text-success' : value ===1 ? 'text-warning' : 'text-danger'\">{{ value }}</h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"haveAdditional\" prop=\"marketAdditionalInfo\"  [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6 [ngClass]=\"value ? 'text-success': 'text-danger'\">{{ value ? \"true\" : \"false\" }}</h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"prematchVolume\" prop=\"marketInfo.marketInfo.volume.preMatch\"  [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6>{{ value | currency }}</h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"volume\" prop=\"marketInfo.marketInfo.volume.total\"  [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6>{{ value | currency }}</h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"runnersPrematchNumberOdds\" prop=\"marketInfo.marketInfo.metadata.prematchNumberOddsNumber\"  [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6 [ngClass]=\"value >=20 ? 'text-success' : 'text-danger'\">{{ value }}</h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"runnersInPlayNumberOdds\" prop=\"marketInfo.marketInfo.metadata.inplayNumberOddsNumber\"  [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6 [ngClass]=\"value >=50 ? 'text-success' : 'text-danger'\">{{ value }}</h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"numberInPlayUpdate\" prop=\"marketInfo.marketInfo.metadata.inplayUpdatesNumber\"  [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6 [ngClass]=\"value ==3 ? 'text-success' : (value >3 && value <=7) || value == 2 ? 'text-warning' : 'text-danger'\">{{ value }}</h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <!-- DETAIL BUTTONS-->\r\n      <ngx-datatable-column name=\"Detail\" prop=\"\" [flexGrow]=\"1\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n\r\n          <app-market-details-modal [isBasic]=\"true\"\r\n                                    [marketId]=\"value.marketInfo.marketInfo.id\">\r\n          </app-market-details-modal>\r\n\r\n\r\n        </ng-template>\r\n\r\n      </ngx-datatable-column>\r\n\r\n\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n\r\n<!--\r\n  <div>\r\n    <app-market-advanced-metalist-stats [metalistStats]=\"$metalistStats | async\"></app-market-advanced-metalist-stats>\r\n  </div>\r\n\r\n-->\r\n\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "bETr":
    /*!********************************************************************!*\
      !*** ./src/app/features/market-advanced/market-advanced.module.ts ***!
      \********************************************************************/

    /*! exports provided: MarketAdvancedModule */

    /***/
    function bETr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarketAdvancedModule", function () {
        return MarketAdvancedModule;
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


      var _shared_marketCards_market_advanced_detail_market_advanced_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/marketCards/market-advanced-detail/market-advanced-detail.component */
      "+aIz");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../core/feather-icon/feather-icon.module */
      "tyVc");
      /* harmony import */


      var _components_list_market_advanced_meta_list_market_meta_list_advanced_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/list/market-advanced-meta-list/market-meta-list-advanced.component */
      "HU0q");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV"); // ROUTER


      var routes = [{
        path: 'detail/:marketId',
        component: _shared_marketCards_market_advanced_detail_market_advanced_detail_component__WEBPACK_IMPORTED_MODULE_4__["MarketAdvancedDetailComponent"]
      }, {
        path: 'metalist',
        component: _components_list_market_advanced_meta_list_market_meta_list_advanced_component__WEBPACK_IMPORTED_MODULE_8__["MarketMetaListAdvancedComponent"]
      }];

      var MarketAdvancedModule = /*#__PURE__*/_createClass(function MarketAdvancedModule() {
        _classCallCheck(this, MarketAdvancedModule);
      });

      MarketAdvancedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_list_market_advanced_meta_list_market_meta_list_advanced_component__WEBPACK_IMPORTED_MODULE_8__["MarketMetaListAdvancedComponent"]],
        exports: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_7__["FeahterIconModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPopoverModule"]]
      })], MarketAdvancedModule);
      /***/
    }
  }]);
})();