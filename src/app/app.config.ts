import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { UsersRouterModule } from './pages/users/users.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      {
        path: 'products',
        component: ProductsComponent,
      },
    ]),
    importProvidersFrom(UsersRouterModule),
  ],
};
