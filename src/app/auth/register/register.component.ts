import { Component, signal } from '@angular/core';
import { Field, form, required } from '@angular/forms/signals';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { JsonPipe } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { registerFormSchema } from './register.schema';
import { CustomTextareaComponent } from '../../components/custom-textarea/custom-textarea/custom-textarea.component';

export interface LoginFormModel {
  username: string;
  password: string;
}

export interface RegisterFormModel {
  email: string;
  password: string;
  confirmPassword: string;
  country: string;
  state: string;
  textarea: string[];
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
    CustomTextareaComponent,
  ],
})
export class RegisterComponent {
  private readonly defaultValues: RegisterFormModel = {
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    state: '',
    textarea: [''],
  };
  formModel = signal<RegisterFormModel>(this.defaultValues);

  // passwordType = signal<'password' | 'text'>('password');

  // togglePasswordType() {
  //   this.passwordType.set(
  //     this.passwordType() === 'password' ? 'text' : 'password',
  //   );
  // }

  registrationForm = form<RegisterFormModel>(
    this.formModel,
    registerFormSchema,
  );

  resetForm() {
    this.registrationForm().reset();
    this.formModel.set(this.defaultValues);
  }
}
