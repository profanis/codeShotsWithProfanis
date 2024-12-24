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
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Book, BooksService } from '../books.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-books',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCardModule,
    CurrencyPipe,
  ],
  template: `
    <mat-form-field appearance="fill">
      <mat-label>Favorite Category</mat-label>
      <mat-select [(ngModel)]="selectedCategory">
        @for (category of categories(); track $index) {
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
            height="200px"
          />
          <mat-card-content class="book-card--description">
            <p>{{ book.shortDescription }}</p>
          </mat-card-content>
          <mat-card-footer>
            <p>Price: {{ book.price | currency }}</p>
            <div class="book-card--counter">
              <button (click)="decrement(book)">-</button>
              <span>{{ book.counter || 0 }}</span>
              <button (click)="increment(book)">+</button>
            </div>
          </mat-card-footer>
        </mat-card>
      }
    </div>

    <div>
      @if (selectedCategory()) {
        <div style="margin-top:24px ">Total: {{ counter() }}</div>
        <mat-form-field appearance="fill">
          <mat-label>Comments</mat-label>
          <textarea
            [(ngModel)]="comments"
            matInput
            placeholder="Add your comments here"
          ></textarea>
        </mat-form-field>
      }
    </div>
  `,
  styleUrl: './books.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent {
  // Injections
  books = linkedSignal(
    toSignal(inject(BooksService).getBooks(), {
      initialValue: [],
    }),
  );

  // State
  selectedCategory = signal<string>('');
  comments = linkedSignal({
    source: () => this.selectedCategory(),
    computation: () => '',
  });
  categories = computed(() => {
    return this.books().map((book) => book.category);
  });

  // Derived State
  booksToDisplay = computed(() => {
    return this.books().filter(
      (book) => book.category === this.selectedCategory(),
    );
  });

  counter = computed(() => {
    return this.booksToDisplay().reduce((acc, cur) => {
      return acc + (cur.counter || 0);
    }, 0);
  });

  constructor() {
    effect(() => {
      if (this.selectedCategory()) {
        this.books.update((books) => {
          return books.map((book) => ({ ...book, counter: 0 }));
        });
      }
    });
  }

  increment(book: Book) {
    this.books.update((books) => {
      return books.map((b) => {
        if (b.id === book.id) {
          return { ...b, counter: (b.counter || 0) + 1 };
        }
        return b;
      });
    });
  }

  decrement(book: Book) {
    this.books.update((books) => {
      return books.map((b) => {
        if (b.id === book.id) {
          return { ...b, counter: (b.counter || 0) - 1 };
        }
        return b;
      });
    });
  }
}
