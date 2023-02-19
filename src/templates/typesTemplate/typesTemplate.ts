import { TypesTemplateArgs } from "commands/generateTypes/generateTypes.types";
import ITemplate from "core/ITemplate";

export default ({
  name,
  suffix,
  imports,
  exports,
  baseTypes,
  mappings,
}: TypesTemplateArgs): ITemplate => [
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
