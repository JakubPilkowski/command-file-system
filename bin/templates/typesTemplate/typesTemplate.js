"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ name, suffix, imports, exports, baseTypes, mappings, }) => [
    ...imports,
    "",
    `type ${name}${suffix} =`,
    ...baseTypes.map((typeName) => `${typeName} &`),
    "{",
    ...mappings,
    "};",
    "",
    `export default ${name}${suffix};`,
    ...(exports.length > 0 ? ["", `export {`, ...exports, "};"] : []),
    "",
];
