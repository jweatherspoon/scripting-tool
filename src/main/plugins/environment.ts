import { injectable } from 'inversify';
import { EnvironmentConfig } from '../models/environment';

@injectable()
export class Environment {
  private environment?: EnvironmentConfig;

  get(key: string): any {
    return this.environment?.config.get(key);
  }

  set(key: string, value: any) {
    this.environment?.config.set(key, value);
  }

  loadEnvironment(name: string): void {
    this.environment = {
      name,
      config: new Map(),
    };
  }
}
