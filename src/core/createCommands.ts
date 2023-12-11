import isFileTemplate from "utils/isFileTemplate";

import ICommand from "./ICommand";
import { ITemplate } from "./ITemplateV2";

// TODO: create commands
export default function createCommands(
  templates: ITemplate[]
): Promise<ICommand[]> {
  return new Promise<ICommand[]>(resolve, (reject) => {
    const commands = templates.flatMap<ICommand>((template) => {
      if (isFileTemplate(template)) {
        const { name, templateName, params } = template;
        return [{}];
      } else {
        return [];
      }
    });
    resolve(commands);
  });
}