import { Component, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@corp/core';
import { CorePlusModule } from '@corp/core/plugins/core-plus';

var CommonService = /*@__PURE__*/(function () {
    function CommonService() {
        this.value = 'Angular Library Starter - Common Service';
    }
    return CommonService;
}());
CommonService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
CommonService.ctorParameters = function () { return []; };

var CommonComponent = /*@__PURE__*/(function () {
    /**
     * @param {?} commonService
     */
    function CommonComponent(commonService) {
        this.commonService = commonService;
    }
    return CommonComponent;
}());
CommonComponent.decorators = [
    { type: Component, args: [{
                selector: 'common',
                template: "<div class=\"wrapped\"> <h1>Wrapped by common</h1> <core-plus></core-plus> <core></core> </div> <span class=\"my-lib\">{{commonService.value}}</span>",
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
    { type: NgModule, args: [{
                declarations: [CommonComponent],
                imports: [CommonModule, CoreModule, CorePlusModule],
                exports: [CommonComponent],
                providers: [CommonService]
            },] },
];
/**
 * @nocollapse
 */
CommonModule$1.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

export { CommonService, CommonModule$1 as CommonModule, CommonComponent as ɵa };
//# sourceMappingURL=common.es5.js.map
