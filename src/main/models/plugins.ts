import { Environment } from '../plugins/environment';

export interface PluginDefinition {
  getPluginData(): Promise<PluginData>;
  execute(env: Environment, input: string): Promise<string | void>;
}

export interface PluginData {
  name: string;
}
