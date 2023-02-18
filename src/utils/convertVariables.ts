import ITemplate from "core/ITemplate";
import { variableFormat } from "./regexs";

export default function convertVariables(
  template: ITemplate,
  variables: Record<string, string>
): ITemplate {
  //   console.log("template", template);
  const newTemplate = template.map((line) => {
    // console.log("line", line);
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
