import { JsonPipe } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import {
  apply,
  applyEach,
  Control,
  FieldPath,
  form,
  required,
  schema,
  validate,
  submit,
} from '@angular/forms/signals';
import { HobbiesFormComponent } from './hobbies-form/hobbies-form.component';

// Define the data structure.

interface SimpleDate {
  day?: number;
  month?: number;
  year?: number;
}

export interface Hobby {
  name: string;
  description: string;
}

interface RegistrationFormModel {
  name: string;
  age: number;
  country: string;
  terms: boolean;
  birthdate?: SimpleDate;
  hobbies: Hobby[];
}

@Component({
  selector: 'app-registration',
  imports: [Control, JsonPipe, HobbiesFormComponent],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  formModel = signal<RegistrationFormModel>({
    name: '',
    age: 0,
    country: '',
    terms: false,
    birthdate: {
      day: undefined,
      month: undefined,
      year: undefined,
    },
    hobbies: [],
  });

  // dateSchema = schema<SimpleDate>((datePath: FieldPath<SimpleDate>) => {
  //   error(
  //     datePath.month!,
  //     ({ value }) => value()! < 1 || value()! > 12,
  //     'invalid month',
  //   );
  //   error(
  //     datePath.day!,
  //     ({ value }) => value()! < 1 || value()! > 31,
  //     'invalid day',
  //   );
  // });

  // hobbySchema = schema<Hobby>((hobbyPath: FieldPath<Hobby>) => {
  //   validate(hobbyPath, (value) => {
  //     const name = value.value().name;
  //     const description = value.value().description;

  //     if (name === 'golf' && !description) {
  //       return {
  //         kind: 'description',
  //         message: 'You must provide a description for golf.',
  //       };
  //     }

  //     return undefined;
  //   });
  //   required(hobbyPath.name);
  // });

  myForm = form<RegistrationFormModel>(
    this.formModel,
    (path: FieldPath<RegistrationFormModel>) => {
      // Even if this is validation returns null, the form is still invalid
      // Note: This validation applies the error to the root field.
      // validate(path, (value) => {
      //   const age = value.value().age;
      //   const terms = value.value().terms;
      //   if (age > 18 && !terms) {
      //     return {
      //       error: {
      //         kind: 'terms',
      //         message: 'You must accept the terms and conditions.',
      //       },
      //       field: path.terms,
      //     };
      //   }
      //   return undefined;
      // });

      // Even if this is validation returns null, the form is still invalid
      // Note: This validation applies the error to the age field.
      /*     validate(path.age, (value) => {
      const age = value.value();
      const terms = value.resolve(path.terms).$state.value();
      if (age > 18 && !terms) {
        return {
          kind: 'terms',
          message: 'You must accept the terms and conditions.',
        };
      }
      return null;
    }), */
      required(path.name);
      required(path.age);
      // apply(path.birthdate, this.dateSchema);
      // applyEach(path.hobbies, this.hobbySchema);
    },
  );

  // addHobby() {
  //   this.formModel.update((current) => ({
  //     ...current,
  //     hobbies: [...current.hobbies, { name: '', description: '' }],
  //   }));
  // }

  async submit() {
    // if (!this.myForm().valid()) {
    //   return;
    // }
    // let resolve: () => void = () => {};
    // console.log(this.myForm().submitting());
    // const submitFinished = submit(this.myForm, (form) => {
    //   console.log('Submitting form:', form().value());
    //   return new Promise<void>((r) => (resolve = r));
    // });
    // console.log(this.myForm().submittedStatus());
    // // Simulate the submit finishing.
    // resolve();
    // await submitFinished;
    // console.log(this.myForm().submittedStatus());
    // this.myForm().resetSubmittedStatus();
    // console.log(this.myForm().submittedStatus());
  }
}
