import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

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
      You are seeing the product with id: <span>{{ productId }}</span>
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
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  productId: number = 0;

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      if (+params['id'] > 10) {
        this.router.navigate(['products']);
      }
      this.productId = params['id'];
    });
  }

  navigateBackToProducts() {
    this.router.navigate(['products']);
  }
}
