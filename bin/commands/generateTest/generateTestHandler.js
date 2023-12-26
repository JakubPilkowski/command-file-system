"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const testTemplate_1 = __importDefault(require("../../templates/testTemplate"));
function generateTestHandler(args) {
    const { name, describe, extension, rtlImport } = args;
    const template = (0, testTemplate_1.default)({
        name,
        describe: describe || name,
        extension,
        rtlImport,
        imports: [],
        suiteBody: [],
    });
    const templateString = template.join("\n");
    fs_1.default.writeFile(`${name}.test.${extension}`, templateString, (err) => {
        if (err) {
            console.log("error", err);
        }
    });
}
exports.default = generateTestHandler;
