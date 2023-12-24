#!/usr/bin/env node
import yargs, { ArgumentsCamelCase, Argv } from "yargs";
import { hideBin } from "yargs/helpers";
import Cache from "file-system-cache";
import path from "path";
import * as fs from "fs";

import { CONSTANTS } from "core/CONSTANTS";

import readConfig from "core/readConfig";
import isFileTemplate from "utils/isFileTemplate";

// split into ->
// init -> readConfig -> create commands -> save to cache
// update (in future automatic) -> readConfig -> create commands -> save to cache
// gc/gf -> readCommand from cache -> not exist -> readConfig -> createCommand -> if exist run -> otherwise throw error
// gc/gf -> readCommand from cache -> exist -> run

const yargsInstance = yargs(hideBin(process.argv))
  .scriptName(CONSTANTS.CLI_NAME)
  .usage("$0 <cmd> [args]");

const cache = Cache({
  basePath: "./.cache/cfs", // (optional) Path where cache files are stored (default).
  ns: "my-namespace", // (optional) A grouping namespace for items.
  hash: "sha1", // (optional) A hashing algorithm used within the cache key.
  ttl: 0, // (optional) A time-to-live (in secs) on how long an item remains cached.
});

let templateCommands: string[] = ["index"];

type GenerateFileArgs = {
  $1: string;
  templates: TemplateTuple[];
};

// ?? Maybe this will be helpful as watch
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
  console.log("Start builder...");

  yargs.example("cfs gf index", `generate 'index' template`);
};

// TODO: implement as monads
const generate = (args: ArgumentsCamelCase<GenerateFileArgs>) => {
  console.log("Start generator...");

  const templateName = args?.$1;
  const templates = args?.templates;

  if (!templateName) {
    throw new Error(`Could not generate file. No template was provided`);
  }

  const template = templates.find((templateNames) =>
    templateNames.find((_templateName) => _templateName === templateName)
  );

  if (!template) {
    throw new Error(
      `Could not generate file. There is no template config for template: ${templateName}`
    );
  }

  console.log(
    `Successfully find template '${template[0]}' for name '${templateName}'`
  );
  // TODO: implement file generator
  console.log("Successfully generate file");
};

// TODO: test https://www.npmjs.com/package/cache-manager
async function readFromCache(): Promise<TemplateTuple[]> {
  const cacheFileTemplates = (await cache.get("fileTemplates")) as
    | TemplateTuple[]
    | undefined;

  if (Array.isArray(cacheFileTemplates)) {
    return cacheFileTemplates;
  } else {
    return readFromConfig();
  }
}

type TemplateTuple = string[];

async function readFromConfig(): Promise<TemplateTuple[]> {
  console.log("Reading config...");
  const config = await readConfig();
  const templates = config.templates;

  const fileTemplateNames = new Map<string, TemplateTuple>([]);

  console.log("Read file templates...");

  for (let i = 0; i < templates.length; i++) {
    const template = templates[i];

    if (isFileTemplate(template)) {
      const { templateName, templateAliases } = template;
      if (fileTemplateNames.has(templateName)) {
        throw new Error(
          `Could not read template ${JSON.stringify(
            template
          )}. Template with name ${templateName} already exist`
        );
      }
      fileTemplateNames.set(templateName, [templateName, ...templateAliases]);
    }
  }

  console.log("Successfully read template names");

  const result = Array.from(fileTemplateNames.values());

  return result;
}

yargsInstance
  .command(
    ["generate-file $1", "gf", "f"],
    "Generate file based on given template",
    builder,
    generate
  )
  // .command(
  //   "gc $1",
  //   "Generate catalog based on given template",
  //   builder,
  //   generate
  // )
  // TODO: add logging support
  // TODO: verbose mode
  // TODO: no cache mode
  // TODO: cache clear command
  .middleware(async (argv) => {
    console.log("Start middleware...");
    const configFilePath = path.resolve("src/cfs.config.ts");

    if (!configFilePath) {
      throw new Error(`Could not resolve config file.`);
    }

    const cacheModifyDate = (await cache.get("cacheModifyDate")) as
      | number
      | undefined;
    const currentModifyDate = fs.statSync(configFilePath).mtimeMs;

    let templates: TemplateTuple[];

    if (cacheModifyDate) {
      console.log("Detect modification date cache. Start detection...");
      if (currentModifyDate > cacheModifyDate) {
        console.log("Detect config changes. Loading new templates...");
        cache.set("cacheModifyDate", currentModifyDate);
        const fileTemplateNames = await readFromConfig();
        cache.set("fileTemplates", fileTemplateNames);
        templates = fileTemplateNames;
      } else {
        console.log("No changes detected. Reading templates from cache...");
        const fileTemplateNames = await readFromCache();
        cache.set("fileTemplates", fileTemplateNames);
        templates = fileTemplateNames;
      }
    } else {
      console.log("No cache. Loading templates from config...");
      cache.set("cacheModifyDate", currentModifyDate);
      const fileTemplateNames = await readFromConfig();
      cache.set("fileTemplates", fileTemplateNames);
      templates = fileTemplateNames;
    }

    if (templates.length === 0) {
      throw new Error(`Could not find any templates in config file.`);
    }

    console.log("Passing templates to generator...");
    argv.templates = templates;
  }, true)
  .help("h")
  .alias("h", "help").argv;
