import ITemplate from "core/ITemplate";
import { ternaryFormat, variableFormat } from "./regexs";

export default function convertTernaries(
  template: ITemplate,
  ternaries: Record<string, boolean>
): ITemplate {
  const newTemplate = template.map((line) => {
    const newLine = line.replace(ternaryFormat, (match) => {
      //   console.log("match", match);
      const ternaryResult = ternaryFormat.exec(match);
      //   console.log("ternaryResult", ternaryResult);
      if (!ternaryResult) return "";
      const [condition, met, otherwise = ""] =
        ternaryResult[1].split("|") || [];
      if (!ternaries.hasOwnProperty(condition)) {
        throw new Error(
          `There is not defined condition ${condition} in ${ternaries} for template: ${template}`
        );
      }
      return ternaries[condition] ? met : otherwise;
    });
    return newLine;
  });

  return newTemplate;
}
