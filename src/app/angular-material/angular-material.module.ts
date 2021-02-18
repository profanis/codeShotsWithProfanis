import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
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
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [MatInputModule, MatCardModule, MatButtonModule, MatIconModule]
})
export class AngularMaterialModule { }
