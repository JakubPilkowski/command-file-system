"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const stylesTemplate_1 = __importDefault(require("../../templates/stylesTemplate"));
function generateStylesHandler(args) {
    const { name, extension } = args;
    const template = (0, stylesTemplate_1.default)({
        name,
        imports: [],
        styles: [],
    });
    const templateString = template.join("\n");
    fs_1.default.writeFile(`${name}.${extension}`, templateString, (err) => {
        if (err) {
            console.log("error", err);
        }
    });
}
exports.default = generateStylesHandler;
