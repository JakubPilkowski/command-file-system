type GenerateComponentOptions = {};

export type ComponentExtension = "jsx" | "tsx";

export type GenerateComponentArgs = {
  extension: ComponentExtension;
  /**
   * Name of component in CamelCase format
   */
  name: string;
};
