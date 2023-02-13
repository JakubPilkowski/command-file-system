#!/usr/bin/env node
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import commands from "./commands";
const yargsInstance = yargs(hideBin(process.argv))
    .scriptName("rfm")
    .usage("$0 <cmd> [args]");
commands.forEach((appCommand) => {
    yargsInstance.command(appCommand());
});
yargsInstance.strict().showHelpOnFail(false).parse();
