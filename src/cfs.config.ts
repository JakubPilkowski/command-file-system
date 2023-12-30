import { IConfig } from "core/IConfig";

const tsIndexTemplate = `import {{name}} from './{{name}}{{ext}}';

export default {{name}};
`;

const reactComponentTemplate = `import React from 'react';

const {{name}}: React.FC<Props> = () => {
  return <div></div>;
};

type Props = {};

export default {{name}};
`;

// sample config
export default <IConfig>{
  templates: [
    {
      templateName: "index",
      templateAliases: ["i", "idx", "id"],
      template: tsIndexTemplate,
      name: ({ name, ext }) => `${name}.${ext}`,
      params: [
        {
          name: "name",
          params: {
            type: "positional",
          },
        },
        {
          name: "ext",
          params: {
            type: "optional",
            default: "js",
            choices: ["js", "ts"],
          },
        },
      ],
    },
    {
      templateName: "react-component",
      templateAliases: ["rc"],
      template: reactComponentTemplate,
      name: ({ name, ext }) => `${name}${ext}`,
      params: [
        {
          name: "name",
          params: {
            type: "positional",
          },
        },
        {
          name: "props",
          params: {
            type: "optional",
            default: "Props",
          },
        },
        {
          name: "ext",
          params: {
            type: "optional",
            default: "tsx",
            choices: ["jsx", "tsx"],
          },
        },
      ],
    },
    {
      templateName: "cd",
      name: ({ name }) => name,
      templates: [
        {
          templateName: "index",
          template: tsIndexTemplate,
          name: ({ name, ext }) => `${name}.${ext}`,
          params: [
            {
              name: "name",
              params: {
                type: "positional",
              },
            },
            {
              name: "ext",
              params: {
                type: "optional",
                default: "js",
                choices: ["js", "ts"],
              },
            },
          ],
        },
      ],
      params: [
        {
          name: "name",
          params: {
            type: "positional",
          },
        },
        {
          name: "ext",
          params: {
            type: "optional",
            default: "js",
            choices: ["js", "ts"],
          },
        },
      ],
    },
  ],
};
