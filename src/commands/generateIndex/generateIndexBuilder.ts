import { Argv } from "yargs";

import { pascalCase } from "utils/regexs";

export default function generateIndexBuilder(yargs: Argv): Argv {
  yargs.positional("name", {
    describe: "Index name in PascalCase",
    type: "string",
  });
  yargs.option("extension", {
    alias: "ext",
    default: "ts",
    type: "string",
    description: "Index file extension. Possible values: js|ts.",
    choices: ["js", "ts"],
  });

  yargs.option("withTypeExports", {
    alias: "withTypeExports",
    default: false,
    type: "boolean",
    description: "Whether return types export wrapper",
  });

  yargs.option("withNamedExports", {
    alias: "withNamedExports",
    default: false,
    type: "boolean",
    description: "Whether return named exports wrapper",
  });

  yargs.check((argv) => {
    const name = argv.name as string;
    if (!pascalCase.test(name)) {
      throw new Error("Component name must be in CamelCase!");
    } else {
      return true;
    }
  });

  yargs.hide("version");

  return yargs;
}
