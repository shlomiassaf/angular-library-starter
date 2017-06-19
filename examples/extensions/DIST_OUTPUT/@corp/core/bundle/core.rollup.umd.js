(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.corp = global.corp || {}, global.corp.core = global.corp.core || {}),global.ng.core,global.ng.common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var CoreService = (function () {
    function CoreService() {
        this.value = 'Angular Library Starter - Core Service';
    }
    return CoreService;
}());
CoreService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
CoreService.ctorParameters = function () { return []; };

var CoreComponent = (function () {
    /**
     * @param {?} coreService
     */
    function CoreComponent(coreService) {
        this.coreService = coreService;
    }
    return CoreComponent;
}());
CoreComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'core',
                template: "<span class=\"my-lib\">{{coreService.value}}</span>",
                styles: [".my-lib { font-size: 32px; color: red; } "]
            },] },
];
/**
 * @nocollapse
 */
CoreComponent.ctorParameters = function () { return [
    { type: CoreService, },
]; };

var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [CoreComponent],
                imports: [_angular_common.CommonModule],
                exports: [CoreComponent],
                providers: [CoreService]
            },] },
];
/**
 * @nocollapse
 */
CoreModule.ctorParameters = function () { return []; };

exports.CoreService = CoreService;
exports.CoreModule = CoreModule;
exports.ɵa = CoreComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=core.rollup.umd.js.map
