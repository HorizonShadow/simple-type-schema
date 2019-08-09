"use strict";
exports.__esModule = true;
require("reflect-metadata");
function prop() {
    return function (target, key) {
        var Type = Reflect.getMetadata('design:type', target, key);
        console.log(Type, target, key);
        if (!Type) {
            // no type
        }
    };
}
exports.prop = prop;
