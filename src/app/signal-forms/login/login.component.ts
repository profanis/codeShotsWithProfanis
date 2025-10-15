import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  FieldDirective,
  FieldPath,
  form,
  required,
  submit,
} from '@angular/forms/signals';

interface LoginFormModel {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [FieldDirective, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginFormModel = signal<LoginFormModel>({
    username: '',
    password: '',
  });

  loginForm = form(
    this.loginFormModel,
    (loginFormPath: FieldPath<LoginFormModel>) => {
      required(loginFormPath.username);
      required(loginFormPath.password);
    },
  );

  resolve: () => void;

  // I need to work more on this to understand how to use it.
  submittedForm = submit(
    this.loginForm,
    () =>
      new Promise((r) => {
        this.resolve = r;
      }),
  );

  submit() {
    if (!this.loginForm.$state.valid) {
      return;
    }

    this.resolve();

    console.log({
      $state: this.loginForm.$state.value(),
      value: this.loginFormModel(),
    });
  }
}
