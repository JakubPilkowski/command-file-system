import { ArgumentsCamelCase, BuilderCallback, MiddlewareFunction } from "yargs";
import IYargsArgs from "./IBase";

type ICommand = {
  name: string | ReadonlyArray<string>;
  description: string;
  builder?: BuilderCallback<IYargsArgs, IYargsArgs>;
  handler: (args: ArgumentsCamelCase<IYargsArgs>) => void | Promise<void>;
  middlewares?: Array<MiddlewareFunction<IYargsArgs>>;
};

export default ICommand;
