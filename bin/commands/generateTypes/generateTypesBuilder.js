"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexs_1 = require("../../utils/regexs");
function generateTypesBuilder(yargs) {
    yargs.positional("name", {
        describe: "Index name in PascalCase",
        type: "string",
    });
    yargs.option("suffix", {
        describe: "Type suffix",
        type: "string",
        default: "Props",
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
exports.default = generateTypesBuilder;
