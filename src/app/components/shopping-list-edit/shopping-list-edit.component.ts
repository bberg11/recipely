import { Component, ViewChild, ElementRef } from '@angular/core';

import { ShoppingListsService } from './../../services/shopping-lists.service';
import { Ingredient } from './../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListsService: ShoppingListsService) {}

  onAddIngredient(event: Event): void {
    event.preventDefault();

    this.shoppingListsService.addIngredient(
      new Ingredient(
        this.nameInputRef.nativeElement.value,
        this.amountInputRef.nativeElement.value
      )
    );
  }
}
