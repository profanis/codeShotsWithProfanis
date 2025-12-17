import { Component, inject, signal } from '@angular/core';
import { Field, form, minLength, required } from '@angular/forms/signals';
import { compatForm } from '@angular/forms/signals/compat';
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

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
  // contactDetails: FormGroup;
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

    ReactiveFormsModule,
  ],
})
export class RegisterComponent {
  // contactDetailsService = inject(ContactDetailsService);
  private readonly defaultValues: RegisterFormModel = {
    email: '',
    password: '',
    confirmPassword: '',
    country: '',
    state: '',
    textarea: [''],
    // contactDetails: this.contactDetailsService.createContactDetailsFormGroup(),
  };
  formModel = signal<RegisterFormModel>(this.defaultValues);

  registrationForm = form<RegisterFormModel>(this.formModel);

  /* lastName = new FormControl('lastName', {
    validators: [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ],
  });

  nameModel = signal({
    first: '',
    last: this.lastName,
  });

  nameForm = compatForm(this.nameModel, (name) => {
    required(name.first);
    minLength(name.first, 3);
  });

  nameSignalFormOnly = form(signal({ name: '' }), (path) => {
    required(path.name);
    minLength(path.name, 3);
  });

  nameForCustomLabelSignalFormOnly = form(signal({ name: '' }), (path) => {
    required(path.name);
    minLength(path.name, 3);
  }); */

  resetForm() {
    this.registrationForm().reset();
    // this.formModel.set(this.defaultValues);
  }
}
