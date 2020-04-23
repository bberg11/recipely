import { Ingredient } from './../models/ingredient.model';
import { Injectable } from '@angular/core';

@Injectable()
export class ShoppingListsService {
  ingredients: Ingredient[] = [
    new Ingredient('Potatoes', '1 lb'),
    new Ingredient('Steaks', '3'),
    new Ingredient('Eggs', '2'),
    new Ingredient('Whole Milk', '2 cups'),
  ];

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }
}
