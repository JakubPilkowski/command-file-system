# Command File System

Cli tool for creating files based on given templates.

# Warning!!!

This library is in development stage and does not cover most of expected features

## Usage

To start work with `cfs` you need to provide set of templates you want `cfs` to generate for you.

In order to manage `cfs` templates create `cfs.config.js` or `cfs.config.cjs` file.

#### Example - es module

1. Set project type to `module` in `package.json` file. Commonjs cannot resolver module files
2. Provide `cfs.config.js` file

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

#### Example - commonjs

1. Either commonjs and esm modules support resolving commonjs export so there is no need to change project configuration.
2. Provide `cfs.config.cjs` file

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

Do not mix both esm and commonjs configs.

After those steps you can easily generate your first template!

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
