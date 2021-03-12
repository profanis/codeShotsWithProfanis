import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { AddressComponent } from './address/address.component';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    AddressComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatMenuModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
