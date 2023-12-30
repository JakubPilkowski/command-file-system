import { Input } from "./Input";
import { Output } from "./Output";

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
