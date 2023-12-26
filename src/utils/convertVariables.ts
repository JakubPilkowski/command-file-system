import ITemplate from "core/ITemplate";
import { variableFormat } from "./regexs";

/**
 * @deprecated use mapVariables instead
 */
export default function convertVariables(
  template: ITemplate,
  variables: Record<string, string>
): ITemplate {
  const newTemplate = template.map((line) => {
    const newLine = line.replace(variableFormat, (match, name) => {
      //   console.log("match", match);
      //   console.log("args", args);
      //   const variableName = variableFormat.exec(match);
      //   console.log("variableName", variableName);
      //   if (!variableName) return "";
      if (!variables.hasOwnProperty(name)) {
        throw new Error(
          `There is not defined ${name} property in ${variables} for template: ${template}`
        );
      }
      return variables[name];
    });
    return newLine;
  });

  return newTemplate;
}
