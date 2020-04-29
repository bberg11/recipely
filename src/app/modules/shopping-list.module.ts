import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared.module';

import { ShoppingListResolverService } from '../services/shopping-lists-resolver.service';
import { AuthGuard } from '../services/auth.guard';

import { ShoppingListEditComponent } from './../components/shopping-list-edit/shopping-list-edit.component';
import { ShoppingListComponent } from './../pages/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListComponent,
    resolve: [ShoppingListResolverService],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [RouterModule.forChild(routes), FormsModule, SharedModule],
})
export class ShoppingListModule {}
