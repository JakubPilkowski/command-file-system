"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.composePromises = void 0;
const composePromises = (...ms) => {
    return ms.reduceRight((f, g) => {
        return (x) => {
            return g(x).then(f);
        };
    });
};
exports.composePromises = composePromises;
