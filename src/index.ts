#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import commands from "./commands";

const yargsInstance = yargs(hideBin(process.argv))
  .scriptName("rfm")
  .usage("$0 <cmd> [args]");

commands.forEach((appCommand) => {
  // const command = appCommand();
  // console.log("command", command);
  const { name, description, builder, handler } = appCommand();
  yargsInstance.command(name, description, builder, handler);
});

/**
 * here we create our cli command
 */
// yargsInstance.command(
// in square brackets we have got positionals []
// in brackets we have got options
// "gc [name]",
// "generate react component directory",
// (yargs) => {
/** here we create command options */
// yargs.positional("name", {
// describe: "Component name used in files",
// type: "string",
// });
// yargs.demandOption("name");
// },
// (argv) => {
// console.log(`Creating component ${argv.name}`);
// }
// );

yargsInstance.strict().showHelpOnFail(false).parse();
