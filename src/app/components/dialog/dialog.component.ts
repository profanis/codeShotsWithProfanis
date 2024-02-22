import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogTitle,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatDialogModule, MatDialogTitle, JsonPipe],
  template: `
    <mat-dialog-content>
      <p>Lazy Components Loaded: {{ data.length }}</p>
    </mat-dialog-content>
  `,
  styles: ``,
})
export class DialogComponent {
  data = inject(MAT_DIALOG_DATA);
}
