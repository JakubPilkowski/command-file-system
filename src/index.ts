#!/usr/bin/env node

import { CONSTANTS } from "core/CONSTANTS";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
// import commands from "./commands";
import fs from "fs";
import ITemplate from "core/ITemplate";

const readConfig = (): Promise<string> => {
  // TODO: in future tasks add config from external sources
  // TODO:
  return new Promise<string>((resolve, reject) => {
    fs.readFile(
      "./src/cfs.config.ts",
      { encoding: "utf8", flag: "r" },
      (err, data) => {
        console.log("data", data);
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      }
    );
  });
};

const start = () => {
  const yargsInstance = yargs(hideBin(process.argv))
    .scriptName(CONSTANTS.CLI_NAME)
    .usage("$0 <cmd> [args]");

  readConfig().then((config) => {
    console.log("config", config);

    yargsInstance.strict().showHelpOnFail(false).parse();
  });

  // commands.forEach((appCommand) => {
  //   // const command = appCommand();
  //   // console.log("command", command);
  //   const { name, description, builder, handler } = appCommand();
  //   yargsInstance.command(name, description, builder, handler);
  // });
};

start();
