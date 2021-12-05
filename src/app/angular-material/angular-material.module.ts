import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
// Imports of used components
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
// For components using angular-animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  exports: [MatInputModule, MatCardModule, MatButtonModule, MatSnackBarModule],
})
export class AngularMaterialModule {}
