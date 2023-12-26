"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ name, describe, extension, imports, suiteBody, rtlImport, }) => {
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
