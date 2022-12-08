import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { NavigationProps } from '../../../models/view-info';
import { NavigationPane } from './navigation-pane';
import { PageContainer } from '../page-container';

export const Navigator: React.FC<NavigationProps> = ({
  config,
}: NavigationProps) => {
  const routes = config.map((x) => (
    <Route key={x.key} path={x.route} element={<PageContainer view={x} />} />
  ));

  return (
    <Router>
      <>
        <NavigationPane config={config} />
        <Routes>{routes}</Routes>
      </>
    </Router>
  );
};
