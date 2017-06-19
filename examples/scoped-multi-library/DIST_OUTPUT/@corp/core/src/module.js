import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreService } from './core.service';
import { CoreComponent } from './core.component';
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
export { CoreModule };
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
function CoreModule_tsickle_Closure_declarations() {
    /** @type {?} */
    CoreModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CoreModule.ctorParameters;
}
//# sourceMappingURL=module.js.map