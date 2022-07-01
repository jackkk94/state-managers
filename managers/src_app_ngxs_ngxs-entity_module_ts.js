"use strict";
(self["webpackChunkmanagers"] = self["webpackChunkmanagers"] || []).push([["src_app_ngxs_ngxs-entity_module_ts"],{

/***/ 3403:
/*!*************************************************!*\
  !*** ./src/app/ngxs/manager-wrapper.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperService": () => (/* binding */ WrapperService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _shared_services_measure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/measure.service */ 2812);
/* harmony import */ var _shared_services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/logger.service */ 5043);






class WrapperService {
    constructor(store, measureService, loggerService) {
        this.store = store;
        this.measureService = measureService;
        this.loggerService = loggerService;
        this.store$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.measures = [];
        this.store.select(state => state.entities.entities).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.skip)(1)).subscribe((z) => {
            const start = this.measureService.marks[this.measureService.marks.length - 1]?.start;
            const end = this.measureService.end();
            this.measures.push(end);
            this.loggerService.log(start, this.measures.length, end);
            this.store$.next(z);
        });
    }
    dispatch(action) {
        this.measureService.start();
        this.store.dispatch(action);
    }
}
WrapperService.ɵfac = function WrapperService_Factory(t) { return new (t || WrapperService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_1__.MeasureService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_shared_services_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerService)); };
WrapperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: WrapperService, factory: WrapperService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5705:
/*!*********************************************!*\
  !*** ./src/app/ngxs/ngxs-entity.actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEntity": () => (/* binding */ addEntity),
/* harmony export */   "addedEntity": () => (/* binding */ addedEntity)
/* harmony export */ });
class addEntity {
    constructor(payload) {
        this.payload = payload;
    }
}
addEntity.type = '[Entity] Add Entity';
class addedEntity {
    constructor(payload) {
        this.payload = payload;
    }
}
addedEntity.type = '[Entity] Added Entity success';


/***/ }),

/***/ 4208:
/*!********************************************!*\
  !*** ./src/app/ngxs/ngxs-entity.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgXsModule": () => (/* binding */ NgXsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngxs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngxs.component */ 4559);
/* harmony import */ var _ngxs_entity_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngxs-entity.state */ 513);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);









class NgXsModule {
}
NgXsModule.ɵfac = function NgXsModule_Factory(t) { return new (t || NgXsModule)(); };
NgXsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NgXsModule });
NgXsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
                path: '',
                component: _ngxs_component__WEBPACK_IMPORTED_MODULE_1__.NgXsComponent
            }]),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _ngxs_store__WEBPACK_IMPORTED_MODULE_0__.NgxsModule.forFeature([_ngxs_entity_state__WEBPACK_IMPORTED_MODULE_2__.NgXsEntitiesState])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NgXsModule, { declarations: [_ngxs_component__WEBPACK_IMPORTED_MODULE_1__.NgXsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_0__["ɵx"]] }); })();


/***/ }),

/***/ 513:
/*!*******************************************!*\
  !*** ./src/app/ngxs/ngxs-entity.state.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgXsEntitiesState": () => (/* binding */ NgXsEntitiesState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 1339);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9337);
/* harmony import */ var _ngxs_entity_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngxs-entity.actions */ 5705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);





let NgXsEntitiesState = class NgXsEntitiesState {
    addEntity(ctx, { payload }) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.delay)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)(entity => ctx.dispatch(new _ngxs_entity_actions__WEBPACK_IMPORTED_MODULE_1__.addedEntity(entity))));
    }
    addedEntity(ctx, { payload }) {
        ctx.setState((state) => ({
            entities: [...state.entities, payload]
        }));
    }
};
NgXsEntitiesState.ɵfac = function NgXsEntitiesState_Factory(t) { return new (t || NgXsEntitiesState)(); };
NgXsEntitiesState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: NgXsEntitiesState, factory: NgXsEntitiesState.ɵfac });
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_ngxs_entity_actions__WEBPACK_IMPORTED_MODULE_1__.addEntity)
], NgXsEntitiesState.prototype, "addEntity", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_ngxs_entity_actions__WEBPACK_IMPORTED_MODULE_1__.addedEntity)
], NgXsEntitiesState.prototype, "addedEntity", null);
NgXsEntitiesState = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'entities',
        defaults: { entities: [] }
    })
], NgXsEntitiesState);



/***/ }),

/***/ 4559:
/*!****************************************!*\
  !*** ./src/app/ngxs/ngxs.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgXsComponent": () => (/* binding */ NgXsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _manager_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager-base.component */ 2506);
/* harmony import */ var _shared_utils_Entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/Entities */ 9586);
/* harmony import */ var _manager_wrapper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager-wrapper.service */ 3403);
/* harmony import */ var _ngxs_entity_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngxs-entity.actions */ 5705);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_measure_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/measure.service */ 2812);
/* harmony import */ var _shared_services_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/logger.service */ 5043);
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/local-storage.service */ 1928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/progress-bar/progress-bar.component */ 8632);
/* harmony import */ var _shared_components_scatter_chart_scatter_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/scatter-chart/scatter-chart.component */ 995);

















function NgXsComponent_ng_container_0_app_scatter_chart_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-scatter-chart", 3);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r2.chartData);
  }
}

function NgXsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-progress-bar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, NgXsComponent_ng_container_0_app_scatter_chart_2_Template, 1, 1, "app-scatter-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const entities_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", entities_r1.length)("max", ctx_r0.entitiesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.chartData == null ? null : ctx_r0.chartData.length);
  }
}

class NgXsComponent extends _manager_base_component__WEBPACK_IMPORTED_MODULE_1__.ManagerComponent {
  constructor(route, store, measureService, wrapperManager, loggerService, localStorageService) {
    super(route, measureService, loggerService, localStorageService);
    this.store = store;
    this.wrapperManager = wrapperManager;
    this.name = 'ngxs';
    this.wrapperManager.store$.subscribe(z => {
      if (this.wrapperManager.measures.length < this.entitiesCount) {
        this.wrapperManager.dispatch(new _ngxs_entity_actions__WEBPACK_IMPORTED_MODULE_4__.addEntity((0,_shared_utils_Entities__WEBPACK_IMPORTED_MODULE_2__.createEntity)(z)));
      } else {
        this.chartData = this.buildChartData();
        this.saveResult();
      }
    });
  }

  ngOnInit() {
    this.wrapperManager.dispatch(new _ngxs_entity_actions__WEBPACK_IMPORTED_MODULE_4__.addEntity((0,_shared_utils_Entities__WEBPACK_IMPORTED_MODULE_2__.createEntity)(undefined)));
  }

}

NgXsComponent.ɵfac = function NgXsComponent_Factory(t) {
  return new (t || NgXsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_5__.MeasureService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_manager_wrapper_service__WEBPACK_IMPORTED_MODULE_3__.WrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_logger_service__WEBPACK_IMPORTED_MODULE_6__.LoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService));
};

NgXsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: NgXsComponent,
  selectors: [["app-entity"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_manager_wrapper_service__WEBPACK_IMPORTED_MODULE_3__.WrapperService]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["label", "entities", 3, "value", "max"], ["color", "green", "label", "NgXs", 3, "data", 4, "ngIf"], ["color", "green", "label", "NgXs", 3, "data"]],
  template: function NgXsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, NgXsComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx.entities$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__.ProgressBarComponent, _shared_components_scatter_chart_scatter_chart_component__WEBPACK_IMPORTED_MODULE_9__.ScatterChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});

(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)(state => state.entities.entities)], NgXsComponent.prototype, "entities$", void 0);

/***/ })

}]);
//# sourceMappingURL=src_app_ngxs_ngxs-entity_module_ts.js.map