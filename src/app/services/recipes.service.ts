import { Injectable } from '@angular/core';

import { Recipe } from './../models/recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[] = [];

  recipesChanged = new Subject<Recipe[]>();

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  updateRecipe(id: number, recipe: Recipe): void {
    this.recipes[id] = recipe;
  }

  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
  }

  deleteRecipe(id: number): void {
    this.recipes.splice(id, 1);
  }
}
