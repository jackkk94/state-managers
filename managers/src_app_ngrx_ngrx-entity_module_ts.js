"use strict";
(self["webpackChunkmanagers"] = self["webpackChunkmanagers"] || []).push([["src_app_ngrx_ngrx-entity_module_ts"],{

/***/ 4387:
/*!*************************************************!*\
  !*** ./src/app/ngrx/manager-wrapper.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapperService": () => (/* binding */ WrapperService)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 7260);
/* harmony import */ var _ngrx_entity_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx-entity.selectors */ 9120);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_measure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/measure.service */ 2812);
/* harmony import */ var _shared_services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/logger.service */ 5043);








class WrapperService {
    constructor(store, measureService, loggerService) {
        this.store = store;
        this.measureService = measureService;
        this.loggerService = loggerService;
        this.store$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.measures = [];
        this.store.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.skip)(2), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_ngrx_entity_selectors__WEBPACK_IMPORTED_MODULE_0__.selectEntities)).subscribe((z) => {
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
WrapperService.ɵfac = function WrapperService_Factory(t) { return new (t || WrapperService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_1__.MeasureService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_shared_services_logger_service__WEBPACK_IMPORTED_MODULE_2__.LoggerService)); };
WrapperService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: WrapperService, factory: WrapperService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3041:
/*!*********************************************!*\
  !*** ./src/app/ngrx/ngrx-entity.actions.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Add": () => (/* binding */ Add),
/* harmony export */   "Added": () => (/* binding */ Added)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const Add = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Entity] Add', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const Added = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Entity] Add success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());


/***/ }),

/***/ 9744:
/*!*********************************************!*\
  !*** ./src/app/ngrx/ngrx-entity.effects.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityEffects": () => (/* binding */ EntityEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 1339);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _ngrx_entity_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx-entity.actions */ 3041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);






class EntityEffects {
    constructor(actions$) {
        this.actions$ = actions$;
        this.addEntity$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.ofType)(_ngrx_entity_actions__WEBPACK_IMPORTED_MODULE_0__.Add), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.mergeMap)(({ payload }) => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(payload).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.delay)(1))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(entity => (0,_ngrx_entity_actions__WEBPACK_IMPORTED_MODULE_0__.Added)({ payload: entity }))))));
    }
}
EntityEffects.ɵfac = function EntityEffects_Factory(t) { return new (t || EntityEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__.Actions)); };
EntityEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: EntityEffects, factory: EntityEffects.ɵfac });


/***/ }),

/***/ 6538:
/*!********************************************!*\
  !*** ./src/app/ngrx/ngrx-entity.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgRxModule": () => (/* binding */ NgRxModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx.component */ 3805);
/* harmony import */ var _ngrx_entity_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngrx-entity.reducer */ 4659);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ 4466);
/* harmony import */ var _ngrx_entity_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngrx-entity.effects */ 9744);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);












class NgRxModule {
}
NgRxModule.ɵfac = function NgRxModule_Factory(t) { return new (t || NgRxModule)(); };
NgRxModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NgRxModule });
NgRxModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([{
                path: '',
                component: _ngrx_component__WEBPACK_IMPORTED_MODULE_0__.NgrxComponent
            }]),
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreModule.forFeature('entityState', _ngrx_entity_reducer__WEBPACK_IMPORTED_MODULE_1__.EntitiesReducer),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsModule.forFeature([_ngrx_entity_effects__WEBPACK_IMPORTED_MODULE_3__.EntityEffects])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NgRxModule, { declarations: [_ngrx_component__WEBPACK_IMPORTED_MODULE_0__.NgrxComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_7__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_8__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 4659:
/*!*********************************************!*\
  !*** ./src/app/ngrx/ngrx-entity.reducer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntitiesReducer": () => (/* binding */ EntitiesReducer),
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_entity_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx-entity.actions */ 3041);


const initialState = {
    entities: [],
};
const _reducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_ngrx_entity_actions__WEBPACK_IMPORTED_MODULE_0__.Added, (state, { payload }) => ({
    entities: [...state.entities, payload]
})));
function EntitiesReducer(state, action) {
    return _reducer(state, action);
}


/***/ }),

/***/ 9120:
/*!***********************************************!*\
  !*** ./src/app/ngrx/ngrx-entity.selectors.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectEntities": () => (/* binding */ selectEntities)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const selectEntities = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)((state) => state.entityState, (state) => state.entities);


/***/ }),

/***/ 3805:
/*!****************************************!*\
  !*** ./src/app/ngrx/ngrx.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgrxComponent": () => (/* binding */ NgrxComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_entity_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngrx-entity.actions */ 3041);
/* harmony import */ var _ngrx_entity_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngrx-entity.selectors */ 9120);
/* harmony import */ var _manager_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager-base.component */ 2506);
/* harmony import */ var _manager_wrapper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manager-wrapper.service */ 4387);
/* harmony import */ var _shared_utils_Entities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utils/Entities */ 9586);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _shared_services_measure_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/measure.service */ 2812);
/* harmony import */ var _shared_services_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/logger.service */ 5043);
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/local-storage.service */ 1928);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/progress-bar/progress-bar.component */ 8632);
/* harmony import */ var _shared_components_scatter_chart_scatter_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/components/scatter-chart/scatter-chart.component */ 995);
















function NgrxComponent_ng_container_0_app_scatter_chart_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "app-scatter-chart", 3);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("data", ctx_r2.chartData);
  }
}

function NgrxComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "app-progress-bar", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, NgrxComponent_ng_container_0_app_scatter_chart_2_Template, 1, 1, "app-scatter-chart", 2);
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

class NgrxComponent extends _manager_base_component__WEBPACK_IMPORTED_MODULE_2__.ManagerComponent {
  constructor(route, store, measureService, wrapperManager, loggerService, localStorageService) {
    super(route, measureService, loggerService, localStorageService);
    this.store = store;
    this.wrapperManager = wrapperManager;
    this.name = 'ngrx';
    this.entities$ = this.store.select(_ngrx_entity_selectors__WEBPACK_IMPORTED_MODULE_1__.selectEntities);
    this.wrapperManager.store$.subscribe(z => {
      if (this.wrapperManager.measures.length < this.entitiesCount) {
        this.wrapperManager.dispatch((0,_ngrx_entity_actions__WEBPACK_IMPORTED_MODULE_0__.Add)({
          payload: (0,_shared_utils_Entities__WEBPACK_IMPORTED_MODULE_4__.createEntity)(z)
        }));
      } else {
        this.chartData = this.buildChartData();
        this.saveResult();
      }
    });
  }

  ngOnInit() {
    this.wrapperManager.dispatch((0,_ngrx_entity_actions__WEBPACK_IMPORTED_MODULE_0__.Add)({
      payload: (0,_shared_utils_Entities__WEBPACK_IMPORTED_MODULE_4__.createEntity)(undefined)
    }));
  }

}

NgrxComponent.ɵfac = function NgrxComponent_Factory(t) {
  return new (t || NgrxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_12__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_5__.MeasureService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_manager_wrapper_service__WEBPACK_IMPORTED_MODULE_3__.WrapperService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_logger_service__WEBPACK_IMPORTED_MODULE_6__.LoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__.LocalStorageService));
};

NgrxComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
  type: NgrxComponent,
  selectors: [["app-entity"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵProvidersFeature"]([_manager_wrapper_service__WEBPACK_IMPORTED_MODULE_3__.WrapperService]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵInheritDefinitionFeature"]],
  decls: 2,
  vars: 3,
  consts: [[4, "ngIf"], ["label", "entities", 3, "value", "max"], ["color", "blue", "label", "NgRx", 3, "data", 4, "ngIf"], ["color", "blue", "label", "NgRx", 3, "data"]],
  template: function NgrxComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](0, NgrxComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](1, 1, ctx.entities$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_8__.ProgressBarComponent, _shared_components_scatter_chart_scatter_chart_component__WEBPACK_IMPORTED_MODULE_9__.ScatterChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe],
  encapsulation: 2,
  changeDetection: 0
});

/***/ })

}]);
//# sourceMappingURL=src_app_ngrx_ngrx-entity_module_ts.js.map