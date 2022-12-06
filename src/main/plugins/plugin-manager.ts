import { readdir } from 'fs/promises';
import { injectable } from 'inversify';
import { config } from '../config/env';
import { PluginData } from '../models/plugins';

@injectable()
export class PluginManager {
  private readonly directory = config.plugins.directory;

  private readonly filenames: string[] = [];

  private readonly plugins: Map<string, PluginData> = new Map();

  async initialize(): Promise<void> {
    const filenames = await readdir(this.directory);
    this.filenames.push(...filenames);
  }

  async getPluginData(): Promise<PluginData[]> {
    const promises = this.filenames.map((x) => this.getPluginDataInternal(x));
    return Promise.all(promises);
  }

  async getPluginDataInternal(filename: string): Promise<PluginData> {
    const data = this.plugins.get(filename);
    if (data) {
      return data;
    }

    const { getPluginData } = await import(`${this.directory}/${filename}`);
    const pluginData = await getPluginData();
    this.plugins.set(filename, pluginData);
    return pluginData;
  }
}
