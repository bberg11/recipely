import { Injectable } from '@angular/core';

import { Ingredient } from './../models/ingredient.model';

@Injectable()
export class ShoppingListsService {
  ingredients: Ingredient[] = [
    new Ingredient('lb. of Potatoes', 1),
    new Ingredient('Steaks', 3),
    new Ingredient('dozen Eggs', 2),
    new Ingredient('cup Whole Milk', 1),
  ];

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
