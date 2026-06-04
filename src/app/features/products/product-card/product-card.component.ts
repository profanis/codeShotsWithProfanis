import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, CurrencyPipe, MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle],
})
export class ProductCardComponent {
  product = input.required<Product>();
  priority = input(false);
}
