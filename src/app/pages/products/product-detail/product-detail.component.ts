import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <h2>Product Detail</h2>
    <p class="back-to-products">
      <a data-test="back-to-products" (click)="navigateBackToProducts()"
        >&larr; Back to products</a
      >
    </p>
    <div class="product-detail-container">
      You are seeing the product with id: <span>{{ productId$ | async }}</span>
    </div>
  `,
  styles: [
    `
      .back-to-products {
        cursor: pointer;
      }

      .product-detail-container {
        border: 1px solid #ccc;
        height: 200px;
        padding: 16px;

        span {
          font-weight: bold;
        }
      }
    `,
  ],
})
export class ProductDetailComponent {
  productId$ = inject(ActivatedRoute).params.pipe(map((params) => params.id));
  private location = inject(Location);

  navigateBackToProducts() {
    this.location.back();
  }
}
