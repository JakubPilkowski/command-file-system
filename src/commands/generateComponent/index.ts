import ICommand from "../../core/ICommand";

import generateComponentBuilder from "./generateComponentBuilder";
import generateComponentHandler from "./generateComponentHandler";

export const GENERATE_COMPONENT_SCRIPT = [
  "generate-component [name]",
  "gc [name]",
];

export const GENERATE_COMPONENT_DESCRIPTION =
  "Generate react component directory";

export default function generateComponent(): ICommand {
  return {
    name: GENERATE_COMPONENT_SCRIPT,
    description: GENERATE_COMPONENT_DESCRIPTION,
    builder: generateComponentBuilder,
    handler: generateComponentHandler,
  };
}
