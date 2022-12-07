import React from 'react';

export interface ViewInfo {
  key: string;
  route: string;
  props: PageProps;
  component: React.FC<PageProps>;
}

export interface PageProps {
  title: string;
}
