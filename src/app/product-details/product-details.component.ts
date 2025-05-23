import {
  Component,
  effect,
  Inject,
  inject,
  InjectionToken,
  input,
  ResourceRef,
} from '@angular/core';
import { Product, ProductsApiService } from '../products.api';
import { JsonPipe } from '@angular/common';
import {
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { rxResource } from '@angular/core/rxjs-interop';
import { ProductsState } from '../product.state';

export const PRODUCT = new InjectionToken<ResourceRef<Product | undefined>>(
  'product',
);

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    RouterLinkActive,
    JsonPipe,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
  id = input.required<number>();

  private productsService = inject(ProductsApiService);
  // productFromResolver = inject(ActivatedRoute).snapshot.data.product;
  // productState = inject(ProductsState);

  productResource = rxResource({
    request: () => this.id,
    loader: (params) => this.productsService.getProduct(params.request()),
  });

  // constructor() {
  //   effect(() => {
  //     const product = this.productResource.value();
  //     if (product) {
  //       this.productState.setProduct(product);
  //     }
  //   });
  // }
}
