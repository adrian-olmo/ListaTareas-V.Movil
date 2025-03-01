(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agregar-agregar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n\n        <ion-buttons slot=\"start\">\n            <ion-back-button color=\"tertiary\" defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n\n        <ion-title>{{lista.titulo}}</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<br>\n\n<ion-content>\n\n    <ion-list>\n        <ion-item>\n            <ion-label position=\"floating\">Escribe el titulo</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"nombreItem\" (keyup.enter)=\"agregarItem()\"></ion-input>\n        </ion-item>\n    </ion-list>\n\n\n    <ion-list>\n        <ion-list-header *ngIf=\"lista.items.length > 0\">\n            <ion-label>Tareas por hacer</ion-label>\n        </ion-list-header>\n    </ion-list>\n    <br>\n\n    <ion-item-sliding class=\"animated fadeInDown\" *ngFor=\"let item of lista.items; let i = index\">\n\n        <ion-item>\n            <ion-checkbox slot=\"start\" color=\"tertiary\" [(ngModel)]=\"item.completado\" (ionChange)=\"cambioCheck(item)\"></ion-checkbox>\n            <ion-label>{{item.desc}}</ion-label>\n        </ion-item>\n\n        <ion-item-options side=\"end\">\n            <ion-item-option color=\"danger\" (click)=\"borrar(i)\">\n                <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n            </ion-item-option>\n        </ion-item-options>\n\n\n\n    </ion-item-sliding>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/models/lista-item.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/lista-item.model.ts ***!
  \********************************************/
/*! exports provided: ListaItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaItem", function() { return ListaItem; });
class ListaItem {
    constructor(desc) {
        this.desc = desc;
        this.completado = false;
    }
}


/***/ }),

/***/ "./src/app/pages/agregar/agregar-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/agregar/agregar-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: AgregarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPageRoutingModule", function() { return AgregarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _agregar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./agregar.page */ "./src/app/pages/agregar/agregar.page.ts");




const routes = [
    {
        path: '',
        component: _agregar_page__WEBPACK_IMPORTED_MODULE_3__["AgregarPage"]
    }
];
let AgregarPageRoutingModule = class AgregarPageRoutingModule {
};
AgregarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AgregarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/agregar/agregar.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/agregar/agregar.module.ts ***!
  \*************************************************/
/*! exports provided: AgregarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPageModule", function() { return AgregarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _agregar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./agregar-routing.module */ "./src/app/pages/agregar/agregar-routing.module.ts");
/* harmony import */ var _agregar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./agregar.page */ "./src/app/pages/agregar/agregar.page.ts");







let AgregarPageModule = class AgregarPageModule {
};
AgregarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _agregar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AgregarPageRoutingModule"]
        ],
        declarations: [_agregar_page__WEBPACK_IMPORTED_MODULE_6__["AgregarPage"]]
    })
], AgregarPageModule);



/***/ }),

/***/ "./src/app/pages/agregar/agregar.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/agregar/agregar.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FncmVnYXIvYWdyZWdhci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/agregar/agregar.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/agregar/agregar.page.ts ***!
  \***********************************************/
/*! exports provided: AgregarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarPage", function() { return AgregarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_pendientes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pendientes.service */ "./src/app/services/pendientes.service.ts");
/* harmony import */ var src_app_models_lista_item_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/lista-item.model */ "./src/app/models/lista-item.model.ts");





let AgregarPage = class AgregarPage {
    constructor(pendienteService, Actroute) {
        this.pendienteService = pendienteService;
        this.Actroute = Actroute;
        this.nombreItem = '';
        const listaId = this.Actroute.snapshot.paramMap.get('listaId');
        //console.log(listaId);
        this.lista = this.pendienteService.obtenerLista(listaId);
        //console.log(this.lista);
    }
    ngOnInit() {
    }
    agregarItem() {
        if (this.nombreItem.length === 0) {
            return;
        }
        const nuevoItem = new src_app_models_lista_item_model__WEBPACK_IMPORTED_MODULE_4__["ListaItem"](this.nombreItem);
        this.lista.items.push(nuevoItem);
        this.nombreItem = '';
        this.pendienteService.guardarStorage();
    }
    cambioCheck(item) {
        const pendientes = this.lista.items.filter(itemData => !itemData.completado).length;
        if (pendientes === 0) {
            this.lista.termiandaEn = new Date();
            this.lista.completada = true;
        }
        else {
            this.lista.termiandaEn = null;
            this.lista.completada = false;
        }
        this.pendienteService.guardarStorage();
        console.log(this.pendienteService.listas);
    }
    borrar(i) {
        this.lista.items.splice(i, 1);
        this.pendienteService.guardarStorage();
    }
};
AgregarPage.ctorParameters = () => [
    { type: _services_pendientes_service__WEBPACK_IMPORTED_MODULE_3__["PendientesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AgregarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agregar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./agregar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/agregar/agregar.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./agregar.page.scss */ "./src/app/pages/agregar/agregar.page.scss")).default]
    })
], AgregarPage);



/***/ })

}]);
//# sourceMappingURL=agregar-agregar-module-es2015.js.map