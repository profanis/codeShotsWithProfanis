import { HttpClient, httpResource } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { rxResource, toObservable, toSignal } from '@angular/core/rxjs-interop';
import { debounceTime, tap } from 'rxjs';

export interface RecipeResponse {
  recipes: Recipe[];
  total: number;
  skip: number;
  limit: number;
}

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

@Component({
  selector: 'app-recipes',
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatProgressBarModule,
    ReactiveFormsModule,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  httpClient = inject(HttpClient);
  searchInput = new FormControl('');

  searchInputDebounced$ = this.searchInput.valueChanges.pipe(debounceTime(300));

  searchInputDebounced = toSignal(this.searchInputDebounced$);

  optionsResource = httpResource<RecipeResponse>(
    () =>
      `https://dummyjson.com/recipes/search?q=${this.searchInputDebounced()}`,
  );
}
