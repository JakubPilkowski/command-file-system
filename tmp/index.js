#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .scriptName("react-files")
  .usage("$0 <cmd> [args]")
  /**
   * here we create our cli command
   */
  .command(
    // in square brackets we have got positionals []
    // in brackets we have got options
    "component [name]",
    "Create component directory",
    (yargs) => {
      /** here we create command options */
      yargs.positional("name", {
        describe: "Component name used in files",
        type: "string",
      });
      yargs.demandOption("name");
    },
    (argv) => {
      console.log(`Creating component ${argv.name}`);
    }
  )
  .strict()
  .showHelpOnFail(false)
  //   .help()
  .parse();
