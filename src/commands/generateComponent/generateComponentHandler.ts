import { ArgumentsCamelCase } from "yargs";
import fs from "fs";

import jsxComponentTemplate from "templates/componentTemplates/jsx";
import tsxComponentTemplate from "templates/componentTemplates/tsx";
import convertVariables from "utils/convertVariables";
import { GenerateComponentArgs } from "./generateComponent.types";

export default function generateComponentHandler(
  args: ArgumentsCamelCase<GenerateComponentArgs>
): void | Promise<void> {
  // console.log("args", args);
  const { name, extension } = args;

  const template =
    extension === "tsx" ? tsxComponentTemplate : jsxComponentTemplate;

  /**
   * Step 1
   * converting variables
   */
  const convertedTemplate = convertVariables(template, { name });

  console.log("convertedTemplate", convertedTemplate);

  const templateString = convertedTemplate.join("\n");

  /**
   * Step 2
   * creating file
   */

  fs.writeFile(`${name}.${extension}`, templateString, (err) => {
    if (err) {
      console.log("error", err);
    }
  });

  //   console.log(`Creating component ${args.name}`);
}
