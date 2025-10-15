import {
  disabled,
  email,
  pattern,
  required,
  schema,
} from '@angular/forms/signals';

export interface LoginFormModel {
  email: string;
  password: string;
}

export const loginFormSchema = schema<LoginFormModel>((path) => {
  {
    email(path.email);
    pattern(path.email, /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
    // disabled(path, (path) => !path.email.valid());
  }
});
