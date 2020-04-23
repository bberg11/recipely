import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Potatoes', '1 lb'),
    new Ingredient('Steaks', '3'),
    new Ingredient('Eggs', '2'),
    new Ingredient('Whole Milk', '2 cups'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
