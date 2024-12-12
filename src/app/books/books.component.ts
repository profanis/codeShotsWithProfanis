import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  linkedSignal,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Book, BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    CurrencyPipe,
  ],
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Favorite Category</mat-label>
      <mat-select
        [ngModel]="selectedCategory"
        (ngModelChange)="selectedCategory.set($event)"
      >
        @for (category of categories; track $index) {
          <mat-option [value]="category">{{ category }}</mat-option>
        }
      </mat-select>
    </mat-form-field>

    <!-- Books -->
    <div class="books-grid">
      @for (book of booksToDisplay(); track book) {
        <mat-card>
          <mat-card-header>
            <mat-card-title class="book-card--title">{{
              book.title
            }}</mat-card-title>
          </mat-card-header>
          <img
            mat-card-image
            src="assets/book-cover.jpg"
            [attr.alt]="book.title"
          />
          <mat-card-content class="book-card--description">
            <p>{{ book.shortDescription }}</p>
          </mat-card-content>
          <mat-card-footer>
            <p>Price: {{ book.price | currency }}</p>
            <div class="book-card--counter">
              <button (click)="decrement(book)">-</button>
              <span>{{ cart().get(book.id)?.counter || 0 }}</span>
              <button (click)="increment(book)">+</button>
            </div>
          </mat-card-footer>
        </mat-card>
      }
      @if (selectedCategory()) {
        {{ counter() }}
      }
    </div>
  `,
  styleUrl: './books.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {
  // Injections
  booksService = inject(BooksService);

  // State
  selectedCategory = signal<string>('');
  categories = this.booksService.getCategories();

  // Derived State
  booksToDisplay = computed(() => {
    return this.booksService.getBooksByCategory(this.selectedCategory());
  });
  cart = linkedSignal({
    source: () => this.selectedCategory(),
    computation: () => new Map(),
  });

  counter = linkedSignal(() => {
    return Array.from(this.cart().values()).reduce(
      (acc, book) => acc + (book.counter || 0),
      0,
    );
  });

  constructor() {
    effect(() => {
      if (this.selectedCategory()) {
        this.counter.set(0);
      }
    });
  }

  increment(book: Book) {
    const bookInCart = this.cart().get(book.id);
    if (bookInCart) {
      bookInCart.counter = (bookInCart.counter || 0) + 1;
    } else {
      this.cart().set(book.id, { ...book, counter: 1 });
    }
    this.cart.update((cart) => new Map(cart));
  }

  decrement(book: Book) {
    const bookInCart = this.cart().get(book.id);
    if (bookInCart) {
      bookInCart.counter = (bookInCart.counter || 0) - 1;
    } else {
      this.cart().set(book.id, { ...book, counter: 0 });
    }
    this.cart.update((cart) => new Map(cart));
  }
}
