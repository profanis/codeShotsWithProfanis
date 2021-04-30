import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class LocalLoggerService implements Logger {
  log(value: string) {
    console.log(`LocalLoggerService ${value}`);
  }
  info(value: string) {
    console.info(`LocalLoggerService ${value}`);
  }
}
