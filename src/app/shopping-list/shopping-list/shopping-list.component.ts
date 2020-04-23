import { ShoppingListsService } from './../../services/shopping-lists.service';
import { Ingredient } from './../../models/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  providers: [ShoppingListsService],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListsService: ShoppingListsService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListsService.ingredients;
  }
}
