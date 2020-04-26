import { Component, OnInit } from '@angular/core';

import { ShoppingListsService } from './../../services/shopping-lists.service';
import { Ingredient } from './../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListsService: ShoppingListsService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListsService.ingredients;
  }

  onShoppingListSelection(id: number): void {
    this.shoppingListsService.selectingShoppingListItem.next(id);
  }
}
