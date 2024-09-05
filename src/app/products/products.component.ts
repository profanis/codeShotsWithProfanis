import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { ItemCardComponent } from '../components/item-card/item-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, RouterLink, NgIf, ItemCardComponent],
  template: `
    <h2>Products</h2>
    <div class="products-container">
      @for (product of products(); track product.id) {
        <app-item-card
          [routerLink]="['/products', product.id]"
          [content]="product.name"
        />
      }
    </div>
  `,
  styles: [
    `
      .products-container {
        display: flex;
        gap: 16px;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class ProductsComponent {
  products = toSignal(inject(ProductsService).get());
}
