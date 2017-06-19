import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@corp/core';

var CorePlusComponent = (function () {
    function CorePlusComponent() {
    }
    return CorePlusComponent;
}());
CorePlusComponent.decorators = [
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                declarations: [CorePlusComponent],
                imports: [CommonModule, CoreModule],
                exports: [CorePlusComponent],
            },] },
];
/**
 * @nocollapse
 */
CorePlusModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */

export { CorePlusModule, CorePlusComponent as ɵa };
//# sourceMappingURL=core-core-plus.js.map
