#!/usr/bin/env node
import yargs, { Argv } from "yargs";
import { hideBin } from "yargs/helpers";

import { CONSTANTS } from "core/CONSTANTS";

import readConfig from "core/readConfig";

// split into ->
// init -> readConfig -> create commands -> save to cache
// update (in future automatic) -> readConfig -> create commands -> save to cache
// gc/gf -> readCommand from cache -> not exist -> readConfig -> createCommand -> if exist run -> otherwise throw error
// gc/gf -> readCommand from cache -> exist -> run

const yargsInstance = yargs(hideBin(process.argv))
  .scriptName(CONSTANTS.CLI_NAME)
  .usage("$0 <cmd> [args]");

const init = (argv: unknown) => {
  // 1. look for command in cache

  readConfig().then((config) => {
    console.log("config read successfully");
    // yargsInstance.strict().showHelpOnFail(false).parse();
  });

  // TODO: createComands -> add commands to yargs instance -> save commands in some kind of cache

  // commands.forEach((appCommand) => {
  //   // const command = appCommand();
  //   // console.log("command", command);
  //   const { name, description, builder, handler } = appCommand();
  //   yargsInstance.command(name, description, builder, handler);
  // });
};

const builder = (yargs: Argv) => {
  // yargs.positional("template", {
  //   alias: "t",
  //   describe: "template name",
  //   type: "string",
  // });

  yargs
    .example(
      "cfs gf index Component ts",
      `generate 'index' typescript file template for 'Component'`
    )
    .alias("ext", "extension")
    .choices("ext", ["ts", "js"])
    .describe("ext", "either ts or js extension for index file");
  // yargs.check((argv) => {
  //   const template = argv.template as string;
  //   if (!template) {
  //     throw new Error("Template must be provided");
  //   } else {
  //     return true;
  //   }
  // });
};

const generate = (args: unknown) => {
  console.log("args", args);
};

yargsInstance
  .command("init", "Init cfs template generation", () => {}, init)
  .command(
    "gf $1 $2 [extension]",
    "Generate file based on given template",
    builder,
    generate
  )
  .command("gc", "Generate catalog based on given template", () => {}, generate)
  .help("h")
  .alias("h", "help").argv;
