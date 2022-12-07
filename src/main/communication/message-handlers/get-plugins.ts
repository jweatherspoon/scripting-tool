import { inject, injectable } from 'inversify';
import { ServiceIdentifier } from '../../config/types';
import { Channels } from '../../models/ipc';
import { PluginManager } from '../../plugins/plugin-manager';
import { MessageHandler } from '../interfaces/message-handler';

@injectable()
export class GetPluginsMessageHandler implements MessageHandler {
  id: string = Channels.GetPlugins;

  constructor(
    @inject(ServiceIdentifier.PluginManager)
    private readonly pluginManager: PluginManager
  ) {}

  async handle(): Promise<any> {
    return this.pluginManager.getPluginData();
  }
}
