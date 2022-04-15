(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "8DW+":
/*!**************************************************************!*\
  !*** ./src/app/features/auth/register/register.component.ts ***!
  \**************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "PDnY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




let RegisterComponent = class RegisterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onRegister(e) {
        e.preventDefault();
        localStorage.setItem('isLoggedin', 'true');
        if (localStorage.getItem('isLoggedin')) {
            this.router.navigate(['/']);
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    })
], RegisterComponent);



/***/ }),

/***/ "ERdT":
/*!**********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n");

/***/ }),

/***/ "PDnY":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/auth/register/register.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row w-100 mx-0 auth-page\">\r\n  <div class=\"col-md-8 col-xl-6 mx-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-4 pr-md-0\">\r\n          <div class=\"auth-left-wrapper\">\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-8 pl-md-0\">\r\n          <div class=\"auth-form-wrapper px-4 py-5\">\r\n            <a routerLink=\".\" class=\"noble-ui-logo logo-light d-block mb-2\">Noble<span>UI</span></a>\r\n            <h5 class=\"text-muted font-weight-normal mb-4\">Create a free account.</h5>\r\n            <form class=\"forms-sample\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputUsername1\">Username</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"exampleInputUsername1\" autocomplete=\"Username\" placeholder=\"Username\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">Email address</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Email\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" autocomplete=\"current-password\" placeholder=\"Password\">\r\n              </div>\r\n              <div class=\"form-check form-check-flat form-check-primary\">\r\n                <label class=\"form-check-label\">\r\n                  <input type=\"checkbox\" class=\"form-check-input\">\r\n                  <i class=\"input-frame\"></i>\r\n                  Remember me\r\n                </label>\r\n              </div>\r\n              <div class=\"mt-3\">\r\n                <button type=\"submit\" class=\"btn btn-primary mr-2 mb-2 mb-md-0\" (click)=\"onRegister($event)\">Sing up</button>\r\n                <button type=\"button\" class=\"btn btn-outline-primary btn-icon-text mb-2 mb-md-0\">\r\n                  <i class=\"feather icon-twitter btn-icon-prepend\"></i>\r\n                  Sign up with twitter\r\n                </button>\r\n              </div>\r\n              <a routerLink=\"/auth/login\" class=\"d-block mt-3 text-muted\">Already a user? Sign in</a>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "QnW7":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/auth/login/login.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row w-100 mx-0 auth-page\">\r\n  <div class=\"col-md-8 col-xl-6 mx-auto\">\r\n    <div class=\"card\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"auth-form-wrapper px-4 py-5\">\r\n            <a routerLink=\".\" class=\"noble-ui-logo logo-light d-block mb-2\">BF<span>Platform</span></a>\r\n            <h5 class=\"text-muted font-weight-normal mb-4\">Welcome back! Log in to your account.</h5>\r\n            <form class=\"forms-sample\" [formGroup]=\"form\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">Email address</label>\r\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" formControlName=\"email\" placeholder=\"Email\" value=\"admin@demo.com\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword1\">Password</label>\r\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" formControlName=\"password\"  placeholder=\"Password\">\r\n              </div>\r\n              <p class=\"text-danger\" *ngIf=\"error\">Error in Login! Retry</p>\r\n              <div class=\"mt-3\">\r\n                <button type=\"submit\" class=\"btn btn-primary mr-2 mb-2 mb-md-0\" (click)=\"onLogin($event)\">Login</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "Yn8f":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/features/auth/auth.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "YuuO":
/*!**********************************************!*\
  !*** ./src/app/features/auth/auth.module.ts ***!
  \**********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "f5TB");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "8DW+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.component */ "clsY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");








const routes = [
    {
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"],
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
            }
        ]
    },
];
let AuthModule = class AuthModule {
};
AuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_6__["AuthComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "clsY":
/*!*************************************************!*\
  !*** ./src/app/features/auth/auth.component.ts ***!
  \*************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./auth.component.html */ "Yn8f");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AuthComponent = class AuthComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthComponent.ctorParameters = () => [];
AuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-auth',
        template: _raw_loader_auth_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], AuthComponent);



/***/ }),

/***/ "f5TB":
/*!********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "QnW7");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "ERdT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "lGQG");







let LoginComponent = class LoginComponent {
    constructor(fb, authService, router, route) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.error = false;
        this.form = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    }
    ngOnInit() {
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    onLogin(e) {
        e.preventDefault();
        // HERE CALL SERVICE TO AUTHENTICATE AND SAVE TOKEN IN LOCAL STORAGE
        const val = this.form.value;
        if (val.email && val.password) {
            this.authService.login(val.email, val.password, this.returnUrl);
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ })

}]);