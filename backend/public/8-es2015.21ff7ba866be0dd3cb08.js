(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "+MPt":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/documentation/components/documentation.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h4 class=\"mb-3 mb-md-0\">Documentation of the site</h4>\r\n    <p>Description and progress in BF platform.</p>\r\n  </div>\r\n  <div class=\"d-flex align-items-center flex-wrap text-nowrap\">\r\n    <button type=\"button\" class=\"btn btn-outline-info btn-icon-text mr-2 d-none d-md-block\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!-- BREADCRUMB -->\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">BF</a></li>\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/markets\">Documentation</a></li>\r\n  </ol>\r\n</nav>\r\n<!-- /BREADCRUMB -->\r\n\r\n<div class=\"col\">\r\n\r\n  <div class=\"row grid-margin\">\r\n    <div class=\"col\">\r\n      <app-version-documentation></app-version-documentation>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "3Txu":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/documentation/components/completed/note-documentation.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Note</h6>\r\n    </div>\r\n    </div><!-- /HEADER -->\r\n    <div class=\"card-body\"><!-- BODY -->\r\n\r\n    </div><!-- /BODY -->\r\n  </div>\r\n  <!-- /CARD 1-->\r\n\r\n\r\n");

/***/ }),

/***/ "TMzO":
/*!****************************************************************************************!*\
  !*** ./src/app/features/documentation/components/todo/todo-documentation.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TodoDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDocumentationComponent", function() { return TodoDocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_todo_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./todo-documentation.component.html */ "d+nk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let TodoDocumentationComponent = class TodoDocumentationComponent {
    constructor() { }
    ngOnInit() {
    }
};
TodoDocumentationComponent.ctorParameters = () => [];
TodoDocumentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-todo-documenattion',
        template: _raw_loader_todo_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TodoDocumentationComponent);



/***/ }),

/***/ "YcU9":
/*!******************************************************************************!*\
  !*** ./src/app/features/documentation/components/documentation.component.ts ***!
  \******************************************************************************/
/*! exports provided: DocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationComponent", function() { return DocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./documentation.component.html */ "+MPt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let DocumentationComponent = class DocumentationComponent {
    constructor() { }
    ngOnInit() {
    }
};
DocumentationComponent.ctorParameters = () => [];
DocumentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-documentation',
        template: _raw_loader_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], DocumentationComponent);



/***/ }),

/***/ "cVay":
/*!*********************************************************************************************!*\
  !*** ./src/app/features/documentation/components/completed/note-documentation.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NoteDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoteDocumentationComponent", function() { return NoteDocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_note_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./note-documentation.component.html */ "3Txu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let NoteDocumentationComponent = class NoteDocumentationComponent {
    constructor() { }
    ngOnInit() {
    }
};
NoteDocumentationComponent.ctorParameters = () => [];
NoteDocumentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-note-documentation',
        template: _raw_loader_note_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], NoteDocumentationComponent);



/***/ }),

/***/ "d+nk":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/documentation/components/todo/todo-documentation.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Todo</h6>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <h4>Markets Detail</h4>\r\n          </div>\r\n          <div class=\"col\">\r\n            <p>Detail prematch and inplay analisysy</p>\r\n          </div>\r\n          <div class=\"col\">\r\n            <p>chart for box plot</p>\r\n            <p>stats descriptive analysis </p>\r\n            <p>How to save this data in db, or calculate each time? </p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <h4>Study</h4>\r\n          </div>\r\n          <div class=\"col\">\r\n            <p>Study of multiple markets</p>\r\n          </div>\r\n          <div class=\"col\">\r\n            <p>study module</p>\r\n            <p>create all components </p>\r\n            <p>data for this module</p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n\r\n  </div><!-- /BODY -->\r\n</div>\r\n<!-- /CARD 1-->\r\n\r\n\r\n");

/***/ }),

/***/ "fS1c":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/documentation/components/version/version-documentation.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: VersionDocumentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionDocumentationComponent", function() { return VersionDocumentationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_version_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./version-documentation.component.html */ "oO/E");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let VersionDocumentationComponent = class VersionDocumentationComponent {
    constructor() { }
    ngOnInit() {
    }
};
VersionDocumentationComponent.ctorParameters = () => [];
VersionDocumentationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-version-documentation',
        template: _raw_loader_version_documentation_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], VersionDocumentationComponent);



/***/ }),

/***/ "nsRf":
/*!****************************************************************!*\
  !*** ./src/app/features/documentation/documentation.module.ts ***!
  \****************************************************************/
/*! exports provided: DocumentationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentationModule", function() { return DocumentationModule; });
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
/* harmony import */ var _components_documentation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/documentation.component */ "YcU9");
/* harmony import */ var _components_todo_todo_documentation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/todo/todo-documentation.component */ "TMzO");
/* harmony import */ var _components_completed_note_documentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/completed/note-documentation.component */ "cVay");
/* harmony import */ var _components_version_version_documentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/version/version-documentation.component */ "fS1c");

// MAIN IMPORT




// DEPENDENCIES IMPORT


// Ng-ApexCharts

// Ng2-trade

// other module





// MAIN COMPONENTS
//    MARKETS
//      SUB COMPONENTS
// ROUTER
const routes = [
    {
        path: '',
        component: _components_documentation_component__WEBPACK_IMPORTED_MODULE_10__["DocumentationComponent"]
    }
];
let DocumentationModule = class DocumentationModule {
};
DocumentationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_documentation_component__WEBPACK_IMPORTED_MODULE_10__["DocumentationComponent"],
            _components_todo_todo_documentation_component__WEBPACK_IMPORTED_MODULE_11__["TodoDocumentationComponent"],
            _components_completed_note_documentation_component__WEBPACK_IMPORTED_MODULE_12__["NoteDocumentationComponent"],
            _components_version_version_documentation_component__WEBPACK_IMPORTED_MODULE_13__["VersionDocumentationComponent"]
        ],
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
        ]
    })
], DocumentationModule);



/***/ }),

/***/ "oO/E":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/documentation/components/version/version-documentation.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Version</h6>\r\n    </div><!-- /HEADER -->\r\n  </div>\r\n  <div class=\"card-body\"><!-- BODY -->\r\n    <ul class=\"list-group\">\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <h5>02/19/2020</h5>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h5 class=\"text-warning\">TODO</h5>\r\n            <P>replace all runner input with new component</P>\r\n            <P>replace all odds input with new component</P>\r\n            <P>create and replace all tennis tournament input with new component</P>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h5>v.0.1.2</h5>\r\n            <P>replace all runner input with new component</P>\r\n            <P>replace all odds input with new component</P>\r\n          </div>\r\n        </div>\r\n      </li>\r\n      <li class=\"list-group-item\">\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <h5>02/06/2020</h5>\r\n          </div>\r\n          <div class=\"col\">\r\n            <h4>v.0.1.1</h4>\r\n          </div>\r\n          <div class=\"col\">\r\n            <p>Last stable version</p>\r\n          </div>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div><!-- /BODY -->\r\n</div>\r\n");

/***/ })

}]);