import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from 'src/app/models/recipe.model';

import { RecipesService } from 'src/app/services/recipes.service';

import { ShoppingListsService } from 'src/app/services/shopping-lists.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  currentRecipeIndex: number;
  recipe: Recipe;

  constructor(
    private recipesService: RecipesService,
    private shoppingListsService: ShoppingListsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentRecipeIndex = params['id'];
      this.setCurrentRecipe();
    });

    this.recipesService.recipesChanged.subscribe(() => {
      this.setCurrentRecipe();
    });
  }

  onAddToShoppingList(event: Event): void {
    event.preventDefault();

    this.recipe.ingredients.forEach((ingredient) => {
      this.shoppingListsService.addIngredient(ingredient);
    });

    this.router.navigate(['/shopping-list']);
  }

  onDelete(event: Event): void {
    event.preventDefault();

    this.recipesService.deleteRecipe(this.currentRecipeIndex);
    this.router.navigate(['/recipes']);
  }

  private setCurrentRecipe(): void {
    this.recipe = this.recipesService.getRecipe(this.currentRecipeIndex);
  }
}
