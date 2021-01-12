import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GetUserInfoResolver} from './core/resolver/get-user-info.resolver';
import {StarComponent} from './feature/star/star.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'users',
      //   loadChildren: () => import('./feature/users/users.module')
      //     .then(m => m.UsersModule),
      //
      // },
      {
        path: 'star',
        component: StarComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
