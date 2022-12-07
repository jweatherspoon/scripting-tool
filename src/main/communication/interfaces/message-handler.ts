import { Message } from '../../models/messages';

export interface MessageHandler {
  id: string;
  handle(msg: Message): Promise<any>;
}
