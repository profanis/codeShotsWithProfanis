import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { IsFormValidGuardGuard } from './is-form-valid-guard.guard';

const routes: Routes = [
  {
    path: 'basic-info',
    component: BasicInfoComponent,
    canDeactivate: [IsFormValidGuardGuard],
  },
  {
    path: 'address',
    component: AddressComponent,
    canDeactivate: [IsFormValidGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
