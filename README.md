# Command File System

Cli tool for creating files based on given templates.

# Warning!!!

This library is in development stage and does not cover most of expected features

## Usage

To start work with `cfs` you need to provide set of templates you want `cfs` to generate for you.

In order to manage `cfs` templates create `cfs.config.js` or `cfs.config.cjs` file.

#### Example - es module - cfs.config.js

```
const indexTemplate = `import {{name}} from './{{name}}{{ext}}';
export default {{name}};
`;

/** @type {import('command-file-system').IConfig} */
export default {
  templates: [
    {
      templateName: "index",
      templateAliases: ["i", "idx", "id"],
      template: indexTemplate,
    },
  ],
};
```

#### Example - commonjs - cfs.config.cjs

```
const indexTemplate = `import {{name}} from './{{name}}{{ext}}';
export default {{name}};
`;

/** @type {import('command-file-system').IConfig} */
module.exports = {
  templates: [
    {
      templateName: "index",
      templateAliases: ["i", "idx", "id"],
      template: indexTemplate,
    },
  ],
};
```

Right now you can easily generate your first template!

## File Generator

In order to generate your template file you need run command:

```
cfs generate-file <TEMPLATE_NAME> <TEMPLATE_ARGS>
```

For example, the output for:

```
cfs generate-file index testIndex.ts
```

should look like this:

```
import index from './testIndex.ts';

export default testIndex;
```
