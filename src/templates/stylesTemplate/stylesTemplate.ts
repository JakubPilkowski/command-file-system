import ITemplate from "core/ITemplate";
import { StylesTemplateArgs } from "commands/generateStyles/generateStyles.types";

export default ({ name, imports, styles }: StylesTemplateArgs): ITemplate => [
  ...(imports.length > 0 ? [...imports, ""] : []),
  `.${name.toLowerCase()} {`,
  ...styles,
  `}`,
];
