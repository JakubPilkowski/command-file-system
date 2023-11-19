import { Input } from "core/Input";
import fs from "fs";

export default function generateFileHandler(
  params: Input[]
): void | Promise<void> {
  const [] = params;

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
  // const templateString = template.join("\n");

  // fs.writeFile(`${name}.${extension}`, templateString, (err) => {
  //   if (err) {
  //     console.log("error", err);
  //   }
  // });
}
