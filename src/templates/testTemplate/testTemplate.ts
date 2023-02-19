import { TestTemplateArgs } from "commands/generateTest/generateTest.types";
import ITemplate from "core/ITemplate";

export default ({
  name,
  describe,
  extension,
  imports,
  suiteBody,
  rtlImport,
}: TestTemplateArgs): ITemplate => {
  const hasRtl = ["tsx", "jsx"].includes(extension);

  return [
    ...(hasRtl ? [`import {render, screen} from '${rtlImport}';`] : []),
    ...(imports.length > 0 ? [...imports, ""] : []),
    `import ${name} from './${name};'`,
    "",
    `describe('${describe}', () => {`,
    ...(suiteBody.length > 0 ? [...suiteBody, ""] : []),
    `  it('', () => {`,
    hasRtl ? `    render(<${name}/>);` : "    expect(test)",
    `  });`,
    `});`,
    "",
  ];
};
