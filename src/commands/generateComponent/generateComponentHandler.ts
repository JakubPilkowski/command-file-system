import { ArgumentsCamelCase } from "yargs";

export default function generateComponentHandler<U>(
  args: ArgumentsCamelCase<U>
): void | Promise<void> {
  console.log("args", args);
  //   console.log(`Creating component ${args.name}`);
}
