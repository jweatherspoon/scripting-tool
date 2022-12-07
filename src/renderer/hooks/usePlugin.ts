import { useState } from 'react';
import { Channels } from '../../main/models/ipc';

export const usePlugin = (name: string) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const invoke = async () => {
    if (!name) {
      return;
    }

    const response = await window.electron.ipcRenderer.sendAsync(
      Channels.InvokeScript,
      { name, input }
    );

    setOutput(response as string);
  };

  return { input, setInput, output, invoke };
};
