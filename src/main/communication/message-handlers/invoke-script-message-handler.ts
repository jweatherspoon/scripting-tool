import { injectable } from 'inversify';
import { Channels } from '../../models/ipc';
import { MessageHandler } from '../interfaces/message-handler';

@injectable()
export class InvokeScriptMessageHandler implements MessageHandler {
  readonly id: string = Channels.InvokeScript;

  async handle(_msg: any): Promise<any> {}
}
