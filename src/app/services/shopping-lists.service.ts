import { Injectable } from '@angular/core';

import { Ingredient } from './../models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListsService {
  ingredients: Ingredient[] = [
    new Ingredient('lb. of Potatoes', 1),
    new Ingredient('Steaks', 3),
    new Ingredient('dozen Eggs', 2),
    new Ingredient('cup Whole Milk', 1),
  ];

  selectingShoppingListItem = new Subject<number>();

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
  }

  getIngredient(id: number): Ingredient {
    return this.ingredients[id];
  }

  updateIngredient(id: number, newIngredient: Ingredient): void {
    this.ingredients[id] = newIngredient;
  }

  deleteIngredient(id: number): void {
    this.ingredients.splice(id, 1);
  }
}
