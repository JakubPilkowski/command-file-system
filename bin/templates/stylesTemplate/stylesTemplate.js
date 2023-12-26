"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ name, imports, styles }) => [
    ...(imports.length > 0 ? [...imports, ""] : []),
    `.${name.toLowerCase()} {`,
    ...styles,
    `}`,
];
