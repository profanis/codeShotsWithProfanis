import { Component, inject, linkedSignal, signal } from '@angular/core';
import {
  email,
  form,
  required,
  submit,
  FormField,
} from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { firstValueFrom } from 'rxjs';
import { LoginService } from './login.service';

export interface LoginFormModel {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  imports: [
    FormField,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCard,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  loginService = inject(LoginService);
  // Data Model: The structure that holds the current form values
  loginModel = signal<LoginFormModel>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (rootPath) => {
    required(rootPath.email, {
      message: 'Email is required',
    });
    required(rootPath.password, {
      message: 'Password is required',
    });
    email(rootPath.email, {
      message: 'Email is not valid',
    });
  });

  submitForm(event: Event) {
    event.preventDefault();

    submit(this.loginForm, async (form) => {
      try {
        await firstValueFrom(this.loginService.login(form().value()));
        return undefined;
      } catch (error) {
        return {
          message: (error as Error).message,
          field: this.loginForm.email,
          kind: 'submit',
        };
        // return customError({
        //   message: (error as Error).message,
        //   field: this.loginForm.email,
        //   kind: 'submit',
        // });
      }
    });
  }
}
