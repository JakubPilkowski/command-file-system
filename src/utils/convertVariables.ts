import { variableFormat } from "./regexs.js";

/**
 * @deprecated use mapVariables instead
 */
export default function convertVariables(
  template: string[],
  variables: Record<string, string>
): string[] {
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
