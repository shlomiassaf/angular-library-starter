import { Component } from '@angular/core';
import { CoreService } from './core.service';
var CoreComponent = (function () {
    /**
     * @param {?} coreService
     */
    function CoreComponent(coreService) {
        this.coreService = coreService;
    }
    return CoreComponent;
}());
export { CoreComponent };
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
function CoreComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CoreComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CoreComponent.ctorParameters;
    /** @type {?} */
    CoreComponent.prototype.coreService;
}
//# sourceMappingURL=core.component.js.map