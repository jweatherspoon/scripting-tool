import { useState } from 'react';
import { Channels } from '../../main/models/ipc';
import { EnvironmentInfo } from '../models/env-config';
import { useIpc } from './useIpc';

export const useEnvironment = () => {
  const [envs, setEnvs] = useState<EnvironmentInfo[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { response } = useIpc(Channels.Environment, { action: 'get-all' });

  const selectedEnv = envs[selectedIndex];

  if (Array.isArray(response)) {
    setEnvs([...response]);
  }

  const loadEnvironment = async (name: string) => {
    await window.electron.ipcRenderer.sendAsync(Channels.Environment, {
      action: 'load',
      payload: { name },
    });

    setSelectedIndex(envs.findIndex((x) => x.name === name));
  };

  const saveEnvironment = async () => {
    await window.electron.ipcRenderer.sendAsync(Channels.Environment, {
      action: 'save',
    });
  };

  return { envs, selectedEnv, loadEnvironment, saveEnvironment };
};
