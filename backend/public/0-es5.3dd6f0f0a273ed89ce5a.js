(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
    /***/
    "+5DZ":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/entry/entry-main.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function DZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-7\">\r\n    <app-loading-cards *ngIf=\"(isLoadingAllEntry$ | async).isLoading\"></app-loading-cards>\r\n    <app-entry-list *ngIf=\"(isLoadingAllEntry$ | async).isLoadingSuccess\"\r\n                    [entries]=\"allEntries$ | async\"\r\n                    [selectedEntryId]=\"selectedEntryId$ | async\">\r\n    </app-entry-list>\r\n\r\n    <div *ngIf=\"(selectedEntry$ | async)\" class=\"mt-2\">\r\n      <app-entry-detail [bets]=\"(selectedEntry$ | async).entry.bets\"></app-entry-detail>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <app-entry-create [selectedEntry$]=\"selectedEntry$\">\r\n    </app-entry-create>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "0akk":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/entry/components/entry-create/entry-create.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function akk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">{{data.create? 'Create' : 'Update'}} Entry</h6>\r\n    </div>\r\n  </div>\r\n  <!-- BODY -->\r\n  <div class=\"card-body\">\r\n\r\n    <form ngForm *ngIf=\"bug\">\r\n      <div class=\"form-group\">\r\n        <label for=\"entryName\" class=\"text-gray\">Entry Name</label>\r\n        <input class=\"form-control\"\r\n               id=\"entryName\"\r\n               type=\"text\"\r\n               placeholder=\"Entry Name\"\r\n               name=\"entryName\"\r\n               [(ngModel)]=\"data.name\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <textarea class=\"form-control\"\r\n                  id=\"description\"\r\n                  rows=\"5\"\r\n                  placeholder=\"Description\"\r\n                  name=\"description\"\r\n                  [(ngModel)]=\"data.description\">\r\n\r\n        </textarea>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"col\">\r\n        <div class=\"d-flex justify-content-around align-items-baseline mt-2 mb-2\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addEntry()\">+ Entry</button>\r\n        </div>\r\n\r\n        <ul class=\"list-group mt-2\">\r\n          <li class=\"list-group-item\" *ngFor=\"let bet of bets, index as i\">\r\n            <h5> {{i+1}}) Bets</h5>\r\n\r\n            <app-options-selectors [title]=\"'Entry Is Back or Lay?'\"\r\n                                   [option]=\"bet.entry.isBack\"\r\n                                   [options]=\"['Back', 'Lay']\"\r\n                                   (isOptionEmitter)=\"updateIsBackEntry($event, i)\">\r\n            </app-options-selectors>\r\n\r\n            <app-options-selectors [title]=\"'Have Profit Exit?'\"\r\n                                   [option]=\"bet.haveProfit\"\r\n                                   [options]=\"['Yes', 'No']\"\r\n                                   (isOptionEmitter)=\"updateHaveExit($event, i, true)\">\r\n            </app-options-selectors>\r\n\r\n            <app-options-selectors [title]=\"'Have Loss Exit?'\"\r\n                                   [option]=\"bet.haveLoss\"\r\n                                   [options]=\"['Yes', 'No']\"\r\n                                   (isOptionEmitter)=\"updateHaveExit($event, i, false)\">\r\n            </app-options-selectors>\r\n\r\n            <div class=\"col\">\r\n\r\n\r\n\r\n\r\n              <ul class=\"list-group mt-2\">\r\n                <li class=\"list-group-item\">\r\n                  <!-- ENTRY -->\r\n                  <h5> {{i+1}}) Entry</h5>\r\n                  <app-bets-form [isBack]=\"bet.entry.isBack\"\r\n                                 [isUpdate]=\"true\"\r\n                                 [stake]=\"bet.entry.stake\"\r\n                                 [odds]=\"bet.entry.odds\"\r\n                                 [bank]=\"bet.entry.bank\"\r\n                                 [liability]=\"bet.entry.liability\"\r\n                                 (betsFormEmitter)=\"updateOdds($event, i,true, false)\">\r\n                  </app-bets-form>\r\n                  <label for=\"timeEntry{{i}}\">Time limit [minute]</label>\r\n                  <input type=\"number\"\r\n                         class=\"form-control\"\r\n                         id=\"timeEntry{{i}}\"\r\n                         [(ngModel)]=\"bet.entry.timeLimit\"\r\n                         name=\"timeEntry{{i}}\"\r\n                         step=\"1\">\r\n                  <app-options-selectors [title]=\"'Up or Down?'\"\r\n                                         [option]=\"bet.entry.isUp\"\r\n                                         [options]=\"['Up', 'Down']\"\r\n                                         (isOptionEmitter)=\"updateIsUp($event, i, true, false)\">\r\n                  </app-options-selectors>\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <div class=\"row\">\r\n                    <!-- PROFIT EXIT -->\r\n                    <div class=\"col\"  *ngIf=\"bet.haveProfit\">\r\n                      <h5 class=\"text-success\"> {{i+1}}) Profit Exit</h5>\r\n                      <app-bets-form [isBack]=\"bet.profitExit.isBack\"\r\n                                     [isUpdate]=\"true\"\r\n                                     [stake]=\"bet.profitExit.stake\"\r\n                                     [odds]=\"bet.profitExit.odds\"\r\n                                     [bank]=\"bet.profitExit.bank\"\r\n                                     [liability]=\"bet.profitExit.liability\"\r\n                                     (betsFormEmitter)=\"updateOdds($event, i,false, true)\">\r\n                      </app-bets-form>\r\n                      <label for=\"timeProfit{{i}}\">Time limit [minute]</label>\r\n                      <input type=\"number\"\r\n                             class=\"form-control\"\r\n                             id=\"timeProfit{{i}}\"\r\n                             [(ngModel)]=\"bet.profitExit.timeLimit\"\r\n                             name=\"timeProfit{{i}}\"\r\n                             step=\"1\">\r\n                      <app-options-selectors [title]=\"'Up or Down?'\"\r\n                                             [option]=\"bet.profitExit.isUp\"\r\n                                             [options]=\"['Up', 'Down']\"\r\n                                             (isOptionEmitter)=\"updateIsUp($event, i, false, true)\">\r\n                      </app-options-selectors>\r\n                    </div>\r\n                    <!-- LOSS EXIT -->\r\n                    <div class=\"col\" *ngIf=\"bet.haveLoss\">\r\n                      <h5 class=\"text-danger\"> {{i+1}}) Loss Exit</h5>\r\n                      <app-bets-form [isBack]=\"bet.lossExit.isBack\"\r\n                                     [isUpdate]=\"true\"\r\n                                     [stake]=\"bet.lossExit.stake\"\r\n                                     [odds]=\"bet.lossExit.odds\"\r\n                                     [bank]=\"bet.lossExit.bank\"\r\n                                     [liability]=\"bet.lossExit.liability\"\r\n                                     (betsFormEmitter)=\"updateOdds($event, i,false, false)\">\r\n                      </app-bets-form>\r\n                      <label for=\"timeExit{{i}}\">Time limit [minute]</label>\r\n                      <input type=\"number\"\r\n                             class=\"form-control\"\r\n                             id=\"timeExit{{i}}\"\r\n                             [(ngModel)]=\"bet.lossExit.timeLimit\"\r\n                             name=\"timeExit{{i}}\"\r\n                             step=\"1\">\r\n                      <app-options-selectors [title]=\"'Up or Down?'\"\r\n                                             [option]=\"bet.lossExit.isUp\"\r\n                                             [options]=\"['Up', 'Down']\"\r\n                                             (isOptionEmitter)=\"updateIsUp($event, i, false, false)\">\r\n                      </app-options-selectors>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <button type=\"button\" class=\"btn btn-xs btn-outline-danger mt-2 mb-2\" (click)=\"removeEntry(bet.id)\" [disabled]=\"bets.length===1\">x</button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- FOOTER -->\r\n  <div class=\"card-footer\">\r\n    <button type=\"button\"\r\n            class=\"btn btn-icon-text\"\r\n            [ngClass]=\"data.create? 'btn-primary' : 'btn-light'\"\r\n            (click)=\"submit()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"save\" appFeatherIcon></i>\r\n      {{data.create? 'Create' : 'Update'}}\r\n    </button>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "4NnC":
    /*!********************************!*\
      !*** ./src/app/model/sport.ts ***!
      \********************************/

    /*! exports provided: sport */

    /***/
    function NnC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "sport", function () {
        return sport;
      });

      var sport = ['TENNIS', 'FOOTBALL', 'HORSE RACING'];
      /***/
    },

    /***/
    "5Mzo":
    /*!**************************************************************************!*\
      !*** ./src/app/features/study/new/rule/rule-edit/rule-edit.component.ts ***!
      \**************************************************************************/

    /*! exports provided: RuleEditComponent */

    /***/
    function Mzo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RuleEditComponent", function () {
        return RuleEditComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rule_edit_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rule-edit.component.html */
      "vKPq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _model_newStudy_rule_rules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../model/newStudy/rule/rules */
      "zZp8");

      var RuleEditComponent = /*#__PURE__*/function () {
        function RuleEditComponent(fb) {
          _classCallCheck(this, RuleEditComponent);

          this.fb = fb;
          this.defaultActive = [1];
          this.ruleForm = {
            name: '',
            rule: []
          };
        }

        _createClass(RuleEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.myForm = this.fb.group({
              name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              rule: this.fb.array([this.generateNewRule(new _model_newStudy_rule_rules__WEBPACK_IMPORTED_MODULE_4__["Rule"]('1'))], [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
            }); // this.onChanges();
          }
        }, {
          key: "name",
          get: function get() {
            return this.myForm.get('name');
          }
        }, {
          key: "rules",
          get: function get() {
            return this.myForm.get('rule');
          }
        }, {
          key: "getRuleName",
          value: function getRuleName(i) {
            var rule = this.myForm.get('rule');
            return rule.controls[i].get('name');
          }
        }, {
          key: "addRule",
          value: function addRule() {
            this.rules.push(this.generateNewRule(new _model_newStudy_rule_rules__WEBPACK_IMPORTED_MODULE_4__["Rule"]("".concat(this.rules.length + 1))));
            this.defaultActive.push(1);
          }
        }, {
          key: "deleteRule",
          value: function deleteRule(i) {
            this.rules.removeAt(i);
            this.defaultActive.pop();
          }
        }, {
          key: "resetRule",
          value: function resetRule(i) {
            this.defaultActive[i] = 1;
            this.rules.controls[i].patchValue(new _model_newStudy_rule_rules__WEBPACK_IMPORTED_MODULE_4__["Rule"]("".concat(i + 1)));
          }
        }, {
          key: "upRule",
          value: function upRule(i) {
            if (i > 0) {
              var toCopy = this.rules.controls[i];
              this.rules.insert(i - 1, toCopy);
              this.rules.removeAt(i + 1);
            }
          }
        }, {
          key: "downRule",
          value: function downRule(i) {
            if (i + 1 < this.rules.length) {
              var toCopy = this.generateNewRule(this.rules.controls[i].value);
              this.rules.insert(i + 1, toCopy);
              this.rules.removeAt(i);
            }
          }
        }, {
          key: "duplicateRule",
          value: function duplicateRule(i) {
            this.rules.push(this.generateNewRule(this.rules.at(i).value));
            this.defaultActive.push(1);
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            this.ruleForm.name = this.myForm.value.name;
            this.ruleForm.rule = this.myForm.value.rule;
            console.log(this.ruleForm);
          }
        }, {
          key: "generateNewRule",
          value: function generateNewRule(temp) {
            return this.fb.group({
              name: this.fb.control(temp.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
              selection: this.fb.group({
                options: this.fb.control(temp.selection.options),
                fixed: this.fb.group({
                  fixedOptions: this.fb.control(temp.selection.fixed.fixedOptions),
                  selectionN: this.fb.control(temp.selection.fixed.selectionN),
                  selectionId: this.fb.control(temp.selection.fixed.selectionId),
                  selectionType: this.fb.control(temp.selection.fixed.selectionType)
                }),
                dynamic: this.fb.group({
                  dynamicOptions: this.fb.control(temp.selection.dynamic.dynamicOptions),
                  range: this.fb.group({
                    max: this.fb.control(temp.selection.dynamic.range.max),
                    min: this.fb.control(temp.selection.dynamic.range.min)
                  })
                })
              }),
              bet: this.fb.group({
                options: this.fb.control(temp.bet.options),
                place: this.fb.group({
                  type: this.fb.control(temp.bet.place.type),
                  fixedPriceValue: this.fb.control(temp.bet.place.fixedPriceValue)
                }),
                stake: this.fb.group({
                  type: this.fb.control(temp.bet.stake.type),
                  fixed: this.fb.control(temp.bet.stake.fixed),
                  liability: this.fb.control(temp.bet.stake.fixed),
                  toWin: this.fb.control(temp.bet.stake.fixed)
                }),
                offset: this.fb.group({
                  type: this.fb.control(temp.bet.offset.type),
                  options: this.fb.control(temp.bet.offset.options),
                  value: this.fb.control(temp.bet.offset.value),
                  optionsStop: this.fb.control(temp.bet.offset.optionsStop),
                  valueStop: this.fb.control(temp.bet.offset.valueStop)
                })
              })
            });
          }
        }, {
          key: "onChanges",
          value: function onChanges() {
            this.myForm.get('rule').valueChanges.subscribe(function (x) {
              console.log(x);
            });
          }
        }, {
          key: "placeRelativeFactorChange",
          value: function placeRelativeFactorChange(_ref, ruleId) {
            var target = _ref.target;
            console.log("rule id: ".concat(ruleId, ", ").concat(target.value));
          }
        }]);

        return RuleEditComponent;
      }();

      RuleEditComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      };

      RuleEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-rule-edit',
        template: _raw_loader_rule_edit_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RuleEditComponent);
      /***/
    },

    /***/
    "76V5":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./src/app/features/study/basket/components/basket-create/basket-filter/basket-filter-by-selection-name/basket-filter-by-selection-name.component.ts ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: BasketFilterBySelectionNameComponent */

    /***/
    function V5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketFilterBySelectionNameComponent", function () {
        return BasketFilterBySelectionNameComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basket_filter_by_selection_name_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket-filter-by-selection-name.component.html */
      "zMEb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BasketFilterBySelectionNameComponent = /*#__PURE__*/function () {
        function BasketFilterBySelectionNameComponent() {
          _classCallCheck(this, BasketFilterBySelectionNameComponent);
        }

        _createClass(BasketFilterBySelectionNameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addPlayersFilter",
          value: function addPlayersFilter(event) {}
        }]);

        return BasketFilterBySelectionNameComponent;
      }();

      BasketFilterBySelectionNameComponent.ctorParameters = function () {
        return [];
      };

      BasketFilterBySelectionNameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basket-filter-by-selection-name',
        template: _raw_loader_basket_filter_by_selection_name_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BasketFilterBySelectionNameComponent);
      /***/
    },

    /***/
    "8P1k":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/main-study.component.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function P1k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h4 class=\"mb-3 mb-md-0\">Study</h4>\r\n    <p>Discover db statistics and search runners </p>\r\n  </div>\r\n  <div class=\"d-flex align-items-center flex-wrap text-nowrap\">\r\n    <button type=\"button\" class=\"btn btn-outline-info btn-icon-text mr-2 d-none d-md-block\" (click)=\"refreshStudy()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!-- BREADCRUMB -->\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">BF</a></li>\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/study\">Study</a></li>\r\n  </ol>\r\n</nav>\r\n<!-- /BREADCRUMB -->\r\n\r\n<!-- ROW 1-->\r\n<div class=\"col-12\">\r\n\r\n  <ul ngbNav #defaultNav=\"ngbNav\" [(activeId)]=\"defaultNavActiveId\" class=\"nav-tabs\">\r\n    <li [ngbNavItem]=\"1\">\r\n      <a ngbNavLink>Rule</a>\r\n      <ng-template ngbNavContent>\r\n        <app-rule></app-rule>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"2\">\r\n      <a ngbNavLink>Study-old</a>\r\n      <ng-template ngbNavContent>\r\n        <app-study-main></app-study-main>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"3\">\r\n      <a ngbNavLink>Basket-old</a>\r\n      <ng-template ngbNavContent>\r\n        <app-basket-main></app-basket-main>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"4\">\r\n      <a ngbNavLink>Entry-old</a>\r\n      <ng-template ngbNavContent>\r\n        <app-entry-main></app-entry-main>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"5\">\r\n      <a ngbNavLink>Players-old</a>\r\n      <ng-template ngbNavContent>\r\n        <app-players-main></app-players-main>\r\n      </ng-template>\r\n    </li>\r\n  </ul>\r\n\r\n  <div [ngbNavOutlet]=\"defaultNav\" class=\"border border-top-0 p-3\"></div>\r\n\r\n</div>\r\n<!-- /ROW 1-->\r\n";
      /***/
    },

    /***/
    "8RBA":
    /*!*********************************************************************************************!*\
      !*** ./src/app/features/study/basket/components/basket-details/basket-details.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: BasketDetailsComponent */

    /***/
    function RBA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketDetailsComponent", function () {
        return BasketDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basket_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket-details.component.html */
      "YVsH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var BasketDetailsComponent = /*#__PURE__*/function () {
        function BasketDetailsComponent(store) {
          _classCallCheck(this, BasketDetailsComponent);

          this.store = store;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.label = ['WIN', 'LOSS'];
          this.data = [];
        }

        _createClass(BasketDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.marketsBasketList$.subscribe(function (data) {
              if (data) {
                var win = data.reduce(function (acc, val) {
                  return val.marketInfo.marketInfo.winner !== undefined && val.selection.id === val.marketInfo.marketInfo.winner.id ? acc += 1 : acc;
                }, 0);
                _this.data = [win, data.length - win];
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }]);

        return BasketDetailsComponent;
      }();

      BasketDetailsComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      BasketDetailsComponent.propDecorators = {
        marketsBasketList$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      BasketDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basket-details',
        template: _raw_loader_basket_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BasketDetailsComponent);
      /***/
    },

    /***/
    "8xko":
    /*!*******************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/basket/components/basket-list/basket-list.component.html ***!
      \*******************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xko(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">All Basket</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n\r\n    <div class=\"d-flex justify-content-end align-items-center\">\r\n      <form class=\"form-group mr-2\" #searchFormRunner=\"ngForm\">\r\n        <div class=\"row\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            placeholder=\"Search...\"\r\n            (keyup)=\"updateFilter($event)\"\r\n          />\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n\r\n    <ngx-datatable\r\n      class=\"dark\"\r\n      style=\"height: 800px\"\r\n      [rows]=\"rows\"\r\n      [columns]=\"columns\"\r\n      [columnMode]=\"ColumnMode.force\"\r\n      [headerHeight]=\"40\"\r\n      [footerHeight]=\"50\"\r\n      [limit]=\"10\"\r\n      [scrollbarV]=\"true\"\r\n      [scrollbarH]=\"false\"\r\n      [rowHeight]=\"50\"\r\n      [reorderable]=\"true\"\r\n      [sorts]=\"[{prop: 'lastUpdate', dir: 'desc'}]\">\r\n\r\n      <ngx-datatable-column name=\"Date\" prop=\"lastUpdate\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <p>{{ value | date:'M/d/yy, H:mm' }}</p>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Name\" prop=\"basket.name\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <p>{{ value }}</p>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Selection\" prop=\"basket.size\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <p>{{value}}</p>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Tools\" prop=\"\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <div class=\"d-flex justify-content-end align-items-center\">\r\n\r\n            <button type=\"button\" class=\"btn btn-icon btn-outline-success mr-2\" (click)=\"onDuplicateClick(value)\">\r\n              <i class=\"feather icon-copy\"></i>\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-icon mr-2\" [ngClass]=\"selectedBasketId === value._id ? 'btn-info' : 'btn-outline-info'\" (click)=\"onClick(value._id)\">\r\n              <i class=\"feather icon-eye\"></i>\r\n            </button>\r\n\r\n            <app-delete-modal [type]=\"'Basket'\"\r\n                              [id]=\"value._id\"\r\n                              [name]=\"value.basket.name\"\r\n                              (deleteEmitter)=\"deleteModal($event)\">\r\n            </app-delete-modal>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n    </ngx-datatable>\r\n\r\n  </div>\r\n  <div class=\"card footer\">\r\n    <div class=\"d-flex flex-row-reverse\">\r\n      <button type=\"button\"\r\n              class=\"btn btn-icon btn-secondary mr-2\"\r\n              (click)=\"reset()\">\r\n        <i class=\"feather icon-rotate-cw\"></i>\r\n        Reset\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "93iE":
    /*!*******************************************************************************************************************************!*\
      !*** ./src/app/features/study/study/components/study-comparator/study-comparator-report/study-comparator-report.component.ts ***!
      \*******************************************************************************************************************************/

    /*! exports provided: StudyComparatorReportComponent */

    /***/
    function iE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyComparatorReportComponent", function () {
        return StudyComparatorReportComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_study_comparator_report_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./study-comparator-report.component.html */
      "cNM7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var StudyComparatorReportComponent = /*#__PURE__*/function () {
        function StudyComparatorReportComponent() {
          _classCallCheck(this, StudyComparatorReportComponent);
        }

        _createClass(StudyComparatorReportComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return StudyComparatorReportComponent;
      }();

      StudyComparatorReportComponent.ctorParameters = function () {
        return [];
      };

      StudyComparatorReportComponent.propDecorators = {
        strategyReport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        strategyPie: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      StudyComparatorReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-study-comparator-report',
        template: _raw_loader_study_comparator_report_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], StudyComparatorReportComponent);
      /***/
    },

    /***/
    "97Bk":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/study/components/study-create/study-create.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Bk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">{{data.create? 'Create' : 'Update'}} Study</h6>\r\n    </div>\r\n  </div>\r\n  <!-- BODY -->\r\n  <div class=\"card-body\">\r\n\r\n    <form ngForm>\r\n      <div class=\"form-group\">\r\n        <label for=\"studyName\" class=\"text-gray\">Study Name</label>\r\n        <input class=\"form-control\"\r\n               id=\"studyName\"\r\n               type=\"text\"\r\n               placeholder=\"Study Name\"\r\n               name=\"studyName\"\r\n               [(ngModel)]=\"data.name\">\r\n      </div>\r\n\r\n      <div class=\"form-group\" >\r\n        <label for=\"description\" class=\"text-gray\">Description</label>\r\n        <textarea class=\"form-control\"\r\n                  id=\"description\"\r\n                  rows=\"5\"\r\n                  placeholder=\"Description\"\r\n                  name=\"description\"\r\n                  [(ngModel)]=\"data.description\">\r\n\r\n        </textarea>\r\n      </div>\r\n\r\n      <div *ngIf=\"validBug\">\r\n\r\n        <app-list-selection-form [type]=\"'strategy'\"\r\n                                 [selectedId]=\"data.strategyId\"\r\n                                 (listSelectedEmitter)=\"setStrategy($event)\">\r\n        </app-list-selection-form>\r\n\r\n        <app-list-selection-form [type]=\"'basket'\"\r\n                                 [selectedId]=\"options.element.baskets[0]\"\r\n                                 (listSelectedEmitter)=\"setBasket($event)\">\r\n        </app-list-selection-form>\r\n\r\n        <div class=\"col\" *ngIf=\"options.element.baskets.length\">\r\n          <app-basket-active-filter [bspFilter]=\"returnBasketFilter(options.element.baskets[0]) | async\"\r\n                                    [haveRemove]=\"false\">\r\n          </app-basket-active-filter>\r\n          <h5 class=\"mt-1\"> Basket Size: {{returnBasketSize(options.element.baskets[0]) | async}}</h5>\r\n        </div>\r\n\r\n        <app-list-selection-form [type]=\"'entry'\"\r\n                                 [selectedId]=\"options.element.entry[0]\"\r\n                                 (listSelectedEmitter)=\"setEntry($event)\">\r\n        </app-list-selection-form>\r\n\r\n        <div *ngIf=\"options.element.entry.length\">\r\n          <app-entry-detail [bets]=\"returnBets(options.element.entry[0]) | async\">\r\n          </app-entry-detail>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n  <!-- FOOTER -->\r\n  <div class=\"card-footer\">\r\n    <button type=\"button\"\r\n            class=\"btn btn-icon-text\"\r\n            [ngClass]=\"data.create? 'btn-primary' : 'btn-light'\"\r\n            (click)=\"submit()\"\r\n            [disabled]=\"!options.element.entry.length ||  !options.element.baskets.length || !data.strategyId\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"save\" appFeatherIcon></i>\r\n      {{data.create? 'Create' : 'Update'}}\r\n    </button>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "AC1H":
    /*!***************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/basket/components/basket-create/basket-active-filter/basket-active-filter.component.html ***!
      \***************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AC1H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ul class=\"list-group\">\r\n  <li class=\"list-group-item\" *ngFor=\"let bsp of bspFilter, index as i \">\r\n    <div class=\"row\">\r\n      <div class=\"col-10\">\r\n        <h6>{{i+1}}) SELECTION BSP FILTER</h6>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <app-bsp-odd  [text]=\"'min'\"\r\n                          [bspOdd]=\"bsp.props.odds.min\">\r\n            </app-bsp-odd>\r\n          </div>\r\n          <div class=\"col\">\r\n            <app-bsp-odd  [text]=\"'MAX'\"\r\n                          [bspOdd]=\"bsp.props.odds.max\">\r\n            </app-bsp-odd>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-2\" *ngIf=\"haveRemove\">\r\n        <button type=\"button\" class=\"btn-xs btn-danger mt-2\" (click)=\"removeFilter(bsp.id)\">X</button>\r\n      </div>\r\n    </div>\r\n  </li>\r\n  <li class=\"list-group-item\" *ngFor=\"let players of playersFilter, index as i \">\r\n    <div class=\"row\" placement=\"left\" [ngbTooltip]=\"playerFilterTooltip\">\r\n      <div class=\"col-10\">\r\n        <h6 class=\"text-warning\">{{i+1}}) PLAYERS FILTER</h6>\r\n        <h5> {{players | playersFilterNamePipe: store}}</h5>\r\n      </div>\r\n      <div class=\"col-2\" *ngIf=\"haveRemove\">\r\n        <button type=\"button\" class=\"btn-xs btn-danger mt-2\" (click)=\"removePlayerFilter(players)\">X</button>\r\n      </div>\r\n    </div>\r\n  </li>\r\n</ul>\r\n\r\n<ng-template #playerFilterTooltip>\r\n</ng-template>\r\n\r\n";
      /***/
    },

    /***/
    "C/3L":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/features/study/basket/components/basket-create/basket-filter/basket-filter-by-odds/basket-filter-by-odds.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: BasketFilterByOddsComponent */

    /***/
    function C3L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketFilterByOddsComponent", function () {
        return BasketFilterByOddsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basket_filter_by_odds_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket-filter-by-odds.component.html */
      "CzXJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BasketFilterByOddsComponent = /*#__PURE__*/function () {
        function BasketFilterByOddsComponent() {
          _classCallCheck(this, BasketFilterByOddsComponent);

          this.oddEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.odds = {
            min: 1.01,
            max: 1.01
          };
          this.valid = true;
        }

        _createClass(BasketFilterByOddsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.min && this.max) {
              this.odds.min = this.min;
              this.odds.max = this.max;
            } else {
              this.odds = {
                min: 1.01,
                max: 1.01
              };
            }

            this.emitOdds();
          }
        }, {
          key: "emitOdds",
          value: function emitOdds() {
            this.checkValid();

            if (this.valid) {
              this.oddEmitter.emit([this.odds]);
            } else {
              this.oddEmitter.emit([null]);
            }
          }
        }, {
          key: "setMin",
          value: function setMin(event) {
            this.odds.min = event[0];
            this.emitOdds();
          }
        }, {
          key: "setMax",
          value: function setMax(event) {
            this.odds.max = event[0];
            this.emitOdds();
          }
        }, {
          key: "checkValid",
          value: function checkValid() {
            this.valid = this.odds.min <= this.odds.max;
          }
        }]);

        return BasketFilterByOddsComponent;
      }();

      BasketFilterByOddsComponent.ctorParameters = function () {
        return [];
      };

      BasketFilterByOddsComponent.propDecorators = {
        oddEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      BasketFilterByOddsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basket-filter-by-odds',
        template: _raw_loader_basket_filter_by_odds_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BasketFilterByOddsComponent);
      /***/
    },

    /***/
    "Cr2J":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/study/study-main.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Cr2J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- LIST AND CREATE -->\r\n<div class=\"row grid-margin\">\r\n  <div class=\"col-8\">\r\n    <app-loading-cards *ngIf=\"(isLoadingAllStudy$ | async).isLoading\"></app-loading-cards>\r\n    <app-study-list *ngIf=\"(isLoadingAllStudy$ | async).isLoadingSuccess\"\r\n                    [studies]=\"allStudies$ | async\"\r\n                    [selectedStudyId]=\"selectedStudyId$ | async\"\r\n                    [compareList]=\"compareList$ | async\">\r\n    </app-study-list>\r\n\r\n  </div>\r\n  <div class=\"col\">\r\n    <app-study-create [selectedStudy$]=\"selectedStudy$\">\r\n    </app-study-create>\r\n  </div>\r\n</div>\r\n\r\n<!-- SELECTED STUDY -->\r\n<app-loading-cards *ngIf=\"(isLoadingAllStudy$ | async).isLoading\r\n                          || (isLoadingSelectedStudyTrades$ | async).isLoading\">\r\n</app-loading-cards>\r\n\r\n<div class=\"col\" *ngIf=\"(isLoadingAllStudy$ | async).isLoadingSuccess\r\n                        && (selectedStudyId$ | async)\r\n                        && (isLoadingSelectedStudyTrades$ | async).isLoadingSuccess\r\n                        && visibleReport\">\r\n  <ul ngbNav #defaultNav=\"ngbNav\" [(activeId)]=\"defaultNavActiveId\" class=\"nav-tabs\">\r\n    <li [ngbNavItem]=\"1\">\r\n      <h5>\r\n        <a ngbNavLink>Study Report</a>\r\n      </h5>\r\n      <ng-template ngbNavContent>\r\n      </ng-template>\r\n    </li>\r\n\r\n    <li [ngbNavItem]=\"2\">\r\n      <h5>\r\n        <a ngbNavLink>Entry Details</a>\r\n      </h5>\r\n      <ng-template ngbNavContent>\r\n        <div class=\"col grid-margin\">\r\n          <!-- DATATABLE FOR ALL TRADES-->\r\n          <app-trades-datatable [trades$]=\"selectedStudyTrades$\"\r\n                                [selectedMarketId]=\"selectedStudyMarketId$ | async\">\r\n          </app-trades-datatable>\r\n        </div>\r\n\r\n        <div class=\"col grid-margin\">\r\n          <!-- CHARTS FOR SELECTED TRADE MARKET -->\r\n          <app-loading-cards *ngIf=\"(isLoadingSelectedStudyMarket$ | async).isLoading\"></app-loading-cards>\r\n          <app-study-markets-selected-detail *ngIf=\"(isLoadingSelectedStudyMarket$ | async).isLoadingSuccess && (selectedStudyMarketId$ | async)\"\r\n                                             [selectedMarketData]=\"selectedStudyMarket$ | async\"\r\n                                             [detail]=\"true\"\r\n                                             [selectedTrades]=\"selectedTrades\"\r\n                                             [haveTrades]=\"true\"\r\n                                             [trade]=\"selectedStudyMarketTrade$ | async\">\r\n          </app-study-markets-selected-detail>\r\n        </div>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"3\">\r\n      <h5>\r\n        <a ngbNavLink>Montecarlo</a>\r\n      </h5>\r\n      <ng-template ngbNavContent>\r\n        <app-montecarlo-strategy [trades]=\"selectedStudyTrades$ | async\">\r\n        </app-montecarlo-strategy>\r\n      </ng-template>\r\n    </li>\r\n    <li [ngbNavItem]=\"4\">\r\n      <h5>\r\n        <a ngbNavLink>MM</a>\r\n      </h5>\r\n      <ng-template ngbNavContent>\r\n        <app-mm [trades]=\"selectedStudyTrades$ | async\"\r\n                [strategyReport]=\"selectedStrategyReport\">\r\n        </app-mm>\r\n      </ng-template>\r\n    </li>\r\n  </ul>\r\n  <div [ngbNavOutlet]=\"defaultNav\" class=\"border border-top-0 p-3\"></div>\r\n</div>\r\n\r\n\r\n<!-- COMPARE STUDY -->\r\n<app-loading-cards class=\"mt-2\" *ngIf=\"(isLoadingCompare$ | async).isLoading\"></app-loading-cards>\r\n<div class=\"col\" *ngIf=\"(isLoadingCompare$ | async).isLoadingSuccess && (comparedStudy$ | async).length\">\r\n\r\n  <app-study-comparator class=\"mb-2\" [studyList$]=\"comparedStudy$\">\r\n  </app-study-comparator>\r\n\r\n  <app-loading-cards class=\"mt-2\" *ngIf=\"(isLoadingSelectedStudyMarket$ | async).isLoading\"></app-loading-cards>\r\n  <app-study-markets-selected-detail class=\"mt-2\" *ngIf=\"(isLoadingSelectedStudyMarket$ | async).isLoadingSuccess && (selectedStudyMarketId$ | async)\"\r\n                                     [selectedMarketData]=\"selectedStudyMarket$ | async\"\r\n                                     [detail]=\"true\"\r\n                                     [selectedTrades]=\"selectedTrades\"\r\n                                     [haveTrades]=\"true\"\r\n                                     [trade]=\"selectedStudyMarketTrade$ | async\">\r\n  </app-study-markets-selected-detail>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "Cw9e":
    /*!************************************************!*\
      !*** ./src/app/features/study/study.module.ts ***!
      \************************************************/

    /*! exports provided: StudyModule */

    /***/
    function Cw9e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyModule", function () {
        return StudyModule;
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


      var _main_study_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./main-study.component */
      "MrOE");
      /* harmony import */


      var _basket_components_basket_create_basket_active_filter_basket_active_filter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./basket/components/basket-create/basket-active-filter/basket-active-filter.component */
      "ImVi");
      /* harmony import */


      var _basket_components_basket_create_basket_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./basket/components/basket-create/basket-create.component */
      "jGNW");
      /* harmony import */


      var _basket_components_basket_details_basket_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./basket/components/basket-details/basket-details.component */
      "8RBA");
      /* harmony import */


      var _basket_basket_main_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./basket/basket-main.component */
      "DSwm");
      /* harmony import */


      var _basket_components_basket_markets_basket_markets_list_basket_markets_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./basket/components/basket-markets/basket-markets-list/basket-markets-list.component */
      "Ra1o");
      /* harmony import */


      var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ngx-custom-validators */
      "uxn7");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "ZOsW");
      /* harmony import */


      var _basket_components_basket_create_basket_filter_basket_filter_by_date_basket_filter_by_date_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./basket/components/basket-create/basket-filter/basket-filter-by-date/basket-filter-by-date.component */
      "rOhS");
      /* harmony import */


      var _basket_components_basket_create_basket_filter_basket_filter_by_odds_basket_filter_by_odds_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./basket/components/basket-create/basket-filter/basket-filter-by-odds/basket-filter-by-odds.component */
      "C/3L");
      /* harmony import */


      var _basket_components_basket_create_basket_filter_basket_filter_by_selection_name_basket_filter_by_selection_name_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./basket/components/basket-create/basket-filter/basket-filter-by-selection-name/basket-filter-by-selection-name.component */
      "76V5");
      /* harmony import */


      var _basket_components_basket_create_basket_filter_basket_filter_event_name_basket_filter_event_name_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./basket/components/basket-create/basket-filter/basket-filter-event-name/basket-filter-event-name.component */
      "m8Jv");
      /* harmony import */


      var _basket_components_basket_list_basket_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./basket/components/basket-list/basket-list.component */
      "KEe6");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _entry_entry_main_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./entry/entry-main.component */
      "zvL+");
      /* harmony import */


      var _entry_components_entry_create_entry_create_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./entry/components/entry-create/entry-create.component */
      "gjWY");
      /* harmony import */


      var _entry_components_entry_list_entry_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./entry/components/entry-list/entry-list.component */
      "sNFh");
      /* harmony import */


      var _study_study_main_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./study/study-main.component */
      "vWsQ");
      /* harmony import */


      var _study_components_study_create_study_create_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./study/components/study-create/study-create.component */
      "dZCD");
      /* harmony import */


      var _study_components_study_list_study_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./study/components/study-list/study-list.component */
      "limW");
      /* harmony import */


      var _entry_components_entry_detail_entry_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./entry/components/entry-detail/entry-detail.component */
      "l/E0");
      /* harmony import */


      var _study_components_study_comparator_study_comparator_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./study/components/study-comparator/study-comparator.component */
      "a7PZ");
      /* harmony import */


      var _study_components_study_comparator_study_comparator_report_study_comparator_report_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./study/components/study-comparator/study-comparator-report/study-comparator-report.component */
      "93iE");
      /* harmony import */


      var _players_players_main_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./players/players-main.component */
      "czgd");
      /* harmony import */


      var _players_components_players_list_players_list_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./players/components/players-list/players-list.component */
      "ymH9");
      /* harmony import */


      var _players_components_players_create_players_create_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./players/components/players-create/players-create.component */
      "m6kr");
      /* harmony import */


      var _new_rule_rule_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! ./new/rule/rule.component */
      "wtyO");
      /* harmony import */


      var _new_rule_rule_list_rule_list_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! ./new/rule/rule-list/rule-list.component */
      "X6/f");
      /* harmony import */


      var _new_rule_rule_edit_rule_edit_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! ./new/rule/rule-edit/rule-edit.component */
      "5Mzo"); // ROUTER


      var routes = [{
        path: '',
        component: _main_study_component__WEBPACK_IMPORTED_MODULE_11__["MainStudyComponent"]
      }];

      var StudyModule = /*#__PURE__*/_createClass(function StudyModule() {
        _classCallCheck(this, StudyModule);
      });

      StudyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_main_study_component__WEBPACK_IMPORTED_MODULE_11__["MainStudyComponent"], _basket_components_basket_create_basket_active_filter_basket_active_filter_component__WEBPACK_IMPORTED_MODULE_12__["BasketActiveFilterComponent"], _basket_components_basket_create_basket_create_component__WEBPACK_IMPORTED_MODULE_13__["BasketCreateComponent"], _basket_basket_main_component__WEBPACK_IMPORTED_MODULE_15__["BasketMainComponent"], _basket_components_basket_markets_basket_markets_list_basket_markets_list_component__WEBPACK_IMPORTED_MODULE_16__["BasketMarketsListComponent"], _basket_components_basket_create_basket_filter_basket_filter_by_date_basket_filter_by_date_component__WEBPACK_IMPORTED_MODULE_19__["BasketFilterByDateComponent"], _basket_components_basket_create_basket_filter_basket_filter_by_odds_basket_filter_by_odds_component__WEBPACK_IMPORTED_MODULE_20__["BasketFilterByOddsComponent"], _basket_components_basket_create_basket_filter_basket_filter_by_selection_name_basket_filter_by_selection_name_component__WEBPACK_IMPORTED_MODULE_21__["BasketFilterBySelectionNameComponent"], _basket_components_basket_create_basket_filter_basket_filter_event_name_basket_filter_event_name_component__WEBPACK_IMPORTED_MODULE_22__["BasketFilterEventNameComponent"], _basket_components_basket_list_basket_list_component__WEBPACK_IMPORTED_MODULE_23__["BasketListComponent"], _basket_components_basket_details_basket_details_component__WEBPACK_IMPORTED_MODULE_14__["BasketDetailsComponent"], _entry_entry_main_component__WEBPACK_IMPORTED_MODULE_25__["EntryMainComponent"], _entry_components_entry_create_entry_create_component__WEBPACK_IMPORTED_MODULE_26__["EntryCreateComponent"], _entry_components_entry_list_entry_list_component__WEBPACK_IMPORTED_MODULE_27__["EntryListComponent"], _study_study_main_component__WEBPACK_IMPORTED_MODULE_28__["StudyMainComponent"], _study_components_study_create_study_create_component__WEBPACK_IMPORTED_MODULE_29__["StudyCreateComponent"], _study_components_study_list_study_list_component__WEBPACK_IMPORTED_MODULE_30__["StudyListComponent"], _entry_components_entry_detail_entry_detail_component__WEBPACK_IMPORTED_MODULE_31__["EntryDetailComponent"], _study_components_study_comparator_study_comparator_component__WEBPACK_IMPORTED_MODULE_32__["StudyComparatorComponent"], _study_components_study_comparator_study_comparator_report_study_comparator_report_component__WEBPACK_IMPORTED_MODULE_33__["StudyComparatorReportComponent"], _players_players_main_component__WEBPACK_IMPORTED_MODULE_34__["PlayersMainComponent"], _players_components_players_list_players_list_component__WEBPACK_IMPORTED_MODULE_35__["PlayersListComponent"], _players_components_players_create_players_create_component__WEBPACK_IMPORTED_MODULE_36__["PlayersCreateComponent"], _new_rule_rule_component__WEBPACK_IMPORTED_MODULE_37__["RuleComponent"], _new_rule_rule_list_rule_list_component__WEBPACK_IMPORTED_MODULE_38__["RuleListComponent"], _new_rule_rule_edit_rule_edit_component__WEBPACK_IMPORTED_MODULE_39__["RuleEditComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_5__["FeahterIconModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDatepickerModule"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_7__["NgApexchartsModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_8__["ChartsModule"], angular_datatables__WEBPACK_IMPORTED_MODULE_9__["DataTablesModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], ngx_custom_validators__WEBPACK_IMPORTED_MODULE_17__["CustomFormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__["NgSelectModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_24__["NgxDatatableModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"]]
      })], StudyModule);
      /***/
    },

    /***/
    "CzXJ":
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/basket/components/basket-create/basket-filter/basket-filter-by-odds/basket-filter-by-odds.component.html ***!
      \*******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function CzXJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-odd-form [title]=\"'min'\"\r\n                  [odds]=\"odds.min\"\r\n                  (oddsPointEmitter)=\"setMin($event)\">\r\n    </app-odd-form>\r\n  </div>\r\n  <div class=\"col\">\r\n    <app-odd-form [title]=\"'MAX'\"\r\n                  [odds]=\"odds.max\"\r\n                  (oddsPointEmitter)=\"setMax($event)\">\r\n    </app-odd-form>\r\n  </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"!valid\">\r\n  <div class=\"col\">\r\n    <p class=\"text-danger\" >Not valid! min must be >= MAX</p>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "DSwm":
    /*!****************************************************************!*\
      !*** ./src/app/features/study/basket/basket-main.component.ts ***!
      \****************************************************************/

    /*! exports provided: BasketMainComponent */

    /***/
    function DSwm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketMainComponent", function () {
        return BasketMainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basket_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket-main.component.html */
      "lrqc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../store/study/basket/basket.selectors */
      "tRHg");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var BasketMainComponent = /*#__PURE__*/function () {
        function BasketMainComponent(store) {
          _classCallCheck(this, BasketMainComponent);

          this.store = store;
          this.basketBps = {
            time: 0,
            odds: 0
          };
          this.validBsp = false;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        }

        _createClass(BasketMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            // baskets
            this.allBaskets$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_5__["getAllBaskets"]));
            this.isLoadingAllBaskets$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_5__["isLoadingAllBaskets"])); // selected basket

            this.selectedBasket$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedBasket"]));
            this.selectedBasketId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedBasketId"])); // selected basket markets

            this.selectedBasketMarketsList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedBasketMarkets"]));
            this.isLoadingBasketMarkets$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_5__["isLoadingSelectedBasketMarkets"])); // selected basket, selected  market

            this.selectedBasketMarketId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedBasketMarketId"]));
            this.selectedBasketMarketsData$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedBasketMarketPrices"]));
            this.isLoadingSelectedBasketMarket$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_5__["isLoadingBasketMarket"]));
            this.selectedBasketMarketsData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(function (marketData) {
              if (marketData) {
                var runnerId = +marketData.marketOdds.runnerId;
                var selectedRunner = marketData.marketRunners.marketRunners.filter(function (x) {
                  return +x.id === +runnerId;
                })[0];
                _this2.basketBps.time = selectedRunner.inPlayTime;
                _this2.basketBps.odds = selectedRunner.inPlayOdds;
                _this2.validBsp = true;
              } else {
                _this2.validBsp = false;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }]);

        return BasketMainComponent;
      }();

      BasketMainComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      BasketMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basket-main',
        template: _raw_loader_basket_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BasketMainComponent);
      /***/
    },

    /***/
    "Hgp8":
    /*!**************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/basket/components/basket-markets/basket-markets-list/basket-markets-list.component.html ***!
      \**************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hgp8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Basket Markets List</h6>\r\n    </div>\r\n  </div>\r\n  <!-- BODY -->\r\n  <div class=\"card-body\">\r\n\r\n    <form class=\"form-group mr-2\" #searchFormRunner=\"ngForm\">\r\n      <div class=\"row\">\r\n        <input\r\n          class=\"form-control\"\r\n          type=\"text\"\r\n          placeholder=\"Search...\"\r\n          (keyup)=\"updateFilter($event)\"\r\n        />\r\n      </div>\r\n    </form>\r\n\r\n    <ngx-datatable\r\n      class=\"dark\"\r\n      [rows]=\"rows\"\r\n      [columns]=\"columns\"\r\n      [columnMode]=\"ColumnMode.force\"\r\n      [headerHeight]=\"40\"\r\n      [footerHeight]=\"50\"\r\n      [rowHeight]=\"45\"\r\n      [limit]=\"10\"\r\n      [reorderable]=\"true\"\r\n      [sorts]=\"[{prop: 'marketInfo.openDate', dir: 'desc'}]\">\r\n\r\n\r\n      <ngx-datatable-column name=\"Date\" prop=\"marketInfo.openDate\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <p>{{value | date}}</p>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Market\" prop=\"marketInfo\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <a routerLink=\"/markets/detail/{{value.id}}\">{{value.name}}</a>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"SelectionName\" prop=\"selection\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <a routerLink=\"/runners/detail/{{value.id}}\">{{value.name}}</a>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"BSP\" prop=\"selection.inPlayOdds\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <app-bsp-odd [bspOdd]=\"value\"></app-bsp-odd>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Winner\" prop=\"\" orderable=\"true\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <app-winner-formatter *ngIf=\"value.marketInfo.winner.id !== undefined\" [winner]=\"value.selection.id === value.marketInfo.winner?.id\">\r\n          </app-winner-formatter>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"# Of odds\" prop=\"selection.lengthOddsInPlay\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h6> {{value}} </h6>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Tools\" prop=\"\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <button type=\"button\" class=\"btn btn-icon\" [ngClass]=\"selectedBasketMarketId === value.marketInfo.id ? 'btn-info' : 'btn-outline-info'\" (click)=\"onClick(value.marketInfo.id, value.selection.id)\">\r\n            <i class=\"feather icon-eye\"></i>\r\n          </button>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n    </ngx-datatable>\r\n\r\n  </div>\r\n  <!-- FOOTER -->\r\n  <div class=\"card-footer\">\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "ImVi":
    /*!***********************************************************************************************************************!*\
      !*** ./src/app/features/study/basket/components/basket-create/basket-active-filter/basket-active-filter.component.ts ***!
      \***********************************************************************************************************************/

    /*! exports provided: BasketActiveFilterComponent */

    /***/
    function ImVi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketActiveFilterComponent", function () {
        return BasketActiveFilterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basket_active_filter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket-active-filter.component.html */
      "AC1H");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var BasketActiveFilterComponent = /*#__PURE__*/function () {
        function BasketActiveFilterComponent(store) {
          _classCallCheck(this, BasketActiveFilterComponent);

          this.store = store;
          this.removeBSPEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
          this.removePlayersEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        }

        _createClass(BasketActiveFilterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "removeFilter",
          value: function removeFilter(id) {
            this.removeBSPEmitter.emit([id]);
          }
        }, {
          key: "removePlayerFilter",
          value: function removePlayerFilter(id) {
            this.removePlayersEmitter.emit([id]);
          }
        }]);

        return BasketActiveFilterComponent;
      }();

      BasketActiveFilterComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      };

      BasketActiveFilterComponent.propDecorators = {
        removeBSPEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        removePlayersEmitter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }],
        haveRemove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        bspFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        playersFilter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      BasketActiveFilterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basket-active-filter',
        template: _raw_loader_basket_active_filter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BasketActiveFilterComponent);
      /***/
    },

    /***/
    "JJ7+":
    /*!**********************************************************!*\
      !*** ./src/app/model/study/basket/createBasketOption.ts ***!
      \**********************************************************/

    /*! exports provided: CreateBasketOptionClass */

    /***/
    function JJ7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateBasketOptionClass", function () {
        return CreateBasketOptionClass;
      });
      /* harmony import */


      var _filterType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./filterType */
      "tGpA");
      /* harmony import */


      var _sport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../sport */
      "4NnC");

      var CreateBasketOptionClass = /*#__PURE__*/_createClass(function CreateBasketOptionClass() {
        _classCallCheck(this, CreateBasketOptionClass);

        this.createStudy = {
          filters: _filterType__WEBPACK_IMPORTED_MODULE_0__["filterType"],
          selectedFilter: null,
          activeFilter: [],
          sport: _sport__WEBPACK_IMPORTED_MODULE_1__["sport"]
        };
      });
      /***/

    },

    /***/
    "KEe6":
    /*!***************************************************************************************!*\
      !*** ./src/app/features/study/basket/components/basket-list/basket-list.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: BasketListComponent */

    /***/
    function KEe6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketListComponent", function () {
        return BasketListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basket_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket-list.component.html */
      "8xko");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../store/study/basket/basket.actions */
      "Mouu");

      var BasketListComponent = /*#__PURE__*/function () {
        function BasketListComponent(store) {
          _classCallCheck(this, BasketListComponent);

          this.store = store;
          this.rows = [];
          this.temp = [];
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
          this.columns = [{
            name: 'Date',
            sortable: true
          }, {
            name: 'Name',
            sortable: true
          }, {
            name: 'Selection',
            sortable: true
          }, {
            name: 'Tolls',
            sortable: false
          }];
        }

        _createClass(BasketListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.temp = _toConsumableArray(this.baskets);
            this.rows = this.baskets;
          }
        }, {
          key: "onClick",
          value: function onClick(id) {
            if (this.selectedBasketId === id) {
              this.store.dispatch(_store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_5__["unsetSelectedBasket"]());
            } else if (id !== this.selectedBasketId) {
              this.store.dispatch(_store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedBasket"]({
                id: id
              }));
            }
          }
        }, {
          key: "deleteModal",
          value: function deleteModal(event) {
            if (event[1] === 'delete') {
              // DELETE runner note
              this.store.dispatch(_store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_5__["deleteBasket"]({
                _id: event[0]
              }));
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.store.dispatch(_store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_5__["unsetSelectedBasket"]());
          }
        }, {
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data
            // update the rows

            this.rows = this.temp.filter(function (basket) {
              return basket.basket.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // Whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }, {
          key: "onDuplicateClick",
          value: function onDuplicateClick(basket) {
            var newBasket = JSON.parse(JSON.stringify(basket));
            newBasket.created = Date.now();
            newBasket.lastUpdate = Date.now();
            newBasket.basket.name = newBasket.basket.name + ' - DUPLICATE'; // dispatch actions with duplicated payload

            this.store.dispatch(_store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_5__["createBasket"]({
              basket: newBasket
            }));
          }
        }]);

        return BasketListComponent;
      }();

      BasketListComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      BasketListComponent.propDecorators = {
        baskets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        selectedBasketId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]]
        }]
      };
      BasketListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basket-list',
        template: _raw_loader_basket_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BasketListComponent);
      /***/
    },

    /***/
    "KMZW":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/new/rule/rule.component.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function KMZW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-4\">\r\n    <app-rule-list></app-rule-list>\r\n  </div>\r\n  <div class=\"col\">\r\n    <app-rule-edit></app-rule-edit>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "MrOE":
    /*!********************************************************!*\
      !*** ./src/app/features/study/main-study.component.ts ***!
      \********************************************************/

    /*! exports provided: MainStudyComponent */

    /***/
    function MrOE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainStudyComponent", function () {
        return MainStudyComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_main_study_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./main-study.component.html */
      "8P1k");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../store/study/basket/basket.actions */
      "Mouu");
      /* harmony import */


      var _store_study_entry_entry_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../store/study/entry/entry.actions */
      "7yhc");
      /* harmony import */


      var _store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../store/study/study/study.actions */
      "4fc1");
      /* harmony import */


      var _store_study_players_players_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../store/study/players/players.actions */
      "W1Tl");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");

      var MainStudyComponent = /*#__PURE__*/function () {
        function MainStudyComponent(store) {
          _classCallCheck(this, MainStudyComponent);

          this.store = store;
          this.defaultNavActiveId = 1;
        }

        _createClass(MainStudyComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "refreshStudy",
          value: function refreshStudy() {
            this.store.dispatch(_store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_3__["getAllBaskets"]());
            this.store.dispatch(_store_study_entry_entry_actions__WEBPACK_IMPORTED_MODULE_4__["getAllEntries"]());
            this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["getAllStudies"]());
            this.store.dispatch(_store_study_players_players_actions__WEBPACK_IMPORTED_MODULE_6__["getAllPlayers"]());
          }
        }]);

        return MainStudyComponent;
      }();

      MainStudyComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }];
      };

      MainStudyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-main-study',
        template: _raw_loader_main_study_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], MainStudyComponent);
      /***/
    },

    /***/
    "PDxG":
    /*!**********************************************!*\
      !*** ./src/app/model/study/basket/filter.ts ***!
      \**********************************************/

    /*! exports provided: SelectionBspFilter, SelectionName */

    /***/
    function PDxG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionBspFilter", function () {
        return SelectionBspFilter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SelectionName", function () {
        return SelectionName;
      });

      var SelectionBspFilter = /*#__PURE__*/function () {
        function SelectionBspFilter(min, max) {
          _classCallCheck(this, SelectionBspFilter);

          this.id = Date.now();
          this.name = 'SELECTION BSP';
          this.props = {
            odds: {
              min: min,
              max: max,
              isEquals: false
            },
            marketsNumber: 0
          };
          this.props.odds.isEquals = this.checkEquals();
        }

        _createClass(SelectionBspFilter, [{
          key: "checkEquals",
          value: function checkEquals() {
            return this.props.odds.min === this.props.odds.max;
          }
        }]);

        return SelectionBspFilter;
      }();

      var SelectionName = /*#__PURE__*/function () {
        function SelectionName(min, max) {
          _classCallCheck(this, SelectionName);

          this.id = Date.now();
          this.name = 'SELECTION BSP';
          this.props = {
            odds: {
              min: min,
              max: max,
              isEquals: false
            },
            marketsNumber: 0
          };
          this.props.odds.isEquals = this.checkEquals();
        }

        _createClass(SelectionName, [{
          key: "checkEquals",
          value: function checkEquals() {
            return this.props.odds.min === this.props.odds.max;
          }
        }]);

        return SelectionName;
      }();
      /***/

    },

    /***/
    "Ra1o":
    /*!**********************************************************************************************************************!*\
      !*** ./src/app/features/study/basket/components/basket-markets/basket-markets-list/basket-markets-list.component.ts ***!
      \**********************************************************************************************************************/

    /*! exports provided: BasketMarketsListComponent */

    /***/
    function Ra1o(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketMarketsListComponent", function () {
        return BasketMarketsListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basket_markets_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket-markets-list.component.html */
      "Hgp8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../../store/study/basket/basket.actions */
      "Mouu");

      var BasketMarketsListComponent = /*#__PURE__*/function () {
        function BasketMarketsListComponent(store) {
          _classCallCheck(this, BasketMarketsListComponent);

          this.store = store;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
          this.rows = [];
          this.temp = [];
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
          this.columns = [{
            name: 'date',
            sortable: true
          }, {
            prop: 'market',
            sortable: true
          }, {
            name: 'Selection Name',
            sortable: true
          }, {
            prop: 'BSP',
            sortable: true
          }, {
            prop: 'Winner',
            sortable: true
          }, {
            prop: '# Of odds',
            sortable: true
          }];
        }

        _createClass(BasketMarketsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.marketsBasketList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(function (data) {
              if (data) {
                _this3.temp = _toConsumableArray(data);
                _this3.rows = data;
              } else {
                _this3.temp = [];
                _this3.rows = [];
              }
            });
          }
        }, {
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data
            // update the rows

            this.rows = this.temp.filter(function (d) {
              return d.selection.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // Whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }, {
          key: "onClick",
          value: function onClick(marketId, selectionId) {
            if (this.selectedBasketMarketId === marketId) {
              this.store.dispatch(_store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_7__["unsetSelectedBasketMarket"]());
            } else if (marketId !== this.selectedBasketMarketId) {
              this.store.dispatch(_store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_7__["setSelectedBasketMarket"]({
                marketId: marketId,
                selectionId: selectionId
              }));
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }]);

        return BasketMarketsListComponent;
      }();

      BasketMarketsListComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      };

      BasketMarketsListComponent.propDecorators = {
        marketsBasketList$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        selectedBasketMarketId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]]
        }]
      };
      BasketMarketsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basket-markets-list',
        template: _raw_loader_basket_markets_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["/deep/ .datatable-row-even {background-color: #181818;}"]
      })], BasketMarketsListComponent);
      /***/
    },

    /***/
    "SrRF":
    /*!*************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/basket/components/basket-create/basket-filter/basket-filter-event-name/basket-filter-event-name.component.html ***!
      \*************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function SrRF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>basket-filter-event-name works!</p>\r\n";
      /***/
    },

    /***/
    "TuS5":
    /*!****************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/study/components/study-comparator/study-comparator.component.html ***!
      \****************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function TuS5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Study Comparator</h6>\r\n    </div><!-- /CARD OPTIONS -->\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\" *ngIf=\"dataOk\"><!-- BODY -->\r\n\r\n    <ul ngbNav #defaultNav=\"ngbNav\" [(activeId)]=\"defaultNavActiveId\" class=\"nav-tabs\">\r\n      <li [ngbNavItem]=\"1\">\r\n        <a ngbNavLink>Compare</a>\r\n        <ng-template ngbNavContent>\r\n\r\n          <app-strategy-report-comparator-table [strategyReports]=\"strategyReports\"\r\n                                      [strategyWinners]=\"strategyPies\">\r\n          </app-strategy-report-comparator-table>\r\n\r\n        </ng-template>\r\n      </li>\r\n      <li [ngbNavItem]=\"2\">\r\n        <a ngbNavLink>Equity</a>\r\n        <ng-template ngbNavContent>\r\n\r\n          <app-multi-line-equity [seriesName]=\"seriesName\"\r\n                                 [stock]=\"equity\"\r\n                                 [wantLegend]=\"true\"\r\n                                 [wantTooltip]=\"true\"\r\n                                 [height]=\"900\">\r\n          </app-multi-line-equity>\r\n\r\n        </ng-template>\r\n      </li>\r\n      <li [ngbNavItem]=\"3\">\r\n        <a ngbNavLink>DD</a>\r\n        <ng-template ngbNavContent>\r\n\r\n          <app-dd-multi-charts [seriesName]=\"seriesName\"\r\n                               [ddPercent]=\"ddPercent\"\r\n                               [ddMonetary]=\"ddMonetary\"\r\n                               [maxDDMonetary]=\"maxDDMonetary\"\r\n                               [avgDD]=\"avgDDPercent\"\r\n                               [maxDDPercent]=\"maxDDPercent\"\r\n                               [chartHeight]=\"chartHeight\"\r\n                               [histogramResolution]=\"6\"\r\n                               [toolTipCharts]=\"true\"\r\n                               [wantLegend]=\"true\">\r\n          </app-dd-multi-charts>\r\n\r\n        </ng-template>\r\n      </li>\r\n      <li [ngbNavItem]=\"4\">\r\n        <a ngbNavLink>Trades Comparator</a>\r\n        <ng-template ngbNavContent>\r\n\r\n          <app-comparator-trades-table [rowsInput]=\"rows\"\r\n                                       [studyName]=\"seriesName\">\r\n          </app-comparator-trades-table>\r\n\r\n        </ng-template>\r\n      </li>\r\n      <li [ngbNavItem]=\"5\">\r\n        <a ngbNavLink>Trades</a>\r\n        <ng-template ngbNavContent>\r\n\r\n          <app-multi-pl-trades [seriesName]=\"seriesName\"\r\n                               [pl]=\"pl\">\r\n          </app-multi-pl-trades>\r\n\r\n        </ng-template>\r\n      </li>\r\n      <li [ngbNavItem]=\"6\">\r\n        <a ngbNavLink>RR</a>\r\n        <ng-template ngbNavContent>\r\n\r\n          <app-multi-rr-trades [rr]=\"rr\"\r\n                               [seriesName]=\"seriesName\">\r\n          </app-multi-rr-trades>\r\n\r\n        </ng-template>\r\n      </li>\r\n    </ul>\r\n\r\n    <div [ngbNavOutlet]=\"defaultNav\" class=\"border border-top-0 p-3\"></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "X6/f":
    /*!**************************************************************************!*\
      !*** ./src/app/features/study/new/rule/rule-list/rule-list.component.ts ***!
      \**************************************************************************/

    /*! exports provided: RuleListComponent */

    /***/
    function X6F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RuleListComponent", function () {
        return RuleListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rule_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rule-list.component.html */
      "qECe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RuleListComponent = /*#__PURE__*/function () {
        function RuleListComponent() {
          _classCallCheck(this, RuleListComponent);
        }

        _createClass(RuleListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RuleListComponent;
      }();

      RuleListComponent.ctorParameters = function () {
        return [];
      };

      RuleListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-rule-list',
        template: _raw_loader_rule_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RuleListComponent);
      /***/
    },

    /***/
    "YVsH":
    /*!*************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/basket/components/basket-details/basket-details.component.html ***!
      \*************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YVsH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-pie [data]=\"data\" [label]=\"label\" [height]=\"200\"></app-pie>\r\n";
      /***/
    },

    /***/
    "Ydfo":
    /*!***********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/basket/components/basket-create/basket-create.component.html ***!
      \***********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ydfo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">{{data.create? 'Create' : 'Update'}} Basket</h6>\r\n    </div>\r\n  </div>\r\n  <!-- BODY -->\r\n  <div class=\"card-body\">\r\n\r\n    <form ngForm>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"basketName\" class=\"text-gray\">Basket Name</label>\r\n            <input class=\"form-control\"\r\n                   id=\"basketName\"\r\n                   type=\"text\"\r\n                   placeholder=\"Basket Name\"\r\n                   name=\"basketName\"\r\n                   [(ngModel)]=\"data.name\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"sport\" class=\"text-gray\">Sport</label>\r\n            <ng-select [items]=\"createStudyOptions.createStudy.sport\"\r\n                       id=\"sport\"\r\n                       name=\"sport\"\r\n                       bindLabel=\"value\"\r\n                       bindValue=\"value\"\r\n                       placeholder=\"Sport\"\r\n                       [(ngModel)]=\"data.sport\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <textarea class=\"form-control\"\r\n                  id=\"description\"\r\n                  rows=\"5\"\r\n                  placeholder=\"Description\"\r\n                  name=\"description\"\r\n                  [(ngModel)]=\"data.description\">\r\n\r\n        </textarea>\r\n      </div>\r\n\r\n      <div *ngIf=\"data.sport === 'TENNIS'\">\r\n        <label >Tennis Options</label>\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <div class=\"form-check form-check-flat form-check-primary\">\r\n              <label class=\"form-check-label grid-margin\">\r\n                <input type=\"checkbox\"\r\n                       class=\"form-check-input\"\r\n                       [(ngModel)]=\"data.options.tennis.notDoubles\"\r\n                       name=\"notDoubles\">\r\n                <i class=\"input-frame\"></i>\r\n                Not Doubles\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"form-check form-check-flat form-check-primary\">\r\n              <label class=\"form-check-label grid-margin\">\r\n                <input type=\"checkbox\"\r\n                       class=\"form-check-input\"\r\n                       [(ngModel)]=\"data.options.tennis.delay3SecOnly\"\r\n                       name=\"delay3SecOnly\">\r\n                <i class=\"input-frame\"></i>\r\n                Delay 3 Sec Only\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n            <div class=\"form-group\">\r\n              <label for=\"oddsLimit\">Odds Limits</label>\r\n              <input type=\"number\"\r\n                     class=\"form-control\"\r\n                     id=\"oddsLimit\"\r\n                     [(ngModel)]=\"data.options.tennis.oddsLimit\"\r\n                     name=\"oddsLimit\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"filterType\" class=\"text-gray\">Filter Type</label>\r\n        <ng-select id=\"filterType\"\r\n                   name=\"filterType\"\r\n                   placeholder=\"Filter Type\"\r\n                   [(ngModel)]=\"createStudyOptions.createStudy.selectedFilter\">\r\n          <ng-option *ngFor=\"let filter of createStudyOptions.createStudy.filters\"\r\n                     [value]=\"filter.id\">\r\n            {{filter.name}}\r\n          </ng-option>\r\n        </ng-select>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"createStudyOptions.createStudy.selectedFilter!== null\">\r\n        <div class=\"col\">\r\n          <ng-container [ngSwitch]=\"createStudyOptions.createStudy.selectedFilter\">\r\n            <ng-container *ngSwitchCase=\"0\">\r\n              <app-basket-filter-by-odds [min]=\"bspFilter.min\"\r\n                                         [max]=\"bspFilter.max\"\r\n                                         (oddEmitter)=\"setBspFilter($event)\">\r\n              </app-basket-filter-by-odds>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"1\">\r\n              <app-list-selection-form [type]=\"'players'\"\r\n                                       [title]=\"'Players Filter'\"\r\n                                       (listSelectedEmitter)=\"setCurrentPlayerFilter($event)\">\r\n              </app-list-selection-form>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"2\">\r\n              <app-basket-filter-event-name></app-basket-filter-event-name>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"3\">\r\n              <app-basket-filter-by-date></app-basket-filter-by-date>\r\n            </ng-container>\r\n            <ng-container *ngSwitchCase=\"4\">\r\n              <app-basket-filter-by-odds>\r\n\r\n              </app-basket-filter-by-odds>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <button type=\"button\" class=\"btn-xs btn-success mt-2\" (click)=\"addFilter()\" [disabled]=\"!bspFilter.valid\">+</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"col\">\r\n      <app-basket-active-filter *ngIf=\"createStudyOptions.createStudy.activeFilter.length || data.playersFilter.length\"\r\n                                [bspFilter]=\"createStudyOptions.createStudy.activeFilter\"\r\n                                [playersFilter]=\"data.playersFilter\"\r\n                                (removeBSPEmitter)=\"removeActiveFilter($event)\"\r\n                                (removePlayersEmitter)=\"removePlayersFilter($event)\"\r\n                                [haveRemove]=\"true\">\r\n      </app-basket-active-filter>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- FOOTER -->\r\n  <div class=\"card-footer\">\r\n    <button type=\"button\"\r\n            class=\"btn btn-icon-text\"\r\n            [ngClass]=\"data.create? 'btn-primary' : 'btn-light'\"\r\n            (click)=\"submit()\"\r\n            [disabled]=\"!createStudyOptions.createStudy.activeFilter.length>0\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"save\" appFeatherIcon></i>\r\n      {{data.create? 'Create' : 'Update'}}\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n{{data | json}}\r\n";
      /***/
    },

    /***/
    "YooT":
    /*!***********************************************************************************************************************************************!*\
      !*** ./src/app/features/study/basket/components/basket-create/basket-filter/basket-filter-event-name/basket-filter-event-name.component.scss ***!
      \***********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YooT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "";
      /***/
    },

    /***/
    "a7PZ":
    /*!************************************************************************************************!*\
      !*** ./src/app/features/study/study/components/study-comparator/study-comparator.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: StudyComparatorComponent */

    /***/
    function a7PZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyComparatorComponent", function () {
        return StudyComparatorComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_study_comparator_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./study-comparator.component.html */
      "TuS5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _model_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../model/utils */
      "E8uS");
      /* harmony import */


      var _model_report_strategyReport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../model/report/strategyReport */
      "TQzV");

      var StudyComparatorComponent = /*#__PURE__*/function () {
        function StudyComparatorComponent() {
          _classCallCheck(this, StudyComparatorComponent);

          this.utils = new _model_utils__WEBPACK_IMPORTED_MODULE_5__["Utils"]();
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.seriesName = [];
          this.equity = [];
          this.pl = [];
          this.ddPercent = [];
          this.ddMonetary = [];
          this.rr = [];
          this.maxDDMonetary = [];
          this.maxDDPercent = [];
          this.avgDDPercent = [];
          this.strategyReports = [];
          this.strategyPies = [];
          this.trades = [];
          this.tradesTable = [];
          this.rows = []; // other

          this.defaultNavActiveId = 1;
          this.dataOk = false;
          this.chartHeight = 600;
        }

        _createClass(StudyComparatorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.studyList$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (data) {
              if (data) {
                // generate and set subTrades data
                _this4.generateSubTrades(data); // generate tables


                _this4.generateTradesTable(); // strategy report


                _this4.generateStrategyReports(data);

                _this4.dataOk = true;
              } else {
                _this4.dataOk = false;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          } // generate and Array with all strategy report

        }, {
          key: "generateStrategyReports",
          value: function generateStrategyReports(data) {
            var _iterator = _createForOfIteratorHelper(data),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var study = _step.value;
                var tempReport = new _model_report_strategyReport__WEBPACK_IMPORTED_MODULE_6__["StrategyReportClass"]();
                tempReport.setDataNoStrategy(study.study.study.name, 10000, study.trades);
                this.strategyPies.push(tempReport.getStrategyPie());
                this.strategyReports.push(tempReport.getStrategyReport());
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } // generate and Array of array with all sub props of trades

        }, {
          key: "generateSubTrades",
          value: function generateSubTrades(data) {
            // series name, this size is the number of study to compare, [0] is to compare
            this.seriesName = data.map(function (x) {
              return x.study.study.name;
            }); // generate sub trades

            var _iterator2 = _createForOfIteratorHelper(data.map(function (x) {
              return x.trades;
            })),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var trades = _step2.value;
                var stock = 0;
                var tempStock = [];
                var tempPl = [];
                var tempRR = [];
                var tempTrade = [];
                var counterTrade = 1; // run over trade and set propriety

                var _iterator3 = _createForOfIteratorHelper(trades),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var trade = _step3.value;
                    stock += trade.trade.results.netProfit;
                    tempStock.push(+stock.toFixed(2));
                    tempPl.push(+trade.trade.results.netProfit.toFixed(2));
                    tempRR.push(+trade.trade.results.rr.toFixed(2)); // tradeComparator
                    // @ts-ignore

                    if (trade.trade.selections[0].avg.back.stake > 0 || trade.trade.selections[0].avg.lay.bank > 0) {
                      tempTrade.push({
                        marketId: trade.trade.info.marketInfo.marketId,
                        tradeId: trade._id,
                        trade: trade,
                        selectionId: trade.trade.selections[0].runnerId,
                        date: trade.trade.info.date,
                        n: counterTrade,
                        name: trade.trade.info.marketInfo.marketName,
                        pl: +trade.trade.results.netProfit.toFixed(2)
                      });
                    } else if (trade.trade.selections.length > 1) {
                      tempTrade.push({
                        marketId: trade.trade.info.marketInfo.marketId,
                        tradeId: trade._id,
                        trade: trade,
                        // @ts-ignore
                        selectionId: trade.trade.selections[1].runnerId,
                        date: trade.trade.info.date,
                        n: counterTrade,
                        name: trade.trade.info.marketInfo.marketName,
                        pl: +trade.trade.results.netProfit.toFixed(2)
                      });
                    }

                    counterTrade++;
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                var ddPercent = this.utils.ddOfTrades(tempPl, true, 10000);
                var ddMonetary = this.utils.ddOfTrades(tempPl, false, 10000);
                var maDDMonetary = this.utils.minOfArray(ddMonetary);
                var maxDDPercent = this.utils.minOfArray(ddPercent);
                var avgDDPercent = this.utils.avgOfArray(ddPercent); // set to local props

                this.equity.push(tempStock);
                this.pl.push(tempPl);
                this.ddPercent.push(ddPercent);
                this.ddMonetary.push(ddMonetary);
                this.maxDDMonetary.push(maDDMonetary);
                this.maxDDPercent.push(maxDDPercent);
                this.avgDDPercent.push(avgDDPercent);
                this.rr.push(tempRR);
                this.trades.push(tempTrade);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "generateTradesTable",
          value: function generateTradesTable() {
            var maxLength = Math.max.apply(Math, _toConsumableArray(this.trades.map(function (x) {
              return x.length;
            })));
            this.tradesTable = []; // generate tables
            // tslint:disable-next-line:prefer-for-of

            for (var k = 0; k < this.seriesName.length; k++) {
              // columns
              this.tradesTable.push(this.generateEmptyArray(maxLength));
            }

            for (var i = 0; i < this.seriesName.length; i++) {
              for (var j = 0; j < this.trades[i].length; j++) {
                var trade = this.trades[i][j];
                trade.compare = this.findMatchAndCheckDelta(trade);
                this.tradesTable[i][j] = trade;
              }
            } // generate row [] vertical with length = # of study inside


            for (var _i = 0; _i < this.tradesTable[0].length; _i++) {
              var temp = [];

              for (var _j = 0; _j < this.seriesName.length; _j++) {
                temp.push(this.tradesTable[_j][_i]);
              }

              this.rows.push(temp);
            }
          }
        }, {
          key: "generateEmptyArray",
          value: function generateEmptyArray(size) {
            var temp = [];

            for (var j = 0; j < size; j++) {
              temp.push(null);
            }

            return temp;
          }
        }, {
          key: "findMatchAndCheckDelta",
          value: function findMatchAndCheckDelta(compared) {
            // find match in first study
            var toCompare = this.trades[0].filter(function (x) {
              return x.marketId === compared.marketId;
            })[0];

            if (toCompare !== undefined) {
              var better;

              if (compared.pl > toCompare.pl) {
                better = true;
              }

              if (better) {
                if (toCompare.pl * compared.pl > 0) {
                  return compared.pl - toCompare.pl;
                } else {
                  return Math.abs(compared.pl - toCompare.pl);
                }
              } else {
                if (toCompare.pl * compared.pl > 0) {
                  return compared.pl - toCompare.pl;
                } else {
                  return compared.pl - toCompare.pl;
                }
              }
            } else {
              // if not fin return null
              return null;
            }
          }
        }]);

        return StudyComparatorComponent;
      }();

      StudyComparatorComponent.ctorParameters = function () {
        return [];
      };

      StudyComparatorComponent.propDecorators = {
        studyList$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      StudyComparatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-study-comparator',
        template: _raw_loader_study_comparator_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], StudyComparatorComponent);
      /***/
    },

    /***/
    "cNM7":
    /*!***********************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/study/components/study-comparator/study-comparator-report/study-comparator-report.component.html ***!
      \***********************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function cNM7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col-3\" *ngFor=\"let report of strategyReport, index as i\" >\r\n    <app-strategy-report-info\r\n      class=\"grid-margin\"\r\n      [strategyReport]=\"report\"\r\n      [title]=\"report.title\">\r\n    </app-strategy-report-info>\r\n\r\n    <app-pie class=\"grid-margin\"\r\n             [data]=\"strategyPie[i]\"\r\n             [label]=\"['WIN', 'LOSS', 'VOID']\"\r\n             [height]=\"200\">\r\n    </app-pie>\r\n\r\n    <app-strategy-report-dd class=\"grid-margin\"\r\n                            [strategyReport]=\"report\"></app-strategy-report-dd>\r\n\r\n    <app-strategy-report-resume class=\"grid-margin\"\r\n                                [title]=\"'Profit'\"\r\n                                [strategyResumeProfit]=\"report.trades.detail.profit\"\r\n                                [strategyResumeLoss]=\"report.trades.detail.loss\"\r\n                                [strategyResumeTotal]=\"report.trades.detail.total\">\r\n    </app-strategy-report-resume>\r\n\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "czgd":
    /*!******************************************************************!*\
      !*** ./src/app/features/study/players/players-main.component.ts ***!
      \******************************************************************/

    /*! exports provided: PlayersMainComponent */

    /***/
    function czgd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayersMainComponent", function () {
        return PlayersMainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_players_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./players-main.component.html */
      "e5j+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_study_players_players_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../store/study/players/players.selectors */
      "cRyM");

      var PlayersMainComponent = /*#__PURE__*/function () {
        function PlayersMainComponent(store) {
          _classCallCheck(this, PlayersMainComponent);

          this.store = store;
        }

        _createClass(PlayersMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // players
            this.allPlayers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_study_players_players_selectors__WEBPACK_IMPORTED_MODULE_4__["getAllPlayers"]));
            this.isLoadingAllPlayers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_study_players_players_selectors__WEBPACK_IMPORTED_MODULE_4__["isLoadingAllPlayers"])); // selected players

            this.selectedPlayers$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_study_players_players_selectors__WEBPACK_IMPORTED_MODULE_4__["getSelectedPlayers"]));
            this.selectedPlayersId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_study_players_players_selectors__WEBPACK_IMPORTED_MODULE_4__["getSelectedPlayerId"]));
          }
        }]);

        return PlayersMainComponent;
      }();

      PlayersMainComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      };

      PlayersMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-players-main',
        template: _raw_loader_players_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PlayersMainComponent);
      /***/
    },

    /***/
    "dZCD":
    /*!****************************************************************************************!*\
      !*** ./src/app/features/study/study/components/study-create/study-create.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: StudyCreateComponent */

    /***/
    function dZCD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyCreateComponent", function () {
        return StudyCreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_study_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./study-create.component.html */
      "97Bk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../store/study/study/study.actions */
      "4fc1");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _store_study_entry_entry_selectors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../../store/study/entry/entry.selectors */
      "VoBU");
      /* harmony import */


      var _store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../store/study/basket/basket.selectors */
      "tRHg");

      var StudyCreateComponent = /*#__PURE__*/function () {
        function StudyCreateComponent(store) {
          _classCallCheck(this, StudyCreateComponent);

          this.store = store;
          this.noRecalculate = false;
          this.validBug = true;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.data = this.resetFormData();
          this.options = this.resetFormOptions();
        }

        _createClass(StudyCreateComponent, [{
          key: "returnBets",
          value: function returnBets(id) {
            return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_entry_entry_selectors__WEBPACK_IMPORTED_MODULE_7__["getEntryBetsById"](id)));
          }
        }, {
          key: "returnBasketFilter",
          value: function returnBasketFilter(id) {
            return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_8__["getBasketFilterById"](id)));
          }
        }, {
          key: "returnBasketSize",
          value: function returnBasketSize(id) {
            return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_basket_basket_selectors__WEBPACK_IMPORTED_MODULE_8__["getBasketSizeById"](id)));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.selectedStudy$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(function (study) {
              if (study) {
                _this5.studyInput = JSON.parse(JSON.stringify(study));
                _this5.data = {
                  id: _this5.studyInput._id,
                  name: _this5.studyInput.study.name,
                  description: _this5.studyInput.study.description,
                  strategyId: _this5.studyInput.study.strategyId,
                  create: false
                };
                _this5.options.element.entry = study.study.element.entry;
                _this5.options.element.baskets = study.study.element.baskets;
                _this5.options.element.trades = study.study.element.trades;
              } else {
                _this5.data = _this5.resetFormData();
                _this5.options = _this5.resetFormOptions();
              }

              _this5.bugFix();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }, {
          key: "submit",
          value: function submit() {
            var study = {
              created: 0,
              lastUpdate: 0,
              study: {
                name: this.data.name,
                description: this.data.description,
                strategyId: this.data.strategyId,
                element: {
                  baskets: this.options.element.baskets,
                  entry: this.options.element.entry,
                  trades: this.options.element.trades
                },
                options: {
                  stake: 0,
                  basketInAnd: true,
                  entryInAnd: true
                }
              }
            };

            if (this.data.create) {
              study.created = Date.now();
              study.lastUpdate = Date.now();
              this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["createStudy"]({
                study: study
              }));
            } else {
              study.created = this.studyInput.created;
              study.lastUpdate = Date.now();
              this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["updateStudy"]({
                _id: this.studyInput._id,
                study: study
              }));
            } // reset form


            this.data = this.resetFormData();
            this.options = this.resetFormOptions();
            this.bugFix();
          }
        }, {
          key: "setEntry",
          value: function setEntry(event) {
            this.options.element.entry = [event[0].id];
          }
        }, {
          key: "setBasket",
          value: function setBasket(event) {
            this.options.element.baskets = [event[0].id];
          }
        }, {
          key: "setStrategy",
          value: function setStrategy(event) {
            this.data.strategyId = [event[0].id];
          }
        }, {
          key: "resetFormData",
          value: function resetFormData() {
            return {
              id: '',
              name: '',
              description: '',
              strategyId: null,
              create: true
            };
          }
        }, {
          key: "resetFormOptions",
          value: function resetFormOptions() {
            return {
              element: {
                baskets: [],
                entry: [],
                trades: null,
                playersFilter: null
              },
              options: {
                stake: 0,
                basketInAnd: true,
                entryInAnd: true
              }
            };
          } // temp to fix odds bug

        }, {
          key: "bugFix",
          value: function bugFix() {
            var _this6 = this;

            this.validBug = false;
            setTimeout(function () {
              _this6.validBug = true;
            }, 100);
          }
        }]);

        return StudyCreateComponent;
      }();

      StudyCreateComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      StudyCreateComponent.propDecorators = {
        selectedStudy$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      StudyCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-study-create',
        template: _raw_loader_study_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], StudyCreateComponent);
      /***/
    },

    /***/
    "e5j+":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/players/players-main.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function e5j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row\">\r\n  <div class=\"col\">\r\n    <app-loading-cards *ngIf=\"(isLoadingAllPlayers$ | async).isLoading\" ></app-loading-cards>\r\n    <app-players-list *ngIf=\"(isLoadingAllPlayers$ | async).isLoadingSuccess\"\r\n                      [playersList]=\"allPlayers$ | async\"\r\n                      [selectedPlayerId]=\"selectedPlayersId$ | async\">\r\n    </app-players-list>\r\n  </div>\r\n  <div class=\"col\">\r\n    <app-players-create [selectedPlayers$]=\"selectedPlayers$\">\r\n\r\n    </app-players-create>\r\n  </div>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "fn0T":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/players/components/players-list/players-list.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fn0T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">All Players List</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n\r\n    <div class=\"d-flex justify-content-end align-items-center\">\r\n      <form class=\"form-group mr-2\" #searchFormPlayers=\"ngForm\">\r\n        <div class=\"row\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            placeholder=\"Search...\"\r\n            (keyup)=\"updateFilter($event)\"\r\n          />\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n\r\n    <ngx-datatable\r\n      class=\"dark\"\r\n      style=\"height: 800px\"\r\n      [rows]=\"rows\"\r\n      [columns]=\"columns\"\r\n      [columnMode]=\"ColumnMode.force\"\r\n      [headerHeight]=\"40\"\r\n      [footerHeight]=\"50\"\r\n      [limit]=\"10\"\r\n      [scrollbarV]=\"true\"\r\n      [scrollbarH]=\"false\"\r\n      [rowHeight]=\"50\"\r\n      [reorderable]=\"true\"\r\n      [sorts]=\"[{prop: 'lastUpdate', dir: 'asc'}]\">\r\n\r\n      <ngx-datatable-column name=\"Date\" prop=\"lastUpdate\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <p>{{ value | date:'M/d/yy, H:mm' }}</p>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Name\" prop=\"players.name\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <p>{{ value }}</p>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Tools\" prop=\"\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <div class=\"d-flex justify-content-end align-items-center\">\r\n\r\n            <button type=\"button\" class=\"btn btn-icon btn-outline-success mr-2\" (click)=\"onDuplicateClick(value)\">\r\n              <i class=\"feather icon-copy\"></i>\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-icon mr-2\" [ngClass]=\"selectedPlayerId === value._id ? 'btn-info' : 'btn-outline-info'\" (click)=\"onClick(value._id)\">\r\n              <i class=\"feather icon-eye\"></i>\r\n            </button>\r\n\r\n            <app-delete-modal [type]=\"'Basket'\"\r\n                              [id]=\"value._id\"\r\n                              [name]=\"value.players.name\"\r\n                              (deleteEmitter)=\"deleteModal($event)\">\r\n            </app-delete-modal>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n    </ngx-datatable>\r\n\r\n  </div>\r\n  <div class=\"card footer\">\r\n    <div class=\"d-flex flex-row-reverse\">\r\n      <button type=\"button\"\r\n              class=\"btn btn-icon btn-secondary mr-2\"\r\n              (click)=\"reset()\">\r\n        <i class=\"feather icon-rotate-cw\"></i>\r\n        Reset\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "gjWY":
    /*!****************************************************************************************!*\
      !*** ./src/app/features/study/entry/components/entry-create/entry-create.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: EntryCreateComponent */

    /***/
    function gjWY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntryCreateComponent", function () {
        return EntryCreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_entry_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./entry-create.component.html */
      "0akk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_study_entry_entry_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../../store/study/entry/entry.actions */
      "7yhc");

      var EntryCreateComponent = /*#__PURE__*/function () {
        function EntryCreateComponent(store) {
          _classCallCheck(this, EntryCreateComponent);

          this.store = store;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.data = this.resetFormData();
          this.options = this.resetFormOptions();
          this.bets = this.resetFormBets();
          this.bug = true;
        }

        _createClass(EntryCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.selectedEntry$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function (entry) {
              if (entry) {
                // update with selected entry in punt
                _this7.entryInput = JSON.parse(JSON.stringify(entry));
                _this7.data = {
                  id: _this7.entryInput._id,
                  name: _this7.entryInput.entry.name,
                  description: _this7.entryInput.entry.description,
                  create: false
                };
                _this7.options = _this7.entryInput.entry.options;
                _this7.bets = _this7.entryInput.entry.bets;

                _this7.bugFix();
              } else {
                // select is null, we have to create
                _this7.data = _this7.resetFormData();
                _this7.options = _this7.resetFormOptions();
                _this7.bets = _this7.resetFormBets();

                _this7.bugFix();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }, {
          key: "submit",
          value: function submit() {
            // generate entry to pass to the serve
            var entry = {
              created: 0,
              lastUpdate: 0,
              entry: {
                name: this.data.name,
                description: this.data.description,
                options: this.options,
                bets: this.bets
              }
            }; // check for actions

            if (this.data.create) {
              // create action
              entry.created = Date.now();
              entry.lastUpdate = Date.now();
              this.store.dispatch(_store_study_entry_entry_actions__WEBPACK_IMPORTED_MODULE_6__["createEntry"]({
                entry: entry
              }));
            } else {
              // update action
              entry.created = this.entryInput.created;
              entry.lastUpdate = Date.now();
              this.store.dispatch(_store_study_entry_entry_actions__WEBPACK_IMPORTED_MODULE_6__["updateEntry"]({
                _id: this.entryInput._id,
                entry: entry
              }));
            } // reset form after actions


            this.data = this.resetFormData();
            this.options = this.resetFormOptions();
            this.bets = this.resetFormBets();
            this.bugFix();
          }
          /*
          * UPDATES BETS ARRAY
          */
          // entry

        }, {
          key: "addEntry",
          value: function addEntry() {
            this.bets.push(this.generateEntryType());
          }
        }, {
          key: "removeEntry",
          value: function removeEntry(id) {
            this.bets = this.bets.filter(function (x) {
              return x.id !== id;
            });
          }
        }, {
          key: "updateIsBackEntry",
          value: function updateIsBackEntry(event, index) {
            this.bets[index].entry.isBack = event[0];
            this.bets[index].lossExit.isBack = !event[0];
            this.bets[index].profitExit.isBack = !event[0];
          }
        }, {
          key: "updateHaveExit",
          value: function updateHaveExit(event, index, isProfit) {
            if (isProfit) {
              this.bets[index].haveProfit = event[0];
              this.bets[index].profitExit = {
                isBack: !this.bets[index].entry.isBack,
                isUp: !this.bets[index].entry.isBack,
                odds: 1.01,
                stake: 0,
                bank: 0,
                liability: 0,
                timeLimit: 0,
                marginTicks: 0
              };
            } else {
              this.bets[index].haveLoss = event[0];
              this.bets[index].lossExit = {
                isBack: !this.bets[index].entry.isBack,
                isUp: !this.bets[index].entry.isBack,
                odds: 1.01,
                stake: 0,
                bank: 0,
                liability: 0,
                timeLimit: 0,
                marginTicks: 0
              };
            }
          }
        }, {
          key: "updateOdds",
          value: function updateOdds(event, index, isEntry, isProfit) {
            if (isEntry) {
              if (event[0]) {
                //is back
                this.bets[index].entry.odds = event[1];
                this.bets[index].entry.stake = event[2];
                this.bets[index].entry.liability = 0;
              } else {
                //is lay
                this.bets[index].entry.odds = event[1];
                this.bets[index].entry.bank = event[2];
                this.bets[index].entry.liability = event[3];
                this.bets[index].entry.stake = 0;
              }
            } else if (isProfit) {
              if (event[0]) {
                //is back
                this.bets[index].profitExit.odds = event[1];
                this.bets[index].profitExit.stake = event[2];
                this.bets[index].profitExit.liability = 0;
              } else {
                //is lay
                this.bets[index].profitExit.odds = event[1];
                this.bets[index].profitExit.bank = event[2];
                this.bets[index].profitExit.liability = event[3];
                this.bets[index].profitExit.stake = 0;
              }
            } else {
              if (event[0]) {
                //is back
                this.bets[index].lossExit.odds = event[1];
                this.bets[index].lossExit.stake = event[2];
                this.bets[index].lossExit.liability = 0;
              } else {
                //is lay
                this.bets[index].lossExit.odds = event[1];
                this.bets[index].lossExit.bank = event[2];
                this.bets[index].lossExit.liability = event[3];
                this.bets[index].lossExit.stake = 0;
              }
            }
          }
        }, {
          key: "updateIsUp",
          value: function updateIsUp(event, index, isEntry, isProfit) {
            if (isEntry) {
              this.bets[index].entry.isUp = event[0];
            } else if (isProfit) {
              this.bets[index].profitExit.isUp = event[0];
            } else {
              this.bets[index].lossExit.isUp = event[0];
            }
          }
        }, {
          key: "updateIsFirst",
          value: function updateIsFirst(event) {
            this.options.isFirstOccurrence = event[0];
          }
          /*
          * CREATE AND REST DATA TO INITIAL VALUE
          */

        }, {
          key: "resetFormData",
          value: function resetFormData() {
            return {
              id: '',
              name: '',
              description: '',
              create: true
            };
          }
        }, {
          key: "resetFormOptions",
          value: function resetFormOptions() {
            return {
              isFirstOccurrence: true,
              timeToEntry: 0
            };
          }
        }, {
          key: "resetFormBets",
          value: function resetFormBets() {
            return [this.generateEntryType()];
          }
        }, {
          key: "generateEntryType",
          value: function generateEntryType() {
            return {
              id: Date.now(),
              entry: {
                isBack: true,
                isUp: true,
                odds: 1.10,
                stake: 0,
                bank: 0,
                liability: 0,
                timeLimit: 0,
                marginTicks: 0
              },
              haveProfit: true,
              haveLoss: true,
              profitExit: {
                isBack: false,
                isUp: false,
                odds: 0,
                stake: 0,
                bank: 0,
                liability: 0,
                timeLimit: 0,
                marginTicks: 0
              },
              lossExit: {
                isBack: false,
                isUp: false,
                odds: 0,
                stake: 0,
                bank: 0,
                liability: 0,
                timeLimit: 0,
                marginTicks: 0
              }
            };
          } // temp to fix odds bug

        }, {
          key: "bugFix",
          value: function bugFix() {
            var _this8 = this;

            this.bug = false;
            setTimeout(function () {
              _this8.bug = true;
            }, 100);
          }
        }]);

        return EntryCreateComponent;
      }();

      EntryCreateComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      };

      EntryCreateComponent.propDecorators = {
        selectedEntry$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      EntryCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-entry-create',
        template: _raw_loader_entry_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], EntryCreateComponent);
      /***/
    },

    /***/
    "iaa+":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/players/components/players-create/players-create.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iaa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">{{data.create? 'Create' : 'Update'}} Players List</h6>\r\n    </div>\r\n  </div>\r\n  <!-- BODY -->\r\n  <div class=\"card-body\">\r\n    <form ngForm *ngIf=\"bug\">\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"playersListName\">Players List Name</label>\r\n        <input class=\"form-control\"\r\n               id=\"playersListName\"\r\n               type=\"text\"\r\n               placeholder=\"Players List Name\"\r\n               name=\"playersListName\"\r\n               [(ngModel)]=\"data.name\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"description\">Description</label>\r\n        <textarea class=\"form-control\"\r\n                  id=\"description\"\r\n                  rows=\"5\"\r\n                  placeholder=\"Description\"\r\n                  name=\"description\"\r\n                  [(ngModel)]=\"data.description\">\r\n        </textarea>\r\n      </div>\r\n\r\n      <h5>Validity Time:</h5>\r\n\r\n      <label class=\"text-gray\">From</label>\r\n      <app-date-form [showDate]=\"true\"\r\n                     [time]=\"data.valid.from\"\r\n                     (dateEmitter)=\"setFrom($event)\">\r\n      </app-date-form>\r\n\r\n      <label class=\"text-gray\">To</label>\r\n      <app-date-form [showDate]=\"true\"\r\n                     [time]=\"data.valid.to\"\r\n                     (dateEmitter)=\"setTo($event)\">\r\n      </app-date-form>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-10\">\r\n          <app-runners-selection-form [isLive]=\"false\"\r\n                                      (runnerSelectedEmitter)=\"setCurrentRunner($event)\"\r\n                                      [title]=\"'Player to Add'\">\r\n\r\n          </app-runners-selection-form>\r\n        </div>\r\n        <div class=\"col-2\">\r\n          <button type=\"button\"\r\n                  class=\"btn-xs btn-success\"\r\n                  [disabled]=\"!checkAlreadyPresent(currentSelected.id)\"\r\n                  (click)=\"addRunner()\">+</button>\r\n        </div>\r\n      </div>\r\n\r\n      <ul class=\"list-group mt-2\">\r\n        <li class=\"list-group-item\" *ngFor=\"let runner of data.playersList, index as i\">\r\n          <div class=\"d-flex justify-content-between align-items-baseline\">\r\n            <h5>\r\n              {{i+1}}) {{runner | runnerNamePipe: store}}\r\n            </h5>\r\n            <button type=\"button\"\r\n                    class=\"btn-xs btn-danger\"\r\n                    (click)=\"removeRunner(runner)\">x</button>\r\n          </div>\r\n\r\n        </li>\r\n      </ul>\r\n\r\n    </form>\r\n  </div>\r\n  <!-- FOOTER -->\r\n  <div class=\"card-footer\">\r\n    <button type=\"button\"\r\n            class=\"btn btn-icon-text\"\r\n            [ngClass]=\"data.create? 'btn-primary' : 'btn-light'\"\r\n            (click)=\"submit()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"save\" appFeatherIcon></i>\r\n      {{data.create? 'Create' : 'Update'}}\r\n    </button>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "idZh":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/entry/components/entry-detail/entry-detail.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function idZh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ul class=\"list-group\">\r\n  <li class=\"list-group-item\" *ngFor=\"let bet of bets\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <h5 class=\"text-primary\">Entry: </h5>\r\n        <app-bets-formatter class=\"mt-2\" [type]=\"bet.entry.isBack ? 'back' : 'lay'\"\r\n                            [odds]=\"bet.entry.odds\"\r\n                            [stake]=\"bet.entry.stake\"\r\n                            [bank]=\"bet.entry.bank\"\r\n                            [liability]=\"bet.entry.liability\"\r\n                            [toWin]=\" bet.entry.isBack ?(bet.entry.odds - 1) * bet.entry.stake : bet.entry.bank\">\r\n        </app-bets-formatter>\r\n        <h6 [ngClass]=\"bet.entry.isUp ? 'text-primary' : 'text-danger'\">{{bet.entry.isUp ? 'UP' : 'DOWN'}}</h6>\r\n      </div>\r\n      <div class=\"col\" *ngIf=\"bet.haveLoss\">\r\n        <h5 class=\"text-danger\">Loss Exit:\r\n          {{ bet.entry.isBack\r\n          ? (((bet.entry.odds -1) * bet.entry.stake) - bet.lossExit.liability | currency)\r\n          : (bet.entry.liability - (bet.lossExit.stake * (bet.lossExit.odds-1)) | currency)\r\n          }} / {{((bet.lossExit.bank - bet.entry.stake) | currency)}}</h5>\r\n        <app-bets-formatter class=\"mt-2\" [type]=\"bet.lossExit.isBack ? 'back' : 'lay'\"\r\n                            [odds]=\"bet.lossExit.odds\"\r\n                            [stake]=\"bet.lossExit.stake\"\r\n                            [bank]=\"bet.lossExit.bank\"\r\n                            [liability]=\"bet.lossExit.liability\"\r\n                            [toWin]=\" bet.lossExit.isBack ?(bet.lossExit.odds - 1) * bet.lossExit.stake : bet.lossExit.bank\">\r\n        </app-bets-formatter>\r\n        <h6 [ngClass]=\"bet.lossExit.isUp ? 'text-primary' : 'text-danger'\">{{bet.lossExit.isUp ? 'UP' : 'DOWN'}}</h6>\r\n      </div>\r\n      <div class=\"col\" *ngIf=\"bet.haveProfit\">\r\n        <h5 class=\"text-success\">Profit Exit: {{ bet.entry.isBack\r\n          ? (((bet.entry.odds -1) * bet.entry.stake) - bet.profitExit.liability | currency)\r\n          : (bet.entry.liability - (bet.profitExit.stake * (bet.profitExit.odds-1)) | currency)\r\n        }} / {{((bet.profitExit.bank - bet.entry.stake) | currency)}}</h5>\r\n        <app-bets-formatter class=\"mt-2\" [type]=\"bet.profitExit.isBack ? 'back' : 'lay'\"\r\n                            [odds]=\"bet.profitExit.odds\"\r\n                            [stake]=\"bet.profitExit.stake\"\r\n                            [bank]=\"bet.profitExit.bank\"\r\n                            [liability]=\"bet.profitExit.liability\"\r\n                            [toWin]=\" bet.profitExit.isBack ?(bet.entry.odds - 1) * bet.profitExit.stake : bet.profitExit.bank\">\r\n        </app-bets-formatter>\r\n        <h6 [ngClass]=\"bet.profitExit.isUp ? 'text-primary' : 'text-danger'\">{{bet.profitExit.isUp ? 'UP' : 'DOWN'}}</h6>\r\n      </div>\r\n    </div>\r\n\r\n  </li>\r\n</ul>\r\n";
      /***/
    },

    /***/
    "jGNW":
    /*!*******************************************************************************************!*\
      !*** ./src/app/features/study/basket/components/basket-create/basket-create.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: BasketCreateComponent */

    /***/
    function jGNW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketCreateComponent", function () {
        return BasketCreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basket_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket-create.component.html */
      "Ydfo");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _model_study_basket_createBasketOption__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../../model/study/basket/createBasketOption */
      "JJ7+");
      /* harmony import */


      var _model_study_basket_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../model/study/basket/filter */
      "PDxG");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../../store/study/basket/basket.actions */
      "Mouu");

      var BasketCreateComponent = /*#__PURE__*/function () {
        function BasketCreateComponent(store) {
          _classCallCheck(this, BasketCreateComponent);

          this.store = store;
          this.currentPlayersFilter = null;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
          this.data = {
            id: '',
            name: '',
            description: '',
            sport: null,
            create: true,
            options: {
              tennis: {
                notDoubles: true,
                delay3SecOnly: true,
                oddsLimit: 50
              }
            },
            playersFilter: [],
            relativeBasketId: '',
            size: 0
          };
          this.createStudyOptions = new _model_study_basket_createBasketOption__WEBPACK_IMPORTED_MODULE_3__["CreateBasketOptionClass"](); // filter type

          this.bspFilter = {
            min: 1.01,
            max: 1.01,
            valid: true
          };
        }

        _createClass(BasketCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.selectedBasket$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(function (basket) {
              if (basket) {
                _this9.basketInput = JSON.parse(JSON.stringify(basket));
                _this9.data = {
                  id: _this9.basketInput._id,
                  name: _this9.basketInput.basket.name,
                  description: _this9.basketInput.basket.description,
                  sport: _this9.basketInput.basket.sport,
                  create: false,
                  options: _this9.basketInput.basket.options,
                  relativeBasketId: _this9.basketInput.basket.relativeMarkets,
                  size: _this9.basketInput.basket.size,
                  playersFilter: _this9.basketInput.basket.playersFilter
                };
                _this9.createStudyOptions.createStudy.activeFilter = _this9.basketInput.basket.activeFilter;
                _this9.createStudyOptions.createStudy.selectedFilter = null;
              } else {
                _this9.resetModel();
              }
            });
          }
        }, {
          key: "setCurrentPlayerFilter",
          value: function setCurrentPlayerFilter(event) {
            this.currentPlayersFilter = event[0].id;
          }
        }, {
          key: "addFilter",
          value: function addFilter() {
            var _this10 = this;

            switch (this.createStudyOptions.createStudy.selectedFilter) {
              case 0:
                {
                  // BSP filter
                  this.createStudyOptions.createStudy.activeFilter.push(new _model_study_basket_filter__WEBPACK_IMPORTED_MODULE_4__["SelectionBspFilter"](this.bspFilter.min, this.bspFilter.max)); // reset value after push

                  this.createStudyOptions.createStudy.selectedFilter = null;
                  this.bspFilter = {
                    min: 1.01,
                    max: 1.01,
                    valid: true
                  };
                  break;
                }

              case 1:
                {
                  // PLAYERS  filter
                  if (this.data.playersFilter.filter(function (x) {
                    return x === _this10.currentPlayersFilter;
                  }).length === 0) {
                    this.data.playersFilter.push(this.currentPlayersFilter);
                  }

                  break;
                }

              case 2:
                {
                  break;
                }

              case 3:
                {
                  break;
                }
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            // create correct Object
            // empty relative due to space in response
            var basket = {
              created: Date.now(),
              lastUpdate: Date.now(),
              basket: {
                name: this.data.name,
                description: this.data.description,
                sport: this.data.sport,
                activeFilter: this.createStudyOptions.createStudy.activeFilter,
                relativeMarkets: this.data.relativeBasketId,
                options: this.data.options,
                size: this.data.size,
                playersFilter: this.data.playersFilter
              }
            };

            if (this.data.create) {
              //im create
              this.store.dispatch(_store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_8__["createBasket"]({
                basket: basket
              }));
              this.resetModel();
            } else {
              // im updating
              basket._id = this.data.id;
              basket.created = this.basketInput.created;
              basket.lastUpdate = Date.now();
              this.store.dispatch(_store_study_basket_basket_actions__WEBPACK_IMPORTED_MODULE_8__["updateBasket"]({
                _id: basket._id,
                basket: basket
              }));
              this.resetModel();
            }
          }
        }, {
          key: "removeActiveFilter",
          value: function removeActiveFilter(event) {
            this.createStudyOptions.createStudy.activeFilter = this.createStudyOptions.createStudy.activeFilter.filter(function (x) {
              return x.id !== event[0];
            });
          }
        }, {
          key: "removePlayersFilter",
          value: function removePlayersFilter(event) {
            this.data.playersFilter = this.data.playersFilter.filter(function (x) {
              return x !== event[0];
            });
          }
        }, {
          key: "setBspFilter",
          value: function setBspFilter(event) {
            if (event[0]) {
              this.bspFilter = {
                min: event[0].min,
                max: event[0].max,
                valid: true
              };
            } else {
              this.bspFilter.valid = false;
            }
          }
        }, {
          key: "resetModel",
          value: function resetModel() {
            this.basketInput = null;
            this.data = {
              id: null,
              name: '',
              description: '',
              sport: null,
              create: true,
              options: {
                tennis: {
                  notDoubles: true,
                  delay3SecOnly: true,
                  oddsLimit: 50
                }
              },
              playersFilter: [],
              relativeBasketId: '',
              size: 0
            };
            this.currentPlayersFilter = null;
            this.createStudyOptions = new _model_study_basket_createBasketOption__WEBPACK_IMPORTED_MODULE_3__["CreateBasketOptionClass"]();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }]);

        return BasketCreateComponent;
      }();

      BasketCreateComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["Store"]
        }];
      };

      BasketCreateComponent.propDecorators = {
        selectedBasket$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      BasketCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basket-create',
        template: _raw_loader_basket_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BasketCreateComponent);
      /***/
    },

    /***/
    "k2Fr":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/study/components/study-list/study-list.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function k2Fr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">All Study</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n\r\n    <div class=\"d-flex justify-content-end align-items-center\">\r\n\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <ng-select id=\"basketSelection\"\r\n                     name=\"basketSelection\"\r\n                     placeholder=\"Basket Filter\"\r\n                     [(ngModel)]=\"selectedBasketFilter\"\r\n                     (ngModelChange)=\"setBasketFilter()\">\r\n            <ng-option *ngFor=\"let basket of basketFilter\"\r\n                       [value]=\"basket\">\r\n              Basket {{basket}}\r\n            </ng-option>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"col\">\r\n        <div class=\"form-group\">\r\n          <ng-select id=\"typeSelection\"\r\n                     name=\"typeSelection\"\r\n                     placeholder=\"Type Selection\"\r\n                     [(ngModel)]=\"selectedType\"\r\n                     (ngModelChange)=\"setType()\">\r\n            <ng-option *ngFor=\"let t of type\"\r\n                       [value]=\"t\">\r\n              <p [ngClass]=\"t.indexOf('back')!==-1 ? 'text-primary' : t.indexOf('lay')!==-1 ? 'text-danger' : 'text-warning' \">{{t}}</p>\r\n            </ng-option>\r\n          </ng-select>\r\n        </div>\r\n      </div>\r\n\r\n      <form class=\"form-group mr-2\" #searchFormRunner=\"ngForm\">\r\n        <div class=\"row\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            placeholder=\"Search...\"\r\n            (keyup)=\"updateFilter($event)\"\r\n          />\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n    <ngx-datatable\r\n      class=\"dark\"\r\n      style=\"height: 600px\"\r\n      [rows]=\"rows\"\r\n      [columns]=\"columns\"\r\n      [columnMode]=\"ColumnMode.force\"\r\n      [headerHeight]=\"40\"\r\n      [footerHeight]=\"50\"\r\n      [scrollbarV]=\"true\"\r\n      [scrollbarH]=\"false\"\r\n      [rowHeight]=\"60\"\r\n      [sorts]=\"[{prop: 'lastUpdate', dir: 'desc'}]\">\r\n\r\n      <ngx-datatable-column name=\"Date\" prop=\"lastUpdate\" [width]=\"230\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <p>{{ value | date:'M/d/yy, H:mm' }}</p>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Name\" prop=\"study.name\" [width]=\"400\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <p>{{ value }}</p>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Type\" prop=\"study.name\" [width]=\"60\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <div class=\"row\">\r\n            <h5 *ngIf=\"value.toLowerCase().indexOf('back')!==-1\"><span class=\"badge badge-primary grid-margin mr-2\">Back</span></h5>\r\n            <h5 *ngIf=\"value.toLowerCase().indexOf('lay')!==-1\"><span class=\"badge badge-danger grid-margin mr-2\">Lay</span></h5>\r\n            <h5 *ngIf=\"value.toLowerCase().indexOf('chunks')!==-1\"><span class=\"badge badge-warning grid-margin\">Chunks</span></h5>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n      <ngx-datatable-column name=\"Tools\" prop=\"\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n\r\n          <div class=\"d-flex justify-content-end align-items-center\">\r\n            <button type=\"button\"\r\n                    class=\"btn btn-icon mr-4\"\r\n                    [ngClass]=\"compareList.indexOf(value._id)===0 ? 'btn-warning': compareList.indexOf(value._id)!==-1 ? 'btn-success' :  'btn-outline-success'\"\r\n                    (click)=\"addToCompare(value._id)\"\r\n                    (contextmenu)=\"firstToCompare($event,value._id)\">\r\n              <i class=\"feather icon-plus-circle\"></i>\r\n            </button>\r\n            <button type=\"button\"\r\n                    class=\"btn btn-icon mr-4\"\r\n                    [ngClass]=\"selectedStudyId === value._id ? 'btn-info' : 'btn-outline-info'\"\r\n                    (click)=\"selectClick(value._id)\">\r\n              <i class=\"feather icon-eye\"></i>\r\n            </button>\r\n            <app-delete-modal [type]=\"'Study'\"\r\n                              [id]=\"value._id\"\r\n                              [name]=\"value.study.name\"\r\n                              (deleteEmitter)=\"deleteModal($event)\">\r\n            </app-delete-modal>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n    </ngx-datatable>\r\n\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <div class=\"d-flex flex-row-reverse\">\r\n\r\n      <button type=\"button\"\r\n              class=\"btn btn-icon btn-primary btn-icon-text\"\r\n              (click)=\"compare()\"\r\n              [disabled]=\"!(compareList.length>=1)\">\r\n        <i class=\"btn-icon-prepend\" data-feather=\"share-2\" appFeatherIcon></i>\r\n        Compare\r\n      </button>\r\n\r\n      <button type=\"button\"\r\n              class=\"btn btn-icon btn-warning btn-icon-text mr-2\"\r\n              (click)=\"addAllInFilterToCompare()\">\r\n        <i class=\"btn-icon-prepend\" data-feather=\"search\" appFeatherIcon></i>\r\n        Add all filtered\r\n      </button>\r\n\r\n      <button type=\"button\"\r\n              class=\"btn btn-icon btn-secondary btn-icon-text mr-2\"\r\n              (click)=\"resetCompare()\">\r\n        <i class=\"btn-icon-prepend\" data-feather=\"rotate-cw\" appFeatherIcon></i>\r\n        Reset\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "l/E0":
    /*!****************************************************************************************!*\
      !*** ./src/app/features/study/entry/components/entry-detail/entry-detail.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: EntryDetailComponent */

    /***/
    function lE0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntryDetailComponent", function () {
        return EntryDetailComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_entry_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./entry-detail.component.html */
      "idZh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var EntryDetailComponent = /*#__PURE__*/function () {
        function EntryDetailComponent() {
          _classCallCheck(this, EntryDetailComponent);
        }

        _createClass(EntryDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return EntryDetailComponent;
      }();

      EntryDetailComponent.ctorParameters = function () {
        return [];
      };

      EntryDetailComponent.propDecorators = {
        bets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      EntryDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-entry-detail',
        template: _raw_loader_entry_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], EntryDetailComponent);
      /***/
    },

    /***/
    "limW":
    /*!************************************************************************************!*\
      !*** ./src/app/features/study/study/components/study-list/study-list.component.ts ***!
      \************************************************************************************/

    /*! exports provided: StudyListComponent */

    /***/
    function limW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyListComponent", function () {
        return StudyListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_study_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./study-list.component.html */
      "k2Fr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../store/study/study/study.actions */
      "4fc1");

      var StudyListComponent = /*#__PURE__*/function () {
        function StudyListComponent(store) {
          _classCallCheck(this, StudyListComponent);

          this.store = store;
          this.rows = [];
          this.temp = [];
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
          this.basketFilter = [1.05, 1.10, 1.20, 1.30, 1.40, 1.50, 1.60, 1.70, 1.80, 1.90, 2];
          this.selectedBasketFilter = null;
          this.type = ['back', 'lay', 'chunks'];
          this.selectedType = null;
          this.columns = [{
            name: 'Date',
            sortable: true
          }, {
            name: 'Name',
            sortable: true
          }, {
            name: 'Type',
            sortable: false
          }, {
            name: 'Tools',
            sortable: false
          }];
        }

        _createClass(StudyListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.temp = _toConsumableArray(this.studies);
            this.rows = this.studies;
          }
        }, {
          key: "selectClick",
          value: function selectClick(id) {
            if (this.selectedStudyId && this.selectedStudyId === id) {
              this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["unsetSelectedStudy"]());
            } else if (id !== this.selectedStudyId) {
              this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedStudy"]({
                id: id
              }));
            }
          }
        }, {
          key: "addToCompare",
          value: function addToCompare(id) {
            if (this.compareList.indexOf(id) !== -1) {
              this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["removeStudyInCompare"]({
                studyId: id
              }));
            } else {
              this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["addStudyInCompare"]({
                studyId: id,
                first: false
              }));
            }
          }
        }, {
          key: "addAllInFilterToCompare",
          value: function addAllInFilterToCompare() {
            this.resetCompare();
            this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["addStudiesInCompare"]({
              studyIds: this.rows.map(function (x) {
                return x._id;
              })
            }));
          }
        }, {
          key: "firstToCompare",
          value: function firstToCompare($event, id) {
            $event.preventDefault();

            if (this.compareList.indexOf(id) !== -1) {
              this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["removeStudyInCompare"]({
                studyId: id
              }));
              this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["addStudyInCompare"]({
                studyId: id,
                first: true
              }));
            } else {
              this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["addStudyInCompare"]({
                studyId: id,
                first: true
              }));
            }
          }
        }, {
          key: "compare",
          value: function compare() {
            this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["compareStudy"]({
              studyIds: this.compareList
            }));
          }
        }, {
          key: "resetCompare",
          value: function resetCompare() {
            this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["resetStudyCompare"]());
            this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["unsetSelectedStudy"]());
            this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["unsetSelectedStudyMarket"]());
          }
        }, {
          key: "deleteModal",
          value: function deleteModal(event) {
            if (event[1] === 'delete') {
              // DELETE runner note
              this.store.dispatch(_store_study_study_study_actions__WEBPACK_IMPORTED_MODULE_5__["deleteStudy"]({
                _id: event[0]
              }));
            }
          }
        }, {
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data
            // update the rows

            this.rows = this.temp.filter(function (row) {
              return row.study.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // Whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }, {
          key: "setBasketFilter",
          value: function setBasketFilter() {
            var _this11 = this;

            if (this.selectedBasketFilter) {
              if (this.selectedType) {
                this.rows = this.temp.filter(function (row) {
                  return row.study.name.toLowerCase().indexOf("basket ".concat(_this11.selectedBasketFilter)) !== -1 && row.study.name.toLowerCase().indexOf("".concat(_this11.selectedType)) !== -1;
                });
              } else {
                this.rows = this.temp.filter(function (row) {
                  return row.study.name.toLowerCase().indexOf("basket ".concat(_this11.selectedBasketFilter)) !== -1;
                });
              }
            } else {
              this.rows = this.temp;
            }

            this.table.offset = 0;
          }
        }, {
          key: "setType",
          value: function setType() {
            var _this12 = this;

            if (this.selectedType) {
              if (this.selectedBasketFilter) {
                this.rows = this.temp.filter(function (row) {
                  return row.study.name.toLowerCase().indexOf("basket ".concat(_this12.selectedBasketFilter)) !== -1 && row.study.name.toLowerCase().indexOf(_this12.selectedType) !== -1;
                });
              } else {
                this.rows = this.temp.filter(function (row) {
                  return row.study.name.toLowerCase().indexOf(_this12.selectedType) !== -1;
                });
              }
            } else {
              this.rows = this.temp;
            }

            this.table.offset = 0;
          }
        }]);

        return StudyListComponent;
      }();

      StudyListComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      StudyListComponent.propDecorators = {
        studies: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        selectedStudyId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        compareList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]]
        }]
      };
      StudyListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-study-list',
        template: _raw_loader_study_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], StudyListComponent);
      /***/
    },

    /***/
    "lrqc":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/basket/basket-main.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lrqc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row grid-margin\">\r\n  <div class=\"col\">\r\n    <app-loading-cards *ngIf=\"(isLoadingAllBaskets$ | async).isLoading\"></app-loading-cards>\r\n    <app-basket-list *ngIf=\"(isLoadingAllBaskets$ | async).isLoadingSuccess\"\r\n                     [baskets]=\"allBaskets$ | async\"\r\n                     [selectedBasketId]=\"(selectedBasketId$ | async)\">\r\n    </app-basket-list>\r\n\r\n    <div *ngIf=\"(selectedBasket$ | async) && (isLoadingBasketMarkets$ | async).isLoadingSuccess\" >\r\n      <app-basket-details *ngIf=\"(isLoadingAllBaskets$ | async).isLoadingSuccess && (isLoadingBasketMarkets$ | async).isLoadingSuccess\"\r\n                          [marketsBasketList$]=\"selectedBasketMarketsList$\">\r\n      </app-basket-details>\r\n    </div>\r\n  </div>\r\n  <div class=\"col\">\r\n    <app-basket-create [selectedBasket$]=\"selectedBasket$\">\r\n\r\n    </app-basket-create>\r\n  </div>\r\n</div>\r\n<div class=\"row grid-margin\">\r\n  <div class=\"col\">\r\n    <app-loading-cards *ngIf=\"(isLoadingBasketMarkets$ | async).isLoading\"></app-loading-cards>\r\n    <app-basket-markets-list *ngIf=\"(isLoadingAllBaskets$ | async).isLoadingSuccess && (isLoadingBasketMarkets$ | async).isLoadingSuccess\"\r\n                             [marketsBasketList$]=\"selectedBasketMarketsList$\"\r\n                             [selectedBasketMarketId]=\"selectedBasketMarketId$ | async\">\r\n\r\n    </app-basket-markets-list>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row grid-margin\">\r\n  <div class=\"col\">\r\n    <app-loading-cards *ngIf=\"(isLoadingSelectedBasketMarket$ | async).isLoading\"></app-loading-cards>\r\n    <app-study-markets-selected-detail *ngIf=\"(isLoadingSelectedBasketMarket$ | async).isLoadingSuccess && validBsp && (isLoadingBasketMarkets$ | async).isLoadingSuccess\"\r\n                                       [selectedMarketData]=\"selectedBasketMarketsData$ | async\"\r\n                                       [detail]=\"true\"\r\n                                       [haveTrades]=\"false\"\r\n                                       [basketBspOdds]=\"basketBps.odds\"\r\n                                       [basketBspTime]=\"basketBps.time\">\r\n    </app-study-markets-selected-detail>\r\n  </div>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "m6kr":
    /*!**********************************************************************************************!*\
      !*** ./src/app/features/study/players/components/players-create/players-create.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: PlayersCreateComponent */

    /***/
    function m6kr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayersCreateComponent", function () {
        return PlayersCreateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_players_create_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./players-create.component.html */
      "iaa+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _store_study_players_players_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../store/study/players/players.actions */
      "W1Tl");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var PlayersCreateComponent = /*#__PURE__*/function () {
        function PlayersCreateComponent(store) {
          _classCallCheck(this, PlayersCreateComponent);

          this.store = store;
          this.bug = true;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.data = {
            _id: null,
            name: null,
            description: null,
            create: true,
            playersList: [],
            valid: {
              from: new Date().getTime(),
              to: new Date().getTime()
            }
          };
          this.currentSelected = {
            name: '',
            id: -1
          };
        }

        _createClass(PlayersCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this.selectedPlayers$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$)).subscribe(function (players) {
              if (players) {
                _this13.playersInput = JSON.parse(JSON.stringify(players));
                _this13.data.name = _this13.playersInput.players.name;
                _this13.data.description = _this13.playersInput.players.description;
                _this13.data.playersList = _this13.playersInput.players.playersList;
                _this13.data.valid = _this13.playersInput.players.valid;
                _this13.data._id = _this13.playersInput._id;
                _this13.data.create = false;
              } else {
                _this13.data.create = true;

                _this13.resetModel();
              }

              _this13.bugFix();
            });
          }
        }, {
          key: "setCurrentRunner",
          value: function setCurrentRunner(event) {
            this.currentSelected.id = event[0].id;
            this.currentSelected.name = event[0].name;
          }
        }, {
          key: "addRunner",
          value: function addRunner() {
            this.data.playersList.push(this.currentSelected.id);
          }
        }, {
          key: "removeRunner",
          value: function removeRunner(id) {
            this.data.playersList = this.data.playersList.filter(function (x) {
              return x !== id;
            });
          }
        }, {
          key: "checkAlreadyPresent",
          value: function checkAlreadyPresent(id) {
            return this.data.playersList.filter(function (x) {
              return x === id;
            }).length === 0;
          }
        }, {
          key: "setFrom",
          value: function setFrom(event) {
            this.data.valid.from = event[0];
          }
        }, {
          key: "setTo",
          value: function setTo(event) {
            this.data.valid.to = event[0];
          }
        }, {
          key: "submit",
          value: function submit() {
            // create correct Object
            var players = {
              created: Date.now(),
              lastUpdate: Date.now(),
              players: {
                name: this.data.name,
                description: this.data.description,
                playersList: this.data.playersList,
                valid: this.data.valid
              }
            };

            if (this.data.create) {
              //im create
              this.store.dispatch(_store_study_players_players_actions__WEBPACK_IMPORTED_MODULE_4__["createPlayers"]({
                players: players
              }));
              this.resetModel();
            } else {
              // im updating
              players._id = this.data._id;
              players.created = this.playersInput.created;
              players.lastUpdate = Date.now();
              this.store.dispatch(_store_study_players_players_actions__WEBPACK_IMPORTED_MODULE_4__["updatePlayers"]({
                _id: players._id,
                players: players
              }));
              this.resetModel();
            }
          }
        }, {
          key: "resetModel",
          value: function resetModel() {
            this.playersInput = null;
            this.data = {
              _id: null,
              name: null,
              description: null,
              create: true,
              playersList: [],
              valid: {
                from: new Date().getTime(),
                to: new Date().getTime()
              }
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          } // temp to fix odds bug

        }, {
          key: "bugFix",
          value: function bugFix() {
            var _this14 = this;

            this.bug = false;
            setTimeout(function () {
              _this14.bug = true;
            }, 100);
          }
        }]);

        return PlayersCreateComponent;
      }();

      PlayersCreateComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]
        }];
      };

      PlayersCreateComponent.propDecorators = {
        selectedPlayers$: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      PlayersCreateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-players-create',
        template: _raw_loader_players_create_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], PlayersCreateComponent);
      /***/
    },

    /***/
    "m8Jv":
    /*!*********************************************************************************************************************************************!*\
      !*** ./src/app/features/study/basket/components/basket-create/basket-filter/basket-filter-event-name/basket-filter-event-name.component.ts ***!
      \*********************************************************************************************************************************************/

    /*! exports provided: BasketFilterEventNameComponent */

    /***/
    function m8Jv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketFilterEventNameComponent", function () {
        return BasketFilterEventNameComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basket_filter_event_name_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket-filter-event-name.component.html */
      "SrRF");
      /* harmony import */


      var _basket_filter_event_name_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basket-filter-event-name.component.scss */
      "YooT");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var BasketFilterEventNameComponent = /*#__PURE__*/function () {
        function BasketFilterEventNameComponent() {
          _classCallCheck(this, BasketFilterEventNameComponent);
        }

        _createClass(BasketFilterEventNameComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BasketFilterEventNameComponent;
      }();

      BasketFilterEventNameComponent.ctorParameters = function () {
        return [];
      };

      BasketFilterEventNameComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-basket-filter-event-name',
        template: _raw_loader_basket_filter_event_name_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basket_filter_event_name_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BasketFilterEventNameComponent);
      /***/
    },

    /***/
    "qECe":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/new/rule/rule-list/rule-list.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qECe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>rule-list works!</p>\r\n";
      /***/
    },

    /***/
    "rOhS":
    /*!***************************************************************************************************************************************!*\
      !*** ./src/app/features/study/basket/components/basket-create/basket-filter/basket-filter-by-date/basket-filter-by-date.component.ts ***!
      \***************************************************************************************************************************************/

    /*! exports provided: BasketFilterByDateComponent */

    /***/
    function rOhS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasketFilterByDateComponent", function () {
        return BasketFilterByDateComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basket_filter_by_date_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basket-filter-by-date.component.html */
      "u8zy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");

      var BasketFilterByDateComponent = /*#__PURE__*/function () {
        function BasketFilterByDateComponent(calendar) {
          _classCallCheck(this, BasketFilterByDateComponent);

          this.hoveredDate = null;
          this.toDate = null;
          this.fromDate = calendar.getToday();
          this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
        }

        _createClass(BasketFilterByDateComponent, [{
          key: "onDateSelection",
          value: function onDateSelection(date) {
            if (!this.fromDate && !this.toDate) {
              this.fromDate = date;
              this.fromDateUnix = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day).getTime();
            } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
              this.toDate = date;
              this.toDateUnix = new Date(this.toDate.year, this.toDate.month, this.toDate.day).getTime();
            } else {
              this.toDate = null;
              this.fromDate = date;
              this.fromDateUnix = new Date(this.fromDate.year, this.fromDate.month, this.fromDate.day).getTime();
            }
          }
        }, {
          key: "isHovered",
          value: function isHovered(date) {
            return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
          }
        }, {
          key: "isInside",
          value: function isInside(date) {
            return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
          }
        }, {
          key: "isRange",
          value: function isRange(date) {
            return date.equals(this.fromDate) || this.toDate && date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return BasketFilterByDateComponent;
      }();

      BasketFilterByDateComponent.ctorParameters = function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCalendar"]
        }];
      };

      BasketFilterByDateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-basket-filter-by-date',
        template: _raw_loader_basket_filter_by_date_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], BasketFilterByDateComponent);
      /***/
    },

    /***/
    "rYdS":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/entry/components/entry-list/entry-list.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rYdS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">All Entry</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\">\r\n\r\n    <div class=\"d-flex justify-content-end align-items-center\">\r\n      <form class=\"form-group mr-2\" #searchFormRunner=\"ngForm\">\r\n        <div class=\"row\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            placeholder=\"Search...\"\r\n            (keyup)=\"updateFilter($event)\"\r\n          />\r\n        </div>\r\n      </form>\r\n    </div>\r\n\r\n\r\n    <ngx-datatable\r\n      class=\"dark\"\r\n      [rows]=\"rows\"\r\n      [columns]=\"columns\"\r\n      [columnMode]=\"ColumnMode.force\"\r\n      [headerHeight]=\"40\"\r\n      [footerHeight]=\"50\"\r\n      [limit]=\"10\"\r\n      rowHeight=\"auto\"\r\n      [reorderable]=\"true\"\r\n      [sorts]=\"[{prop: 'lastUpdate', dir: 'desc'}]\">\r\n\r\n      <ngx-datatable-column name=\"Date\" prop=\"lastUpdate\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <p>{{ value | date:'M/d/yy, H:mm' }}</p>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Name\" prop=\"entry.name\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <p>{{ value }}</p>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Type\" prop=\"entry.name\" [width]=\"60\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <div class=\"row\">\r\n            <h5 *ngIf=\"value.toLowerCase().indexOf('back')!==-1\"><span class=\"badge badge-primary grid-margin mr-2\">Back</span></h5>\r\n            <h5 *ngIf=\"value.toLowerCase().indexOf('lay')!==-1\"><span class=\"badge badge-danger grid-margin mr-2\">Lay</span></h5>\r\n            <h5 *ngIf=\"value.toLowerCase().indexOf('chunks')!==-1\"><span class=\"badge badge-warning grid-margin\">Chunks</span></h5>\r\n          </div>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Tools\" prop=\"\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n\r\n          <div class=\"d-flex justify-content-end align-items-center\">\r\n            <button type=\"button\" class=\"btn btn-icon btn-outline-success mr-2\" (click)=\"onDuplicateClick(value)\">\r\n              <i class=\"feather icon-copy\"></i>\r\n            </button>\r\n\r\n            <button type=\"button\" class=\"btn btn-icon mr-2 \" [ngClass]=\"selectedEntryId === value._id ? 'btn-info' : 'btn-outline-info'\" (click)=\"onClick(value._id)\">\r\n              <i class=\"feather icon-eye\"></i>\r\n            </button>\r\n\r\n            <app-delete-modal [name]=\"value.entry.name\"\r\n                              [id]=\"value._id\" [type]=\"'Entry'\"\r\n                              (deleteEmitter)=\"deleteModal($event)\">\r\n            </app-delete-modal>\r\n          </div>\r\n\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n\r\n    </ngx-datatable>\r\n\r\n  </div>\r\n  <div class=\"card footer\">\r\n    <div class=\"d-flex flex-row-reverse\">\r\n      <button type=\"button\"\r\n              class=\"btn btn-icon btn-secondary mr-2\"\r\n              (click)=\"reset()\">\r\n        <i class=\"feather icon-rotate-cw\"></i>\r\n        Reset\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "sNFh":
    /*!************************************************************************************!*\
      !*** ./src/app/features/study/entry/components/entry-list/entry-list.component.ts ***!
      \************************************************************************************/

    /*! exports provided: EntryListComponent */

    /***/
    function sNFh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntryListComponent", function () {
        return EntryListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_entry_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./entry-list.component.html */
      "rYdS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_study_entry_entry_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../store/study/entry/entry.actions */
      "7yhc");

      var EntryListComponent = /*#__PURE__*/function () {
        function EntryListComponent(store) {
          _classCallCheck(this, EntryListComponent);

          this.store = store;
          this.rows = [];
          this.temp = [];
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
          this.columns = [{
            name: 'date',
            sortable: true
          }, {
            name: 'name',
            sortable: false
          }, {
            name: 'description',
            sortable: false
          }, {
            name: 'select',
            sortable: false
          }];
        }

        _createClass(EntryListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.temp = _toConsumableArray(this.entries);
            this.rows = this.entries;
          }
        }, {
          key: "onClick",
          value: function onClick(id) {
            if (this.selectedEntryId === id) {
              this.store.dispatch(_store_study_entry_entry_actions__WEBPACK_IMPORTED_MODULE_5__["unsetSelectedEntry"]());
            } else if (id !== this.selectedEntryId) {
              this.store.dispatch(_store_study_entry_entry_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedEntry"]({
                id: id
              }));
            }
          }
        }, {
          key: "onDuplicateClick",
          value: function onDuplicateClick(entry) {
            var newEntry = JSON.parse(JSON.stringify(entry));
            newEntry.created = Date.now();
            newEntry.lastUpdate = Date.now();
            newEntry.entry.name = newEntry.entry.name + ' - DUPLICATE'; // remove id from data

            delete newEntry._id;

            var _iterator4 = _createForOfIteratorHelper(newEntry.entry.bets),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var bet = _step4.value;
                delete bet._id;
              } // dispatch actions with duplicated payload

            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            this.store.dispatch(_store_study_entry_entry_actions__WEBPACK_IMPORTED_MODULE_5__["createEntry"]({
              entry: newEntry
            }));
          }
        }, {
          key: "reset",
          value: function reset() {
            this.store.dispatch(_store_study_entry_entry_actions__WEBPACK_IMPORTED_MODULE_5__["unsetSelectedEntry"]());
          }
        }, {
          key: "deleteModal",
          value: function deleteModal(event) {
            if (event[1] === 'delete') {
              // DELETE runner note
              this.store.dispatch(_store_study_entry_entry_actions__WEBPACK_IMPORTED_MODULE_5__["deleteEntry"]({
                _id: event[0]
              }));
            }
          }
        }, {
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data
            // update the rows

            this.rows = this.temp.filter(function (d) {
              return d.entry.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // Whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }]);

        return EntryListComponent;
      }();

      EntryListComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      EntryListComponent.propDecorators = {
        entries: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        selectedEntryId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]]
        }]
      };
      EntryListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-entry-list',
        template: _raw_loader_entry_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], EntryListComponent);
      /***/
    },

    /***/
    "tGpA":
    /*!**************************************************!*\
      !*** ./src/app/model/study/basket/filterType.ts ***!
      \**************************************************/

    /*! exports provided: filterType */

    /***/
    function tGpA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "filterType", function () {
        return filterType;
      });

      var filterType = [{
        name: 'By selection BSP',
        id: 0
      }, {
        name: 'By Selection Name',
        id: 1
      }, {
        name: 'By Event name',
        id: 2
      }, {
        name: 'By Date',
        id: 3
      }, {
        name: 'By Selection min/MAX',
        id: 4
      }];
      /***/
    },

    /***/
    "u8zy":
    /*!*******************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/basket/components/basket-create/basket-filter/basket-filter-by-date/basket-filter-by-date.component.html ***!
      \*******************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u8zy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ngb-datepicker class=\"range-selection\" #dp (dateSelect)=\"onDateSelection($event)\" [displayMonths]=\"2\" [dayTemplate]=\"t\" outsideDays=\"hidden\">\r\n</ngb-datepicker>\r\n\r\n<ng-template #t let-date let-focused=\"focused\">\r\n  <span class=\"custom-day\"\r\n        [class.focused]=\"focused\"\r\n        [class.range]=\"isRange(date)\"\r\n        [class.faded]=\"isHovered(date) || isInside(date)\"\r\n        (mouseenter)=\"hoveredDate = date\"\r\n        (mouseleave)=\"hoveredDate = null\">\r\n    {{ date.day }}\r\n  </span>\r\n</ng-template>\r\n<p class=\"mt-3 text-muted\">From: {{fromDateUnix | date: 'short'}}</p>\r\n<p class=\"text-muted\">To: {{toDateUnix | date: 'short'}}</p>\r\n";
      /***/
    },

    /***/
    "vKPq":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/new/rule/rule-edit/rule-edit.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function vKPq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h5>Rules</h5>\r\n      <button type=\"button\"\r\n              class=\"btn btn-success mr-2\"\r\n              (click)=\"addRule()\">\r\n        Add Rule\r\n      </button>\r\n\r\n      <button type=\"button\"\r\n              class=\"btn btn-primary\"\r\n              [disabled]=\"!myForm.valid\"\r\n              (click)=\"submitForm()\">\r\n        Submit\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n  <!-- BODY -->\r\n  <div class=\"card-body\">\r\n    <form ngForm class=\"form-group\" [formGroup]=\"myForm\">\r\n      <!-- NAME -->\r\n      <label for=\"name\">Name</label>\r\n      <input id=\"name\"\r\n             class=\"form-control\"\r\n             formControlName=\"name\">\r\n      <span class=\"text-danger\" *ngIf=\"name.invalid\">Must not be empty</span>\r\n      <!-- FORM -->\r\n      <div class=\"form-group\" formArrayName=\"rule\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\" *ngFor=\"let rule of rules.controls; let i=index\"\r\n              [formGroupName]=\"i\">\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <div class=\"d-flex justify-content-between align-items-baseline\">\r\n                  <h4 class=\"text-gray mr-2\">{{i+1}}</h4>\r\n\r\n                  <input id=\"ruleName\"\r\n                         class=\"form-control\"\r\n                         formControlName=\"name\">\r\n                  <span class=\"text-danger\" *ngIf=\"getRuleName(i).invalid\">Must not be empty</span>\r\n                </div>\r\n                <!-- NAV BAR -->\r\n                <ul ngbNav #defaultNav=\"ngbNav\" [(activeId)]=\"defaultActive[i]\" class=\"nav-tabs\">\r\n                  <!-- SELECTION -->\r\n                  <li [ngbNavItem]=\"1\">\r\n                    <a ngbNavLink>Selection</a>\r\n                    <ng-template ngbNavContent>\r\n                      <div class=\"form-group\" [formGroupName]=\"'selection'\">\r\n                        <!-- OPTIONS -->\r\n                        <label for=\"selectionOptions\">Selection Options</label>\r\n                        <ng-select id=\"selectionOptions\"\r\n                                   formControlName=\"options\"\r\n                                   [items]=\"['fixed', 'dynamic']\"\r\n                                   [clearable]=\"false\">\r\n                        </ng-select>\r\n                        <!-- FIXED -->\r\n                        <div *ngIf=\"myForm.value.rule[i].selection.options==='fixed'\" class=\"row form-group\" [formGroupName]=\"'fixed'\">\r\n                          <div class=\"col-4\">\r\n                            <label for=\"fixedType\">Fixed Type</label>\r\n                            <ng-select id=\"fixedType\"\r\n                                       [items]=\"['selections #', 'selections Id','selection Type']\"\r\n                                       formControlName=\"fixedOptions\"\r\n                                       [clearable]=\"false\">\r\n                            </ng-select>\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <div *ngIf=\"myForm.value.rule[i].selection.fixed.fixedOptions==='selections #'\">\r\n                              <label for=\"selectionNumber\">Selection #</label>\r\n                              <input type=\"number\"\r\n                                     class=\"form-control\"\r\n                                     id=\"selectionNumber\"\r\n                                     formControlName=\"selectionN\">\r\n                            </div>\r\n                            <div *ngIf=\"myForm.value.rule[i].selection.fixed.fixedOptions==='selections Id'\">\r\n                              <label for=\"selectionId\">Selection id</label>\r\n                              <input type=\"number\"\r\n                                     class=\"form-control\"\r\n                                     id=\"selectionId\"\r\n                                     formControlName=\"selectionId\">\r\n                            </div>\r\n                            <div *ngIf=\"myForm.value.rule[i].selection.fixed.fixedOptions==='selection Type'\">\r\n                              <label for=\"selectionType\">Selection Type</label>\r\n                              <ng-select id=\"selectionType\"\r\n                                         [items]=\"['winner', 'loser', 'favourite selection', 'underdog selection']\"\r\n                                         formControlName=\"selectionType\"\r\n                                         [clearable]=\"false\">\r\n                              </ng-select>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- DYNAMIC -->\r\n                        <div *ngIf=\"myForm.value.rule[i].selection.options==='dynamic'\" class=\"row form-group\"  [formGroupName]=\"'dynamic'\">\r\n                          <div class=\"col-4\">\r\n                            <label for=\"dynamicOptions\">Dynamic Options</label>\r\n                            <ng-select id=\"dynamicOptions\"\r\n                                       formControlName=\"dynamicOptions\"\r\n                                       [items]=\"['bsp', 'bspWinner', 'bspLoser']\"\r\n                                       [clearable]=\"false\">\r\n                            </ng-select>\r\n                          </div>\r\n                          <div class=\"col\">\r\n                            <div class=\"form-group\" [formGroupName]=\"'range'\">\r\n                              <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                  <label for=\"minRange\">min</label>\r\n                                  <input type=\"number\"\r\n                                         class=\"form-control\"\r\n                                         id=\"minRange\"\r\n                                         formControlName=\"min\">\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                  <label for=\"maxRange\">Max</label>\r\n                                  <input type=\"number\"\r\n                                         class=\"form-control\"\r\n                                         id=\"maxRange\"\r\n                                         formControlName=\"max\">\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </ng-template>\r\n                  </li>\r\n                  <!-- CONDITIONS -->\r\n                  <li [ngbNavItem]=\"2\">\r\n                    <a ngbNavLink>Conditions</a>\r\n                    <ng-template ngbNavContent>\r\n                    </ng-template>\r\n                  </li>\r\n                  <!-- BET -->\r\n                  <li [ngbNavItem]=\"3\">\r\n                    <a ngbNavLink>Bet</a>\r\n                    <ng-template ngbNavContent>\r\n                      <div class=\"form-group\" [formGroupName]=\"'bet'\">\r\n                        <!-- OPTIONS -->\r\n                        <div>\r\n                          <label for=\"betOptions\">Bet Options</label>\r\n                          <ng-select id=\"betOptions\"\r\n                                     formControlName=\"options\"\r\n                                     [items]=\"['place lay', 'place back', 'cashOut']\"\r\n                                     [clearable]=\"false\">\r\n                          </ng-select>\r\n                        </div>\r\n                        <!-- PLACE -->\r\n                        <div class=\"row form-group\" [formGroupName]=\"'place'\">\r\n                          <div class=\"col\">\r\n                            <label for=\"placeType\">Place Type</label>\r\n                            <ng-select id=\"placeType\"\r\n                                       formControlName=\"type\"\r\n                                       [items]=\"['fixed price', 'best price']\"\r\n                                       [clearable]=\"false\">\r\n                            </ng-select>\r\n                          </div>\r\n                          <div class=\"col\" >\r\n                            <div *ngIf=\"myForm.value.rule[i].bet.place.type==='fixed price'\">\r\n                              <label for=\"fixedPriceValue\">Fixed Price</label>\r\n                              <input type=\"number\"\r\n                                     class=\"form-control\"\r\n                                     id=\"fixedPriceValue\"\r\n                                     formControlName=\"fixedPriceValue\">\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <!-- NOT CASHOUT -->\r\n                        <div  *ngIf=\"myForm.value.rule[i].bet.options!=='cashOut'\">\r\n                          <!-- STAKE -->\r\n                          <div class=\"row form-group\" [formGroupName]=\"'stake'\">\r\n                            <div class=\"col\">\r\n                              <label for=\"stakeType\">Stake Type</label>\r\n                              <ng-select id=\"stakeType\"\r\n                                         formControlName=\"type\"\r\n                                         [items]=\"['net stake', 'fixed']\"\r\n                                         [clearable]=\"false\">\r\n                              </ng-select>\r\n                            </div>\r\n                            <!-- STAKE FIXED-->\r\n                            <div class=\"col\" *ngIf=\"myForm.value.rule[i].bet.stake.type==='fixed'\">\r\n                              <label for=\"fixedStake\">Fixed Stake</label>\r\n                              <input type=\"number\"\r\n                                     class=\"form-control\"\r\n                                     id=\"fixedStake\"\r\n                                     formControlName=\"fixed\">\r\n                            </div>\r\n                            <div class=\"col\" *ngIf=\"myForm.value.rule[i].bet.stake.type==='fixed'\">\r\n                              <label for=\"liability\">Liability</label>\r\n                              <input type=\"number\"\r\n                                     class=\"form-control\"\r\n                                     id=\"liability\"\r\n                                     formControlName=\"liability\">\r\n                            </div>\r\n                            <div class=\"col\" *ngIf=\"myForm.value.rule[i].bet.stake.type==='fixed'\">\r\n                              <label for=\"toWin\">To Win</label>\r\n                              <input type=\"number\"\r\n                                     class=\"form-control\"\r\n                                     id=\"toWin\"\r\n                                     formControlName=\"toWin\">\r\n                            </div>\r\n                          </div>\r\n                          <!-- OFFSET -->\r\n                          <div class=\"form-group\" [formGroupName]=\"'offset'\">\r\n                            <label for=\"offsetType\">Offset Type</label>\r\n                            <ng-select id=\"offsetType\"\r\n                                       formControlName=\"type\"\r\n                                       [items]=\"['off', 'offset', 'offset green', 'offset and stop', 'offset green and stop']\"\r\n                                       [clearable]=\"false\">\r\n                            </ng-select>\r\n                            <div class=\"row\" *ngIf=\"myForm.value.rule[i].bet.offset.type!=='off'\">\r\n                              <!-- OFFSET OPTIONS-->\r\n                              <div class=\"col\">\r\n                                <label for=\"offsetOptions\">Offset Options</label>\r\n                                <ng-select id=\"offsetOptions\"\r\n                                           formControlName=\"options\"\r\n                                           [items]=\"['tick', '%', 'rR']\"\r\n                                           [clearable]=\"false\">\r\n                                </ng-select>\r\n                              </div>\r\n                              <div class=\"col\">\r\n                                <label for=\"value\">Value</label>\r\n                                <input type=\"number\"\r\n                                       class=\"form-control\"\r\n                                       id=\"value\"\r\n                                       formControlName=\"value\">\r\n                              </div>\r\n                              <!-- OFFSET STOP OPTIONS-->\r\n                              <div class=\"col\" *ngIf=\"(myForm.value.rule[i].bet.offset.type==='offset and stop') || (myForm.value.rule[i].bet.offset.type==='offset green and stop')\">\r\n                                <label for=\"offsetStopOptions\">Offset Stop Options</label>\r\n                                <ng-select id=\"offsetStopOptions\"\r\n                                           formControlName=\"optionsStop\"\r\n                                           [items]=\"['tick', '%', 'rR']\"\r\n                                           [clearable]=\"false\">\r\n                                </ng-select>\r\n                              </div>\r\n                              <div class=\"col\"  *ngIf=\"(myForm.value.rule[i].bet.offset.type==='offset and stop') || (myForm.value.rule[i].bet.offset.type==='offset green and stop')\">\r\n                                <label for=\"valueStop\">Value Stop</label>\r\n                                <input type=\"number\"\r\n                                       class=\"form-control\"\r\n                                       id=\"valueStop\"\r\n                                       formControlName=\"valueStop\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </ng-template>\r\n                  </li>\r\n                </ul>\r\n\r\n                <div [ngbNavOutlet]=\"defaultNav\" class=\"border border-top-0 p-1\"></div>\r\n\r\n\r\n              </div>\r\n              <div class=\"col-1\">\r\n\r\n\r\n                <button type=\"button\"\r\n                        class=\"btn btn-xs btn-outline-primary mb-2\"\r\n                        (click)=\"upRule(i)\">\r\n                  <i class=\"btn-icon-prepend\"\r\n                     data-feather=\"arrow-up\"\r\n                     appFeatherIcon></i>\r\n                </button>\r\n\r\n                <button type=\"button\"\r\n                        class=\"btn btn-xs btn-outline-primary mb-2\"\r\n                        (click)=\"downRule(i)\">\r\n                  <i class=\"btn-icon-prepend\"\r\n                     data-feather=\"arrow-down\"\r\n                     appFeatherIcon></i>\r\n                </button>\r\n\r\n                <button type=\"button\"\r\n                        class=\"btn btn-xs btn-primary mb-2\"\r\n                        (click)=\"resetRule(i)\">\r\n                  Reset\r\n                </button>\r\n                <button type=\"button\"\r\n                        class=\"btn btn-xs btn-secondary mb-2\"\r\n                        (click)=\"duplicateRule(i)\">\r\n                  Duplicate\r\n                </button>\r\n                <button type=\"button\"\r\n                        class=\"btn btn-xs btn-danger\"\r\n                        (click)=\"deleteRule(i)\">\r\n                  Delete\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"list-group-item disabled text-danger\" *ngIf=\"rules.length===0\">At Least one Rule</li>\r\n        </ul>\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <pre>\r\n      {{myForm.value | json}}\r\n  </pre>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "vWsQ":
    /*!**************************************************************!*\
      !*** ./src/app/features/study/study/study-main.component.ts ***!
      \**************************************************************/

    /*! exports provided: StudyMainComponent */

    /***/
    function vWsQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudyMainComponent", function () {
        return StudyMainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_study_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./study-main.component.html */
      "Cr2J");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../store/study/study/study.selectors */
      "fDNQ");
      /* harmony import */


      var _store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../store/report/report.selectors */
      "VGBg");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _model_report_strategyReport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../model/report/strategyReport */
      "TQzV");

      var StudyMainComponent = /*#__PURE__*/function () {
        function StudyMainComponent(store) {
          _classCallCheck(this, StudyMainComponent);

          this.store = store;
          this.selectedStrategyPie = [0, 0, 0];
          this.selectedTrades = []; // other for display

          this.defaultNavActiveId = 1;
          this.visibleReport = false;
          this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.strategyReportService = new _model_report_strategyReport__WEBPACK_IMPORTED_MODULE_8__["StrategyReportClass"]();
        }

        _createClass(StudyMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            /*
            * SET SELECTORS FROM STORE
             */
            // studies for list
            this.allStudies$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["getAllStudies"]));
            this.isLoadingAllStudy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["isLoadingAllStudies"])); // selected study for report

            this.selectedStudyId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedStudyId"]));
            this.selectedStudy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedStudy"]));
            this.selectedStudyTrades$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedStudyTrades"]));
            this.isLoadingSelectedStudyTrades$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["isLoadingSelectedStudyTrades"])); // selected study markets for charts and market detail

            this.selectedStudyMarket$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedStudyMarket"]));
            this.selectedStudyMarketId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedStudyMarketId"]));
            this.selectedStudyMarketTrade$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["getSelectedStudyMarketTrade"]));
            this.isLoadingSelectedStudyMarket$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["isLoadingStudyMarketId"])); // selected compare Study

            this.isLoadingCompare$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["isLoadingCompare"]));
            this.compareList$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["getCompareList"]));
            this.comparedStudy$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_study_study_study_selectors__WEBPACK_IMPORTED_MODULE_5__["getComparedData"]));
            /*
            * SUBSCRIBE TO STATE
             */
            // wait for trade and market

            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.selectedStudyMarketTrade$, this.selectedStudyMarket$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(function (data) {
              if (data[0] && data[1]) {
                var market = data[1];
                var trade = data[0];
                _this15.selectedTrades = []; // set selected trade proprieties

                var _iterator5 = _createForOfIteratorHelper(trade.trade.trades),
                    _step5;

                try {
                  for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                    var backTrade = _step5.value;
                    var selectionN = backTrade.selectionN;

                    _this15.selectedTrades.push({
                      id: backTrade.id,
                      isBackTrade: true,
                      odds: backTrade.odds,
                      stake: backTrade.stake,
                      liability: backTrade.liability,
                      time: backTrade.condition.time,
                      sideA: backTrade.selectionN === 0,
                      note: backTrade.condition.note,
                      options: backTrade.options
                    });
                  }
                } catch (err) {
                  _iterator5.e(err);
                } finally {
                  _iterator5.f();
                }
              } else {
                _this15.selectedTrades = [];
              }
            }); // wait for study and trades of study

            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.selectedStudy$, this.selectedStudyTrades$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.destroy$)).subscribe(function (data) {
              if (data[0] && data[1]) {
                var study = data[0];
                var trades = data[1];

                _this15.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_report_report_selectors__WEBPACK_IMPORTED_MODULE_6__["getStrategyById"](study.study.strategyId))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this15.destroy$)).subscribe(function (strategy) {
                  if (strategy) {
                    // set the data in service
                    _this15.strategyReportService.setData(strategy, trades);

                    _this15.selectedStrategyReport = _this15.strategyReportService.getStrategyReport();
                    _this15.selectedStrategyPie = _this15.strategyReportService.getStrategyPie(); // visible presentational components

                    _this15.visibleReport = true;
                  } else {
                    _this15.visibleReport = false;
                  }
                });
              } else {
                _this15.visibleReport = false;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.destroy$.next(true);
            this.destroy$.complete();
          }
        }]);

        return StudyMainComponent;
      }();

      StudyMainComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      StudyMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-study-main',
        template: _raw_loader_study_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], StudyMainComponent);
      /***/
    },

    /***/
    "wtyO":
    /*!***********************************************************!*\
      !*** ./src/app/features/study/new/rule/rule.component.ts ***!
      \***********************************************************/

    /*! exports provided: RuleComponent */

    /***/
    function wtyO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RuleComponent", function () {
        return RuleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_rule_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./rule.component.html */
      "KMZW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var RuleComponent = /*#__PURE__*/function () {
        function RuleComponent() {
          _classCallCheck(this, RuleComponent);
        }

        _createClass(RuleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return RuleComponent;
      }();

      RuleComponent.ctorParameters = function () {
        return [];
      };

      RuleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-rule',
        template: _raw_loader_rule_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], RuleComponent);
      /***/
    },

    /***/
    "ymH9":
    /*!******************************************************************************************!*\
      !*** ./src/app/features/study/players/components/players-list/players-list.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: PlayersListComponent */

    /***/
    function ymH9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayersListComponent", function () {
        return PlayersListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_players_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./players-list.component.html */
      "fn0T");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_study_players_players_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../store/study/players/players.actions */
      "W1Tl");

      var PlayersListComponent = /*#__PURE__*/function () {
        function PlayersListComponent(store) {
          _classCallCheck(this, PlayersListComponent);

          this.store = store;
          this.rows = [];
          this.temp = [];
          this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
          this.columns = [{
            name: 'Date',
            sortable: true
          }, {
            name: 'Name',
            sortable: true
          }, {
            name: 'Selection',
            sortable: true
          }, {
            name: 'Tolls',
            sortable: false
          }];
        }

        _createClass(PlayersListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.temp = _toConsumableArray(this.playersList);
            this.rows = this.playersList;
          }
        }, {
          key: "onClick",
          value: function onClick(id) {
            if (this.selectedPlayerId === id) {
              this.store.dispatch(_store_study_players_players_actions__WEBPACK_IMPORTED_MODULE_5__["unsetSelectedPlayers"]());
            } else if (id !== this.selectedPlayerId) {
              this.store.dispatch(_store_study_players_players_actions__WEBPACK_IMPORTED_MODULE_5__["setSelectedPlayers"]({
                id: id
              }));
            }
          }
        }, {
          key: "deleteModal",
          value: function deleteModal(event) {
            if (event[1] === 'delete') {
              // DELETE runner note
              this.store.dispatch(_store_study_players_players_actions__WEBPACK_IMPORTED_MODULE_5__["deletePlayers"]({
                _id: event[0]
              }));
            }
          }
        }, {
          key: "reset",
          value: function reset() {
            this.store.dispatch(_store_study_players_players_actions__WEBPACK_IMPORTED_MODULE_5__["unsetSelectedPlayers"]());
          }
        }, {
          key: "updateFilter",
          value: function updateFilter(event) {
            var val = event.target.value.toLowerCase(); // filter our data
            // update the rows

            this.rows = this.temp.filter(function (players) {
              return players.players.name.toLowerCase().indexOf(val) !== -1 || !val;
            }); // Whenever the filter changes, always go back to the first page

            this.table.offset = 0;
          }
        }, {
          key: "onDuplicateClick",
          value: function onDuplicateClick(players) {
            var newPlayers = JSON.parse(JSON.stringify(players));
            newPlayers.created = Date.now();
            newPlayers.lastUpdate = Date.now();
            newPlayers.players.name = newPlayers.players.name + ' - DUPLICATE'; // remove id from data

            delete newPlayers._id; // dispatch actions with duplicated payload

            this.store.dispatch(_store_study_players_players_actions__WEBPACK_IMPORTED_MODULE_5__["createPlayers"]({
              players: newPlayers
            }));
          }
        }]);

        return PlayersListComponent;
      }();

      PlayersListComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]
        }];
      };

      PlayersListComponent.propDecorators = {
        playersList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        selectedPlayerId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }],
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]]
        }]
      };
      PlayersListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-players-list',
        template: _raw_loader_players_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["/deep/ .datatable-row-even {background-color: #181818;}"]
      })], PlayersListComponent);
      /***/
    },

    /***/
    "zMEb":
    /*!***************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/study/basket/components/basket-create/basket-filter/basket-filter-by-selection-name/basket-filter-by-selection-name.component.html ***!
      \***************************************************************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function zMEb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-list-selection-form [type]=\"'players'\"\r\n                         [title]=\"'Players Filter'\"\r\n                         (listSelectedEmitter)=\"addPlayersFilter($event)\">\r\n</app-list-selection-form>\r\n";
      /***/
    },

    /***/
    "zZp8":
    /*!**********************************************!*\
      !*** ./src/app/model/newStudy/rule/rules.ts ***!
      \**********************************************/

    /*! exports provided: Rule, Condition */

    /***/
    function zZp8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Rule", function () {
        return Rule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Condition", function () {
        return Condition;
      });

      var Rule = /*#__PURE__*/function () {
        function Rule(name) {
          _classCallCheck(this, Rule);

          this.name = name;
          this.selection = {
            options: 'fixed',
            fixed: {
              fixedOptions: 'selection Type',
              selectionN: 0,
              selectionId: 0,
              selectionType: 'favourite selection'
            },
            dynamic: {
              dynamicOptions: 'bsp',
              range: {
                min: 1.01,
                max: 1000
              }
            }
          };
          this.conditions = [];
          this.options = 'OPEN';
          this.bet = {
            options: 'place back',
            place: {
              type: 'fixed price',
              fixedPriceValue: 0
            },
            stake: {
              type: 'net stake',
              fixed: 100,
              liability: 100,
              toWin: 0
            },
            offset: {
              type: 'offset',
              options: 'tick',
              value: 10,
              optionsStop: 'tick',
              valueStop: 10
            }
          };
        }

        _createClass(Rule, [{
          key: "addCondition",
          value: function addCondition() {
            this.conditions.push(new Condition());
          }
        }, {
          key: "removeCondition",
          value: function removeCondition(index) {
            this.conditions.pop();
          }
        }]);

        return Rule;
      }();

      var Condition = /*#__PURE__*/function () {
        function Condition() {
          _classCallCheck(this, Condition);

          this.name = '';
          this.min = 0;
          this.max = 0;
        }

        _createClass(Condition, [{
          key: "setValue",
          value: function setValue(name, min, max) {
            this.name = name;
            this.min = min;
            this.max = max;
          }
        }]);

        return Condition;
      }();
      /***/

    },

    /***/
    "zvL+":
    /*!**************************************************************!*\
      !*** ./src/app/features/study/entry/entry-main.component.ts ***!
      \**************************************************************/

    /*! exports provided: EntryMainComponent */

    /***/
    function zvL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EntryMainComponent", function () {
        return EntryMainComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_entry_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./entry-main.component.html */
      "+5DZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ngrx/store */
      "l7P3");
      /* harmony import */


      var _store_study_entry_entry_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../store/study/entry/entry.selectors */
      "VoBU");

      var EntryMainComponent = /*#__PURE__*/function () {
        function EntryMainComponent(store) {
          _classCallCheck(this, EntryMainComponent);

          this.store = store;
        }

        _createClass(EntryMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // entries
            this.isLoadingAllEntry$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_study_entry_entry_selectors__WEBPACK_IMPORTED_MODULE_4__["isLoadingAllEntries"]));
            this.allEntries$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_study_entry_entry_selectors__WEBPACK_IMPORTED_MODULE_4__["getAllEntries"])); // selected entry

            this.selectedEntryId$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_study_entry_entry_selectors__WEBPACK_IMPORTED_MODULE_4__["getSelectedEntryId"]));
            this.selectedEntry$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_study_entry_entry_selectors__WEBPACK_IMPORTED_MODULE_4__["getSelectedEntry"]));
          }
        }]);

        return EntryMainComponent;
      }();

      EntryMainComponent.ctorParameters = function () {
        return [{
          type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]
        }];
      };

      EntryMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-entry-main',
        template: _raw_loader_entry_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], EntryMainComponent);
      /***/
    }
  }]);
})();