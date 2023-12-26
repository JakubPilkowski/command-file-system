"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const jsIndexTemplate_1 = __importDefault(require("../../templates/indexTemplates/jsIndexTemplate"));
const tsIndexTemplate_1 = __importDefault(require("../../templates/indexTemplates/tsIndexTemplate"));
function generateIndexHandler(args) {
    const { name, extension, withNamedExports, withTypeExports } = args;
    const template = extension === "ts"
        ? (0, tsIndexTemplate_1.default)({
            name,
            withNamedExports,
            withTypeExports,
            imports: [],
            namedExports: [],
            typeExports: [],
        })
        : (0, jsIndexTemplate_1.default)({
            name,
            withNamedExports,
            withTypeExports,
            imports: [],
            namedExports: [],
            typeExports: [],
        });
    const templateString = template.join("\n");
    fs_1.default.writeFile(`index.${extension}`, templateString, (err) => {
        if (err) {
            console.log("error", err);
        }
    });
}
exports.default = generateIndexHandler;
