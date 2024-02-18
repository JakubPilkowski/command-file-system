import path from "path";
import Variable, { IVariables } from "types/plugins/Variable.js";

/**
 * Class responsible for retrieving values from file name provided in command
 */
export default class FileVariables extends Variable {
  options = {
    name: "name",
    ext: ["ext", "extension"],
  };

  createVariable(args: IVariables) {
    if ("$name" in args) {
      const parsedPath = path.parse(args.$name);

      return Object.keys(this.options).reduce((acc, key) => {
        switch (key) {
          case "name":
            return {
              ...acc,
              [key]: parsedPath.name,
            };
          case "ext":
            return {
              ...acc,
              [key]: parsedPath.ext,
            };
          default:
            return acc;
        }
      }, {});
    } else {
      return {};
    }
  }
}
