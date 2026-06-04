import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatToolbar } from '@angular/material/toolbar';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductSkeletonCardComponent } from '../product-skeleton-card/product-skeleton-card.component';
import { ProductsService } from '../services/products.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { resilientResource } from '../../../shared/utils/resilient-resource';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatFormField,
    MatLabel,
    MatInput,
    ProductCardComponent,
    ProductSkeletonCardComponent,
    MatProgressSpinner,
    MatProgressBarModule,
    MatToolbar,
  ],
})
export class ProductListComponent {
  private readonly productsService = inject(ProductsService);

  protected readonly skeletons = Array.from({ length: 12 });

  // Raw signal bound to the input — updates on every keystroke for instant UI feedback
  protected readonly rawSearchTerm = signal('');

  // Debounced signal — rxResource reacts only to this to avoid a request per keystroke
  protected readonly searchTerm = toSignal(
    toObservable(this.rawSearchTerm).pipe(debounceTime(300)),
    { initialValue: '' },
  );

  private readonly _productsResource = rxResource({
    params: () => this.searchTerm(),
    stream: ({ params }) => this.productsService.getProducts(params),
  });

  protected readonly productsResource = resilientResource(
    this._productsResource,
    {
      keepValueWhileLoading: true,
      keepValueOnError: true,
    },
  );

  protected onSearchInput(searchTerm?: string): void {
    this.rawSearchTerm.set(searchTerm ?? '');
  }
}
