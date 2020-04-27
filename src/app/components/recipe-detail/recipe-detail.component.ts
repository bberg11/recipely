import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ShoppingListsService } from './../../services/shopping-lists.service';
import { RecipesService } from './../../services/recipes.service';
import { Recipe } from './../../models/recipe.model';

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
      this.recipe = this.recipesService.getRecipe(params['id']);
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
}
