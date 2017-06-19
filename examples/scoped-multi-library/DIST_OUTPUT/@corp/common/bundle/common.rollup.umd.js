(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global.corp = global.corp || {}, global.corp.common = global.corp.common || {}),global.ng.core,global.ng.common));
}(this, (function (exports,_angular_core,_angular_common) { 'use strict';

var CommonService = (function () {
    function CommonService() {
        this.value = 'Angular Library Starter - Common Service';
    }
    return CommonService;
}());
CommonService.decorators = [
    { type: _angular_core.Injectable },
];
/**
 * @nocollapse
 */
CommonService.ctorParameters = function () { return []; };

var CommonComponent = (function () {
    /**
     * @param {?} commonService
     */
    function CommonComponent(commonService) {
        this.commonService = commonService;
    }
    return CommonComponent;
}());
CommonComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'common',
                template: "<span class=\"my-lib\">{{commonService.value}}</span>",
                styles: [".my-lib { font-size: 32px; color: red; } "]
            },] },
];
/**
 * @nocollapse
 */
CommonComponent.ctorParameters = function () { return [
    { type: CommonService, },
]; };

var CommonModule$1 = (function () {
    function CommonModule$$1() {
    }
    return CommonModule$$1;
}());
CommonModule$1.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [CommonComponent],
                imports: [_angular_common.CommonModule],
                exports: [CommonComponent],
                providers: [CommonService]
            },] },
];
/**
 * @nocollapse
 */
CommonModule$1.ctorParameters = function () { return []; };

exports.CommonService = CommonService;
exports.CommonModule = CommonModule$1;
exports.ɵa = CommonComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=common.rollup.umd.js.map
