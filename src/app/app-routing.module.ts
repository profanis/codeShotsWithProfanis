import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('../app/dashboard/dashboard.component').then(
        (it) => it.DashboardComponent
      ),
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('../app/products/products.component').then(
        (it) => it.ProductsComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
