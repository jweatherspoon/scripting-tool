import React from 'react';
import { EnvironmentContextInfo } from '../models/env-config';

export const EnvironmentContext = React.createContext<EnvironmentContextInfo>({
  envs: [],
  updateEnv: () => {},
});
