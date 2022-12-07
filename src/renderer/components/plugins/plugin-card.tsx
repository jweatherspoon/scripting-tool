import { PluginData } from '../../../main/models/plugins';
import { usePlugin } from '../../hooks/usePlugin';

export const PluginCard: React.FC<PluginCardProps> = ({
  data,
}: PluginCardProps) => {
  const { input, setInput, output, invoke } = usePlugin(data.name);

  return (
    <div>
      <button onClick={invoke} type="button">
        {data.name}
      </button>
    </div>
  );
};

export interface PluginCardProps {
  data: PluginData;
}
