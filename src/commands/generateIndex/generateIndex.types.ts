import IYargsArgs from "core/IBase";

export type IndexExtension = "js" | "ts";

/**
 * Add this import to {@link IYargsArgs}
 */
export type GenerateIndexArgs = {
  extension: IndexExtension;
  /**
   * Default export name in CamelCase
   */
  name: string;
  /**
   * Whether return exporting types wrapper
   */
  withTypeExports: boolean;

  /**
   * Whether return named exports wrapper
   */
  withNamedExports: boolean;
};

export type IndexTemplateArgs = {
  name: string;
  withTypeExports: boolean;
  withNamedExports: boolean;
  namedExports: string[];
  imports: string[];
  typeExports: string[];
};
