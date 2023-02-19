import { Argv } from "yargs";

import { pascalCase } from "utils/regexs";

export default function generateTypesBuilder(yargs: Argv): Argv {
  yargs.positional("name", {
    describe: "Index name in PascalCase",
    type: "string",
  });

  yargs.option("suffix", {
    describe: "Type suffix",
    type: "string",
    default: "Props",
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
