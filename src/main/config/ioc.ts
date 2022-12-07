import { Container } from 'inversify';
import { MessageHandler } from '../communication/interfaces/message-handler';
import { Ipc } from '../communication/ipc';
import {
  MessageHandlerFactory,
  messageHandlers,
} from '../communication/message-handlers';
import { Environment } from '../plugins/environment';
import { PluginManager } from '../plugins/plugin-manager';
import { Logger } from '../util';
import { ServiceIdentifier } from './types';

const iocContainer = new Container();

iocContainer.bind(Environment).toSelf().inSingletonScope();
iocContainer.bind(ServiceIdentifier.Logger).to(Logger).inSingletonScope();
iocContainer.bind(ServiceIdentifier.Ipc).to(Ipc).inSingletonScope();

iocContainer
  .bind(ServiceIdentifier.PluginManager)
  .to(PluginManager)
  .inSingletonScope();

iocContainer
  .bind(ServiceIdentifier.MessageHandlerFactory)
  .to(MessageHandlerFactory)
  .inSingletonScope();

messageHandlers.forEach((messageHandler) =>
  iocContainer
    .bind<MessageHandler>(ServiceIdentifier.MessageHandler)
    .to(messageHandler)
    .inSingletonScope()
);

export { iocContainer };
