import { Component, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var CommonService = (function () {
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                declarations: [CommonComponent],
                imports: [CommonModule],
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
//# sourceMappingURL=common.js.map
