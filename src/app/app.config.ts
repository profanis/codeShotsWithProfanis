import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withDebugTracing,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withDebugTracing(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
      })
    ),
  ],
};
