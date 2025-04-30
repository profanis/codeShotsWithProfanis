import { Component, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  title = input.required<string>();
  id = input.required<number>();

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate(['/products', this.id()]);
  }
}
