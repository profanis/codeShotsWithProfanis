import {
  afterRenderEffect,
  AfterViewInit,
  Component,
  effect,
  ElementRef,
  signal,
  viewChildren,
  viewChild,
  afterRender,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products: WritableSignal<{ title: string }[]> = signal(
    Array.from({ length: 20 }, (_, i) => ({ title: `Product ${i + 1}` })),
  );

  readonly hiddenSection = viewChild('hiddenSection', { read: ElementRef });
  hiddenSectionIsVisible = signal(false);

  constructor() {
    afterRenderEffect({
      earlyRead: () => {
        return this.hiddenSection()?.nativeElement.offsetTop || 0;
      },
      write: (scrollingPosition) => {
        window.scrollBy({ behavior: 'smooth', top: scrollingPosition() });
      },
    });
  }

  showHiddenSection() {
    this.hiddenSectionIsVisible.set(true);
  }
}
