import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from './../models/recipe.model';
import { Ingredient } from './../models/ingredient.model';

import { RecipesService } from './recipes.service';
import { ShoppingListsService } from './shopping-lists.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipesService,
    private slService: ShoppingListsService,
    private authService: AuthService
  ) {}

  ROOT_ENDPOINT = 'https://recipely-536fa.firebaseio.com';

  storeRecipes(): void {
    const recipes = this.recipesService.recipes;

    this.http.put(`${this.ROOT_ENDPOINT}/recipes.json`, recipes).subscribe();
  }

  storeShoppingList(): void {
    const ingredients = this.slService.ingredients;

    this.http
      .put(`${this.ROOT_ENDPOINT}/ingredients.json`, ingredients)
      .subscribe();
  }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(`${this.ROOT_ENDPOINT}/recipes.json`).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        this.recipesService.recipes = recipes;
        this.recipesService.recipesChanged.next(recipes);
      })
    );
  }

  getShoppingList(): Observable<Ingredient[]> {
    return this.http
      .get<Ingredient[]>(`${this.ROOT_ENDPOINT}/ingredients.json`)
      .pipe(
        tap((ingredients) => {
          this.slService.ingredients = ingredients;
          this.slService.ingredientsChanged.next(ingredients);
        })
      );
  }
}
