"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ name, namedExports, withNamedExports, imports, }) => [
    `import ${name} from "./${name}";`,
    ...imports,
    "",
    `export default ${name};`,
    ...(withNamedExports ? ["", "export {", ...namedExports, "}"] : []),
    "",
];
