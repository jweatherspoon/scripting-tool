import { inject, injectable } from 'inversify';
import { Channels } from '../../models/ipc';
import { EnvironmentMessage } from '../../models/messages';
import { Environment } from '../../plugins/environment';
import { MessageHandler } from '../interfaces/message-handler';

@injectable()
export class EnvironmentMessageHandler implements MessageHandler {
  id: string = Channels.Environment;

  constructor(@inject(Environment) private readonly env: Environment) {}

  async handle(msg: EnvironmentMessage): Promise<any> {
    switch (msg.action) {
      case 'get':
        return this.get(msg);
      case 'save':
        this.save(msg);
        break;
      case 'load':
        this.load(msg);
        break;
      default:
        break;
    }

    return Promise.resolve();
  }

  private get(msg: EnvironmentMessage): any {
    return this.env.get(msg.payload?.key ?? '');
  }

  private save(msg: EnvironmentMessage): void {
    if (msg.payload?.config) {
      msg.payload.config.forEach((e: { key: string; value: string }) => {
        this.env.set(e.key, e.value);
      });
    }
  }

  private load(msg: EnvironmentMessage): void {
    if (msg.payload?.name) {
      this.env.loadEnvironment(msg.payload.name);
    }
  }
}
