import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { RecipesService } from './../../services/recipes.service';
import { Recipe } from './../../models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss'],
})
export class RecipeEditComponent implements OnInit {
  currentRecipeIndex: number;
  recipe: Recipe;
  form: FormGroup;
  editMode = false;

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.currentRecipeIndex = params['id'];

      if (this.currentRecipeIndex) {
        this.editMode = true;
        this.recipe = this.recipesService.getRecipe(params['id']);
      }

      this.initForm();
    });
  }

  private initForm(): void {
    let name = '';
    let imagePath = '';
    let description = '';
    const recipeIngredients = new FormArray([]);

    if (this.editMode) {
      name = this.recipe.name;
      imagePath = this.recipe.imagePath;
      description = this.recipe.description;

      if (this.recipe.ingredients) {
        this.recipe.ingredients.forEach((ingredient) => {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        });
      }
    }

    this.form = new FormGroup({
      name: new FormControl(name, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  onAddIngredient(): void {
    (this.form.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  get controls() {
    return (this.form.get('ingredients') as FormArray).controls;
  }

  onSubmit(): void {
    if (this.editMode) {
      this.recipesService.updateRecipe(
        this.currentRecipeIndex,
        this.form.value
      );
    } else {
      this.recipesService.addRecipe(this.form.value);
      this.currentRecipeIndex = this.recipesService.recipes.length - 1;
    }

    this.router.navigate(['/recipes', this.currentRecipeIndex]);
  }

  onRemoveIngredient(id: number): void {
    (this.form.get('ingredients') as FormArray).removeAt(id);
  }

  onCancel(): void {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  title(): string {
    return this.recipe ? `Edit: ${this.recipe.name}` : 'New Recipe';
  }
}
