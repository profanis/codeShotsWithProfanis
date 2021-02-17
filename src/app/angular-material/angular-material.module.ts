import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
// Imports of used components
import { MatInputModule } from "@angular/material/input";
// For components using angular-animations
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [MatInputModule, MatCardModule]
})
export class AngularMaterialModule { }
