import {
  ArgumentsCamelCase,
  BuilderCallback,
  CommandBuilder,
  MiddlewareFunction,
} from "yargs";

type ICommand<T = Record<string, any>, U = T> = {
  name: string | ReadonlyArray<string>;
  description: string;
  builder?: CommandBuilder<T, U>;
  handler: (args: ArgumentsCamelCase<U>) => void | Promise<void>;
  middlewares?: Array<MiddlewareFunction<U>>;
};

export default ICommand;
