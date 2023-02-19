import ICommand from "../../core/ICommand";

import generateTestBuilder from "./generateTestBuilder";
import generateTestHandler from "./generateTestHandler";

export const GENERATE_TEST_SCRIPT = ["generate-test <name>", "gtest <name>"];

export const GENERATE_TEST_DESCRIPTION = "Generate test file";

export default function generateTest(): ICommand {
  return {
    name: GENERATE_TEST_SCRIPT,
    description: GENERATE_TEST_DESCRIPTION,
    builder: generateTestBuilder,
    handler: generateTestHandler,
  };
}
