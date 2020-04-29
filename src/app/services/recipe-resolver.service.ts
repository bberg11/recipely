import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Recipe } from './../models/recipe.model';

import { RecipesService } from './recipes.service';
import { DataStorageService } from './data-storage.service';

@Injectable({ providedIn: 'root' })
export class RecipeResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipesService: RecipesService
  ) {}

  resolve(): Recipe[] | Observable<Recipe[]> {
    const recipes = this.recipesService.recipes;

    if (recipes.length === 0) {
      this.dataStorageService.getRecipes().subscribe();
    } else {
      this.recipesService.recipes = recipes;
      this.recipesService.recipesChanged.next(recipes);

      return recipes;
    }
  }
}
