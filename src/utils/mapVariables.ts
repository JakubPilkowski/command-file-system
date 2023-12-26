import { variableFormat } from "./regexs";

export default function mapVariables(
  template: string,
  variables: Record<string, string>
): string {
  return template.replace(variableFormat, (match, name) => {
    if (!variables.hasOwnProperty(name)) {
      throw new Error(
        `There is not defined ${name} property in ${variables} for template: ${template}`
      );
    }
    return variables[name];
  });
}
