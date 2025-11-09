import { Component, signal } from '@angular/core';
import { Field, form, required } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { registrationSchema } from './registration.schema';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { JsonPipe } from '@angular/common';
import { MatCard } from '@angular/material/card';

export interface LoginFormModel {
  username: string;
  password: string;
}

export interface RegisterFormModel {
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  gender: string;
  state: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: ``,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    Field,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatCard,
    JsonPipe,
  ],
})
export class RegisterComponent {
  formModel = signal<RegisterFormModel>({
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    gender: '',
    state: '',
  });

  registrationForm = form(this.formModel, registrationSchema);

  constructor() {
    this.registrationForm().value();
  }

  //   export interface LoginFormModel {
  //   username: string;
  //   password: string;
  // }

  //   loginForm = signal({
  //     username: '',
  //     password: '',
  //   });

  // constructor() {
  //   setTimeout(() => {
  //     this.formModel.set({
  //       username: 'profanis',
  //       email: 'profanis@example.com',
  //       password: 'password',
  //       confirmPassword: 'password',
  //       country: 'Poland',
  //       gender: 'Male',
  //       state: 'Mazowieckie',
  //     });
  //   }, 3000);
  // }
}
