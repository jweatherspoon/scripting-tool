import { Channels } from '../../../main/models/ipc';
import { useIpc } from '../../hooks/useIpc';

export const PluginList = () => {
  const { response } = useIpc(Channels.GetPlugins);

  const plugins = response?.map((x) => x.name) ?? [];
  return (
    <div>
      {plugins.map((x: string) => (
        <p key={x}>{x}</p>
      ))}
    </div>
  );
};
