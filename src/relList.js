;(function () {
    'use strict';

    Object.defineProperty(Element.prototype, 'relList', {
        get: function () {
            return new DOMTokenList2(this, 'rel');
        }
    });
}());
