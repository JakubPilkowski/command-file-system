import IYargsArgs from "core/IBase";

export type StylesExtension = "css" | "scss" | "module.css";

/**
 * Add this import to {@link IYargsArgs}
 */
export type GenerateStylesArgs = {
  /**
   * Default export name
   *
   * kebab-case for {@link extension} equals `css|scss`
   *
   * PascalCase for {@link extension} eqauls `module.css`
   */
  name: string;

  extension: StylesExtension;
};

export type StylesTemplateArgs = {
  name: string;
  imports: string[];
  styles: string[];
};
