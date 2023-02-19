import { GenerateComponentArgs } from "commands/generateComponent/generateComponent.types";
import { GenerateIndexArgs } from "commands/generateIndex/generateIndex.types";
import { GenerateTestArgs } from "commands/generateTest/generateTest.types";
import { GenerateTypesArgs } from "commands/generateTypes/generateTypes.types";

type IYargsArgs = GenerateComponentArgs &
  GenerateIndexArgs &
  GenerateTypesArgs &
  GenerateTestArgs;

export default IYargsArgs;
