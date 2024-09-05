import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-products-results',
  standalone: true,
  imports: [MatCardModule],
  template: `@for (item of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; track $index) {
    <mat-card>
      <mat-card-header>
        <mat-card-title>Product {{ $index }}</mat-card-title>
        <mat-card-subtitle>Product {{ $index }} description</mat-card-subtitle>
      </mat-card-header>
      <img
        mat-card-image
        src="https://via.placeholder.com/150"
        alt="Product 1"
      />
      <mat-card-content>
        <p>Product {{ $index }} content</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-button>Buy</button>
      </mat-card-actions>
    </mat-card>
  }`,
  styles: ``,
})
export class ProductsResultsComponent {}
