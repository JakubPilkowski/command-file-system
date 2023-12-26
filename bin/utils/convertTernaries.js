"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexs_1 = require("./regexs");
function convertTernaries(template, ternaries) {
    const newTemplate = template.map((line) => {
        const newLine = line.replace(regexs_1.ternaryFormat, (match) => {
            const ternaryResult = regexs_1.ternaryFormat.exec(match);
            if (!ternaryResult)
                return "";
            const [condition, met, otherwise = ""] = ternaryResult[1].split("|") || [];
            if (!ternaries.hasOwnProperty(condition)) {
                throw new Error(`There is not defined condition ${condition} in ${ternaries} for template: ${template}`);
            }
            return ternaries[condition] ? met : otherwise;
        });
        return newLine;
    });
    return newTemplate;
}
exports.default = convertTernaries;
