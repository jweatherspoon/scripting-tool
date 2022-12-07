import { ViewInfo } from '../models/view-info';

import { PluginsPage } from '../components/pages/plugins';

export const navigationConfig: ViewInfo[] = [
  {
    key: 'plugins',
    route: '/',
    props: {
      title: 'Plugins',
    },
    component: (props) => <PluginsPage {...props} />,
  },
];
