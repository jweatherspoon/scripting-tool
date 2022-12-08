import { PowerOutlined } from '@mui/icons-material';
import { ViewInfo } from '../models/view-info';

export const navigationConfig: ViewInfo[] = [
  {
    key: 'plugins',
    route: '/',
    title: 'Plugins',
    icon: <PowerOutlined />,
  },
];
