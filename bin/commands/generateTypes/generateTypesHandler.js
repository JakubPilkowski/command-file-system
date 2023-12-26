"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const typesTemplate_1 = __importDefault(require("../../templates/typesTemplate"));
function generateTypesHandler(args) {
    const { name, suffix } = args;
    const template = (0, typesTemplate_1.default)({
        name,
        suffix,
        baseTypes: ["BaseProps"],
        imports: ["import type Other from './Other';"],
        mappings: ["className?: string;"],
        exports: ["Other"],
    });
    const templateString = template.join("\n");
    fs_1.default.writeFile(`${name}.types.ts`, templateString, (err) => {
        if (err) {
            console.log("error", err);
        }
    });
}
exports.default = generateTypesHandler;
