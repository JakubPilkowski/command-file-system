import { JsxTemplateArgs } from "commands/generateComponent/generateComponent.types";
import ITemplate from "core/ITemplate";
import capitalize from "utils/capitalize";

export default ({
  name,
  withMemo,
  withProps,
  withForwardRef,
  className,
  tag,
  body,
  imports,
  children,
}: JsxTemplateArgs): ITemplate => {
  return [
    `import React, { ${withForwardRef ? "forwardRef" : "FC"}${
      withMemo ? `, memo` : ""
    } } from 'react';`,
    "",
    ...imports,
    ...(withForwardRef
      ? [
          `const ${name} = forwardRef<HTML${capitalize(tag)}Element${
            withProps ? `,${name}Props` : ""
          }>(function ${name}() {`,
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
