export const InputPrimitive = {
  string: "string",
  number: "number",
  boolean: "boolean",
} as const;

export type InputKey = keyof typeof InputPrimitive;

export type InputType = string | number | boolean;

export type Output = Record<string, InputType>;

export type Input = [string, InputKey];

export interface IFileTemplate {
  /**
   * name of script template
   */
  templateName: string;
  /**
   * template
   */
  template: string;
  /**
   * name of file
   */
  name: string | ((params: Output) => string);
  params?: Input[];
}

export interface ICatalogTemplate {
  templateName: string;
  /**
   * name of catalog
   */
  name: string | ((params: Output) => string);
  templates: ITemplate[];
  params?: Input[];
}

export type ITemplate = IFileTemplate | ICatalogTemplate;

export interface IRcfConfig {
  //TODO: how to read plugins???
  plugins: any[];
  templates: ITemplate[];
}

const tsIndexTemplate = `
    import {{name}} from './{{name}}.{{ext}}';

    export default {{name}}
`;

// sample config
export default <IRcfConfig>{
  templates: [
    {
      templateName: "index",
      template: tsIndexTemplate,
      name: ({ name, ext }) => `${name}.${ext}`,
      params: [
        ["name", "string"],
        ["ext", "string"],
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
            ["name", "string"],
            ["ext", "string"],
          ],
        },
      ],
      params: [
        ["name", "string"],
        ["ext", "string"],
      ],
    },
  ],
};
