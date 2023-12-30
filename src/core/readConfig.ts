import { IConfig } from "./IConfig";

// TODO: implement recursion or monad, will see
export default async function readConfig(
  configFilePath: string
): Promise<IConfig> {
  return await import(configFilePath).then((val) => {
    return val.default;
  });
}
