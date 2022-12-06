import { useEffect, useState } from 'react';
import { Channels } from '../../main/models/ipc';

export const useIpc = (channel: Channels, args?: unknown[]) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState<any>(undefined);

  useEffect(() => {
    (async () => {
      const result = await window.electron.ipcRenderer.sendAsync(channel, args);

      setLoading(false);
      setResponse(result);
    })();
  }, [channel, args]);

  return { loading, response };
};
