import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadComponent: async () =>
      (await import('./pages/products/products.component')).ProductsComponent,
  },
  {
    path: 'products/:id',
    loadComponent: async () =>
      (await import('./pages/products/product-detail/product-detail.component'))
        .ProductDetailComponent,
  },
];
