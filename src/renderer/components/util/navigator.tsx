import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { navigationConfig } from '../../config/nav';
import { PageContainer } from './page-container';

export const Navigator = () => {
  const routes = navigationConfig.map((x) => (
    <Route key={x.key} path={x.route} element={<PageContainer view={x} />} />
  ));

  return (
    <Router>
      <Routes>{routes}</Routes>
    </Router>
  );
};
