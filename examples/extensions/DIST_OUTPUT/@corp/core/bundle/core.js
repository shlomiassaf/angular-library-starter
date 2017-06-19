import { Component, Injectable, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

var CoreService = (function () {
    function CoreService() {
        this.value = 'Angular Library Starter - Core Service';
    }
    return CoreService;
}());
CoreService.decorators = [
    { type: Injectable },
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                declarations: [CoreComponent],
                imports: [CommonModule],
                exports: [CoreComponent],
                providers: [CoreService]
            },] },
];
/**
 * @nocollapse
 */
CoreModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

export { CoreService, CoreModule, CoreComponent as ɵa };
//# sourceMappingURL=core.js.map
