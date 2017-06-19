import { Component } from '@angular/core';
import { CommonService } from './common.service';
var CommonComponent = (function () {
    /**
     * @param {?} commonService
     */
    function CommonComponent(commonService) {
        this.commonService = commonService;
    }
    return CommonComponent;
}());
export { CommonComponent };
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
function CommonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CommonComponent.decorators;
    /**
     * @nocollapse
     * @type {?}
     */
    CommonComponent.ctorParameters;
    /** @type {?} */
    CommonComponent.prototype.commonService;
}
//# sourceMappingURL=common.component.js.map