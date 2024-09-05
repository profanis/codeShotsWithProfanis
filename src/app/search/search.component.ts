import { Component, inject, signal, Signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { UsersService } from '../services/users.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { EMPTY, switchMap, tap } from 'rxjs';
import { ItemCardComponent } from '../components/item-card/item-card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ItemCardComponent],
  template: `
    <div class="search-container">
      @for (item of results(); track $index) {
        <app-item-card
          [title]="item.name"
          [subtitle]="item.description"
          [content]="item.description"
        />
      }
    </div>
  `,
  styles: `
    .search-container {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }
  `,
})
export class SearchComponent {
  constructor() {
    console.log('SearchComponent created');
  }
  private queryParams = inject(ActivatedRoute).queryParams;
  private productsService = inject(ProductsService);
  private usersService = inject(UsersService);
  results = toSignal(
    this.queryParams.pipe(
      switchMap((queryParams) => {
        const query = queryParams['q'];
        const type = queryParams['type'];
        switch (type) {
          case 'products':
            return this.productsService.get();
          case 'users':
            return this.usersService.get();
          default:
            return EMPTY;
        }
      }),
    ),
  );
}
