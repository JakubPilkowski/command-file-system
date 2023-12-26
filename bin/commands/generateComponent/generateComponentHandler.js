"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const jsx_1 = __importDefault(require("../../templates/componentTemplates/jsx"));
const tsx_1 = __importDefault(require("../../templates/componentTemplates/tsx"));
function generateComponentHandler(args) {
    const { name, extension, withMemo, withProps, withForwardRef, tag } = args;
    const template = extension === "tsx"
        ? (0, tsx_1.default)({
            name,
            withMemo,
            withProps,
            withForwardRef,
            imports: [],
            children: [],
            body: [],
            className: "",
            tag,
        })
        : (0, jsx_1.default)({
            name,
            withMemo,
            withProps,
            withForwardRef,
            imports: [],
            children: [],
            body: [],
            className: "",
            tag,
        });
    const templateString = template.join("\n");
    fs_1.default.writeFile(`${name}.${extension}`, templateString, (err) => {
        if (err) {
            console.log("error", err);
        }
    });
}
exports.default = generateComponentHandler;
