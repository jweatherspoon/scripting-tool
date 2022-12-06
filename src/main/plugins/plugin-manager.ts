import { readdir } from 'fs/promises';
import { injectable } from 'inversify';
import { config } from '../config/env';
import { PluginData } from '../models/plugins';

@injectable()
export class PluginManager {
  private readonly directory = config.plugins.directory;

  private readonly plugins: PluginData[] = [];

  async initialize(): Promise<void> {
    const scripts = await readdir(this.directory);
    this.plugins.push(...scripts.map((name) => ({ name })));
  }

  async getPluginData(): Promise<PluginData[]> {
    return this.plugins;
  }
}
