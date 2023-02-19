import { ArgumentsCamelCase } from "yargs";
import fs from "fs";

import testTemplate from "templates/testTemplate";

import { GenerateTestArgs } from "./generateTest.types";

export default function generateTestHandler(
  args: ArgumentsCamelCase<GenerateTestArgs>
): void | Promise<void> {
  const { name, describe, extension, rtlImport } = args;

  const template = testTemplate({
    name,
    describe: describe || name,
    extension,
    rtlImport,
    imports: [],
    suiteBody: [],
  });

  /**
   * Step
   * creating file
   */
  const templateString = template.join("\n");

  fs.writeFile(`${name}.test.${extension}`, templateString, (err) => {
    if (err) {
      console.log("error", err);
    }
  });
}
