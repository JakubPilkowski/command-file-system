// CONFIG TYPES
export interface IConfig {
  //TODO: how to read plugins???
  plugins: any[];
  templates: ITemplate[];
}

// COMMAND TYPES

export interface ICommand {
  name: string | ReadonlyArray<string>;
  description: string;
  // builder?: BuilderCallback<IYargsArgs, IYargsArgs>;
  // handler: (args: ArgumentsCamelCase<IYargsArgs>) => void | Promise<void>;
  // middlewares?: Array<MiddlewareFunction<IYargsArgs>>;
}

// CONFIG INPUT TYPES

export const InputPrimitive = {
  string: "string",
  number: "number",
  boolean: "boolean",
} as const;

export type InputKey = keyof typeof InputPrimitive;

export type InputType = string | number | boolean;

export type PositionalType = {
  type: "positional";
  argType: InputKey;
  description?: string;
};

export type OptionType = {
  type: "option";
  argType: InputKey;
  default: InputType;
  choices?: InputType[];
  description?: string;
};

export type Input = {
  name: string;
  params: PositionalType | OptionType;
};

// CONFIG OUTPUT TYPES

export type Output = Record<string, InputType>;

// TEMPLATE TYPES

export interface IFileTemplate {
  /**
   * name of script
   */
  templateName: string;
  /**
   * alias of {@link IFileTemplate.templateName}
   */
  templateAliases?: string[];
  /**
   * command description
   *
   * TODO: to remove
   */
  description?: string;
  /**
   * template
   */
  template: string;
  /**
   * name of file
   * Not supported for now
   */
  name: string | ((params: Output) => string);
  // TODO: params can either be positional or option
  // if option then default value should be implemented
  // TODO: description
  /**
   * Not supported for now
   */
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
