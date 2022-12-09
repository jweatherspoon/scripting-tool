import { PluginData } from '../../models/plugins';

export async function getPluginData(): Promise<PluginData> {
  return {
    name: 'BingoTown',
  };
}

export async function execute(): Promise<string | void> {
  console.log('bingo town!');
  return 'bingo town!';
}
