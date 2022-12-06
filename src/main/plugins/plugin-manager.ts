import { readdir } from 'fs/promises';
import { injectable } from 'inversify';
import { config } from '../config/env';
import { PluginData, PluginDefinition } from '../models/plugins';

@injectable()
export class PluginManager {
  private readonly directory = config.plugins.directory;

  private readonly plugins: Map<
    string,
    { filename: string; data: PluginData }
  > = new Map();

  async initialize(): Promise<void> {
    const filenames = await readdir(this.directory);

    // load all the plugins
    const promises = filenames.map((x) => this.getPluginDataInternal(x));
    await Promise.all(promises);
  }

  async getPluginData(): Promise<PluginData[]> {
    return [...this.plugins.values()].map((x) => x.data);
  }

  async invokePlugin(name: string, input: string): Promise<string | void> {
    const pluginInfo = this.plugins.get(name);
    if (pluginInfo) {
      const plugin: PluginDefinition = await import(
        `${this.directory}/${pluginInfo.filename}`
      );

      if (plugin) {
        return plugin.execute(input);
      }
    }

    return Promise.resolve();
  }

  private async getPluginDataInternal(filename: string): Promise<PluginData> {
    const plugin: PluginDefinition = await import(
      `${this.directory}/${filename}`
    );

    const pluginData = await plugin.getPluginData();
    this.plugins.set(pluginData.name, { filename, data: pluginData });

    return pluginData;
  }
}
