import ICommand from "../../core/ICommand";
import { GenerateIndexArgs } from "./generateIndex.types";

import generateIndexBuilder from "./generateIndexBuilder";
import generateIndexHandler from "./generateIndexHandler";

export const GENERATE_INDEX_SCRIPT = ["generate-index <name>", "gi <name>"];

export const GENERATE_INDEX_DESCRIPTION = "Generate js/ts index file";

export default function generateIndex(): ICommand {
  return {
    name: GENERATE_INDEX_SCRIPT,
    description: GENERATE_INDEX_DESCRIPTION,
    builder: generateIndexBuilder,
    handler: generateIndexHandler,
  };
}
