import { PowerOutlined, Settings } from '@mui/icons-material';
import { ViewInfo } from '../models/view-info';

export const navigationConfig: ViewInfo[] = [
  {
    key: 'plugins',
    route: '/',
    title: 'Plugins',
    icon: <PowerOutlined />,
  },
  {
    key: 'env-config',
    route: '/env',
    title: 'Environments',
    icon: <Settings />,
  },
];
