import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import { navigationConfig } from '../../config/nav';

export const Navigator = () => {
  const routes = navigationConfig.map((x) => (
    <Route key={x.key} path={x.route} element={x.component(x.props)} />
  ));

  return (
    <Router>
      <Routes>{routes}</Routes>
    </Router>
  );
};
