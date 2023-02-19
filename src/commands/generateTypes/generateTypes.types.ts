import IYargsArgs from "core/IBase";

/**
 * Add this import to {@link IYargsArgs}
 */
export type GenerateTypesArgs = {
  /**
   * Default export name in CamelCase
   */
  name: string;

  /**
   * Type suffix
   *
   * @defaultValue `Props`
   */
  suffix: string;
};

export type TypesTemplateArgs = {
  name: string;
  suffix: string;
  imports: string[];
  mappings: string[];
  baseTypes: string[];
  exports: string[];
};
