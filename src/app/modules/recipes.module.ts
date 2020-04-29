import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './shared.module';

import { RecipeResolverService } from '../services/recipe-resolver.service';
import { AuthGuard } from '../services/auth.guard';

import { RecipeEditComponent } from './../components/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './../components/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './../components/recipe-item/recipe-item.component';
import { RecipesComponent } from './../pages/recipes/recipes.component';

const routes: Routes = [
  {
    path: '',
    component: RecipesComponent,
    resolve: [RecipeResolverService],
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeDetailComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
];

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
  ],
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, SharedModule],
})
export class RecipesModule {}
