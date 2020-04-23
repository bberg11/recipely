import { Recipe } from './../recipes/recipe.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Recipe One',
      'Description of Recipe One. Yadda yadda yadda',
      'https://via.placeholder.com/150'
    ),
    new Recipe(
      'Recipe Two',
      'Description of Recipe Two. Nom nom nom',
      'https://via.placeholder.com/150'
    ),
  ];

  recipeWasSelected = new EventEmitter<Recipe>();

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
