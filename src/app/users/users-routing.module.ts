import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersChartsComponent } from './users-charts/users-charts.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersListComponent,
  },
  {
    path: 'users-charts',
    component: UsersChartsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
