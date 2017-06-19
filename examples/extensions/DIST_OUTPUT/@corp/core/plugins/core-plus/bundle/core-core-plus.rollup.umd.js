(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@corp/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', '@corp/core'], factory) :
	(factory((global.corp = global.corp || {}, global.corp.core = global.corp.core || {}, global.corp.core.corePlus = global.corp.core.corePlus || {}),global.ng.core,global.ng.common,global.corp.core));
}(this, (function (exports,_angular_core,_angular_common,_corp_core) { 'use strict';

var CorePlusComponent = (function () {
    function CorePlusComponent() {
    }
    return CorePlusComponent;
}());
CorePlusComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'core-plus',
                template: "<div class=\"wrapped\"> <h1>Wrapped by Core-Plus</h1> <core></core> </div> ",
                styles: [".my-lib { font-size: 32px; color: red; } "]
            },] },
];
/**
 * @nocollapse
 */
CorePlusComponent.ctorParameters = function () { return []; };

var CorePlusModule = (function () {
    function CorePlusModule() {
    }
    return CorePlusModule;
}());
CorePlusModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [CorePlusComponent],
                imports: [_angular_common.CommonModule, _corp_core.CoreModule],
                exports: [CorePlusComponent],
            },] },
];
/**
 * @nocollapse
 */
CorePlusModule.ctorParameters = function () { return []; };

exports.CorePlusModule = CorePlusModule;
exports.ɵa = CorePlusComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=core-core-plus.rollup.umd.js.map
