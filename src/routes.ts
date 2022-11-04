import { Routes } from '@angular/router';
import { canMatchGuardFn, isLoggedGuardFn } from './app/guards';
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
    path: 'admin',
    loadChildren: async () =>
      (await import('./app/pages/admin/admin-routing.module'))
        .AdminRoutingModule,
    canMatch: [canMatchGuardFn],
  },
  // {
  //   path: 'admin',
  //   loadComponent: async () =>
  //     (await import('./app/pages/products/products.component'))
  //       .ProductsComponent,
  // },
  {
    path: 'no-access',
    loadComponent: async () =>
      (await import('./app/pages/no-access/no-access.component'))
        .NoAccessComponent,
  },
];
