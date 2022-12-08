import { Stack } from '@mui/system';
import { Navigator } from './components/util/nav/navigator';
import { navigationConfig } from './config/nav';
import { EnvironmentContext } from './context/environment-context';
import { useEnvironment } from './hooks/useEnvironment';

export default function App() {
  const { envs, selectedEnv, loadEnvironment, saveEnvironment } =
    useEnvironment();
  return (
    <EnvironmentContext.Provider
      value={{
        envs,
        selectedEnv,
        updateEnv: loadEnvironment,
      }}
    >
      <Stack direction='row'>
        <Navigator config={navigationConfig} />
      </Stack>
    </EnvironmentContext.Provider>
  );
}
