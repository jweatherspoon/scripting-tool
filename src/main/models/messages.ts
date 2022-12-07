export interface Message {
  id: string;
}

export interface InvokePluginMessage extends Message {
  name: string;
  input: string;
}

export interface EnvironmentMessage extends Message {
  action: 'get' | 'save' | 'load';
  payload?: Record<string, any>;
}
