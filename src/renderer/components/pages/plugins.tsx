import { PageProps } from '../../models/view-info';
import { PluginList } from '../plugins/plugin-list';

export const PluginsPage: React.FC<PageProps> = (props) => {
  return <PluginList />;
};
