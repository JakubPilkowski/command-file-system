import ICommand from "../../core/ICommand";

import generateTypesBuilder from "./generateTypesBuilder";
import generateTypesHandler from "./generateTypesHandler";

export const GENERATE_TYPES_SCRIPT = ["generate-types <name>", "gt <name>"];

export const GENERATE_TYPES_DESCRIPTION = "Generate types file";

export default function generateTypes(): ICommand {
  return {
    name: GENERATE_TYPES_SCRIPT,
    description: GENERATE_TYPES_DESCRIPTION,
    builder: generateTypesBuilder,
    handler: generateTypesHandler,
  };
}
