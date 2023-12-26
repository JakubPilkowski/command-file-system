"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regexs_1 = require("../../utils/regexs");
const htmlElementsList_1 = __importDefault(require("../../utils/htmlElementsList"));
function generateComponentBuilder(yargs) {
    yargs.positional("name", {
        describe: "Component name in PascalCase",
        type: "string",
    });
    yargs.option("extension", {
        alias: "ext",
        default: "tsx",
        type: "string",
        description: "React component extension. Possible values: jsx|tsx.",
        choices: ["jsx", "tsx"],
    });
    yargs.option("withMemo", {
        alias: "withMemo",
        default: false,
        type: "boolean",
        description: "Whether return memorized jsx function",
    });
    yargs.option("withProps", {
        alias: "withProps",
        default: false,
        type: "boolean",
        description: "Whether implement props for component. Works only with tsx extension",
    });
    yargs.option("withForwardRef", {
        alias: "withForwardRef",
        default: false,
        type: "boolean",
        description: "Whether wrap component in forwardRef",
    });
    yargs.option("tag", {
        alias: "t",
        default: "div",
        type: "string",
        description: "Tag of main element of component",
        choices: htmlElementsList_1.default,
    });
    yargs.check((argv) => {
        const name = argv.name;
        if (!regexs_1.pascalCase.test(name)) {
            throw new Error("Component name must be in CamelCase!");
        }
        else {
            return true;
        }
    });
    yargs.hide("version");
    return yargs;
}
exports.default = generateComponentBuilder;
