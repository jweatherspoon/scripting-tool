import { PluginData } from '../../../main/models/plugins';
import { usePlugin } from '../../hooks/usePlugin';

export const PluginCard: React.FC<PluginCardProps> = ({ data }) => {
  const { input, setInput, output, invoke } = usePlugin(data.name);

  return (
    <div>
      {data.name}
      <button onClick={invoke} type="button">
        Invoke
      </button>
    </div>
  );
};

export interface PluginCardProps {
  data: PluginData;
}
