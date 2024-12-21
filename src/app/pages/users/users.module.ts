import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'users',
        pathMatch: 'full',
        component: UsersComponent,
      },
      {
        path: 'users/:id',
        component: UserDetailsComponent,
      },
    ]),
  ],
})
export class UsersRouterModule {}
