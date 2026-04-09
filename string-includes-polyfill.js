if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw new TypeError('"includes" does not accept a RegExp');
        }

        search = String(search);

        // ToInteger(start): coerce to number, floor, clamp negatives to 0
        start = Math.max(0, Math.floor(+start) || 0);

        return this.indexOf(search, start) !== -1;
    };
}
