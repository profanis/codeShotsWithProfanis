import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { RestoreScrollPositionDirective } from 'src/app/directives/restore-scroll-position.directive';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    MatCardModule,
    AsyncPipe,
    RestoreScrollPositionDirective,
    NgIf,
  ],
  template: `
    <h2>Products</h2>
    <ng-container *ngIf="products$ | async as products">
      <ul restoreScrollPosition class="products-container">
        <li
          class="products-container--product-item"
          [routerLink]="['/products', product.id]"
          *ngFor="let product of products"
        >
          <div>
            {{ product.name }}
          </div>
        </li>
      </ul>
    </ng-container>
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
  productService = inject(ProductsService);
  products$ = this.productService.get();
}
