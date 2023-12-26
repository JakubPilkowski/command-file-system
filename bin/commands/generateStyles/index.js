"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_STYLES_DESCRIPTION = exports.GENERATE_STYLES_SCRIPT = void 0;
const generateStylesBuilder_1 = __importDefault(require("./generateStylesBuilder"));
const generateStylesHandler_1 = __importDefault(require("./generateStylesHandler"));
exports.GENERATE_STYLES_SCRIPT = [
    "generate-styles <name>",
    "gstyles <name>",
];
exports.GENERATE_STYLES_DESCRIPTION = "Generate styles file";
function generateStyles() {
    return {
        name: exports.GENERATE_STYLES_SCRIPT,
        description: exports.GENERATE_STYLES_DESCRIPTION,
        builder: generateStylesBuilder_1.default,
        handler: generateStylesHandler_1.default,
    };
}
exports.default = generateStyles;
