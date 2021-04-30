import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements Logger {
  log(value: string) {
    console.log(`LoggerService ${value}`);
  }

  info(value: string) {
    console.info(`LoggerService ${value}`);
  }
}
