import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';

const routes: Routes = [
  {path: 'basic-info', component: BasicInfoComponent},
  {path: 'address', component: AddressComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
