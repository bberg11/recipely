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

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {
    this.recipesService.recipeWasSelected.subscribe((recipe: Recipe) => {
      this.recipe = recipe;
    });
  }
}
