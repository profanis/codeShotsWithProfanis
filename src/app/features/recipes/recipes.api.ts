import { httpResource } from '@angular/common/http';
import { Injectable, Signal } from '@angular/core';
import { z } from 'zod';

export const MOCK_RECIPES: RecipeResponse = {
  recipes: [
    {
      id: 1,
      name: 'MOCK PIZZA',
      ingredients: [
        'Pizza dough',
        'Tomato sauce',
        'Fresh mozzarella cheese',
        'Fresh basil leaves',
        'Olive oil',
        'Salt and pepper to taste',
      ],
      instructions: [
        'Preheat the oven to 475°F (245°C).',
        'Roll out the pizza dough and spread tomato sauce evenly.',
        'Top with slices of fresh mozzarella and fresh basil leaves.',
        'Drizzle with olive oil and season with salt and pepper.',
        'Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.',
        'Slice and serve hot.',
      ],
      prepTimeMinutes: 20,
      cookTimeMinutes: 15,
      servings: 4,
      difficulty: 'Easy',
      cuisine: 'Italian',
      caloriesPerServing: 300,
      tags: ['Pizza', 'Italian'],
      userId: 166,
      image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
      rating: 4.6,
      reviewCount: 98,
      mealType: ['Dinner'],
    },
  ],
  total: 2,
  skip: 0,
  limit: 2,
};

const recipeSchema = z.object({
  id: z.number(),
  name: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  prepTimeMinutes: z.number(),
  cookTimeMinutes: z.number(),
  servings: z.number(),
  difficulty: z.string(),
  cuisine: z.string(),
  caloriesPerServing: z.number(),
  tags: z.array(z.string()),
  userId: z.number(),
  image: z.string().url(),
  rating: z.number(),
  reviewCount: z.number(),
  mealType: z.array(z.string()),
});

const responseSchema = z.object({
  recipes: z.array(recipeSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

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

@Injectable({
  providedIn: 'root',
})
export class RecipesApi {
  getRecipes(searchInput: Signal<string | null | undefined>) {
    return httpResource(
      () =>
        searchInput()
          ? `https://dummyjson.com/recipes/search?q=${searchInput()}`
          : undefined,
      {
        // parse: (response) => {
        //   const parseResponse = responseSchema.parse(response);
        //   return parseResponse.recipes.map((recipe) => ({
        //     ...recipe,
        //     name: recipe.name.toLowerCase(),
        //   }));
        // },
        parse: (response) => {
          const responseToUse = response as unknown as RecipeResponse;
          responseToUse.recipes = responseToUse.recipes.map((recipe) => ({
            ...recipe,
            name: recipe.name.toLowerCase(),
          }));

          return responseToUse;
        },
      },
    );
  }
}
