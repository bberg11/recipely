import { ShoppingListsService } from './../../services/shopping-lists.service';
import { RecipesService } from './../../services/recipes.service';
import { Recipe } from './../../models/recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;

  constructor(
    private recipesService: RecipesService,
    private shoppingListsService: ShoppingListsService
  ) {}

  ngOnInit(): void {
    this.recipesService.recipeWasSelected.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }

  onAddToShoppingList(event: Event): void {
    event.preventDefault();
    this.recipe.ingredients.forEach((ingredient) => {
      this.shoppingListsService.addIngredient(ingredient);
    });
  }
}
