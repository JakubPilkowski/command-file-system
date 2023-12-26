# Command File System

Cli tool for creating files based on given templates.

## Usage

To start work with ` cfs`` you need to provide set of templates you want  `cfs` to generate for you.

In order to manage `cfs` templates create `cfs.config.ts` file in root directory

#### Example

```
import { IConfig } from "cfs/core/IConfig";

const indexTemplate = `import {{name}} from './{{name}}{{ext}}';
export default {{name}};
`;
export default <IConfig>{
  templates: [
    {
      templateName: "index",
      templateAliases: ["i", "idx", "id"],
      template: indexTemplate,
    },
  ],
};
```

Right now you can easily create index template.

#### Run

```
cfs generate-file index testIndex.ts
```

The output should look like this:

```
import index from './testIndex.ts';

export default testIndex;
```
