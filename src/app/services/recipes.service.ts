import { Injectable } from '@angular/core';

import { Ingredient } from './../models/ingredient.model';
import { Recipe } from './../models/recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'Recipe One',
  //     'Description of Recipe One. Yadda yadda yadda',
  //     'https://via.placeholder.com/800x400',
  //     [
  //       new Ingredient('lbs. of ground beef', 2),
  //       new Ingredient('cups Milk', 2),
  //       new Ingredient('egg', 1),
  //     ]
  //   ),
  //   new Recipe(
  //     'Recipe Two',
  //     'Description of Recipe Two. Nom nom nom',
  //     'https://via.placeholder.com/800x400',
  //     [
  //       new Ingredient('lbs. of ground beef', 1),
  //       new Ingredient('cups Milk', 4),
  //       new Ingredient('teaspoons sugar', 12),
  //     ]
  //   ),
  // ];
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
