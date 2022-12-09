import { Icons } from './icons';

export interface ViewInfo {
  key: string;
  route: string;
  title: string;
  icon: Icons;
}

export interface PageProps {
  view: ViewInfo;
}

export interface NavigationProps {
  config: ViewInfo[];
}
