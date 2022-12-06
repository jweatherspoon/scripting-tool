import { Channels } from '../../../main/models/ipc';
import { PluginData } from '../../../main/models/plugins';
import { useIpc } from '../../hooks/useIpc';
import { PluginCard } from './plugin-card';

export const PluginList = () => {
  const { response } = useIpc(Channels.GetPlugins);

  const plugins =
    response?.map((x: PluginData) => <PluginCard data={x} key={x.name} />) ??
    [];

  return <div>{plugins}</div>;
};
