import path from "path";
import * as fs from "fs";

import { PluginManager } from "core/PluginManager.js";
import TransformerPlugin from "types/plugins/Transformer.js";

export default class Cfs {
  private pluginManager: PluginManager;

  constructor(pluginManager: PluginManager) {
    this.pluginManager = pluginManager;
  }

  private composeTransformers(...transformers: TransformerPlugin[]) {
    return (template: string, variables: Record<string, any>) => {
      return transformers.reduceRight<string>((acc, fn) => {
        return fn.transformTemplate(acc, variables);
      }, template);
    };
  }

  transformTemplate(template: string, variables: Record<string, any>) {
    const plugins: TransformerPlugin[] = [];

    this.pluginManager.getPlugins().forEach((_, key) => {
      plugins.push(this.pluginManager.load<TransformerPlugin>(key));
    });

    return this.composeTransformers(...plugins)(template, variables);
  }

  // not sure if this function should be there
  createFile(filePath: string, transformedTemplate: string): void {
    const parsedPath = path.parse(filePath);

    /**
     * Create directory if not exists
     *  */
    if (parsedPath.dir) {
      fs.mkdirSync(parsedPath.dir, { recursive: true });
    }

    // Write file with given template
    fs.writeFileSync(filePath, transformedTemplate);
  }
}
