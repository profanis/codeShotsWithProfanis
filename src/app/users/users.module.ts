import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { ChartModule } from 'primeng/chart'; //accordion and accordion tab
import { UsersChartsComponent } from './users-charts/users-charts.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UsersListComponent, UsersChartsComponent],
  imports: [CommonModule, UsersRoutingModule, MatButtonModule, ChartModule],
})
export class UsersModule {}
