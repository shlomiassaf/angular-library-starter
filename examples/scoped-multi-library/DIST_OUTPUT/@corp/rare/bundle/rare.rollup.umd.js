(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.corp = global.corp || {}, global.corp.rare = global.corp.rare || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var RareService = (function () {
    function RareService() {
        this.value = 'Angular Library Starter - Rare Service';
    }
    return RareService;
}());
RareService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
RareService.ctorParameters = function () { return []; };

var RareModule = (function () {
    function RareModule() {
    }
    return RareModule;
}());
RareModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                providers: [RareService]
            },] },
];
/**
 * @nocollapse
 */
RareModule.ctorParameters = function () { return []; };

exports.RareService = RareService;
exports.RareModule = RareModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=rare.rollup.umd.js.map
