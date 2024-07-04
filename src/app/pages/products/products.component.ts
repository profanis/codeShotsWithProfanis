import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { RestoreScrollPositionDirective } from 'src/app/directives/restore-scroll-position.directive';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink, RestoreScrollPositionDirective, NgIf],
  template: `
    <h2>Products</h2>
    @if (products(); as products) {
      <ul restoreScrollPosition class="products-container">
        @for (product of products; track product.id) {
          <li
            class="products-container--product-item"
            [routerLink]="['/products', product.id]"
          >
            <div>
              {{ product.name }}
            </div>
          </li>
        }
      </ul>
    }
  `,
  styles: [
    `
      .products-container {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;

        &--product-item {
          list-style: none;
          width: 250px;
          height: 300px;
          border: 1px solid #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
      }
    `,
  ],
})
export class ProductsComponent {
  products = toSignal(inject(ProductsService).get());
}
