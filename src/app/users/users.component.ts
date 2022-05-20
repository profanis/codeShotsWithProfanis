import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export interface UserForm
  extends FormGroup<{
    username: FormControl<string>;
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    age: FormControl<number>;
  }> {}

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  form!: UserForm;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.nonNullable.group({
      username: this.fb.nonNullable.control('profanis'),
      firstName: this.fb.nonNullable.control('Fanis'),
      lastName: this.fb.nonNullable.control('Prodromou'),
      age: this.fb.control(123, { initialValueIsDefault: true }),
    });
  }

  ngOnInit(): void {}

  loadFromHttp() {
    this.form.patchValue({
      age: 456,
      firstName: 'George',
      lastName: 'Papa',
      username: 'geopa',
    });
  }

  reset() {
    this.form.reset();
  }
}
