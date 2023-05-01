import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink, MatCardModule, AsyncPipe],
  template: `
    <h2>Products</h2>
    <ul class="products-container">
      <li
        class="products-container--product-item"
        [routerLink]="['/products', product.id]"
        *ngFor="let product of products$ | async"
      >
        <div>
          {{ product.name }}
        </div>
      </li>
    </ul>
  `,
  styles: [
    `
      .products-container {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;

        &--product-item {
          list-style: none;
          width: 150px;
          height: 200px;
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
  productService = inject(ProductsService);
  products$ = this.productService.get();
}
