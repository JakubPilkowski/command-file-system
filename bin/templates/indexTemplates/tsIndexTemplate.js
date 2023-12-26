"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ name, namedExports, withNamedExports, typeExports, imports, withTypeExports, }) => [
    `import ${name} from "./${name}";`,
    ...imports,
    "",
    `export default ${name};`,
    ...(withNamedExports ? ["", "export {", ...namedExports, "}"] : []),
    ...(withTypeExports ? ["", "export type {", ...typeExports, "}"] : []),
    "",
];
