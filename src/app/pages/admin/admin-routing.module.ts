import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsLoggedInGuard } from 'src/app/guards/isLoggedIn.guard';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminStocksComponent } from './admin-stocks/admin-stocks.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    canActivateChild: [IsLoggedInGuard],
    children: [
      {
        path: 'stock',
        component: AdminStocksComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule {}
