import type {
  ICatalogTemplate,
  IFileTemplate,
  ITemplate,
} from "../types/external.js";

export default function isFileTemplate(
  template: ITemplate
): template is IFileTemplate {
  if (Array.isArray((template as ICatalogTemplate)?.templates)) {
    return false;
  }

  return true;
}
