import ITemplate from "core/ITemplate";
import { IndexTemplateArgs } from "commands/generateIndex/generateIndex.types";

export default ({
  name,
  namedExports,
  withNamedExports,
  imports,
}: IndexTemplateArgs): ITemplate => [
  `import ${name} from "./${name}";`,
  ...imports,
  "",
  `export default ${name};`,
  ...(withNamedExports ? ["", "export {", ...namedExports, "}"] : []),
  "",
];
