"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexs_1 = require("./regexs");
function mapVariables(template, variables) {
    return template.replace(regexs_1.variableFormat, (match, name) => {
        if (!variables.hasOwnProperty(name)) {
            throw new Error(`There is not defined ${name} property in ${variables} for template: ${template}`);
        }
        return variables[name];
    });
}
exports.default = mapVariables;
