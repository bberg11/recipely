/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: async () => {
      const module = await import('./modules/recipes.module');
      return module.RecipesModule;
    },
  },
  {
    path: 'shopping-list',
    loadChildren: async () => {
      const module = await import('./modules/shopping-list.module');
      return module.ShoppingListModule;
    },
  },
  {
    path: 'auth',
    loadChildren: async () => {
      const module = await import('./modules/auth.module');
      return module.AuthModule;
    },
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
