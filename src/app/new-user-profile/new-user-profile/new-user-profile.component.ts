import { Component, computed, inject, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import {
  FormField,
  debounce,
  form,
  required,
  submit,
  validateAsync,
} from '@angular/forms/signals';

import { HttpErrorResponse } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export interface NewUserProfileForm {
  department: string;
  userName: string;
  age: number;
}

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
    FormField,
    FormField,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './new-user-profile.component.html',
  styleUrl: './new-user-profile.component.scss',
})
export class NewUserProfileComponent {
  private authService = inject(AuthService);

  private userFormValues = signal<NewUserProfileForm>({
    department: '',
    userName: '',
    age: 0,
  });

  userNameHasAsyncError = computed(() => {
    return this.userForm
      .userName()
      .errors()
      .some((it) => it.kind === 'asyncValidation');
  });

  userForm = form(this.userFormValues, (rootPath) => {
    required(rootPath.age);
    required(rootPath.userName);
    debounce(rootPath.userName, 300);
    validateAsync(rootPath.userName, {
      params: (ctx) => {
        const value = ctx.value();
        return value;
      },
      factory: (params) => {
        return rxResource({
          params: () => params(),
          stream: ({ params }) => {
            return params
              ? this.authService.usernameIsAvailable(params)
              : of(true);
          },
        });
      },
      onError: (error: unknown) => {
        if ((error as HttpErrorResponse).status === 403) {
          return {
            kind: 'asyncValidation',
            message: 'Username is already taken',
          };
        }

        return null;
      },
      onSuccess: (result) => {
        if (!result) {
          return {
            kind: 'asyncValidation',
            message: 'Username is already taken',
          };
        }

        return null;
      },
    });
  });

  // usernameResource = rxResource({
  //   params: this.userForm.userName().value,
  //   stream: ({ params }) => {
  //     return params
  //       ? this.authService
  //           .usernameIsAvailable(params)
  //           .pipe(catchError(() => of(false)))
  //       : of(true);
  //   },
  // });

  submitForm() {
    submit(this.userForm, async (formValues) => {
      const payload = {
        username: formValues.userName().value(),
        age: Number(formValues.age().value()),
        department: formValues.department().value(),
      };
      try {
        const response = await firstValueFrom(
          this.authService.register(payload),
        );
      } catch (error) {
        if (error instanceof HttpErrorResponse) {
          const field = error.error.field;
          const errorMessage = error.error.message;

          const formFieldsMapping = {
            username: this.userForm.userName,
            age: this.userForm.age,
          };

          const fieldss =
            formFieldsMapping[field as keyof typeof formFieldsMapping];

          fieldss().focusBoundControl();
          return [
            {
              fieldTree: fieldss,
              kind: 'server',
              message: errorMessage,
            },
          ];
        }
      }

      return undefined;
    });
  }
}
