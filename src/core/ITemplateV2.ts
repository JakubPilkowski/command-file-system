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
  templateAlias?: string;
  /**
   * command description
   */
  description?: string;
  /**
   * template
   */
  template: string;
  /**
   * name of file
   */
  name: string | ((params: Output) => string);
  // TODO: params can either be positional or option
  // if option then default value should be implemented
  // TODO: description
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
