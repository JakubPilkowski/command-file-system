"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isCatalogTemplate(template) {
    if (Array.isArray(template === null || template === void 0 ? void 0 : template.templates)) {
        return true;
    }
    return false;
}
exports.default = isCatalogTemplate;
