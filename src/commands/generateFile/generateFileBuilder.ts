import { Argv } from "yargs";

export default function generateFileBuilder(yargs: Argv): Argv {
  // yargs.positional("name", {
  //   describe: "Component name in PascalCase",
  //   type: "string",
  // });

  // yargs.option("extension", {
  //   alias: "ext",
  //   default: "tsx",
  //   type: "string",
  //   description: "React component extension. Possible values: jsx|tsx.",
  //   choices: ["jsx", "tsx"],
  // });

  return yargs;
}
