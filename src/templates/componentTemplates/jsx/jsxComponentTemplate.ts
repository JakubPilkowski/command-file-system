import { JsxTemplateArgs } from "commands/generateComponent/generateComponent.types";
import ITemplate from "core/ITemplate";

export default ({
  name,
  withMemo,
  withForwardRef,
  className,
  tag,
  body,
  imports,
  children,
}: JsxTemplateArgs): ITemplate => {
  const hasReactNamedImports = withMemo || withForwardRef;

  const reactNamedImports = [
    ...(withMemo ? ["memo"] : []),
    ...(withForwardRef ? ["forwardRef"] : []),
  ].join(", ");

  return [
    `import React${
      hasReactNamedImports ? `, { ${reactNamedImports} }` : ""
    } from 'react';`,
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
