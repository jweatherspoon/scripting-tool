import { injectable } from 'inversify';

enum Severity {
  Info = 'INFO',
  Warn = 'WARN',
  Error = 'ERROR',
  Debug = 'DEBUG',
}

@injectable()
export class Logger {
  info(msg: string, ...data: any) {
    this.log(Severity.Info, msg, ...data);
  }

  warn(msg: string, ...data: any) {
    this.log(Severity.Warn, msg, ...data);
  }

  error(msg: string, ...data: any) {
    this.log(Severity.Error, msg, ...data);
  }

  debug(msg: string, ...data: any) {
    this.log(Severity.Debug, msg, ...data);
  }

  log(severity: Severity, msg: string, ...data: any) {
    const timestamp = new Date();
    const message = `[${timestamp}] - [${severity}] - ${msg}`;
    console.log(message, ...data);
  }
}
