"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_INDEX_DESCRIPTION = exports.GENERATE_INDEX_SCRIPT = void 0;
const generateIndexBuilder_1 = __importDefault(require("./generateIndexBuilder"));
const generateIndexHandler_1 = __importDefault(require("./generateIndexHandler"));
exports.GENERATE_INDEX_SCRIPT = ["generate-index <name>", "gi <name>"];
exports.GENERATE_INDEX_DESCRIPTION = "Generate js/ts index file";
function generateIndex() {
    return {
        name: exports.GENERATE_INDEX_SCRIPT,
        description: exports.GENERATE_INDEX_DESCRIPTION,
        builder: generateIndexBuilder_1.default,
        handler: generateIndexHandler_1.default,
    };
}
exports.default = generateIndex;
