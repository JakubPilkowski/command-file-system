type GenerateComponentOptions = {};

export type ComponentExtension = "jsx" | "tsx";

export type GenerateComponentArgs = {
  extension: ComponentExtension;
  /**
   * Name of component in CamelCase format
   */
  name: string;
  /**
   * Whether return memorized jsx component
   */
  withMemo: boolean;
  /**
   * Whether jsx file has got defined properties
   */
  withProps: boolean;
};
