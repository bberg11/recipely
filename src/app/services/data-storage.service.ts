import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { Recipe } from './../models/recipe.model';
import { RecipesService } from './recipes.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipesService
  ) {}

  ROOT_ENDPOINT = 'https://recipely-536fa.firebaseio.com';

  storeRecipes(): void {
    const recipes = this.recipesService.recipes;

    this.http
      .put(`${this.ROOT_ENDPOINT}/recipes.json`, recipes)
      .subscribe((response) => {
        console.log(response);
      });
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
}
