import { IFileTemplate } from "core/ITemplateV2";
import ICommand from "../../core/ICommand";

import generateFileBuilder from "./generateFileBuilder";
import generateFileHandler from "./generateFileHandler";

export const GENERATE_COMPONENT_SCRIPT = [
  "generate-component <name>",
  "gc <name>",
];

export const GENERATE_COMPONENT_DESCRIPTION = "Generate jsx/tsx component file";

/**
 * @deprecated
 */
export default function generateFileTemplate(
  fileTemplate: IFileTemplate
): ICommand {
  return {
    name: [fileTemplate.templateName, ...fileTemplate.templateAliases],
    description: fileTemplate.description,
    builder: generateFileBuilder,
    handler: generateFileHandler,
  };
}
