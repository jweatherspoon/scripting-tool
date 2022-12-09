import { Icons } from 'renderer/models/icons';
import { ViewInfo } from '../models/view-info';

export const navigationConfig: ViewInfo[] = [
  {
    key: 'plugins',
    route: '/',
    title: 'Plugins',
    icon: Icons.Plugin,
  },
  {
    key: 'env-config',
    route: '/env',
    title: 'Environments',
    icon: Icons.Settings,
  },
];
