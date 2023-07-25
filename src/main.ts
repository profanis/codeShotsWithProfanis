import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      {
        path: 'users',
        loadComponent: () => import('./app/pages/users/users.component'),
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./app/pages/dashboard/dashboard.component'),
      },
    ]),
  ],
});
