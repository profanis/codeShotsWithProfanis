import {
  customError,
  email,
  hidden,
  required,
  schema,
  validate,
  validateTree,
} from '@angular/forms/signals';
import { RegisterFormModel } from './register.component';

export const registerFormSchema = schema<RegisterFormModel>((field) => {
  email(field.email);
  required(field.email);
  // validate(field.confirmPassword, (ctx) => {
  //   const password = ctx.valueOf(field.password);
  //   const confirmPassword = ctx.value();

  //   return password === confirmPassword
  //     ? undefined
  //     : customError({
  //         message: 'Passwords do not match',
  //         kind: 'passwordMismatch',
  //       });
  // });
  validateTree(field, (ctx) => {
    const password = ctx.valueOf(field.password);
    const confirmPassword = ctx.valueOf(field.confirmPassword);

    return password === confirmPassword
      ? undefined
      : [
          customError({
            field: ctx.fieldTreeOf(field.password),
            kind: 'passwordMismatch',
            message: 'Passwords do not match',
          }),
          customError({
            field: ctx.fieldTreeOf(field.confirmPassword),
            kind: 'passwordMismatch',
            message: 'Passwords do not match',
          }),
        ];
  });
  required(field.country);
  required(field.state);
  hidden(field.state, (ctx) => {
    return ctx.valueOf(field.country) !== 'US';
  });
});
