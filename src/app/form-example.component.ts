import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-example',
  template: `
    <input type="text" [(ngModel)]="name" required #nameField="ngModel" />
    <i *ngIf="nameField.invalid" style="color: red">This field is required</i>
  `,
  styles: [],
})
export class FormExampleComponent {
  name!: string;
}
