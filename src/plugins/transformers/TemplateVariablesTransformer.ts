import Transformer from "types/plugins/Transformer.js";

export const VARIABLE_FORMAT = /\{\{(.+?)\}\}/g;

export default class TemplateVariablesTransformer extends Transformer {
  options = {
    format: VARIABLE_FORMAT,
  };

  transformTemplate(template: string, variables: Record<string, any>): string {
    return template.replace(this.options.format, (match, name) => {
      if (!variables.hasOwnProperty(name)) {
        throw new Error(
          `There is not defined ${name} property in ${variables} for template: ${template}`
        );
      }
      return variables[name];
    });
  }
}
