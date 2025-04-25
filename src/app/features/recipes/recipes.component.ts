import { HttpClient, httpResource } from '@angular/common/http';
import { Component, effect, inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { toSignal } from '@angular/core/rxjs-interop';
import { debounceTime } from 'rxjs';
import { z } from 'zod';
import { JsonPipe } from '@angular/common';
import { RecipesApi } from './recipes.api';

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
    JsonPipe,
  ],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.scss',
})
export class RecipesComponent {
  recipesApi = inject(RecipesApi);
  searchInput = new FormControl('');

  searchInputToUse = toSignal(
    this.searchInput.valueChanges.pipe(debounceTime(300)),
  );

  optionsResource = this.recipesApi.getRecipes(this.searchInputToUse);
}
