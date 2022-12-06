import { ipcMain } from 'electron';
import { inject, injectable } from 'inversify';
import { ServiceIdentifier } from '../config/types';
import { Channels } from '../models/ipc';
import { MessageHandlerFactory } from './message-handlers';

@injectable()
export class Ipc {
  constructor(
    @inject(ServiceIdentifier.MessageHandlerFactory)
    private readonly messageHandlerFactory: MessageHandlerFactory
  ) {}

  initialize() {
    const channels = [...Object.values(Channels)];
    channels.forEach((channel) => {
      ipcMain.handle(channel, (_event, data) =>
        this.handleMessage(channel, data)
      );
    });
  }

  private async handleMessage(
    channel: string,
    data: { args: any }
  ): Promise<string> {
    let result = null;
    const handler = this.messageHandlerFactory.getHandler(channel);
    if (handler) {
      result = await handler.handle(data);
    }

    const json = JSON.stringify(result ?? null);
    return json;
  }
}
