export interface ViewInfo {
  key: string;
  route: string;
  title: string;
  icon: JSX.Element;
}

export interface PageProps {
  view: ViewInfo;
}

export interface NavigationProps {
  config: ViewInfo[];
}
