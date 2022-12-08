import { Environment } from '../plugins/environment';

export interface PluginDefinition {
  getPluginData(): Promise<PluginData>;
  execute(
    context: PluginExecutionEnvironment,
    input: string
  ): Promise<string | void>;
}

export interface PluginData {
  name: string;
}

export interface PluginExecutionEnvironment {
  env: Environment;
}
