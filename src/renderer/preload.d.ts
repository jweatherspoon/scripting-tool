import { Channels } from 'main/preload';

declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        sendMessage(channel: Channels, args: unknown[]): void;
        on(
          channel: Channels,
          func: (...args: unknown[]) => void
        ): (() => void) | undefined;
        once(channel: Channels, func: (...args: unknown[]) => void): void;
        sendAsync(channel: Channels, ...args: unknown[]): Promise<unknown>;
        invokeScript<TArg, TReturn>(name: string, args: TArg): Promise<TReturn>;
      };
    };
  }
}

export {};
