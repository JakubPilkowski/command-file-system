"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_TYPES_DESCRIPTION = exports.GENERATE_TYPES_SCRIPT = void 0;
const generateTypesBuilder_1 = __importDefault(require("./generateTypesBuilder"));
const generateTypesHandler_1 = __importDefault(require("./generateTypesHandler"));
exports.GENERATE_TYPES_SCRIPT = ["generate-types <name>", "gtypes <name>"];
exports.GENERATE_TYPES_DESCRIPTION = "Generate types file";
function generateTypes() {
    return {
        name: exports.GENERATE_TYPES_SCRIPT,
        description: exports.GENERATE_TYPES_DESCRIPTION,
        builder: generateTypesBuilder_1.default,
        handler: generateTypesHandler_1.default,
    };
}
exports.default = generateTypes;
