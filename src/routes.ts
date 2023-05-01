import { Routes } from '@angular/router';
import { isLoggedGuardFn } from './app/guards';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: async () =>
      (await import('./app/pages/products/products.component'))
        .ProductsComponent,
    canActivate: [isLoggedGuardFn],
  },
  {
    path: 'products/:id',
    loadComponent: async () =>
      (
        await import(
          './app/pages/products/product-detail/product-detail.component'
        )
      ).ProductDetailComponent,
  },
  {
    path: 'no-access',
    loadComponent: async () =>
      (await import('./app/pages/no-access/no-access.component'))
        .NoAccessComponent,
  },
];
