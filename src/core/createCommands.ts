import ICommand from "./ICommand";
import { ITemplate } from "./ITemplateV2";

// TODO: create commands
export default function createCommands(
  templates: ITemplate[]
): Promise<ICommand[]> {
  //   const commands = templates.flatMap<ICommand>((template) => {
  //     if (isFileTemplate(template)) {
  //       const {} = template;
  //       return [{}];
  //     } else {
  //       return [];
  //     }
  //   });
  return Promise.resolve([]);
}
