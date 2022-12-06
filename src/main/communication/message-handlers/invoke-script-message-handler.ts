import { inject, injectable } from 'inversify';
import { ServiceIdentifier } from '../../config/types';
import { Channels } from '../../models/ipc';
import { PluginManager } from '../../plugins/plugin-manager';
import { MessageHandler } from '../interfaces/message-handler';

@injectable()
export class InvokeScriptMessageHandler implements MessageHandler {
  readonly id: string = Channels.InvokeScript;

  constructor(
    @inject(ServiceIdentifier.PluginManager)
    private readonly pluginManager: PluginManager
  ) {}

  async handle(data: { name: string; input: string }): Promise<any> {
    return this.pluginManager.invokePlugin(data.name, data.input);
  }
}
