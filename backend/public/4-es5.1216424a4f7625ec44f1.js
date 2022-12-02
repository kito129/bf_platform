(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
    /***/
    "4bjb":
    /*!*******************************************************************************!*\
      !*** ./src/app/features/calculator/components/back-lay/back-lay.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: BackLayComponent */

    /***/
    function bjb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BackLayComponent", function () {
        return BackLayComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_back_lay_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./back-lay.component.html */
      "z+68");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/calculator.service */
      "S5i5");

      var BackLayComponent = /*#__PURE__*/function () {
        function BackLayComponent(calculatorService) {
          _classCallCheck(this, BackLayComponent);

          this.calculatorService = calculatorService;
          this.data = this.calculatorService.initializeBackLay(true);
        }

        _createClass(BackLayComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateBackOdds",
          value: function updateBackOdds(event) {
            this.data.backOdds = event[0];
            this.inputChange();
          }
        }, {
          key: "updateLayOdds",
          value: function updateLayOdds(event) {
            this.data.layOdds = event[0];
            this.inputChange();
          }
        }, {
          key: "inputChange",
          value: function inputChange() {
            this.data = this.calculatorService.getBackLaySimple(this.data);
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.data = this.calculatorService.initializeBackLay(this.data.isBackBefore);
          }
        }]);

        return BackLayComponent;
      }();

      BackLayComponent.ctorParameters = function () {
        return [{
          type: _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__["CalculatorService"]
        }];
      };

      BackLayComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-back-lay',
        template: _raw_loader_back_lay_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BackLayComponent);
      /***/
    },

    /***/
    "C4kt":
    /*!************************************************************************!*\
      !*** ./src/app/features/calculator/components/calculator.component.ts ***!
      \************************************************************************/

    /*! exports provided: CalculatorComponent */

    /***/
    function C4kt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function () {
        return CalculatorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_calculator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./calculator.component.html */
      "JN19");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CalculatorComponent = /*#__PURE__*/function () {
        function CalculatorComponent() {
          _classCallCheck(this, CalculatorComponent);

          this.defaultNavActiveId = 1;
        }

        _createClass(CalculatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return CalculatorComponent;
      }();

      CalculatorComponent.ctorParameters = function () {
        return [];
      };

      CalculatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-calculator',
        template: _raw_loader_calculator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], CalculatorComponent);
      /***/
    },

    /***/
    "JN19":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/calculator/components/calculator.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JN19(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h4 class=\"mb-3 mb-md-0\">Calculator</h4>\r\n    <p>Calculator and some tools.</p>\r\n  </div>\r\n</div>\r\n\r\n<!-- BREADCRUMB -->\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">BF</a></li>\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/markets\">Markets</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">View</li>\r\n  </ol>\r\n</nav>\r\n<!-- /BREADCRUMB -->\r\n\r\n\r\n<ul ngbNav #defaultNav=\"ngbNav\" [(activeId)]=\"defaultNavActiveId\" class=\"nav-tabs\">\r\n  <li [ngbNavItem]=\"1\">\r\n    <a ngbNavLink>Ladder</a>\r\n    <ng-template ngbNavContent>\r\n      <div class=\"row grid-margin\"><!-- ROW 1-->\r\n        <!-- STATS COMPONENTS-->\r\n        <div class=\"col\">\r\n          <app-ladder></app-ladder>\r\n        </div>\r\n      </div><!-- /ROW 1-->\r\n    </ng-template>\r\n  </li>\r\n  <li [ngbNavItem]=\"2\">\r\n    <a ngbNavLink>Simple</a>\r\n    <ng-template ngbNavContent>\r\n      <div class=\"row grid-margin\"><!-- ROW 1-->\r\n        <!-- STATS COMPONENTS-->\r\n        <div class=\"col\">\r\n          <app-back-lay></app-back-lay>\r\n        </div>\r\n        <div class=\"col\">\r\n          <app-risk-reward></app-risk-reward>\r\n        </div>\r\n      </div><!-- /ROW 1-->\r\n    </ng-template>\r\n  </li>\r\n  <li [ngbNavItem]=\"3\">\r\n    <a ngbNavLink>Montecarlo</a>\r\n    <ng-template ngbNavContent>\r\n      <div class=\"row grid-margin\"><!-- ROW 1-->\r\n        <!-- STATS COMPONENTS-->\r\n        <div class=\"col\">\r\n          <app-montecarlo-main></app-montecarlo-main>\r\n        </div>\r\n      </div><!-- /ROW 1-->\r\n    </ng-template>\r\n  </li>\r\n</ul>\r\n\r\n<div [ngbNavOutlet]=\"defaultNav\" class=\"border border-top-0 p-3\"></div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "OTgT":
    /*!**********************************************************!*\
      !*** ./src/app/features/calculator/calculator.module.ts ***!
      \**********************************************************/

    /*! exports provided: CalculatorModule */

    /***/
    function OTgT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculatorModule", function () {
        return CalculatorModule;
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


      var angular_datatables__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular-datatables */
      "njyG");
      /* harmony import */


      var _components_calculator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/calculator.component */
      "C4kt");
      /* harmony import */


      var _components_back_lay_back_lay_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/back-lay/back-lay.component */
      "4bjb");
      /* harmony import */


      var _components_multi_toll_risk_reward_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/multi-toll/risk-reward.component */
      "hF8k");
      /* harmony import */


      var _components_ladder_ladder_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/ladder/ladder.component */
      "SCZV");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd"); // MAIN IMPORT
      // DEPENDENCIES IMPORT
      // Ng-ApexCharts
      // Ng2-trade
      // other module
      // MAIN COMPONENTS
      // ROUTER


      var routes = [{
        path: '',
        component: _components_calculator_component__WEBPACK_IMPORTED_MODULE_10__["CalculatorComponent"]
      }];

      var CalculatorModule = /*#__PURE__*/_createClass(function CalculatorModule() {
        _classCallCheck(this, CalculatorModule);
      });

      CalculatorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_calculator_component__WEBPACK_IMPORTED_MODULE_10__["CalculatorComponent"], _components_back_lay_back_lay_component__WEBPACK_IMPORTED_MODULE_11__["BackLayComponent"], _components_multi_toll_risk_reward_component__WEBPACK_IMPORTED_MODULE_12__["RiskRewardComponent"], _components_ladder_ladder_component__WEBPACK_IMPORTED_MODULE_13__["LadderComponent"]],
        exports: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__["FeahterIconModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"]]
      })], CalculatorModule);
      /***/
    },

    /***/
    "S5i5":
    /*!************************************************!*\
      !*** ./src/app/services/calculator.service.ts ***!
      \************************************************/

    /*! exports provided: CalculatorService */

    /***/
    function S5i5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CalculatorService", function () {
        return CalculatorService;
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


      var _model_calculator_ladder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../model/calculator/ladder */
      "lIYY");

      var CalculatorService = /*#__PURE__*/function () {
        function CalculatorService() {
          _classCallCheck(this, CalculatorService);

          this.ladder = new _model_calculator_ladder__WEBPACK_IMPORTED_MODULE_2__["Ladder"](0.02);
        }

        _createClass(CalculatorService, [{
          key: "getBackLaySimple",
          value: function getBackLaySimple(data) {
            if (data.backOdds > 0 && data.layOdds > 0 && data.stakeBack > 0 && data.commission >= 0 && (data.liability > 0 || data.bank > 0)) {
              if (data.isBackBefore) {
                // BACK / LAY
                // calculate hedge
                data.bank = data.backOdds / (data.layOdds - data.commission) * data.stakeBack;
                data.liability = data.bank * data.layOdds - data.bank; // calculate win for each bets

                data.winBack = data.stakeBack * data.backOdds - data.stakeBack;
                data.winLay = data.bank; // calculate hedge

                data.net = data.winBack - data.liability;
                data.rating = data.winBack / data.liability;
                data.isValid = true;
              } else {
                // LAY / BACK
                // calculate hedge
                if (data.bank == null) {
                  data.bank = data.liability * data.layOdds - data.liability;
                } else if (data.liability == null) {
                  data.liability = data.bank * data.layOdds - data.bank;
                }

                data.stakeBack = (data.layOdds - data.commission) / data.backOdds * data.bank;
                data.winBack = data.backOdds * data.stakeBack - data.stakeBack; // calculate hedge

                data.net = data.winBack - data.liability;
                data.rating = data.winBack / data.liability;
                data.isValid = true;
              }
            } else {
              data.isValid = false;
            }

            return data;
          }
        }, {
          key: "getRiskAndReward",
          value: function getRiskAndReward(data) {
            if (data.entry > 0 && data.stop > 0 && data.target > 0 && data.monetaryStop !== 0 && data.monetaryStop != null && data.commission >= 0) {
              if (data.isBackBefore) {
                // BACK / LAY
                data.toEntryStake = data.monetaryStop / (data.entry - 1 - data.entry / data.stop * (data.stop - 1)); // here commission on win entry

                data.toWinEntry = data.entry * data.toEntryStake - data.toEntryStake - Math.abs((data.entry * data.toEntryStake - data.toEntryStake) * data.commission); // to stop

                data.toStopBank = data.entry / data.stop * data.toEntryStake;
                data.toStopLiability = data.toStopBank * data.stop - data.toStopBank;
                data.toWinStop = data.toStopBank; // to target

                data.toTargetBank = data.entry / data.target * data.toEntryStake;
                data.toTargetLiability = data.toTargetBank * data.target - data.toTargetBank;
                data.toWinTarget = data.toTargetBank; // net

                data.net = data.toWinEntry - data.toTargetLiability;
                data.rating = -data.net / data.monetaryStop; // commission

                data.commissionPaid = Math.abs((data.entry * data.toEntryStake - data.toEntryStake) * data.commission);
              } else {
                // LAY / BACK
                data.toEntryLiability = data.monetaryStop / (data.entry * (data.stop - 1) / (data.stop * (data.entry - 1)) - 1);
                data.toEntryBank = data.toEntryLiability / (data.entry - 1); // here commission on win entry

                data.toWinEntry = data.toEntryBank - Math.abs(data.toEntryBank * data.commission); // to stop

                data.toStopStake = data.entry / data.stop * data.toEntryBank;
                data.toWinStop = data.toStopStake * data.stop - data.toStopStake; // to target

                data.toTargetStake = data.entry / data.target * data.toEntryBank;
                data.toWinTarget = data.toTargetStake * data.target - data.toTargetStake; // net

                data.net = data.toWinEntry - data.toTargetStake;
                data.rating = -data.net / data.monetaryStop; // commission

                data.commissionPaid = Math.abs(data.toEntryBank * data.commission);
              }

              data.isValid = true;
            } else {
              data.isValid = false;
            }

            return data;
          }
        }, {
          key: "initializeBackLay",
          value: function initializeBackLay(_value) {
            return {
              backOdds: null,
              layOdds: null,
              stakeBack: 100.00000,
              bank: 100.00000,
              liability: null,
              winBack: null,
              winLay: null,
              net: null,
              commission: 0.02000,
              isBackBefore: _value,
              isValid: false,
              rating: null,
              commissionPaid: 0
            };
          }
        }, {
          key: "initializeRiskReward",
          value: function initializeRiskReward(_value) {
            return {
              entry: 0,
              stop: 0,
              target: 0,
              toWinEntry: 0,
              toWinStop: 0,
              toWinTarget: 0,
              monetaryStop: -5,
              monetaryTarget: 0,
              toStopBank: 0,
              toStopLiability: 0,
              toStopStake: 0,
              toEntryBank: 0,
              toEntryLiability: 0,
              toEntryStake: 0,
              toTargetBank: 0,
              toTargetLiability: 0,
              toTargetStake: 0,
              winBack: 0,
              winLay: 0,
              net: 0,
              commission: 0.02000,
              isBackBefore: true,
              isValid: false,
              rating: 0,
              commissionPaid: 0
            };
          } // ladder
          // BACK

        }, {
          key: "addLadderStake",
          value: function addLadderStake(odds, stake) {
            this.ladder.ladder[odds].backSide.addStake(stake);
            this.ladder.ladderResume.update(this.ladder.ladder);
            this.updateWhatIf();
            this.ladder.calculateBEOdd();
          }
        }, {
          key: "removeLadderStake",
          value: function removeLadderStake(odds, stake) {
            this.ladder.ladder[odds].backSide.removeStake(stake);
            this.ladder.ladderResume.update(this.ladder.ladder);
            this.updateWhatIf();
            this.ladder.calculateBEOdd();
          }
        }, {
          key: "resetLadderStake",
          value: function resetLadderStake() {
            var _iterator = _createForOfIteratorHelper(this.ladder.ladder),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var i = _step.value;
                i.backSide.resetStake();
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.ladder.ladderResume.update(this.ladder.ladder);
          } // LAY

        }, {
          key: "addLadderBank",
          value: function addLadderBank(odds, stake) {
            this.ladder.ladder[odds].laySide.addBank(stake);
            this.ladder.ladderResume.update(this.ladder.ladder);
            this.updateWhatIf();
            this.ladder.calculateBEOdd();
          }
        }, {
          key: "removeLadderBank",
          value: function removeLadderBank(odds, stake) {
            this.ladder.ladder[odds].laySide.removeBank(stake);
            this.ladder.ladderResume.update(this.ladder.ladder);
            this.updateWhatIf();
            this.ladder.calculateBEOdd();
          }
        }, {
          key: "resetLadderBank",
          value: function resetLadderBank() {
            var _iterator2 = _createForOfIteratorHelper(this.ladder.ladder),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var i = _step2.value;
                i.laySide.resetBank();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.ladder.ladderResume.update(this.ladder.ladder);
            this.updateWhatIf();
          } // reset ladder

        }, {
          key: "resetLadder",
          value: function resetLadder() {
            this.resetLadderBank();
            this.resetLadderStake();
          }
        }, {
          key: "updateWhatIf",
          value: function updateWhatIf() {
            var _iterator3 = _createForOfIteratorHelper(this.ladder.ladder),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var ladderCell = _step3.value;
                ladderCell.updateWhatIfLevel(this.ladder.ladderResume);
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        }]);

        return CalculatorService;
      }();

      CalculatorService.ctorParameters = function () {
        return [];
      };

      CalculatorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], CalculatorService);
      /***/
    },

    /***/
    "SCZV":
    /*!***************************************************************************!*\
      !*** ./src/app/features/calculator/components/ladder/ladder.component.ts ***!
      \***************************************************************************/

    /*! exports provided: LadderComponent */

    /***/
    function SCZV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LadderComponent", function () {
        return LadderComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ladder_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ladder.component.html */
      "j6V2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/calculator.service */
      "S5i5");

      var LadderComponent = /*#__PURE__*/function () {
        function LadderComponent(calculatorService) {
          _classCallCheck(this, LadderComponent);

          this.calculatorService = calculatorService;
          this.myMath = Math;
          this.ladder = this.calculatorService.ladder;
        }

        _createClass(LadderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} // BACK SIDE

        }, {
          key: "leftClickBack",
          value: function leftClickBack(odds, stake) {
            this.calculatorService.addLadderStake(odds, stake);
          }
        }, {
          key: "rightClickBack",
          value: function rightClickBack($event, odds, stake) {
            $event.preventDefault();
            this.calculatorService.removeLadderStake(odds, stake);
          }
        }, {
          key: "resetBack",
          value: function resetBack() {
            this.calculatorService.resetLadderStake();
          } // LAY SIDE

        }, {
          key: "leftClickLay",
          value: function leftClickLay(odds, stake) {
            this.calculatorService.addLadderBank(odds, stake);
          }
        }, {
          key: "rightClickLay",
          value: function rightClickLay($event, odds, stake) {
            $event.preventDefault();
            this.calculatorService.removeLadderBank(odds, stake);
          }
        }, {
          key: "resetLay",
          value: function resetLay() {
            this.calculatorService.resetLadderBank();
          } // to add hedge markets

        }, {
          key: "clickNet",
          value: function clickNet(odds, stake) {
            if (stake < 0) {
              this.leftClickBack(odds, -stake);
            } else if (stake > 0) {
              this.leftClickLay(odds, stake);
            }
          } // RESET ALL LADDER

        }, {
          key: "resetLadder",
          value: function resetLadder() {
            this.calculatorService.resetLadder();
          } // stake click

        }, {
          key: "backClickStake",
          value: function backClickStake(value) {
            this.ladder.ladderEntry.mainStakeBack = value;
          }
        }, {
          key: "layClickBank",
          value: function layClickBank(value) {
            this.ladder.ladderEntry.mainBankLay = value;
          } // net bets

        }, {
          key: "netBack",
          value: function netBack() {
            this.ladder.ladderEntry.mainStakeBack = this.ladder.ladderResume.totalLayBank;
          }
        }, {
          key: "netLay",
          value: function netLay() {
            this.ladder.ladderEntry.mainBankLay = this.ladder.ladderResume.totalBackStake;
          }
        }]);

        return LadderComponent;
      }();

      LadderComponent.ctorParameters = function () {
        return [{
          type: _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__["CalculatorService"]
        }];
      };

      LadderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-ladder',
        template: _raw_loader_ladder_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LadderComponent);
      /***/
    },

    /***/
    "hF8k":
    /*!************************************************************************************!*\
      !*** ./src/app/features/calculator/components/multi-toll/risk-reward.component.ts ***!
      \************************************************************************************/

    /*! exports provided: RiskRewardComponent */

    /***/
    function hF8k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RiskRewardComponent", function () {
        return RiskRewardComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_risk_reward_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./risk-reward.component.html */
      "nkYT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../services/calculator.service */
      "S5i5");

      var RiskRewardComponent = /*#__PURE__*/function () {
        function RiskRewardComponent(calculatorService) {
          _classCallCheck(this, RiskRewardComponent);

          this.calculatorService = calculatorService;
          this.data = this.calculatorService.initializeRiskReward(true);
        }

        _createClass(RiskRewardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "updateEntry",
          value: function updateEntry(event) {
            this.data.entry = event[0];
            this.inputChange();
          }
        }, {
          key: "updateStop",
          value: function updateStop(event) {
            this.data.stop = event[0];
            this.inputChange();
          }
        }, {
          key: "updateTarget",
          value: function updateTarget(event) {
            this.data.target = event[0];
            this.inputChange();
          }
        }, {
          key: "inputChange",
          value: function inputChange() {
            this.data = this.calculatorService.getRiskAndReward(this.data);
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.data = this.calculatorService.initializeRiskReward(this.data.isBackBefore);
          }
        }]);

        return RiskRewardComponent;
      }();

      RiskRewardComponent.ctorParameters = function () {
        return [{
          type: _services_calculator_service__WEBPACK_IMPORTED_MODULE_3__["CalculatorService"]
        }];
      };

      RiskRewardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-risk-reward',
        template: _raw_loader_risk_reward_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RiskRewardComponent);
      /***/
    },

    /***/
    "j6V2":
    /*!*******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/calculator/components/ladder/ladder.component.html ***!
      \*******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j6V2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Ladder</h6>\r\n      <!-- CARD OPTIONS -->\r\n      <div ngbDropdown class=\"mb-2\">\r\n        <button ngbDropdownToggle class=\"btn p-0 no-dropdown-toggle-icon\" type=\"button\" id=\"dropdownMenuButton\">\r\n          <i class=\"icon-lg text-muted pb-3px\" data-feather=\"more-horizontal\" appFeatherIcon></i>\r\n        </button>\r\n        <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\r\n          <a ngbDropdownItem class=\"d-flex align-items-center\" href=\"\" (click)=\"false\"><i data-feather=\"eye\" appFeatherIcon class=\"icon-sm mr-2\"></i> <span class=\"\">View</span></a>\r\n          <a ngbDropdownItem class=\"d-flex align-items-center\" href=\"\" (click)=\"false\"><i data-feather=\"edit-2\" appFeatherIcon class=\"icon-sm mr-2\"></i> <span class=\"\">Edit</span></a>\r\n        </div>\r\n      </div>\r\n    </div><!-- /CARD OPTIONS -->\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <!-- stake form-->\r\n        <form class=\"forms-sample grid-margin\" #backForm=\"ngForm\" >\r\n          <div class=\"form-group\">\r\n            <label for=\"mainStake\" class=\"text-gray\">MainStake</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"mainStake\" autocomplete=\"off\" placeholder=\"Main Stake\" [(ngModel)]=\"ladder.ladderEntry.mainStakeBack\" name=\"mainStake\">\r\n          </div>\r\n        </form>\r\n        <!-- stake default button-->\r\n        <p class=\"text-gray grid-margin\">Default Stake</p>\r\n        <div class=\"d-flex justify-content-center align-items-center grid-margin\">\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainStakeBack===1 ? 'btn btn-primary' : 'btn btn-outline-primary'\" (click)=\"backClickStake(1)\">1</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainStakeBack===2 ? 'btn btn-primary' : 'btn btn-outline-primary'\" (click)=\"backClickStake(2)\">2</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainStakeBack===5 ? 'btn btn-primary' : 'btn btn-outline-primary'\" (click)=\"backClickStake(5)\">5</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainStakeBack===10 ? 'btn btn-primary' : 'btn btn-outline-primary'\" (click)=\"backClickStake(10)\">10</button>\r\n        </div>\r\n        <div class=\"d-flex justify-content-center align-items-center grid-margin\">\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainStakeBack===20 ? 'btn btn-primary' : 'btn btn-outline-primary'\" (click)=\"backClickStake(20)\">20</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainStakeBack===25 ? 'btn btn-primary' : 'btn btn-outline-primary'\" (click)=\"backClickStake(25)\">25</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainStakeBack===50 ? 'btn btn-primary' : 'btn btn-outline-primary'\" (click)=\"backClickStake(50)\">50</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainStakeBack===100 ? 'btn btn-primary' : 'btn btn-outline-primary'\" (click)=\"backClickStake(100)\">100</button>\r\n        </div>\r\n        <!-- reset button -->\r\n        <div class=\"d-flex justify-content-center align-items-center grid-margin\">\r\n          <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"resetBack()\">Reset Back</button>\r\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"netBack()\">NET</button>\r\n        </div>\r\n        <!-- back side calculator -->\r\n        <!-- net -->\r\n        <div class=\"d-flex justify-content-left align-items-baseline grid-margin\">\r\n          <h4>Tot Stake: {{ladder.ladderResume.totalBackStake | currency}}</h4>\r\n        </div>\r\n        <!-- avg -->\r\n        <div class=\"d-flex justify-content-left align-items-baseline grid-margin\">\r\n          <h4>Avg Odds:<span class=\"badge badge-primary ml-2\" *ngIf=\"ladder.ladderResume.avgOddsBack>0\"> {{ladder.ladderResume.avgOddsBack|number:'0.02'}}</span></h4>\r\n        </div>\r\n        <!-- to win -->\r\n        <div class=\"d-flex justify-content-right align-items-baseline grid-margin\">\r\n          <h4>To Win: {{ladder.ladderResume.totalToWinBack|currency}}</h4>\r\n        </div>\r\n        <!-- net -->\r\n        <div class=\"d-flex justify-content-right align-items-baseline grid-margin\">\r\n          <h3 [ngClass]=\"ladder.ladderResume.netBack>0 ? 'text-success' : ladder.ladderResume.netBack<0 ?'text-danger':'text-gray'\">Net: {{ladder.ladderResume.netBack|currency}}</h3>\r\n        </div>\r\n        <!-- BE odds -->\r\n        <div class=\"d-flex justify-content-right align-items-baseline grid-margin\">\r\n          <h5 class=\"text-info\">BE Odds: {{ladder.breakEvenOdds|number:'0.02'}}</h5>\r\n        </div>\r\n        <!-- commision -->\r\n        <div class=\"d-flex justify-content-right align-items-baseline grid-margin\">\r\n          <h5 class=\"text-warning\">Commission: -{{ladder.ladderResume.totalCommission|currency}}</h5>\r\n        </div>\r\n        <!-- r/R -->\r\n        <div class=\"d-flex justify-content-right align-items-baseline grid-margin\">\r\n          <h4 [ngClass]=\"[ladder.ladderResume.rating>=1? 'text-success' : 'text-warning']\">Rating: {{ladder.ladderResume.rating|percent}}</h4>\r\n        </div>\r\n      </div>\r\n      <!-- main ladder-->\r\n      <div class=\"col-8\">\r\n        <div class=\"ladderTable noSelect\">\r\n          <table class=\"table table-bordered table-hover\">\r\n            <thead>\r\n            <tr>\r\n              <th class=\"backSide\">Back</th>\r\n              <th class=\"odds\">Odds</th>\r\n              <th class=\"laySide\">Lay</th>\r\n              <th class=\"whatIf\">P/L</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr *ngFor=\"let ladderCell of ladder.ladder.slice().reverse()\">\r\n\r\n              <td class=\"text-center\" [ngClass]=\"ladderCell.backSide.stake>0 ? 'table-primary text-dark' :' text-primary'\"\r\n                  (contextmenu)=\"rightClickBack($event,ladderCell.ticksDown,ladder.ladderEntry.mainStakeBack)\"\r\n                  (click)=\"leftClickBack(ladderCell.ticksDown,ladder.ladderEntry.mainStakeBack)\">\r\n                <p>{{ladderCell.backSide.stake |number:'0.02'}}</p>\r\n              </td>\r\n\r\n              <td  class=\"odds thLadder text-center\" >\r\n                <h4>{{ladderCell.odds }}</h4>\r\n              </td>\r\n\r\n              <td class=\"text-center\" [ngClass]=\"ladderCell.laySide.bank>0 ? 'table-danger text-dark' :'text-danger'\"\r\n                  (contextmenu)=\"rightClickLay($event,ladderCell.ticksDown,ladder.ladderEntry.mainBankLay)\"\r\n                  (click)=\"leftClickLay(ladderCell.ticksDown,ladder.ladderEntry.mainBankLay)\">\r\n                <p>{{ladderCell.laySide.bank |number:'0.02'}}</p>\r\n              </td>\r\n\r\n              <td [ngClass]=\"ladderCell.whatIf>0 ? 'text-success whatIf thLadder' : ladderCell.whatIf===0?'text-primary whatIf thLadder': 'text-danger whatIf thLadder'\"\r\n                  (click)=\"clickNet(ladderCell.ticksDown,ladderCell.whatIfStake)\">\r\n                <h5 class=\"text-center\">{{ladderCell.whatIf | currency}}</h5>\r\n              </td>\r\n            </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <!-- stake form-->\r\n        <form class=\"forms-sample grid-margin\" #layForm=\"ngForm\" >\r\n          <div class=\"form-group\">\r\n            <label for=\"mainBank\" class=\"text-gray\">MainStake</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"mainBank\" autocomplete=\"off\" placeholder=\"Main Bank\" [(ngModel)]=\"ladder.ladderEntry.mainBankLay\" name=\"mainBank\">\r\n          </div>\r\n        </form>\r\n        <!-- stake default button-->\r\n        <p class=\"text-gray grid-margin\">Default Stake</p>\r\n        <div class=\"d-flex justify-content-center align-items-center grid-margin\">\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainBankLay===1 ? 'btn btn-danger' : 'btn btn-outline-danger'\" (click)=\"layClickBank(1)\">1</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainBankLay===2 ? 'btn btn-danger' : 'btn btn-outline-danger'\" (click)=\"layClickBank(2)\">2</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainBankLay===5 ? 'btn btn-danger' : 'btn btn-outline-danger'\" (click)=\"layClickBank(5)\">5</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainBankLay===10 ? 'btn btn-danger' : 'btn btn-outline-danger'\" (click)=\"layClickBank(10)\">10</button>\r\n        </div>\r\n        <div class=\"d-flex justify-content-center align-items-center grid-margin\">\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainBankLay===20 ? 'btn btn-danger' : 'btn btn-outline-danger'\" (click)=\"layClickBank(20)\">20</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainBankLay===25 ? 'btn btn-danger' : 'btn btn-outline-danger'\" (click)=\"layClickBank(25)\">25</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainBankLay===50 ? 'btn btn-danger' : 'btn btn-outline-danger'\" (click)=\"layClickBank(50)\">50</button>\r\n          <button type=\"button\" [ngClass]=\"ladder.ladderEntry.mainBankLay===100 ? 'btn btn-danger' : 'btn btn-outline-danger'\" (click)=\"layClickBank(100)\">100</button>\r\n        </div>\r\n        <!-- reset button -->\r\n        <div class=\"d-flex justify-content-center align-items-center grid-margin\">\r\n          <button type=\"button\" class=\"btn btn-danger mr-2\" (click)=\"resetLay()\">Reset Lay</button>\r\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"netLay()\">NET</button>\r\n        </div>\r\n        <!-- lay side calculator -->\r\n        <!-- net -->\r\n        <div class=\"d-flex justify-content-left align-items-baseline grid-margin\">\r\n          <h4>Tot Bank: {{ladder.ladderResume.totalLayBank | currency}}</h4>\r\n        </div>\r\n        <div class=\"d-flex justify-content-left align-items-baseline grid-margin\">\r\n          <h4>Tot Liab: {{ladder.ladderResume.totalLayLiability | currency}}</h4>\r\n        </div>\r\n        <!-- avg -->\r\n        <div class=\"d-flex justify-content-left align-items-baseline grid-margin\">\r\n          <h4>Avg Odds:<span class=\"badge badge-danger ml-2\" *ngIf=\"ladder.ladderResume.avgOddsLay>0\"> {{ladder.ladderResume.avgOddsLay|number:'0.02'}}</span></h4>\r\n        </div>\r\n        <!-- to win -->\r\n        <div class=\"d-flex justify-content-right align-items-baseline grid-margin\">\r\n          <h4>To Win: {{ladder.ladderResume.totalToWinLay| currency}}</h4>\r\n        </div>\r\n        <!-- net -->\r\n        <div class=\"d-flex justify-content-right align-items-baseline grid-margin\">\r\n          <h3 [ngClass]=\"ladder.ladderResume.netLay>0 ? 'text-success' : ladder.ladderResume.netLay<0 ?'text-danger':'text-gray'\">Net: {{ladder.ladderResume.netLay|currency}}</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div><!-- /BODY -->\r\n  <div class=\"card-footer\"><!-- FOOTER -->\r\n    <div class=\"d-flex flex-row-reverse\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resetLadder()\">Reset</button>\r\n    </div>\r\n  </div><!-- / FOOTER -->\r\n</div>\r\n";
      /***/
    },

    /***/
    "lIYY":
    /*!********************************************!*\
      !*** ./src/app/model/calculator/ladder.ts ***!
      \********************************************/

    /*! exports provided: Ladder, LadderLevel, LadderLevelBackSide, LadderLevelLaySide, LadderEntry, LadderResume */

    /***/
    function lIYY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ladder", function () {
        return Ladder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LadderLevel", function () {
        return LadderLevel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LadderLevelBackSide", function () {
        return LadderLevelBackSide;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LadderLevelLaySide", function () {
        return LadderLevelLaySide;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LadderEntry", function () {
        return LadderEntry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LadderResume", function () {
        return LadderResume;
      });

      var LADDERS = 1000;
      var INCREMENTAL = [{
        min: 1,
        max: 1.99,
        size: 0.01
      }, {
        min: 2,
        max: 2.98,
        size: 0.02
      }, {
        min: 3,
        max: 3.95,
        size: 0.05
      }, {
        min: 4,
        max: 5.90,
        size: 0.1
      }, {
        min: 6,
        max: 9.80,
        size: 0.2
      }, {
        min: 10,
        max: 19.5,
        size: 0.5
      }, {
        min: 20,
        max: 49,
        size: 1
      }, {
        min: 50,
        max: 95,
        size: 5
      }, {
        min: 100,
        max: 1000,
        size: 10
      }];

      var Ladder = /*#__PURE__*/function () {
        function Ladder(commission) {
          _classCallCheck(this, Ladder);

          this.ladder = [];
          this.ladderEntry = new LadderEntry();
          this.ladderResume = new LadderResume(commission);
          this.commission = 0.02;
          var j = 0;
          var i = 1.01;
          var lastIncremental = 0;
          var margin = 0.001;
          var tickCount = 0;

          while (i <= LADDERS) {
            j = 0;

            while (j < INCREMENTAL.length) {
              if (i >= INCREMENTAL[j].min - margin && i <= INCREMENTAL[j].max + margin) {
                this.ladder.push(new LadderLevel(i, tickCount));
                tickCount++;
                i = +(i + INCREMENTAL[j].size).toFixed(2);
                lastIncremental = INCREMENTAL[j].size;
                break;
              } else if (j === INCREMENTAL.length - 1) {
                i = i + lastIncremental;
              }

              j++;
            }
          }
        }

        _createClass(Ladder, [{
          key: "resetLadder",
          value: function resetLadder() {
            var tempLadder = [];
            var j = 0;
            var i = 1.01;
            var lastIncremental = 0;
            var margin = 0.001;
            var tickCount = 0;

            while (i <= LADDERS) {
              j = 0;

              while (j < INCREMENTAL.length) {
                if (i >= INCREMENTAL[j].min - margin && i <= INCREMENTAL[j].max + margin) {
                  tempLadder.push(new LadderLevel(i, tickCount));
                  tickCount++;
                  i = +(i + INCREMENTAL[j].size).toFixed(2);
                  lastIncremental = INCREMENTAL[j].size;
                  break;
                } else if (j === INCREMENTAL.length - 1) {
                  i = i + lastIncremental;
                }

                j++;
              }
            }

            this.ladder = tempLadder;
          }
        }, {
          key: "calculateBEOdd",
          value: function calculateBEOdd() {
            var state;
            var checkState;
            state = this.ladder[0].whatIf > 0;

            var _iterator4 = _createForOfIteratorHelper(this.ladder),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var cell = _step4.value;
                checkState = cell.whatIf > 0;

                if (checkState != state) {
                  this.breakEvenOdds = cell.odds;
                  break;
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }
          }
        }]);

        return Ladder;
      }();

      var LadderLevel = /*#__PURE__*/function () {
        function LadderLevel(i, count) {
          _classCallCheck(this, LadderLevel);

          this.odds = i;
          this.probability = 1 / this.odds;
          this.ticksUp = LADDERS - count;
          this.ticksDown = count;
          this.backSide = new LadderLevelBackSide(i);
          this.laySide = new LadderLevelLaySide(i);
          this.whatIf = 0;
          this.whatIfStake = 0;
          this.whatIfBack = false;
        }

        _createClass(LadderLevel, [{
          key: "updateWhatIfLevel",
          value: function updateWhatIfLevel(resume) {
            this.whatIf = 0;
            this.whatIfStake = 0;

            if (resume.totalBackStake > 0 || resume.totalLayBank > 0) {
              if (resume.avgOddsBack > 0) {
                // i have to lay
                if (resume.avgOddsBack * resume.totalBackStake / this.odds - resume.totalBackStake > 0) {
                  this.whatIf = this.whatIf + (resume.avgOddsBack * resume.totalBackStake / this.odds - resume.totalBackStake) * (1 - resume.commission);
                } else {
                  this.whatIf = this.whatIf + (resume.avgOddsBack * resume.totalBackStake / this.odds - resume.totalBackStake);
                }

                this.whatIfStake = this.whatIfStake + resume.avgOddsBack * resume.totalBackStake / this.odds;
              }

              if (resume.avgOddsLay > 0) {
                if (resume.totalLayBank - resume.avgOddsLay * resume.totalLayBank / this.odds > 0) {
                  this.whatIf = this.whatIf - (resume.avgOddsLay * resume.totalLayBank / this.odds - resume.totalLayBank) * (1 - resume.commission);
                } else {
                  this.whatIf = this.whatIf - (resume.avgOddsLay * resume.totalLayBank / this.odds - resume.totalLayBank);
                }

                this.whatIfStake = this.whatIfStake - resume.avgOddsLay * resume.totalLayBank / this.odds;
              }
            } else {
              this.whatIf = 0;
            }
          }
        }]);

        return LadderLevel;
      }();

      var LadderLevelBackSide = /*#__PURE__*/function () {
        function LadderLevelBackSide(odds) {
          _classCallCheck(this, LadderLevelBackSide);

          this.stake = 0;
          this.toWin = 0;
          this.odds = odds;
        }

        _createClass(LadderLevelBackSide, [{
          key: "addStake",
          value: function addStake(stake) {
            this.stake = this.stake + stake;
            this.updateToWinLevel();
          }
        }, {
          key: "removeStake",
          value: function removeStake(stake) {
            if (this.stake - stake >= 0) {
              this.stake = this.stake - stake;
            } else {
              this.stake = 0;
            }

            this.updateToWinLevel();
          }
        }, {
          key: "resetStake",
          value: function resetStake() {
            this.stake = 0;
            this.updateToWinLevel();
          }
        }, {
          key: "updateToWinLevel",
          value: function updateToWinLevel() {
            if (this.stake != 0) {
              this.toWin = this.odds * this.stake - this.stake;
            } else {
              this.toWin = 0;
            }
          }
        }]);

        return LadderLevelBackSide;
      }();

      var LadderLevelLaySide = /*#__PURE__*/function () {
        function LadderLevelLaySide(odds) {
          _classCallCheck(this, LadderLevelLaySide);

          this.bank = 0;
          this.toWin = 0;
          this.odds = odds;
        }

        _createClass(LadderLevelLaySide, [{
          key: "addBank",
          value: function addBank(bank) {
            this.bank = this.bank + bank;
            this.updateToWinLevel();
          }
        }, {
          key: "removeBank",
          value: function removeBank(bank) {
            if (this.bank - bank >= 0) {
              this.bank = this.bank - bank;
            } else {
              this.bank = 0;
            }

            this.updateToWinLevel();
          }
        }, {
          key: "resetBank",
          value: function resetBank() {
            this.bank = 0;
            this.updateToWinLevel();
          }
        }, {
          key: "updateToWinLevel",
          value: function updateToWinLevel() {
            if (this.bank != 0) {
              this.toWin = this.bank;
              this.liability = this.bank * this.odds - this.bank;
            } else {
              this.toWin = 0;
              this.liability = 0;
            }
          }
        }]);

        return LadderLevelLaySide;
      }();

      var LadderEntry = /*#__PURE__*/_createClass(function LadderEntry() {
        _classCallCheck(this, LadderEntry);

        this.mainBankLay = 10;
        this.mainLiabilityLay = 0;
        this.mainStakeBack = 10;
      });

      var LadderResume = /*#__PURE__*/function () {
        function LadderResume(commission) {
          _classCallCheck(this, LadderResume);

          this.avgOddsBack = 0;
          this.avgOddsLay = 0;
          this.totalBackStake = 0;
          this.totalLayLiability = 0;
          this.totalLayBank = 0;
          this.totalToWinBack = 0;
          this.totalToWinLay = 0;
          this.netBack = 0;
          this.netLay = 0;
          this.totalCommission = 0;
          this.commission = commission;
          this.breakEvenOdds = 0;
          this.rating = 0;
        }

        _createClass(LadderResume, [{
          key: "reset",
          value: function reset() {
            this.avgOddsBack = 0;
            this.avgOddsLay = 0;
            this.totalBackStake = 0;
            this.totalLayLiability = 0;
            this.totalLayBank = 0;
            this.totalToWinBack = 0;
            this.totalToWinLay = 0;
            this.netBack = 0;
            this.netLay = 0;
            this.totalCommission = 0;
            this.rating = 0;
          }
        }, {
          key: "update",
          value: function update(ladder) {
            this.reset();
            var countBack = 0;
            var backOddsSum = 0;
            var countLay = 0;
            var layOddsSum = 0;

            var _iterator5 = _createForOfIteratorHelper(ladder),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var ladderCell = _step5.value;
                // to win
                this.totalToWinLay = this.totalToWinLay + ladderCell.backSide.toWin;
                this.totalToWinBack = this.totalToWinBack + ladderCell.laySide.toWin; // loss

                this.totalBackStake = this.totalBackStake + ladderCell.backSide.stake;
                this.totalLayBank = this.totalLayBank + ladderCell.laySide.bank; // odds
                //back

                if (ladderCell.backSide.stake > 0) {
                  backOddsSum = backOddsSum + ladderCell.backSide.stake * ladderCell.backSide.odds;
                  countBack++;
                } //lay


                if (ladderCell.laySide.bank > 0) {
                  layOddsSum = layOddsSum + ladderCell.laySide.bank * ladderCell.laySide.odds;
                  countLay++;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            this.avgOddsBack = backOddsSum / this.totalBackStake;
            this.avgOddsLay = layOddsSum / this.totalLayBank; // liability for lay side

            if (this.totalLayBank != 0) {
              this.totalLayLiability = this.totalLayBank * this.avgOddsLay - this.totalLayBank;
            } else {
              this.totalLayLiability = 0;
            } // calculate net


            this.netBack = -this.totalBackStake + this.totalToWinBack;
            this.netLay = -this.totalLayLiability + this.totalToWinLay; // calculate r/R

            if (this.netBack > 0 && this.netLay < 0) {
              this.rating = Math.abs(this.netBack / this.netLay);
            } else if (this.netBack < 0 && this.netLay > 0) {
              this.rating = Math.abs(this.netLay / this.netBack);
            } else {
              this.rating = 0;
            } // check commission


            if (this.netBack > 0) {
              this.totalCommission = this.netBack * this.commission;
              this.netBack = this.netBack - this.totalCommission;
            } else if (this.netLay > 0) {
              this.totalCommission = this.netLay * this.commission;
              this.netLay = this.netLay - this.totalCommission;
            } else {
              this.totalCommission = 0;
            }
          }
        }]);

        return LadderResume;
      }();
      /***/

    },

    /***/
    "nkYT":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/calculator/components/multi-toll/risk-reward.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function nkYT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Risk / Reward Calculator</h6>\r\n      <!-- CARD OPTIONS -->\r\n      <div ngbDropdown class=\"mb-2\">\r\n        <button ngbDropdownToggle class=\"btn p-0 no-dropdown-toggle-icon\" type=\"button\" id=\"dropdownMenuButton\">\r\n          <i class=\"icon-lg text-muted pb-3px\" data-feather=\"more-horizontal\" appFeatherIcon></i>\r\n        </button>\r\n        <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\r\n          <a ngbDropdownItem class=\"d-flex align-items-center\" href=\"\" (click)=\"false\"><i data-feather=\"eye\" appFeatherIcon class=\"icon-sm mr-2\"></i> <span class=\"\">View</span></a>\r\n          <a ngbDropdownItem class=\"d-flex align-items-center\" href=\"\" (click)=\"false\"><i data-feather=\"edit-2\" appFeatherIcon class=\"icon-sm mr-2\"></i> <span class=\"\">Edit</span></a>\r\n        </div>\r\n      </div>\r\n    </div><!-- /CARD OPTIONS -->\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <form class=\"forms-sample\" #backLayForm=\"ngForm\" >\r\n      <div class=\"row\"><!-- ROW 0-->\r\n        <div class=\"col-2\"><!-- COL 1-->\r\n          <div class=\"form-check form-check-flat form-check-primary\">\r\n            <label class=\"form-check-label grid-margin\">\r\n              <input type=\"checkbox\" class=\"form-check-input grid-margin\" [(ngModel)]=\"data.isBackBefore\" name=\"isBackBefore\" checked  (input)=\"inputChange()\">\r\n              <i class=\"input-frame\"></i>\r\n              Back before\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\"><!-- COL 1-->\r\n          <h4 class=\"grid-margin\" *ngIf=\"data.isBackBefore\"> <span class=\"badge badge-primary grid-margin\">Back</span> - <span class=\"badge badge-danger grid-margin\">Lay</span> </h4>\r\n          <h4 class=\"grid-margin\" *ngIf=\"!data.isBackBefore\"> <span class=\"badge badge-danger grid-margin\">Lay</span> - <span class=\"badge badge-primary grid-margin\">Back</span> </h4>\r\n        </div>\r\n        <div class=\"col\"><!-- COL 2-->\r\n          <div class=\"form-group\">\r\n            <label for=\"commission\" class=\"text-gray\">Commission</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"commission\" autocomplete=\"off\" placeholder=\"Commision\" [(ngModel)]=\"data.commission\" name=\"commission\"  (input)=\"inputChange()\">\r\n          </div>\r\n        </div><!-- /COL 2-->\r\n      </div><!-- /ROW 0-->\r\n      <div class=\"row\"><!-- ROW 1 A-->\r\n        <div class=\"col\"><!-- COL 1-->\r\n          <app-odd-form [title]=\"'Entry'\"\r\n                        (oddsPointEmitter)=\"updateEntry($event)\">\r\n          </app-odd-form>\r\n        </div><!-- /COL 1-->\r\n        <div class=\"col\"><!-- COL 2-->\r\n          <app-odd-form [title]=\"'Stop'\"\r\n                        (oddsPointEmitter)=\"updateStop($event)\">\r\n          </app-odd-form>\r\n        </div><!-- /COL 2-->\r\n        <div class=\"col\"><!-- COL 3-->\r\n          <app-odd-form [title]=\"'Target'\"\r\n                        (oddsPointEmitter)=\"updateTarget($event)\">\r\n          </app-odd-form>\r\n        </div><!-- /COL 3-->\r\n      </div><!-- /ROW 1 A-->\r\n      <div class=\"row\"><!-- ROW 2-->\r\n        <div class=\"col justify-content-left align-items-baseline \"><!-- COL 1-->\r\n          <div class=\"form-group\">\r\n            <label for=\"monetaryStop\">Max Loss</label>\r\n            <input type=\"text\"\r\n                   class=\"form-control\"\r\n                   id=\"monetaryStop\"\r\n                   [(ngModel)]=\"data.monetaryStop\"\r\n                   name=\"monetaryStop\"\r\n                   (input)=\"inputChange()\">\r\n          </div>\r\n        </div>\r\n      </div><!-- /ROW 2-->\r\n      <div *ngIf=\"data.isValid\">\r\n        <div class=\"row\"><!-- ROW 3-->\r\n          <div class=\"col justify-content-left align-items-baseline \"><!-- COL 1-->\r\n            <h4 class=\"grid-margin\">Bets:</h4>\r\n            <div *ngIf=\"data.isBackBefore\">\r\n              <h5>Entry:</h5>\r\n              <app-bets-formatter [type]=\"'back'\"\r\n                                  [odds]=\"data.entry\"\r\n                                  [stake]=\"data.toEntryStake\"\r\n                                  [toWin]=\"data.toWinEntry\">\r\n              </app-bets-formatter>\r\n              <h5>To Stop:</h5>\r\n              <app-bets-formatter [type]=\"'lay'\"\r\n                                  [odds]=\"data.stop\"\r\n                                  [bank]=\"data.toStopBank\"\r\n                                  [liability]=\"data.toStopLiability\">\r\n              </app-bets-formatter>\r\n              <h5>To Target:</h5>\r\n              <app-bets-formatter [type]=\"'lay'\"\r\n                                  [odds]=\"data.target\"\r\n                                  [bank]=\"data.toTargetStake\"\r\n                                  [liability]=\"data.toTargetLiability\">\r\n              </app-bets-formatter>\r\n            </div>\r\n            <div *ngIf=\"!data.isBackBefore\">\r\n              <h5>Entry:</h5>\r\n              <app-bets-formatter [type]=\"'lay'\"\r\n                                  [odds]=\"data.entry\"\r\n                                  [stake]=\"data.toEntryLiability\"\r\n                                  [liability]=\"data.toEntryLiability\">\r\n              </app-bets-formatter>\r\n              <h5>To Stop:</h5>\r\n              <app-bets-formatter [type]=\"'back'\"\r\n                                  [odds]=\"data.stop\"\r\n                                  [stake]=\"data.toStopStake\"\r\n                                  [toWin]=\"data.toWinStop\">\r\n              </app-bets-formatter>\r\n              <h5>To Target:</h5>\r\n              <app-bets-formatter [type]=\"'back'\"\r\n                                  [odds]=\"data.target\"\r\n                                  [stake]=\"data.toTargetStake\"\r\n                                  [toWin]=\"data.toWinTarget\">\r\n              </app-bets-formatter>\r\n            </div>\r\n          </div><!-- /COL 1-->\r\n        </div><!-- /ROW 3-->\r\n        <div class=\"row\"><!-- ROW 4-->\r\n          <div class=\"col justify-content-left align-items-center \"><!-- COL 1-->\r\n            <h4 class=\"grid-margin\">Net:</h4>\r\n            <h5 [ngClass]=\" [data.net>=0? 'text-success' : 'text-danger']\">{{data.net | currency}}</h5>\r\n            <p class=\"text-warning\" *ngIf=\"data.commissionPaid>0\">Commission: (-{{data.commissionPaid| currency}})</p>\r\n          </div>\r\n          <div class=\"col justify-content-left align-items-center \"><!-- COL 1-->\r\n            <h4 class=\"grid-margin\">Rating:</h4>\r\n            <h5 [ngClass]=\" [data.rating>=1? 'text-success' : 'text-danger']\">{{data.rating | percent:'0.02'}}</h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n  </div><!-- /BODY -->\r\n  <div class=\"card-footer\"><!-- FOOTER -->\r\n    <div class=\"d-flex flex-row-reverse\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resetData()\">Reset</button>\r\n    </div>\r\n  </div><!-- / FOOTER -->\r\n</div>\r\n";
      /***/
    },

    /***/
    "z+68":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/calculator/components/back-lay/back-lay.component.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function z68(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Back/Lay Calculator</h6>\r\n      <!-- CARD OPTIONS -->\r\n      <div ngbDropdown class=\"mb-2\">\r\n        <button ngbDropdownToggle class=\"btn p-0 no-dropdown-toggle-icon\" type=\"button\" id=\"dropdownMenuButton\">\r\n          <i class=\"icon-lg text-muted pb-3px\" data-feather=\"more-horizontal\" appFeatherIcon></i>\r\n        </button>\r\n        <div ngbDropdownMenu aria-labelledby=\"dropdownMenuButton\">\r\n          <a ngbDropdownItem class=\"d-flex align-items-center\" href=\"\" (click)=\"false\"><i data-feather=\"eye\" appFeatherIcon class=\"icon-sm mr-2\"></i> <span class=\"\">View</span></a>\r\n          <a ngbDropdownItem class=\"d-flex align-items-center\" href=\"\" (click)=\"false\"><i data-feather=\"edit-2\" appFeatherIcon class=\"icon-sm mr-2\"></i> <span class=\"\">Edit</span></a>\r\n        </div>\r\n      </div>\r\n    </div><!-- /CARD OPTIONS -->\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <form class=\"forms-sample\" #backLayForm=\"ngForm\" >\r\n      <div class=\"row\"><!-- ROW 0-->\r\n        <div class=\"col-2\"><!-- COL 1-->\r\n          <div class=\"form-check form-check-flat form-check-primary\">\r\n            <label class=\"form-check-label grid-margin\">\r\n              <input type=\"checkbox\" class=\"form-check-input grid-margin\" [(ngModel)]=\"data.isBackBefore\" name=\"isBackBefore\" checked  (input)=\"inputChange()\">\r\n              <i class=\"input-frame\"></i>\r\n              Back before\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-4\"><!-- COL 1-->\r\n          <h4 class=\"grid-margin\" *ngIf=\"data.isBackBefore\"> <span class=\"badge badge-primary grid-margin\">Back</span> - <span class=\"badge badge-danger grid-margin\">Lay</span> </h4>\r\n          <h4 class=\"grid-margin\" *ngIf=\"!data.isBackBefore\"> <span class=\"badge badge-danger grid-margin\">Lay</span> - <span class=\"badge badge-primary grid-margin\">Back</span> </h4>\r\n        </div>\r\n        <div class=\"col\"><!-- COL 2-->\r\n          <div class=\"form-group\">\r\n            <label for=\"commission\" class=\"text-gray\">Commission</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"commission\" autocomplete=\"off\" placeholder=\"Commision\" [(ngModel)]=\"data.commission\" name=\"commission\"  (input)=\"inputChange()\">\r\n          </div>\r\n        </div><!-- /COL 2-->\r\n      </div><!-- /ROW 0-->\r\n      <div class=\"row\" *ngIf=\"data.isBackBefore\"><!-- ROW 1 A-->\r\n        <div class=\"col\"><!-- COL 1-->\r\n          <app-odd-form [title]=\"'Back Odds'\"\r\n                        (oddsPointEmitter)=\"updateBackOdds($event)\">\r\n          </app-odd-form>\r\n        </div><!-- /COL 1-->\r\n        <div class=\"col\"><!-- COL 2-->\r\n          <app-odd-form [title]=\"'Lay Odds'\"\r\n                        (oddsPointEmitter)=\"updateLayOdds($event)\">\r\n          </app-odd-form>\r\n        </div><!-- /COL 2-->\r\n      </div><!-- /ROW 1 A-->\r\n      <div class=\"row\" *ngIf=\"!data.isBackBefore\"><!-- ROW 1 B-->\r\n        <div class=\"col\"><!-- COL 2-->\r\n          <app-odd-form [title]=\"'Lay Odds'\"\r\n                        (oddsPointEmitter)=\"updateLayOdds($event)\">\r\n          </app-odd-form>\r\n        </div><!-- /COL 2-->\r\n        <div class=\"col\"><!-- COL 1-->\r\n          <app-odd-form [title]=\"'Back Odds'\"\r\n                        (oddsPointEmitter)=\"updateBackOdds($event)\">\r\n          </app-odd-form>\r\n        </div><!-- /COL 1-->\r\n      </div><!-- /ROW 1 B-->\r\n      <div class=\"row\"><!-- ROW 2-->\r\n        <div class=\"col\" *ngIf=\"data.isBackBefore\"><!-- COL 1-->\r\n          <div class=\"form-group\">\r\n            <label for=\"stake\">Stake</label>\r\n            <input type=\"number\"\r\n                   class=\"form-control\"\r\n                   id=\"stake\"\r\n                   autocomplete=\"off\"\r\n                   placeholder=\"Stake €\"\r\n                   [(ngModel)]=\"data.stakeBack\"\r\n                   name=\"stake\"\r\n                   (input)=\"inputChange()\">\r\n          </div>\r\n        </div><!-- /COL 1-->\r\n        <div class=\"col\" *ngIf=\"!data.isBackBefore\"><!-- COL 2-->\r\n          <div class=\"form-group\">\r\n            <label for=\"bank\">Bank</label>\r\n            <input type=\"number\"\r\n                   class=\"form-control\"\r\n                   id=\"bank\"\r\n                   autocomplete=\"off\"\r\n                   placeholder=\"Bank €\"\r\n                   [(ngModel)]=\"data.bank\"\r\n                   name=\"layOdds\"\r\n                   (input)=\"inputChange()\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"liability\">Or Liability</label>\r\n            <input type=\"number\"\r\n                   class=\"form-control\"\r\n                   id=\"liability\"\r\n                   autocomplete=\"off\"\r\n                   placeholder=\"Liability €\"\r\n                   [(ngModel)]=\"data.liability\"\r\n                   name=\"liability\" (input)=\"inputChange()\" >\r\n          </div>\r\n        </div><!-- /COL 2-->\r\n      </div><!-- /ROW 2-->\r\n      <div *ngIf=\"data.isValid\">\r\n        <div class=\"row\"><!-- ROW 3-->\r\n          <div class=\"col justify-content-left align-items-baseline \"><!-- COL 1-->\r\n            <h4 class=\"grid-margin\">Bets:</h4>\r\n            <div *ngIf=\"data.isBackBefore\">\r\n              <app-bets-formatter [type]=\"'back'\"\r\n                                  [title]=\"'Back'\"\r\n                                  [odds]=\"data.backOdds\"\r\n                                  [stake]=\"data.stakeBack\"\r\n                                  [toWin]=\"data.winBack\">\r\n              </app-bets-formatter>\r\n              <app-bets-formatter [type]=\"'lay'\"\r\n                                  [title]=\"'Lay'\"\r\n                                  [odds]=\"data.layOdds\"\r\n                                  [bank]=\"data.bank\"\r\n                                  [liability]=\"data.liability\">\r\n              </app-bets-formatter>\r\n            </div>\r\n            <div *ngIf=\"!data.isBackBefore\">\r\n              <app-bets-formatter [type]=\"'lay'\"\r\n                                  [title]=\"'Lay'\"\r\n                                  [odds]=\"data.layOdds\"\r\n                                  [bank]=\"data.bank\"\r\n                                  [liability]=\"data.liability\">\r\n              </app-bets-formatter>\r\n              <app-bets-formatter [type]=\"'back'\"\r\n                                  [title]=\"'Back'\"\r\n                                  [odds]=\"data.backOdds\"\r\n                                  [stake]=\"data.stakeBack\"\r\n                                  [toWin]=\"data.winBack\">\r\n              </app-bets-formatter>\r\n            </div>\r\n          </div><!-- /COL 1-->\r\n        </div><!-- /ROW 3-->\r\n        <div class=\"row\"><!-- ROW 4-->\r\n          <div class=\"col justify-content-left align-items-center \"><!-- COL 1-->\r\n            <h4 class=\"grid-margin\">Net:</h4>\r\n            <h5 [ngClass]=\" [data.net>=0? 'text-success' : 'text-danger']\">{{data.net | currency}}</h5>\r\n            <p class=\"text-warning\" *ngIf=\"data.commissionPaid>0\">Commission: (-{{data.commissionPaid| currency}})</p>\r\n          </div>\r\n          <div class=\"col justify-content-left align-items-center \"><!-- COL 1-->\r\n            <h4 class=\"grid-margin\">Rating:</h4>\r\n            <h5 [ngClass]=\" [data.rating>=1? 'text-success' : 'text-danger']\">{{data.rating | percent:'0.02'}}</h5>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n  </div><!-- /BODY -->\r\n  <div class=\"card-footer\"><!-- FOOTER -->\r\n    <div class=\"d-flex flex-row-reverse\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resetData()\">Reset</button>\r\n    </div>\r\n  </div><!-- / FOOTER -->\r\n</div>\r\n";
      /***/
    }
  }]);
})();