import { Injectable, NgModule } from '@angular/core';

var RareService = /*@__PURE__*/(function () {
    function RareService() {
        this.value = 'Angular Library Starter - Rare Service';
    }
    return RareService;
}());
RareService.decorators = [
    { type: Injectable },
];
/**
 * @nocollapse
 */
RareService.ctorParameters = function () { return []; };

var RareModule = /*@__PURE__*/(function () {
    function RareModule() {
    }
    return RareModule;
}());
RareModule.decorators = [
    { type: NgModule, args: [{
                providers: [RareService]
            },] },
];
/**
 * @nocollapse
 */
RareModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

export { RareService, RareModule };
//# sourceMappingURL=rare.es5.js.map
