import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'users',
    loadComponent: () =>
      import('./users-list/users-list.component').then(
        (it) => it.UsersListComponent
      ),
  },
  {
    path: 'users-charts',
    loadComponent: () =>
      import('./users-charts/users-charts.component').then(
        (it) => it.UsersChartsComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
