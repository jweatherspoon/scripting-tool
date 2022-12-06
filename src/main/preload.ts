import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';
import { nanoid } from 'nanoid';
import { Channels } from './models/ipc';

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendMessage(channel: Channels, args: unknown[]) {
      ipcRenderer.send(channel, args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
    async sendAsync(channel: Channels, ...args: unknown[]): Promise<unknown> {
      const id = nanoid();
      const json = await ipcRenderer.invoke(channel, { id, args });
      return JSON.parse(json);
    },
    async invokeScript<TArg, TReturn>(
      name: string,
      args: TArg
    ): Promise<TReturn> {
      const id = nanoid();
      const result = new Promise<TReturn>((resolve) => {
        ipcRenderer.once(Channels.Subscription, (_event, data) =>
          resolve(data.result)
        );
      });

      ipcRenderer.send(Channels.InvokeScript, { id, name, args });
      return result;
    },
  },
});
