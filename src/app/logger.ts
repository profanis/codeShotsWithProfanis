import { InjectionToken } from '@angular/core';
export interface Logger {
  log: (value: string) => void;
  info: (value: string) => void;
}

export const LOGGER = new InjectionToken<Logger>('logger', {
  factory: () => ({
    log: (value: string) => console.log(`DEFAULT ${value}`),
    info: (value: string) => console.info(`DEFAULT ${value}`),
  }),
});
