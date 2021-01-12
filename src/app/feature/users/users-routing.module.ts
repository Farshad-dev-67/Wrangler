import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {GetUserInfoResolver} from '../../core/resolver/get-user-info.resolver';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {list: GetUserInfoResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
