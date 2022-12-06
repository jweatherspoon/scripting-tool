import { GetPluginsMessageHandler } from './get-plugins';
import { InvokeScriptMessageHandler } from './invoke-script-message-handler';

export { MessageHandlerFactory } from './message-handler-factory';

export const messageHandlers = [
  InvokeScriptMessageHandler,
  GetPluginsMessageHandler,
];
