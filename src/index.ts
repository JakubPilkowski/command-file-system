#!/usr/bin/env node
import yargs, { ArgumentsCamelCase, Argv } from "yargs";
import { hideBin } from "yargs/helpers";
import NodeCache from "node-cache";
import deepEqual from "deep-equal";

import { CONSTANTS } from "core/CONSTANTS";

import readConfig from "core/readConfig";
import { IConfig } from "core/IConfig";

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
  console.log("builder");
  // yargs.positional("template", {
  //   alias: "t",
  //   describe: "template name",
  //   type: "string",
  // });

  yargs.example("cfs gf index", `generate 'index' template`);
  // .alias("ext", "extension")
  // .choices("ext", ["ts", "js"])
  // .describe("ext", "either ts or js extension for index file");
};

let templateCommands: string[] = ["index"];

type GenerateFileArgs = {
  $1: string;
};

const generate = (args: ArgumentsCamelCase<GenerateFileArgs>) => {
  // console.log("args", args);
  console.log("generate");

  const templateName = args?.$1;
  // TODO: implement as monads

  if (!templateName) {
    throw new Error(`Could not generate file. No template was provided`);
  }

  const templateCommand = templateCommands.find((cmd) => cmd === templateName);

  if (!templateCommand) {
    throw new Error(
      `Could not generate file. There is no template config for template: ${templateName}`
    );
  }

  console.log("success");

  // TODO: parse handler by template name
  // TODO: run template handler
};

const nodeCache = new NodeCache({ useClones: false });

yargsInstance
  .command("gf $1", "Generate file based on given template", builder, generate)
  .command("gc", "Generate catalog based on given template", () => {}, generate)
  .middleware(async () => {
    console.log("middleware");
    const config = await readConfig();
    // it doesnt work right now, cache is not persistent
    const cacheConfig = nodeCache.get<IConfig | undefined>("config");
    console.log(
      "🚀 ~ file: index.ts:97 ~ .middleware ~ cacheConfig:",
      cacheConfig
    );
    if (cacheConfig) {
      const hasChange = deepEqual(config, cacheConfig);
      console.log(
        "🚀 ~ file: index.ts:100 ~ .middleware ~ hasChange:",
        hasChange
      );
      if (hasChange) {
        nodeCache.set("config", config);
      }
      // TODO
      // create commands
    } else {
      const res = nodeCache.set("config", config);
      console.log("res", res);

      // TODO
      // create commands
    }
  })
  .help("h")
  .alias("h", "help").argv;
