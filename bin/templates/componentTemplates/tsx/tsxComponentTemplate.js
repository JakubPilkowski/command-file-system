"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const capitalize_1 = __importDefault(require("../../../utils/capitalize"));
exports.default = ({ name, withMemo, withProps, withForwardRef, className, tag, body, imports, children, }) => {
    return [
        `import React, { ${withForwardRef ? "forwardRef" : "FC"}${withMemo ? `, memo` : ""} } from 'react';`,
        "",
        ...imports,
        ...(withForwardRef
            ? [
                `const ${name} = forwardRef<HTML${(0, capitalize_1.default)(tag)}Element${withProps ? `,${name}Props` : ""}>(function ${name}() {`,
            ]
            : [`const ${name}: FC${withProps ? `<${name}Props>` : ""} = () => {`]),
        ...body,
        `return <${tag}${className || ""}>`,
        ...children,
        `</${tag}>;`,
        `}${withForwardRef ? `)` : ""};`,
        "",
        `export default ${withMemo ? `memo(${name})` : name};`,
    ];
};
