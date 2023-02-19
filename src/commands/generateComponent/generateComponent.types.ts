export type ComponentExtension = "jsx" | "tsx";

/**
 * Add this import to {@link IYargsArgs}
 */
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
  /**
   * html tag of react jsx main element
   */
  tag: keyof HTMLElementTagNameMap;
  /**
   * Whether wrap component in forwardRef
   */
  withForwardRef: boolean;
};

export type JsxTemplateArgs = {
  name: string;
  withMemo: boolean;
  withProps: boolean;
  withForwardRef: boolean;
  tag: keyof HTMLElementTagNameMap;
  className: string;
  imports: string[];
  body: string[];
  children: string[];
};
