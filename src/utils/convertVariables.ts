import ITemplate from "core/ITemplate";
import { variableFormat } from "./regexs";

export default function convertVariables(
  template: ITemplate,
  variables: Record<string, string>
): ITemplate {
  const newTemplate = template.map((line) => {
    console.log("line", line);
    const newLine = line.replace(variableFormat, (match) => {
      const variableName = variableFormat.exec(match)[1];
      if (!variables.hasOwnProperty(variableName)) {
        throw new Error(
          `There is not defined ${variableName} property in ${variables} for template: ${template}`
        );
      }
      return variables[variableName];
    });
    return newLine;
  });

  return newTemplate;
}
