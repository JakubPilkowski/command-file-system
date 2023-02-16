import { Argv } from "yargs";
import { pascalCase } from "../../utils/regexs";

export default function generateComponentBuilder(yargs: Argv): Argv {
  yargs.positional("name", {
    describe: "Component name in PascalCase",
    // type: "string",
  });
  yargs.option("extension", {
    alias: "ext",
    default: "tsx",
    type: "string",
    description: "React component extension. Possible values: jsx|tsx.",
    choices: ["jsx", "tsx"],
  });

  yargs.check((argv) => {
    const name = argv.name as string;
    console.log();
    if (!pascalCase.test(name)) {
      throw new Error("Component name must be in CamelCase!");
    } else {
      return true;
    }
  });

  yargs.hide("version");

  return yargs;
}
