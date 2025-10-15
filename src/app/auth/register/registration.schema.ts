import {
  apply,
  applyWhen,
  customError,
  disabled,
  email,
  FieldPath,
  hidden,
  minLength,
  pattern,
  required,
  schema,
  TreeValidator,
  validate,
  validateTree,
  Validator,
} from '@angular/forms/signals';
import { RegisterFormModel } from './register.component';

export const emailValidator: Validator<string> = ({ value, field }) => {
  return !value().includes('@') ? undefined : { kind: 'email', field };
};

export function confirmationPasswordValidator(
  path: FieldPath<{ confirmPassword: string; password: string }>,
): TreeValidator<{ confirmPassword: string; password: string }> {
  return ({ valueOf, fieldOf }) => {
    return valueOf(path.confirmPassword) === valueOf(path.password)
      ? []
      : [
          {
            field: fieldOf(path.confirmPassword),
            kind: 'confirmationPassword',
          },
          {
            field: fieldOf(path.password),
            kind: 'confirmationPassword',
          },
        ];
  };
}

export const registrationSchema2 = schema<RegisterFormModel>((path) => {
  pattern(path.email, /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
  required(path.email);

  // write this using `validate` function
  // validateTree(path, confirmationPasswordValidator(path));

  // Approach #2: Apply the logic in the respective field and use helper function to access others' fields state and value.
  validate(path.confirmPassword, (ctx) => {
    const password = ctx.valueOf(path.password);

    return ctx.value() === password
      ? undefined
      : customError({
          kind: 'confirmationPassword',
        });
  });

  // Approach #1: Apply the logic in the root path.
  // validate(path, ({ value }) => {
  //   const password = value().password;
  //   const confirmPassword = value().confirmPassword;

  //   return confirmPassword === password
  //     ? undefined
  //     : customError({
  //         kind: 'confirmationPassword',
  //       });
  // });

  applyWhen(
    path.state, // in which field do you want to apply the logic?
    (ctx) => {
      // content of the field
      const country = ctx.valueOf(path.country);
      return country === 'US';
    },
    (pathWhenTrue) => {
      required(pathWhenTrue);
    },
  );
  hidden(path.state, (fieldCtx) => {
    return fieldCtx.valueOf(path.country) !== 'US';
  });
  // disabled(path.state, (ctx) => ctx.valueOf(path.country) !== 'US');
});

export const emailSchema = schema<string>((path) => {
  required(path, { message: 'Email is required' });
  email(path, { message: 'Email is not valid' });
});

export const registrationSchema = schema<RegisterFormModel>((path) => {
  apply(path.email, emailSchema);
  required(path.password);
  required(path.confirmPassword);
  // rest of the validations
});
