import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ShoppingListsService } from './../../services/shopping-lists.service';
import { Ingredient } from './../../models/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss'],
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('form') form: NgForm;
  subscription: Subscription;
  editMode = false;
  ingredientBeingEdited: number;
  defaultValues = {
    name: '',
    amount: 1,
  };

  constructor(private slService: ShoppingListsService) {}

  ngOnInit(): void {
    this.subscription = this.slService.selectingShoppingListItem.subscribe(
      (id) => {
        const ingredient = this.slService.getIngredient(id);
        this.form.setValue({
          name: ingredient.name,
          amount: ingredient.amount,
        });
        this.editMode = true;
        this.ingredientBeingEdited = id;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm): void {
    const ingredient = new Ingredient(form.value.name, form.value.amount);

    if (this.editMode) {
      this.slService.updateIngredient(this.ingredientBeingEdited, ingredient);
    } else {
      this.slService.addIngredient(ingredient);
    }

    this.reset();
  }

  onClear(): void {
    this.form.resetForm();
    this.reset();
  }

  onDelete(): void {
    this.slService.deleteIngredient(this.ingredientBeingEdited);
    this.reset();
  }

  reset(): void {
    this.editMode = false;
    this.ingredientBeingEdited = null;
    this.form.resetForm();
    this.form.setValue({
      name: '',
      amount: 1,
    });
  }
}
