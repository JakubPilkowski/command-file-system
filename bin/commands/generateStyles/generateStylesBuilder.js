"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexs_1 = require("../../utils/regexs");
function generateStylesBuilder(yargs) {
    yargs.positional("name", {
        describe: "Styles file name",
        type: "string",
    });
    yargs.option("extension", {
        alias: "ext",
        type: "string",
        default: "css",
        describe: "Styles file extension",
        choices: ["css", "scss", "module.css"],
    });
    yargs.check((argv) => {
        const { name, extension } = argv;
        const isCssExtension = ["css", "scss"].includes(extension);
        const isModuleCssExtension = extension === "module.css";
        if (isCssExtension && !regexs_1.kebabCase.test(name)) {
            throw new Error(`Style name ${name} for ${extension} extension must be in kebab-case`);
        }
        else if (isModuleCssExtension && !regexs_1.pascalCase.test(name)) {
            throw new Error(`Style name ${name} for ${extension} extension must be in PascalCase`);
        }
        else {
            return true;
        }
    });
    yargs.hide("version");
    return yargs;
}
exports.default = generateStylesBuilder;
