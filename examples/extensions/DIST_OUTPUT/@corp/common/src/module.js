import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { CoreModule } from '@corp/core';
import { CorePlusModule } from '@corp/core/plugins/core-plus';
import { CommonService } from './common.service';
import { CommonComponent } from './common.component';
var CommonModule = (function () {
    function CommonModule() {
    }
    return CommonModule;
}());
export { CommonModule };
CommonModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CommonComponent],
                imports: [NgCommonModule, CoreModule, CorePlusModule],
                exports: [CommonComponent],
                providers: [CommonService]
            },] },
];
/**
 * @nocollapse
 */
CommonModule.ctorParameters = function () { return []; };
function CommonModule_tsickle_Closure_declarations() {
    /** @type {?} */
    CommonModule.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CommonModule.ctorParameters;
}
//# sourceMappingURL=module.js.map