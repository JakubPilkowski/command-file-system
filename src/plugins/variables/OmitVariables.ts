import Variable, { IVariables } from "types/plugins/Variable.js";

/**
 * Class responsible for omitting unwanted variables from command
 */
export default class OmitVariables extends Variable {
  options = {
    omit: ["$name", "$templateName"],
  };

  createVariable(args: IVariables) {
    const obj = Object.create(args);

    Object.keys(obj).forEach((key) => {
      if (this.options.omit.includes(key)) {
        delete obj[key];
      }
    });

    return obj;
  }
}
