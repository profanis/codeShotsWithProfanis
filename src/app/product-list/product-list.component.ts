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
import { ProductsApiService } from '../products.api'
import { inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  providers: [ProductsApiService],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  private productsApi = inject(ProductsApiService);
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

  products = toSignal(this.productsApi.getProducts());
}
