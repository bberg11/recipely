import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from './../models/ingredient.model';
import { Recipe } from './../models/recipe.model';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe One',
      'Description of Recipe One. Yadda yadda yadda',
      'https://via.placeholder.com/150',
      [
        new Ingredient('lbs. of ground beef', 2),
        new Ingredient('cups Milk', 2),
        new Ingredient('egg', 1),
      ]
    ),
    new Recipe(
      'Recipe Two',
      'Description of Recipe Two. Nom nom nom',
      'https://via.placeholder.com/150',
      [
        new Ingredient('lbs. of ground beef', 1),
        new Ingredient('cups Milk', 4),
        new Ingredient('teaspoons sugar', 12),
      ]
    ),
  ];

  recipeWasSelected = new EventEmitter<Recipe>();

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
