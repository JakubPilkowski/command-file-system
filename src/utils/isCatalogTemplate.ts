import { ICatalogTemplate, ITemplate } from "../types/external.js";

export default function isCatalogTemplate(
  template: ITemplate
): template is ICatalogTemplate {
  if (Array.isArray((template as ICatalogTemplate)?.templates)) {
    return true;
  }

  return false;
}
