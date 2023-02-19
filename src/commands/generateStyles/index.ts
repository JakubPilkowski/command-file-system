import ICommand from "../../core/ICommand";

import generateStylesBuilder from "./generateStylesBuilder";
import generateStylesHandler from "./generateStylesHandler";

export const GENERATE_STYLES_SCRIPT = [
  "generate-styles <name>",
  "gstyles <name>",
];

export const GENERATE_STYLES_DESCRIPTION = "Generate styles file";

export default function generateStyles(): ICommand {
  return {
    name: GENERATE_STYLES_SCRIPT,
    description: GENERATE_STYLES_DESCRIPTION,
    builder: generateStylesBuilder,
    handler: generateStylesHandler,
  };
}
