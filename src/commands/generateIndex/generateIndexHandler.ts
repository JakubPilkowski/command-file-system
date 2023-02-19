import { ArgumentsCamelCase } from "yargs";
import fs from "fs";

import jsIndexTemplate from "templates/indexTemplates/jsIndexTemplate";
import tsIndexTemplate from "templates/indexTemplates/tsIndexTemplate";

import { GenerateIndexArgs } from "./generateIndex.types";

export default function generateIndexHandler(
  args: ArgumentsCamelCase<GenerateIndexArgs>
): void | Promise<void> {
  const { name, extension, withNamedExports, withTypeExports } = args;

  const template =
    extension === "ts"
      ? tsIndexTemplate({
          name,
          withNamedExports,
          withTypeExports,
          imports: [],
          namedExports: [],
          typeExports: [],
        })
      : jsIndexTemplate({
          name,
          withNamedExports,
          withTypeExports,
          imports: [],
          namedExports: [],
          typeExports: [],
        });

  /**
   * Step
   * creating file
   */
  const templateString = template.join("\n");

  fs.writeFile(`index.${extension}`, templateString, (err) => {
    if (err) {
      console.log("error", err);
    }
  });
}
