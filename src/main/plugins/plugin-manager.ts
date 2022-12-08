import { readdir } from 'fs/promises';
import { inject, injectable } from 'inversify';
import { config } from '../config/env';
import { ServiceIdentifier } from '../config/types';
import {
  PluginData,
  PluginDefinition,
  PluginExecutionEnvironment,
} from '../models/plugins';
import { Logger } from '../util';
import { Environment } from './environment';

function validatePlugin(plugin: PluginDefinition): boolean {
  return !!plugin.execute && !!plugin.getPluginData;
}

@injectable()
export class PluginManager {
  private readonly directory = config.plugins.directory;

  private readonly plugins: Map<
    string,
    { filename: string; data: PluginData }
  > = new Map();

  constructor(
    @inject(ServiceIdentifier.Logger) private readonly logger: Logger,
    @inject(Environment) private readonly env: Environment
  ) {}

  async initialize(): Promise<void> {
    const filenames = await readdir(this.directory);

    // load all the plugins
    const promises = filenames.map((x) => this.getPluginDataInternal(x));
    await Promise.all(promises);
  }

  async getPluginData(): Promise<PluginData[]> {
    return [...this.plugins.values()]
      .sort((a, b) => (a.data.name < b.data.name ? -1 : 1))
      .map((x) => x.data);
  }

  async invokePlugin(name: string, input: string): Promise<string | void> {
    const pluginInfo = this.plugins.get(name);
    if (pluginInfo) {
      const plugin: PluginDefinition = await import(
        `${this.directory}/${pluginInfo.filename}`
      );

      if (plugin) {
        return plugin.execute(this.getContext(), input);
      }
    }

    return Promise.resolve();
  }

  private async getPluginDataInternal(filename: string): Promise<void> {
    try {
      const plugin: PluginDefinition = await import(
        `${this.directory}/${filename}`
      );

      if (validatePlugin(plugin)) {
        const pluginData = await plugin.getPluginData();
        this.plugins.set(pluginData.name, { filename, data: pluginData });
      }
    } catch (e) {
      this.logger.error('Failed to get plugin data', e);
    }
  }

  private getContext(): PluginExecutionEnvironment {
    return {
      env: this.env,
    };
  }
}
