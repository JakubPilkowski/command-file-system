export default function generateComponentBuilder(yargs) {
    yargs.positional("name", {
        describe: "Component name used in files",
        type: "string",
    });
    yargs.demandOption("name");
    return yargs;
}
