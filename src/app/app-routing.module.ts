import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShoppingListResolverService } from './services/shopping-lists-resolver.service';
import { RecipeResolverService } from './services/recipe-resolver.service';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { AuthComponent } from './pages/auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    resolve: [RecipeResolverService],
    children: [
      { path: '', component: RecipeDetailComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    resolve: [ShoppingListResolverService],
  },
  { path: 'auth', component: AuthComponent },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
