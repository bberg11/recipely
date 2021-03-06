import { Component, OnInit } from '@angular/core';

import { Ingredient } from 'src/app/models/ingredient.model';

import { ShoppingListsService } from 'src/app/services/shopping-lists.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListsService: ShoppingListsService) {}

  ngOnInit(): void {
    this.shoppingListsService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.ingredients = this.shoppingListsService.ingredients;
  }

  onShoppingListSelection(id: number): void {
    this.shoppingListsService.selectingShoppingListItem.next(id);
  }
}
