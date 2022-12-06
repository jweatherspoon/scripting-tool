export interface MessageHandler {
  id: string;
  handle(msg: any): Promise<any>;
}
