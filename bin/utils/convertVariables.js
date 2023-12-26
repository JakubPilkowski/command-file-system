"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexs_1 = require("./regexs");
function convertVariables(template, variables) {
    const newTemplate = template.map((line) => {
        const newLine = line.replace(regexs_1.variableFormat, (match, name) => {
            if (!variables.hasOwnProperty(name)) {
                throw new Error(`There is not defined ${name} property in ${variables} for template: ${template}`);
            }
            return variables[name];
        });
        return newLine;
    });
    return newTemplate;
}
exports.default = convertVariables;
