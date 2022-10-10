(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "+OJN":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/features/tennis-tournament/components/tennis-tournament-data-table/tennis-tournament-data-table.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: TennisTournamentDataTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TennisTournamentDataTableComponent", function() { return TennisTournamentDataTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tennis_tournament_data_table_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tennis-tournament-data-table.component.html */ "1x3i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _store_tennis_tournament_tennisTournament_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../store/tennis-tournament/tennisTournament.actions */ "S6e3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _model_calculator_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../model/calculator/utils */ "VvVk");








let TennisTournamentDataTableComponent = class TennisTournamentDataTableComponent {
    constructor(router, store, route) {
        this.router = router;
        this.store = store;
        this.route = route;
        this.rows = [];
        this.temp = [];
        this.loadingIndicator = true;
        this.ColumnMode = _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["ColumnMode"];
        this.columns = [
            { name: 'date', sortable: true },
            { name: 'name', sortable: true },
            { name: 'type', sortable: false },
            { name: 'surface', sortable: true },
            { name: 'drawSize', sortable: true },
            { name: 'qualSize', sortable: true },
            { name: 'tolls', sortable: false },
        ];
        // for button
        this.state = {
            all: true,
            medical: false,
            note: false,
            walkover: false,
            nmRetired: false,
            retired: false,
            fsRetired: false
        };
        this.util = new _model_calculator_utils__WEBPACK_IMPORTED_MODULE_7__["Utils"]();
    }
    ngOnInit() {
        this.temp = [...this.tennisTournaments];
        this.rows = this.tennisTournaments;
    }
    updateFilter(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        // update the rows
        this.rows = this.temp.filter((d) => {
            return d.tournament.detail.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    saveAsCSV() {
        const date = new Date();
        this.util.exportToCsv(`${date.getMonth() + 1}_${date.getDate()}_${date.getFullYear()}_tennisTournament.csv`, JSON.parse(JSON.stringify(this.tennisTournaments.map(x => {
            return {
                id: x._id,
                name: this.formatterName(x)
            };
        }))));
    }
    formatterName(selected) {
        let challenger = ' ';
        if (selected.tournament.detail.type.isChallenger) {
            challenger = ' CHALLENGER ';
        }
        return selected.tournament.detail.type.federation
            + challenger
            + selected.tournament.detail.name
            + ' '
            + new Date(selected.tournament.detail.openDate).getFullYear();
    }
    buttonFilter(event) {
        const val = event.target.value.toLowerCase();
        // filter our data
        // update the rows
        this.rows = this.temp.filter((d) => {
            return (d.name.toLowerCase().indexOf(val) !== -1 || !val);
        });
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
    createModal(event) {
        if (event[1] === 'create') {
            // CREATE runner note
            this.store.dispatch(_store_tennis_tournament_tennisTournament_actions__WEBPACK_IMPORTED_MODULE_4__["createTennisTournament"]({ tennisTournament: event[0] }));
        }
    }
    updateModal(event) {
        if (event[1] === 'update') {
            event[0].lastUpdate = new Date().getTime();
            // UPDATE runner note
            this.store.dispatch(_store_tennis_tournament_tennisTournament_actions__WEBPACK_IMPORTED_MODULE_4__["updateTennisTournament"]({ _id: event[0]._id, tennisTournament: event[0] }));
        }
    }
    deleteModal(event) {
        if (event[1] === 'delete') {
            // DELETE runner note
            this.store.dispatch(_store_tennis_tournament_tennisTournament_actions__WEBPACK_IMPORTED_MODULE_4__["deleteTennisTournament"]({ _id: event[0] }));
        }
    }
};
TennisTournamentDataTableComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
TennisTournamentDataTableComponent.propDecorators = {
    tennisTournaments: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    table: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"], args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"],] }]
};
TennisTournamentDataTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tennis-tournament-data-table',
        template: _raw_loader_tennis_tournament_data_table_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: ["/deep/ .datatable-row-even {background-color: #181818;}"]
    })
], TennisTournamentDataTableComponent);



/***/ }),

/***/ "1x3i":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/tennis-tournament/components/tennis-tournament-data-table/tennis-tournament-data-table.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Tournaments</h6>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-body\"><!-- BODY -->\r\n    <div class=\"d-flex justify-content-around align-items-center\">\r\n      <app-tennis-tournament-create-modal class=\"mr-2\"\r\n                                          (addTennisTournamentEmitter)=\"createModal($event)\">\r\n\r\n      </app-tennis-tournament-create-modal>\r\n\r\n\r\n      <button type=\"button\" class=\"btn btn-outline-light btn-icon-text mr-2 d-none d-md-block\" (click)=\"saveAsCSV()\">\r\n        <i class=\"btn-icon-prepend\" data-feather=\"download\" appFeatherIcon></i>\r\n        Download\r\n      </button>\r\n\r\n\r\n\r\n      <!--\r\n      <div class=\"row\">\r\n        <button type=\"button\" [ngClass]=\"state.all ? 'btn btn-primary mr-2' :'btn btn-outline-primary mr-2'\" (click)=\"buttonFilter('ATP')\">ATP</button>\r\n        <button type=\"button\" [ngClass]=\"state.medical ? 'btn btn-danger mr-2' :'btn btn-outline-danger mr-2'\" (click)=\"buttonFilter('WTA')\">WTA</button>\r\n      </div>set\r\n\r\n      <div class=\"row\">\r\n        <button type=\"button\" [ngClass]=\"state.all ? 'btn btn-info mr-2' :'btn btn-outline-info mr-2'\" (click)=\"buttonFilter('Hard')\">Hard</button>\r\n        <button type=\"button\" [ngClass]=\"state.medical ? 'btn btn-danger mr-2' :'btn btn-outline-danger mr-2'\" (click)=\"buttonFilter('Clay')\">Clay</button>\r\n        <button type=\"button\" [ngClass]=\"state.note ? 'btn btn-success mr-2' :'btn btn-outline-success mr-2'\" (click)=\"buttonFilter('Grass')\">Grass</button>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <button type=\"button\" [ngClass]=\"state.all ? 'btn btn-light mr-2' :'btn btn-outline-light mr-2'\" (click)=\"buttonFilter('Challenger')\">Challenger</button>\r\n        <button type=\"button\" [ngClass]=\"state.medical ? 'btn btn-warning mr-2' :'btn btn-outline-warning mr-2'\" (click)=\"buttonFilter('Slam')\">Slam</button>\r\n      </div>\r\n      -->\r\n\r\n\r\n      <form class=\"form-group mr-2\" #searchFormRunner=\"ngForm\">\r\n        <div class=\"row\">\r\n          <input\r\n            class=\"form-control\"\r\n            type=\"text\"\r\n            placeholder=\"Search...\"\r\n            (keyup)=\"updateFilter($event)\"\r\n          />\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n\r\n    <ngx-datatable\r\n      class=\"dark\"\r\n      [rows]=\"rows\"\r\n      [loadingIndicator]=\"loadingIndicator\"\r\n      [columns]=\"columns\"\r\n      [columnMode]=\"ColumnMode.force\"\r\n      [headerHeight]=\"40\"\r\n      [footerHeight]=\"50\"\r\n      [limit]=\"10\"\r\n      rowHeight=\"auto\"\r\n      [reorderable]=\"true\"\r\n      [sorts]=\"[{prop: 'tournament.detail.openDate', dir: 'desc'}]\">\r\n      >\r\n      <ngx-datatable-column name=\"Date\" prop=\"tournament.detail.openDate\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{ value | date:'shortDate' }}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Name\" prop=\"tournament.detail.name\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{value}}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Type\" prop=\"tournament.detail\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5 *ngIf=\"value.type.federation?.indexOf('ATP')!=-1\"><span class=\"badge badge-primary mb-1\">{{value.type.federation}} - {{value.type.point}}</span></h5>\r\n          <h5 *ngIf=\"value.type.federation?.indexOf('WTA')!=-1\"><span class=\"badge badge-danger mb-1\">{{value.type.federation}} - {{value.type.point}}</span></h5>\r\n          <h5 *ngIf=\"value.type.isSlam\"><span class=\"badge badge-warning mb-1\">SLAM</span></h5>\r\n          <h5 *ngIf=\"value.type.isChallenger\"><span class=\"badge badge-success mb-1\">CHALLENGER</span></h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Surface\" prop=\"tournament.detail.surface\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5 *ngIf=\"value?.indexOf('GRASS')!=-1\"><span class=\"badge badge-success\">{{value}}</span></h5>\r\n          <h5 *ngIf=\"value?.indexOf('CLAY')!=-1\"><span class=\"badge badge-danger\">{{value}}</span></h5>\r\n          <h5 *ngIf=\"value?.indexOf('HARD')!=-1 && value?.indexOf('INDOOR')===-1\"><span class=\"badge badge-primary\">{{value}}</span></h5>\r\n          <h5 *ngIf=\"value?.indexOf('INDOOR')!=-1\"><span class=\"badge badge-info\">{{value}}</span></h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Draw Size\" prop=\"tournament.detail.draw\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{value}}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Total Match\" prop=\"tournament.detail.draw\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{value*2-1}}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Qualifying Size\" prop=\"tournament.detail.qualifying\">\r\n        <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n          <h5>{{value}}</h5>\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n      <ngx-datatable-column name=\"Tolls\" prop=\"\">\r\n        <ng-template let-value=\"value\"  ngx-datatable-cell-template>\r\n\r\n          <div class=\"d-flex justify-content-end align-items-baseline\">\r\n\r\n            <app-delete-modal [type]=\"'Tennis Tournament'\"\r\n                               [id]=\"value._id\"\r\n                               [name]=\"value.tournament.detail.name\"\r\n                               (deleteEmitter)=\"deleteModal($event)\">\r\n            </app-delete-modal>\r\n\r\n            <app-tennis-tournament-updates-modal [tennisTournamentInput$]=\"value\"\r\n                                                  (tennisTournamentUpdateEmitter)=\"updateModal($event)\">\r\n\r\n            </app-tennis-tournament-updates-modal>\r\n          </div>\r\n\r\n        </ng-template>\r\n      </ngx-datatable-column>\r\n\r\n    </ngx-datatable>\r\n    <!-- /NO MARKET -->\r\n  </div><!-- /BODY -->\r\n</div>\r\n");

/***/ }),

/***/ "4VSR":
/*!******************************************************************************************************************************************!*\
  !*** ./src/app/features/tennis-tournament/components/modal/tennis-tournament-updates-modal/tennis-tournament-updates-modal.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: TennisTournamentUpdatesModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TennisTournamentUpdatesModalComponent", function() { return TennisTournamentUpdatesModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tennis_tournament_updates_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tennis-tournament-updates-modal.component.html */ "AvWm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





let TennisTournamentUpdatesModalComponent = class TennisTournamentUpdatesModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        // @ts-ignore
        this.tennisTournamentUpdateEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.federation = ['ATP', 'WTA', 'ITF', 'Exhibition'];
        this.surface = ['HARD', 'CLAY', 'GRASS', 'INDOOR HARD'];
        this.point = [0, 25, 50, 60, 75, 80, 100, 125, 150, 200, 250, 500, 1000, 2000];
        this.typeOfTournament = ['WTA', 'ATP'];
    }
    ngOnInit() {
    }
    openVerticalCenteredModal(content) {
        this.tennisTournamentOutput = JSON.parse(JSON.stringify(this.tennisTournamentInput$));
        this.modalService.open(content, { centered: true }).result.then((result) => {
            this.tennisTournamentUpdateEmitter.emit([this.tennisTournamentOutput, result]);
        }).catch((res) => { });
    }
    updateDate(event) {
        this.tennisTournamentOutput.tournament.detail.openDate = event[0];
    }
};
TennisTournamentUpdatesModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
TennisTournamentUpdatesModalComponent.propDecorators = {
    tennisTournamentUpdateEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
    tennisTournamentInput$: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
TennisTournamentUpdatesModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tennis-tournament-updates-modal',
        template: _raw_loader_tennis_tournament_updates_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TennisTournamentUpdatesModalComponent);



/***/ }),

/***/ "9n/c":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/tennis-tournament/components/modal/tennis-tournament-create-modal/tennis-tournament-create-modal.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-outline-success\" (click)=\"openVerticalCenteredModal(verticalCenteredModal)\">\r\n  Add new Tournament <i class=\"feather icon-plus\"></i>\r\n</button>\r\n\r\n<!-- Modal -->\r\n<ng-template #verticalCenteredModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Create New Tennis Tournament</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close('close')\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n\r\n    <form class=\"forms-sample grid-margin\" *ngIf=\"tennisTournament!= undefined\" >\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"text-gray\">Name</label>\r\n        <input class=\"form-control\"\r\n               id=\"name\"\r\n               type=\"text\"\r\n               placeholder=\"Name\"\r\n               name=\"name\"\r\n               [(ngModel)]=\"tennisTournament.tournament.detail.name\">\r\n      </div>\r\n\r\n      <app-date-form [time]=\"null\"\r\n                     (dateEmitter)=\"updateDate($event)\"\r\n                     [showTime]=\"false\"\r\n                     [showDate]=\"true\">\r\n      </app-date-form>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label class=\"text-gray\">Federation</label>\r\n            <ng-select [items]=\"federation\"\r\n                       id=\"federation\"\r\n                       name=\"federation\"\r\n                       bindLabel=\"value\"\r\n                       bindValue=\"value\"\r\n                       placeholder=\"Federation\"\r\n                       [(ngModel)]=\"tennisTournament.tournament.detail.type.federation\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label class=\"text-gray\">Point</label>\r\n            <ng-select [items]=\"point\"\r\n                       id=\"point\"\r\n                       name=\"point\"\r\n                       bindLabel=\"value\"\r\n                       bindValue=\"value\"\r\n                       placeholder=\"Point\"\r\n                       [(ngModel)]=\"tennisTournament.tournament.detail.type.point\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"tennisTournament.tournament.detail.type.isChallenger\" name=\"isChallenger\">\r\n              <i class=\"input-frame\"></i>\r\n              Is Challenger\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"tennisTournament.tournament.detail.type.isSlam\" name=\"isSlam\">\r\n              <i class=\"input-frame\"></i>\r\n              Is Grand Slam\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"surface\">Surface</label>\r\n        <ng-select [items]=\"surface\"\r\n                   id=\"surface\"\r\n                   name=\"surface\"\r\n                   bindLabel=\"value\"\r\n                   bindValue=\"value\"\r\n                   placeholder=\"Surface\"\r\n                   [(ngModel)]=\"tennisTournament.tournament.detail.surface\">\r\n        </ng-select>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"drawSize\" class=\"text-gray\">Draw Size</label>\r\n            <input class=\"form-control\"\r\n                   id=\"drawSize\"\r\n                   type=\"number\"\r\n                   placeholder=\"Draw Size\"\r\n                   name=\"drawSize\"\r\n                   [(ngModel)]=\"tennisTournament.tournament.detail.draw\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"qualfSize\" class=\"text-gray\">Qualifying Size</label>\r\n            <input class=\"form-control\"\r\n                   id=\"qualfSize\"\r\n                   type=\"number\"\r\n                   placeholder=\"Qualifying Size\"\r\n                   name=\"qualfSize\"\r\n                   [(ngModel)]=\"tennisTournament.tournament.detail.qualifying\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <p>Created on: {{tennisTournament.created | date}}</p>\r\n    <p *ngIf=\"tennisTournament.lastUpdate !== tennisTournament.created\">Last update: {{tennisTournament.lastUpdate | date:'short'}}</p>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close('close')\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('create')\">Create</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "AvWm":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/tennis-tournament/components/modal/tennis-tournament-updates-modal/tennis-tournament-updates-modal.component.html ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-xs btn-outline-light\" (click)=\"openVerticalCenteredModal(verticalCenteredModal)\">\r\n  <i class=\"feather icon-edit\"></i>\r\n</button>\r\n\r\n<!-- Modal -->\r\n<ng-template #verticalCenteredModal let-modal>\r\n  <div class=\"modal-header\">\r\n    <h5 class=\"modal-title\" id=\"exampleModalLabel\">Update Tournament</h5>\r\n    <button type=\"button\" class=\"close\" (click)=\"modal.close('close')\" aria-label=\"Close\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n\r\n    <form class=\"forms-sample grid-margin\" *ngIf=\"tennisTournamentOutput!= undefined\" >\r\n      <div class=\"form-group\">\r\n        <label for=\"name\" class=\"text-gray\">Name</label>\r\n        <input class=\"form-control\"\r\n               id=\"name\"\r\n               type=\"text\"\r\n               placeholder=\"Name\"\r\n               name=\"name\"\r\n               [(ngModel)]=\"tennisTournamentOutput.tournament.detail.name\">\r\n      </div>\r\n\r\n      <app-date-form [time]=\"tennisTournamentOutput.tournament.detail.openDate\"\r\n                     (dateEmitter)=\"updateDate($event)\"\r\n                     [showTime]=\"false\"\r\n                     [showDate]=\"true\">\r\n      </app-date-form>\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label class=\"text-gray\">Federation</label>\r\n            <ng-select [items]=\"federation\"\r\n                       id=\"federation\"\r\n                       name=\"federation\"\r\n                       bindLabel=\"value\"\r\n                       bindValue=\"value\"\r\n                       placeholder=\"Federation\"\r\n                       [(ngModel)]=\"tennisTournamentOutput.tournament.detail.type.federation\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label class=\"text-gray\">Point</label>\r\n            <ng-select [items]=\"point\"\r\n                       id=\"point\"\r\n                       name=\"point\"\r\n                       bindLabel=\"value\"\r\n                       bindValue=\"value\"\r\n                       placeholder=\"Point\"\r\n                       [(ngModel)]=\"tennisTournamentOutput.tournament.detail.type.point\">\r\n            </ng-select>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"tennisTournamentOutput.tournament.detail.type.isChallenger\" name=\"isChallenger\">\r\n              <i class=\"input-frame\"></i>\r\n              Is Challenger\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"tennisTournamentOutput.tournament.detail.type.isSlam\" name=\"isSlam\">\r\n              <i class=\"input-frame\"></i>\r\n              Is Grand Slam\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label class=\"text-gray\" for=\"surface\">Surface</label>\r\n        <ng-select [items]=\"surface\"\r\n                   id=\"surface\"\r\n                   name=\"surface\"\r\n                   bindLabel=\"value\"\r\n                   bindValue=\"value\"\r\n                   placeholder=\"Surface\"\r\n                   [(ngModel)]=\"tennisTournamentOutput.tournament.detail.surface\">\r\n        </ng-select>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"drawSize\" class=\"text-gray\">Draw Size</label>\r\n            <input class=\"form-control\"\r\n                   id=\"drawSize\"\r\n                   type=\"number\"\r\n                   placeholder=\"Draw Size\"\r\n                   name=\"drawSize\"\r\n                   [(ngModel)]=\"tennisTournamentOutput.tournament.detail.draw\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <div class=\"form-group\">\r\n            <label for=\"qualfSize\" class=\"text-gray\">Qualifying Size</label>\r\n            <input class=\"form-control\"\r\n                   id=\"qualfSize\"\r\n                   type=\"number\"\r\n                   placeholder=\"Qualifying Size\"\r\n                   name=\"qualfSize\"\r\n                   [(ngModel)]=\"tennisTournamentOutput.tournament.detail.qualifying\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n\r\n    <p>Tennis Tournament created on: {{tennisTournamentOutput.created | date:'short'}}</p>\r\n     <p *ngIf=\"tennisTournamentOutput.lastUpdate !== tennisTournamentOutput.created\">Note last update: {{tennisTournamentOutput.lastUpdate | date:'short'}}</p>\r\n\r\n\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"modal.close('close')\">Close</button>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close('update')\">Update</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "E9Te":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/tennis-tournament/components/tennis-tournament-detail/tennis-tournament-detail.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- CARD 1-->\r\n<div class=\"card\">\r\n  <!-- HEADER -->\r\n  <div class=\"card-header\">\r\n    <div class=\"d-flex justify-content-between align-items-baseline\">\r\n      <h6 class=\"card-title mb-0\">Detail</h6>\r\n    </div>\r\n  </div><!-- /HEADER -->\r\n  <div class=\"card-body\"><!-- BODY -->\r\n\r\n    {{(tournamentNote | async)}}\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "L5E4":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/features/tennis-tournament/components/modal/tennis-tournament-create-modal/tennis-tournament-create-modal.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: TennisTournamentCreateModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TennisTournamentCreateModalComponent", function() { return TennisTournamentCreateModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tennis_tournament_create_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tennis-tournament-create-modal.component.html */ "9n/c");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");




let TennisTournamentCreateModalComponent = class TennisTournamentCreateModalComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.addTennisTournamentEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.federation = ['ATP', 'WTA', 'ITF', 'Exhibition'];
        this.surface = ['HARD', 'CLAY', 'GRASS', 'INDOOR HARD'];
        this.point = [0, 25, 50, 60, 75, 80, 100, 125, 150, 200, 250, 500, 1000, 2000];
    }
    ngOnInit() {
        this.constructTennisTournament();
    }
    openVerticalCenteredModal(content) {
        this.modalService.open(content, { centered: true }).result.then((result) => {
            this.addTennisTournamentEmitter.emit([this.tennisTournament, result]);
        }).finally(() => {
            // reset for next input
            this.constructTennisTournament();
        });
    }
    updateDate(event) {
        this.tennisTournament.tournament.detail.openDate = event[0];
    }
    constructTennisTournament() {
        this.tennisTournament = {
            created: new Date().getTime(),
            lastUpdate: new Date().getTime(),
            tournament: {
                detail: {
                    name: '',
                    openDate: 0,
                    surface: null,
                    type: {
                        federation: null,
                        point: 0,
                        isSlam: false,
                        isChallenger: false
                    },
                    qualifying: 16,
                    draw: 32
                },
                stats: {
                    final: {
                        winner: {
                            name: '',
                            id: 0,
                        },
                        runnerUp: {
                            name: '',
                            id: 0,
                        },
                        semifinalist: [{
                                name: '',
                                id: 0
                            }],
                        participants: [{
                                name: '',
                                id: 0
                            }]
                    }
                }
            }
        };
    }
};
TennisTournamentCreateModalComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }
];
TennisTournamentCreateModalComponent.propDecorators = {
    addTennisTournamentEmitter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
};
TennisTournamentCreateModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tennis-tournament-create-modal',
        template: _raw_loader_tennis_tournament_create_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TennisTournamentCreateModalComponent);



/***/ }),

/***/ "RnBh":
/*!************************************************************************!*\
  !*** ./src/app/features/tennis-tournament/tennis-tournament.module.ts ***!
  \************************************************************************/
/*! exports provided: TennisTournamentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TennisTournamentModule", function() { return TennisTournamentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_tennis_tournament_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tennis-tournament-main.component */ "V7B9");
/* harmony import */ var _components_tennis_tournament_detail_tennis_tournament_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tennis-tournament-detail/tennis-tournament-detail.component */ "nzgk");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/feather-icon/feather-icon.module */ "tyVc");
/* harmony import */ var _components_modal_tennis_tournament_create_modal_tennis_tournament_create_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal/tennis-tournament-create-modal/tennis-tournament-create-modal.component */ "L5E4");
/* harmony import */ var _components_modal_tennis_tournament_updates_modal_tennis_tournament_updates_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal/tennis-tournament-updates-modal/tennis-tournament-updates-modal.component */ "4VSR");
/* harmony import */ var _components_tennis_tournament_data_table_tennis_tournament_data_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tennis-tournament-data-table/tennis-tournament-data-table.component */ "+OJN");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");















// ROUTER
const routes = [
    {
        path: '',
        component: _components_tennis_tournament_main_component__WEBPACK_IMPORTED_MODULE_4__["TennisTournamentMainComponent"]
    },
    {
        path: 'detail/:tournamentId',
        component: _components_tennis_tournament_detail_tennis_tournament_detail_component__WEBPACK_IMPORTED_MODULE_5__["TennisTournamentDetailComponent"],
    },
];
let TennisTournamentModule = class TennisTournamentModule {
};
TennisTournamentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_tennis_tournament_main_component__WEBPACK_IMPORTED_MODULE_4__["TennisTournamentMainComponent"],
            _components_tennis_tournament_detail_tennis_tournament_detail_component__WEBPACK_IMPORTED_MODULE_5__["TennisTournamentDetailComponent"],
            _components_modal_tennis_tournament_create_modal_tennis_tournament_create_modal_component__WEBPACK_IMPORTED_MODULE_8__["TennisTournamentCreateModalComponent"],
            _components_modal_tennis_tournament_updates_modal_tennis_tournament_updates_modal_component__WEBPACK_IMPORTED_MODULE_9__["TennisTournamentUpdatesModalComponent"],
            _components_tennis_tournament_data_table_tennis_tournament_data_table_component__WEBPACK_IMPORTED_MODULE_10__["TennisTournamentDataTableComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _core_feather_icon_feather_icon_module__WEBPACK_IMPORTED_MODULE_7__["FeahterIconModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbDatepickerModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
        ]
    })
], TennisTournamentModule);



/***/ }),

/***/ "S55M":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/tennis-tournament/components/tennis-tournament-maincomponent.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"d-flex justify-content-between align-items-center flex-wrap grid-margin\">\r\n  <div>\r\n    <h4 class=\"mb-3 mb-md-0\">Tennis Tournament List</h4>\r\n    <p>Discover all tennis tournament in DB </p>\r\n  </div>\r\n  <div class=\"d-flex align-items-center flex-wrap text-nowrap\">\r\n    <button type=\"button\" class=\"btn btn-outline-info btn-icon-text mr-2 d-none d-md-block\" (click)=\"refreshAllTennisTournament()\">\r\n      <i class=\"btn-icon-prepend\" data-feather=\"refresh-ccw\" appFeatherIcon></i>\r\n      Refresh\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!-- BREADCRUMB -->\r\n<nav aria-label=\"breadcrumb\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/\">BF</a></li>\r\n    <li class=\"breadcrumb-item\"><a routerLink=\"/tennisTournament\">Tennis Tournaments</a></li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">List</li>\r\n  </ol>\r\n</nav>\r\n<!-- /BREADCRUMB -->\r\n\r\n<!-- ROW 1-->\r\n<div class=\"col-12 grid-margin\">\r\n  <!-- STATS COMPONENTS-->\r\n  <app-loading-cards *ngIf=\"(isLoadingTennisTournament$ | async).isLoading\"></app-loading-cards>\r\n  <app-tennis-tournament-data-table *ngIf=\"(isLoadingTennisTournament$ | async).isLoadingSuccess\"\r\n                                    [tennisTournaments]=\"tennisTournament$ | async\">\r\n\r\n  </app-tennis-tournament-data-table>\r\n\r\n</div>\r\n<!-- /ROW 1\r\n\r\n<div class=\"col-12 grid-margin\">\r\n  STATS COMPONENTS\r\n  <app-tennis-tournament-detail></app-tennis-tournament-detail>\r\n\r\n</div>\r\n-->\r\n\r\n");

/***/ }),

/***/ "V7B9":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/tennis-tournament/components/tennis-tournament-main.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TennisTournamentMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TennisTournamentMainComponent", function() { return TennisTournamentMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tennis_tournament_maincomponent_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tennis-tournament-maincomponent.html */ "S55M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _store_tennis_tournament_tennisTournament_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/tennis-tournament/tennisTournament.selectors */ "Jrow");
/* harmony import */ var _store_tennis_tournament_tennisTournament_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../store/tennis-tournament/tennisTournament.actions */ "S6e3");






let TennisTournamentMainComponent = class TennisTournamentMainComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.tennisTournament$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_tennis_tournament_tennisTournament_selectors__WEBPACK_IMPORTED_MODULE_4__["getAllTennisTournaments"]));
        this.isLoadingTennisTournament$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_tennis_tournament_tennisTournament_selectors__WEBPACK_IMPORTED_MODULE_4__["getIsLoadingAllTennisTournament"]));
    }
    refreshAllTennisTournament() {
        this.store.dispatch(_store_tennis_tournament_tennisTournament_actions__WEBPACK_IMPORTED_MODULE_5__["getAllTennisTournament"]());
    }
};
TennisTournamentMainComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
TennisTournamentMainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tennis-tournament-main',
        template: _raw_loader_tennis_tournament_maincomponent_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TennisTournamentMainComponent);



/***/ }),

/***/ "nzgk":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/features/tennis-tournament/components/tennis-tournament-detail/tennis-tournament-detail.component.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: TennisTournamentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TennisTournamentDetailComponent", function() { return TennisTournamentDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tennis_tournament_detail_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tennis-tournament-detail.component.html */ "E9Te");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");




let TennisTournamentDetailComponent = class TennisTournamentDetailComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
};
TennisTournamentDetailComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
];
TennisTournamentDetailComponent.propDecorators = {
    tournamentMarket: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
    tournamentNote: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
TennisTournamentDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tennis-tournament-detail',
        template: _raw_loader_tennis_tournament_detail_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], TennisTournamentDetailComponent);



/***/ })

}]);