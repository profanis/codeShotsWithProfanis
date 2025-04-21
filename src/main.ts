import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { ProductListComponent } from './app/product-list/product-list.component';

const routes: Routes = [{ path: 'products', component: ProductListComponent }];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
