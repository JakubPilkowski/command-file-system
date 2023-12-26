"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexs_1 = require("../../utils/regexs");
function generateTestBuilder(yargs) {
    yargs.positional("name", {
        describe: "Index name in PascalCase",
        type: "string",
    });
    yargs.option("extension", {
        alias: "ext",
        describe: "Test file extension",
        type: "string",
        default: "js",
        choices: ["js", "ts", "jsx", "tsx"],
    });
    yargs.option("rtlImport", {
        alias: "rtli",
        describe: "React testing library import",
        type: "string",
        default: "@testing-library/react",
    });
    yargs.option("describe", {
        alias: "d",
        describe: "Test suite name",
        type: "string",
    });
    yargs.check((argv) => {
        const { name, extension } = argv;
        if (["tsx", "jsx"].includes(extension) && !regexs_1.pascalCase.test(name)) {
            throw new Error(`Test name ${name} for ${extension} extension must be in CamelCase!`);
        }
        else {
            return true;
        }
    });
    yargs.hide("version");
    return yargs;
}
exports.default = generateTestBuilder;
