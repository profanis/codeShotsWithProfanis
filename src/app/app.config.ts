import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideSignalFormsConfig } from '@angular/forms/signals';
import { NG_STATUS_CLASSES } from '@angular/forms/signals/compat';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({
      eventCoalescing: true,
    }),
    provideHttpClient(),
    provideSignalFormsConfig({
      classes: {
        ...NG_STATUS_CLASSES,
        'my-ng-invalid': (control) => control.state().invalid(),
      },
    }),
  ],
};
