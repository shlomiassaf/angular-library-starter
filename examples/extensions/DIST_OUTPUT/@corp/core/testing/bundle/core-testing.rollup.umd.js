(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.corp = global.corp || {}, global.corp.core = global.corp.core || {}, global.corp.core.testing = global.corp.core.testing || {})));
}(this, (function (exports) { 'use strict';

var CoreTestMocker = (function () {
    function CoreTestMocker() {
    }
    /**
     * @return {?}
     */
    CoreTestMocker.prototype.howMuchIsOnePlusOne = function () {
        return 2;
    };
    return CoreTestMocker;
}());

exports.CoreTestMocker = CoreTestMocker;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=core-testing.rollup.umd.js.map
