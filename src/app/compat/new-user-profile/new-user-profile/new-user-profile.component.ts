import { JsonPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ContactDetailsComponent } from '../../contact-details/contact-details.component';
import { CustomInputWrapper } from '../../interop/custom-input-wrapper';
import { FormField, form, required } from '@angular/forms/signals';
import { ContactDetailsService } from '../../contact-details/contact-details.service';
import { compatForm } from '@angular/forms/signals/compat';
import { CustomInput } from '../../interop/custom-input.component';

@Component({
  selector: 'app-new-user-profile',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatCard,
    ReactiveFormsModule,
    ContactDetailsComponent,
    JsonPipe,
    CustomInputWrapper,
    FormField,
    CustomInput,
    FormField,
  ],
  templateUrl: './new-user-profile.component.html',
  styleUrl: './new-user-profile.component.scss',
})
export class NewUserProfileComponent {
  contactDetailsFormGroup = inject(
    ContactDetailsService,
  ).createContactDetailsFormGroup();

  userForm = compatForm(
    signal({
      userName: '',
      age: '',
      contactDetails: this.contactDetailsFormGroup,
    }),
    (rootPath) => {
      required(rootPath.age);
      required(rootPath.userName);
    },
  );

  submitForm() {
    console.log(extractCompatValues(this.userForm().value()));
  }
}

function isReactiveControl(value: any): value is AbstractControl {
  return value instanceof AbstractControl;
}

function extractCompatValues(formValue: any): any {
  return Object.entries(formValue).reduce(
    (acc, [key, control]) => {
      acc[key] = isReactiveControl(control) ? control.value : control;
      return acc;
    },
    {} as Record<string, unknown>,
  );
}
