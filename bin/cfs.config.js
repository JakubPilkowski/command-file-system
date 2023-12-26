"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsIndexTemplate = `import {{name}} from './{{name}}{{ext}}';

export default {{name}};
`;
exports.default = {
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
