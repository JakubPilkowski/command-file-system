import yargs, { Argv, BuilderCallback } from "yargs";

export default function generateComponentBuilder(yargs: Argv): Argv {
  yargs.positional("name", {
    describe: "Component name used in files",
    type: "string",
  });
  yargs.demandOption("name");

  return yargs;
}
