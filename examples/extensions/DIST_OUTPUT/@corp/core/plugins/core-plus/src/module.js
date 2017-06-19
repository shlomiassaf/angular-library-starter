import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@corp/core';
import { CorePlusComponent } from './core-plus.component';
var CorePlusModule = (function () {
    function CorePlusModule() {
    }
    return CorePlusModule;
}());
export { CorePlusModule };
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
function CorePlusModule_tsickle_Closure_declarations() {
    /** @type {?} */
    CorePlusModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CorePlusModule.ctorParameters;
}
//# sourceMappingURL=module.js.map