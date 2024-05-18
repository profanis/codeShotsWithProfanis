import { Component, EventEmitter, Output, input, output } from '@angular/core';
import {
  outputFromObservable,
  outputToObservable,
  takeUntilDestroyed,
} from '@angular/core/rxjs-interop';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  template: `
    <p>Hello {{ username() }}!</p>

    <ng-container [formGroup]="form">
      <input type="text" formControlName="name" />
    </ng-container>
  `,
})
export class ChildComponent {
  username = input.required<string>();
  usernameChange = output<string>();

  form = new FormGroup({
    name: new FormControl(
      {
        value: '',
        disabled: false,
      },
      {
        validators: [Validators.required],
      },
    ),
  });

  formIsValid = outputFromObservable(
    this.form.statusChanges.pipe(map((status) => status === 'VALID')),
  );

  constructor() {
    this.form.get('name')?.valueChanges.subscribe((value) => {
      value && this.usernameChange.emit(value);
    });
  }
}
