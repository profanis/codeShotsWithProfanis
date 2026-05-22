import { Routes } from '@angular/router';
import {
  provideHttpClient,
  withInterceptors,
  withRequestsMadeViaParent,
} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin/home/home.component';
import { AdminProductsComponent } from './admin/products/products.component';
import { adminInterceptor } from './interceptors/admin.interceptor';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  {
    path: 'admin',
    component: AdminComponent,
    providers: [
      provideHttpClient(
        withInterceptors([adminInterceptor]),
        withRequestsMadeViaParent(),
      ),
    ],
    children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'products', component: AdminProductsComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
