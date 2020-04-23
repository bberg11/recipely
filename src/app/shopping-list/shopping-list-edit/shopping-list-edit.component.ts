import { ShoppingListsService } from './../../services/shopping-lists.service';
import { Ingredient } from './../../models/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shoppingListsService: ShoppingListsService) {}

  ngOnInit(): void {}

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
