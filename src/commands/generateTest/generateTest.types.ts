import IYargsArgs from "core/IBase";

export type GenerateTestExtension = "ts" | "js" | "tsx" | "jsx";

/**
 * Add this import to {@link IYargsArgs}
 */
export type GenerateTestArgs = {
  /**
   * Test file name
   */
  name: string;
  /**
   * Test file extension
   */
  extension: GenerateTestExtension;
  /**
   * React testing library import name
   *
   * @defaultValue `@testing-library/react`;
   */
  rtlImport: string;
  /**
   * Test suite describe
   *
   * @defaultValue `name of test file`
   */
  describe: string;
};

export type TestTemplateArgs = {
  name: string;
  extension: GenerateTestExtension;
  rtlImport: string;
  describe: string;
  imports: string[];
  suiteBody: string[];
};
