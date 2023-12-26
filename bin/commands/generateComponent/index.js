"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_COMPONENT_DESCRIPTION = exports.GENERATE_COMPONENT_SCRIPT = void 0;
const generateComponentBuilder_1 = __importDefault(require("./generateComponentBuilder"));
const generateComponentHandler_1 = __importDefault(require("./generateComponentHandler"));
exports.GENERATE_COMPONENT_SCRIPT = [
    "generate-component <name>",
    "gc <name>",
];
exports.GENERATE_COMPONENT_DESCRIPTION = "Generate jsx/tsx component file";
function generateComponent() {
    return {
        name: exports.GENERATE_COMPONENT_SCRIPT,
        description: exports.GENERATE_COMPONENT_DESCRIPTION,
        builder: generateComponentBuilder_1.default,
        handler: generateComponentHandler_1.default,
    };
}
exports.default = generateComponent;
