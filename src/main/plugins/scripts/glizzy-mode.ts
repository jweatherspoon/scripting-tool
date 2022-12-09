import { PluginData } from '../../models/plugins';

export async function getPluginData(): Promise<PluginData> {
  return {
    name: 'GlizzyMode',
  };
}

export async function execute(): Promise<string | void> {
  console.log('glizzy mode!');
}
