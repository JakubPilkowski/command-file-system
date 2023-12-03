import { IConfig } from "./IConfig";

export default async function readConfig(): Promise<IConfig> {
  // TODO: add fetching external configs
  return await import(`../cfs.config`).then((val) => {
    console.log("🚀 ~ file: readConfig.ts:7 ~ returnawaitimport ~ val:", val);
    return val.default;
    // TODO: for now omit catalog templates and simply map over template list
    // TODO: implement recursion or monad, will see
  });
}
