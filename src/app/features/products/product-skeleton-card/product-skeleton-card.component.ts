import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';

@Component({
  selector: 'app-product-skeleton-card',
  templateUrl: './product-skeleton-card.component.html',
  styleUrl: './product-skeleton-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatCard, MatCardContent, MatCardHeader],
})
export class ProductSkeletonCardComponent {}
