import { Component, inject, linkedSignal, signal } from '@angular/core';
import {
  Control,
  customError,
  email,
  form,
  required,
  submit,
} from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginFormModel, loginFormSchema } from './login.schema';
import { firstValueFrom } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  imports: [
    Control,
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
        return customError({
          message: (error as Error).message,
          field: this.loginForm.email,
          kind: 'submit',
        });
      }
    });
  }
}
