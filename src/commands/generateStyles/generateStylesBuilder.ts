import { Argv } from "yargs";

import { pascalCase, kebabCase } from "utils/regexs";
import { GenerateStylesArgs } from "./generateStyles.types";

export default function generateStylesBuilder(
  yargs: Argv<GenerateStylesArgs>
): Argv<GenerateStylesArgs> {
  yargs.positional("name", {
    describe: "Styles file name",
    type: "string",
  });

  yargs.option("extension", {
    alias: "ext",
    type: "string",
    default: "css",
    describe: "Styles file extension",
    choices: ["css", "scss", "module.css"],
  });

  yargs.check((argv) => {
    const { name, extension } = argv;

    const isCssExtension = ["css", "scss"].includes(extension);
    const isModuleCssExtension = extension === "module.css";

    if (isCssExtension && !kebabCase.test(name)) {
      throw new Error(
        `Style name ${name} for ${extension} extension must be in kebab-case`
      );
    } else if (isModuleCssExtension && !pascalCase.test(name)) {
      throw new Error(
        `Style name ${name} for ${extension} extension must be in PascalCase`
      );
    } else {
      return true;
    }
  });

  yargs.hide("version");

  return yargs;
}
