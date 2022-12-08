export interface EnvironmentInfo {
  name: string;
}

export interface EnvironmentContextInfo {
  envs: EnvironmentInfo[];
  updateEnv: (name: string) => void;
  selectedEnv?: EnvironmentInfo;
}
