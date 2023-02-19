import { ArgumentsCamelCase } from "yargs";
import fs from "fs";

import jsxComponentTemplate from "templates/componentTemplates/jsx";
import tsxComponentTemplate from "templates/componentTemplates/tsx";
import convertVariables from "utils/convertVariables";
import { GenerateComponentArgs } from "./generateComponent.types";
import convertTernaries from "utils/convertTernaries";

export default function generateComponentHandler(
  args: ArgumentsCamelCase<GenerateComponentArgs>
): void | Promise<void> {
  const { name, extension, withMemo, withProps, withForwardRef, tag } = args;

  const template =
    extension === "tsx"
      ? tsxComponentTemplate({
          name,
          withMemo,
          withProps,
          withForwardRef,
          imports: [],
          children: [],
          body: [],
          className: "",
          tag,
        })
      : jsxComponentTemplate({
          name,
          withMemo,
          withProps,
          withForwardRef,
          imports: [],
          children: [],
          body: [],
          className: "",
          tag,
        });

  // /**
  //  * converting variables
  //  */
  // const withVariables = convertVariables(template, { name });

  // /**
  //  * converting ternaries
  //  */

  // const withTernaries = convertTernaries(withVariables, {
  //   withMemo,
  //   withProps,
  // });

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
