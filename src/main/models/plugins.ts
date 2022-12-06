export interface PluginDefinition {
  getPluginData(): Promise<PluginData>;
  execute(input: string): Promise<string | void>;
}

export interface PluginData {
  name: string;
}
