import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
  ActivatedRouteSnapshot,
  provideRouter,
  Routes,
  withComponentInputBinding,
} from '@angular/router';
import { ProductListComponent } from './app/product-list/product-list.component';
import { ProductDetailsComponent } from './app/product-details/product-details.component';
import { StyleComponent } from './app/product-details/style/style.component';
import { ColorComponent } from './app/product-details/color/color.component';
import { SeasonComponent } from './app/product-details/season/season.component';
import { SaleComponent } from './app/product-details/sale/sale.component';
import { inject } from '@angular/core';
import { ProductsApiService } from './app/products.api';

const routes: Routes = [
  { path: 'products', component: ProductListComponent },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
    // resolve: {
    //   product: (route: ActivatedRouteSnapshot) => {
    //     const productsService = inject(ProductsApiService);
    //     const productId = route.params.id;
    //     return productsService.getProduct(productId);
    //   },
    // },
    children: [
      // Using a service
      { path: 'sale', component: SaleComponent },
      // Using resolver
      { path: 'season', component: SeasonComponent },
      // Using custom injection token
      { path: 'style', component: StyleComponent },
      // Using ROUTER_OUTLET_DATA
      { path: 'color', component: ColorComponent },
    ],
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, withComponentInputBinding())],
});
