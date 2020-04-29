import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ShoppingListResolverService } from 'src/app/services/shopping-lists-resolver.service';
import { AuthGuard } from 'src/app/services/auth.guard';

import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './components/shopping-list-edit/shopping-list-edit.component';

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
