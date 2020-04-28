import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Ingredient } from './../models/ingredient.model';
import { ShoppingListsService } from './shopping-lists.service';
import { DataStorageService } from './data-storage.service';

@Injectable({ providedIn: 'root' })
export class ShoppingListResolverService implements Resolve<Ingredient[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private slService: ShoppingListsService
  ) {}

  resolve(): Ingredient[] | Observable<Ingredient[]> {
    const ingredients = this.slService.ingredients;

    if (ingredients.length === 0) {
      this.dataStorageService.getShoppingList().subscribe();
    } else {
      this.slService.ingredients = ingredients;
      this.slService.ingredientsChanged.next(ingredients);

      return ingredients;
    }
  }
}
