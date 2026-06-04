import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadComponent: () =>
      import('./features/products/product-list/product-list.component').then(
        m => m.ProductListComponent
      ),
  },
];
