import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingredient } from './../models/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListsService {
  ingredients: Ingredient[] = [];

  ingredientsChanged = new Subject<Ingredient[]>();

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
