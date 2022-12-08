import { Navigator } from './components/util/navigator';
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
      <Navigator />
    </EnvironmentContext.Provider>
  );
}
