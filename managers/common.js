"use strict";
(self["webpackChunkmanagers"] = self["webpackChunkmanagers"] || []).push([["common"],{

/***/ 2506:
/*!*******************************************!*\
  !*** ./src/app/manager-base.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerComponent": () => (/* binding */ ManagerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_services_measure_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/services/measure.service */ 2812);
/* harmony import */ var _shared_services_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/logger.service */ 5043);
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/local-storage.service */ 1928);





class ManagerComponent {
    constructor(route, measureService, loggerService, localStorageService) {
        this.measureService = measureService;
        this.loggerService = loggerService;
        this.localStorageService = localStorageService;
        route.queryParams.subscribe((queryParam) => {
            this.entitiesCount = Number(queryParam['entities']);
        });
    }
    buildChartData() {
        return this.loggerService.data.map(v => ({ x: v.start, y: v.duration }));
    }
    saveResult() {
        this.localStorageService.setData(this.name, this.loggerService.data);
    }
}
ManagerComponent.ɵfac = function ManagerComponent_Factory(t) { return new (t || ManagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_measure_service__WEBPACK_IMPORTED_MODULE_0__.MeasureService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_logger_service__WEBPACK_IMPORTED_MODULE_1__.LoggerService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__.LocalStorageService)); };
ManagerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ManagerComponent, selectors: [["ng-component"]], decls: 0, vars: 0, template: function ManagerComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 9586:
/*!******************************************!*\
  !*** ./src/app/shared/utils/Entities.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createEntity": () => (/* binding */ createEntity)
/* harmony export */ });
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! guid-typescript */ 9846);

const createEntity = (parent) => {
    const id = guid_typescript__WEBPACK_IMPORTED_MODULE_0__.Guid.create();
    return { id, name: `object_${Math.floor(Math.random() * 10)}${id}`, parent };
};


/***/ }),

/***/ 9846:
/*!***************************************************!*\
  !*** ./node_modules/guid-typescript/dist/guid.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {



exports.__esModule = true;

var Guid =
/** @class */
function () {
  function Guid(guid) {
    if (!guid) {
      throw new TypeError("Invalid argument; `value` has no value.");
    }

    this.value = Guid.EMPTY;

    if (guid && Guid.isGuid(guid)) {
      this.value = guid;
    }
  }

  Guid.isGuid = function (guid) {
    var value = guid.toString();
    return guid && (guid instanceof Guid || Guid.validator.test(value));
  };

  Guid.create = function () {
    return new Guid([Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-"));
  };

  Guid.createEmpty = function () {
    return new Guid("emptyguid");
  };

  Guid.parse = function (guid) {
    return new Guid(guid);
  };

  Guid.raw = function () {
    return [Guid.gen(2), Guid.gen(1), Guid.gen(1), Guid.gen(1), Guid.gen(3)].join("-");
  };

  Guid.gen = function (count) {
    var out = "";

    for (var i = 0; i < count; i++) {
      // tslint:disable-next-line:no-bitwise
      out += ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
    }

    return out;
  };

  Guid.prototype.equals = function (other) {
    // Comparing string `value` against provided `guid` will auto-call
    // toString on `guid` for comparison
    return Guid.isGuid(other) && this.value === other.toString();
  };

  Guid.prototype.isEmpty = function () {
    return this.value === Guid.EMPTY;
  };

  Guid.prototype.toString = function () {
    return this.value;
  };

  Guid.prototype.toJSON = function () {
    return {
      value: this.value
    };
  };

  Guid.validator = new RegExp("^[a-z0-9]{8}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{4}-[a-z0-9]{12}$", "i");
  Guid.EMPTY = "00000000-0000-0000-0000-000000000000";
  return Guid;
}();

exports.Guid = Guid;

/***/ }),

/***/ 8947:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": () => (/* binding */ timer)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Observable */ 833);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 6936);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 9867);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isDate */ 7885);




function timer(dueTime = 0, intervalOrScheduler, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.async) {
  let intervalDuration = -1;

  if (intervalOrScheduler != null) {
    if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(intervalOrScheduler)) {
      scheduler = intervalOrScheduler;
    } else {
      intervalDuration = intervalOrScheduler;
    }
  }

  return new _Observable__WEBPACK_IMPORTED_MODULE_2__.Observable(subscriber => {
    let due = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_3__.isValidDate)(dueTime) ? +dueTime - scheduler.now() : dueTime;

    if (due < 0) {
      due = 0;
    }

    let n = 0;
    return scheduler.schedule(function () {
      if (!subscriber.closed) {
        subscriber.next(n++);

        if (0 <= intervalDuration) {
          this.schedule(undefined, intervalDuration);
        } else {
          subscriber.complete();
        }
      }
    }, due);
  });
}

/***/ }),

/***/ 1339:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delay.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/async */ 6936);
/* harmony import */ var _delayWhen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delayWhen */ 5716);
/* harmony import */ var _observable_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../observable/timer */ 8947);



function delay(due, scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler) {
  const duration = (0,_observable_timer__WEBPACK_IMPORTED_MODULE_1__.timer)(due, scheduler);
  return (0,_delayWhen__WEBPACK_IMPORTED_MODULE_2__.delayWhen)(() => duration);
}

/***/ }),

/***/ 5716:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/delayWhen.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "delayWhen": () => (/* binding */ delayWhen)
/* harmony export */ });
/* harmony import */ var _observable_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/concat */ 4240);
/* harmony import */ var _take__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./take */ 9295);
/* harmony import */ var _ignoreElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ignoreElements */ 23);
/* harmony import */ var _mapTo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mapTo */ 73);
/* harmony import */ var _mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeMap */ 1353);





function delayWhen(delayDurationSelector, subscriptionDelay) {
  if (subscriptionDelay) {
    return source => (0,_observable_concat__WEBPACK_IMPORTED_MODULE_0__.concat)(subscriptionDelay.pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_ignoreElements__WEBPACK_IMPORTED_MODULE_2__.ignoreElements)()), source.pipe(delayWhen(delayDurationSelector)));
  }

  return (0,_mergeMap__WEBPACK_IMPORTED_MODULE_3__.mergeMap)((value, index) => delayDurationSelector(value, index).pipe((0,_take__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,_mapTo__WEBPACK_IMPORTED_MODULE_4__.mapTo)(value)));
}

/***/ }),

/***/ 7260:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/skip.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skip": () => (/* binding */ skip)
/* harmony export */ });
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter */ 116);

function skip(count) {
  return (0,_filter__WEBPACK_IMPORTED_MODULE_0__.filter)((_, index) => count <= index);
}

/***/ }),

/***/ 6936:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "asyncScheduler": () => (/* binding */ asyncScheduler)
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 5198);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 5744);


const asyncScheduler = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);
const async = asyncScheduler;

/***/ }),

/***/ 7885:
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/isDate.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isValidDate": () => (/* binding */ isValidDate)
/* harmony export */ });
function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

/***/ })

}]);
//# sourceMappingURL=common.js.map