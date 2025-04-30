import {
  Component,
  effect,
  inject,
  InjectionToken,
  input,
  Input,
  OnInit,
  Provider,
  ResourceRef,
  Signal,
  untracked,
} from '@angular/core';
import { Product, ProductsApiService } from '../products.api';
import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Observable, of, tap } from 'rxjs';
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

export const ACTIVATED_PRODUCT_DETAILS =
  new InjectionToken<ProductDetailsComponent>('ProductDetailsComponent');

export const ACTIVATED_PRODUCT = new InjectionToken<
  ResourceRef<Product | undefined>
>('activatedProduct');

export function provideProduct(): Provider {
  return {
    provide: ACTIVATED_PRODUCT,
    useFactory: (productResource: ProductDetailsComponent) => {
      return productResource.productResource;
    },
    deps: [ProductDetailsComponent],
  };
}

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
  providers: [
    // {
    //   provide: ACTIVATED_PRODUCT,
    //   useFactory: (productResource: ProductDetailsComponent) => {
    //     return productResource.productResource;
    //   },
    //   deps: [ProductDetailsComponent],
    // },
    {
      provide: ACTIVATED_PRODUCT_DETAILS,
      useExisting: ProductDetailsComponent,
    },
  ],
})
export class ProductDetailsComponent {
  id = input.required<number>();
  private productsService = inject(ProductsApiService);
  productFromResolver = inject(ActivatedRoute).snapshot.data.product;
  productState = inject(ProductsState);

  productResource = rxResource({
    request: () => this.id,
    loader: (params) => this.productsService.getProduct(params.request()),
  });

  constructor() {
    effect(() => {
      const product = this.productResource.value();
      if (product) {
        this.productState.setProduct(product);
      }
    });
  }
}
