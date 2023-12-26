"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENERATE_COMPONENT_DESCRIPTION = exports.GENERATE_COMPONENT_SCRIPT = void 0;
const generateFileBuilder_1 = __importDefault(require("./generateFileBuilder"));
const generateFileHandler_1 = __importDefault(require("./generateFileHandler"));
exports.GENERATE_COMPONENT_SCRIPT = [
    "generate-component <name>",
    "gc <name>",
];
exports.GENERATE_COMPONENT_DESCRIPTION = "Generate jsx/tsx component file";
function generateFileTemplate(fileTemplate) {
    return {
        name: [fileTemplate.templateName, ...fileTemplate.templateAliases],
        description: fileTemplate.description,
        builder: generateFileBuilder_1.default,
        handler: generateFileHandler_1.default,
    };
}
exports.default = generateFileTemplate;
