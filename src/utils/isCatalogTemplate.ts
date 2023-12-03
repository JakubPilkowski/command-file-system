import { ICatalogTemplate, ITemplate } from "core/ITemplateV2";

export default function isCatalogTemplate(
  template: ITemplate
): template is ICatalogTemplate {
  if (Array.isArray((template as ICatalogTemplate)?.templates)) {
    return true;
  }

  return false;
}
