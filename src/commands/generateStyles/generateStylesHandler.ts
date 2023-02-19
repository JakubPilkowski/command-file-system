import { ArgumentsCamelCase } from "yargs";
import fs from "fs";

import stylesTemplate from "templates/stylesTemplate";

import { GenerateStylesArgs } from "./generateStyles.types";

export default function generateStylesHandler(
  args: ArgumentsCamelCase<GenerateStylesArgs>
): void | Promise<void> {
  const { name, extension } = args;

  const template = stylesTemplate({
    name,
    imports: [],
    styles: [],
  });

  /**
   * Step
   * creating file
   */
  const templateString = template.join("\n");

  fs.writeFile(`${name}.${extension}`, templateString, (err) => {
    if (err) {
      console.log("error", err);
    }
  });
}
