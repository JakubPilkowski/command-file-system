"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isFileTemplate(template) {
    if (Array.isArray(template === null || template === void 0 ? void 0 : template.templates)) {
        return false;
    }
    return true;
}
exports.default = isFileTemplate;
