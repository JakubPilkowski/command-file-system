import { IConfig } from "./IConfig";

// TODO: add fetching external configs
// TODO: for now omit catalog templates and simply map over template list
// TODO: implement recursion or monad, will see
export default async function readConfig(): Promise<IConfig> {
  return await import(`../cfs.config`).then((val) => {
    return val.default;
  });
}
