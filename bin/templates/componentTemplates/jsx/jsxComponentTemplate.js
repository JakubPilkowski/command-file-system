"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ name, withMemo, withForwardRef, className, tag, body, imports, children, }) => {
    const hasReactNamedImports = withMemo || withForwardRef;
    const reactNamedImports = [
        ...(withMemo ? ["memo"] : []),
        ...(withForwardRef ? ["forwardRef"] : []),
    ].join(", ");
    return [
        `import React${hasReactNamedImports ? `, { ${reactNamedImports} }` : ""} from 'react';`,
        "",
        ...imports,
        ...(withForwardRef
            ? [`const ${name} = forwardRef(function ${name}() {`]
            : [`const ${name} = () => {`]),
        ...body,
        `return <${tag}${className || ""}>`,
        ...children,
        `</${tag}>;`,
        `}${withForwardRef ? ")" : ""};`,
        "",
        `export default ${withMemo ? `memo(${name})` : name};`,
    ];
};
