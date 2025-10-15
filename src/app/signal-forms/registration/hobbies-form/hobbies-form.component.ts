import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  model,
  ModelSignal,
  OutputRef,
} from '@angular/core';
import {
  applyEach,
  Control,
  FieldPath,
  form,
  FormUiControl,
  FormValueControl,
  required,
  schema,
  validate,
  ValidationError,
  WithOptionalField,
} from '@angular/forms/signals';
import { Hobby } from '../registration.component';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-hobbies-form',
  imports: [Control, JsonPipe],
  templateUrl: './hobbies-form.component.html',
  styleUrl: './hobbies-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HobbiesFormComponent implements FormValueControl<Hobby[]> {
  value = model<Hobby[]>([]);

  hobbySchema = schema<Hobby>((hobbyPath: FieldPath<Hobby>) => {
    // validate(hobbyPath, (value) => {
    //   const name = value.value().name;
    //   const description = value.value().description;

    //   if (name === 'golf' && !description) {
    //     return {
    //       error: {
    //         kind: 'description',
    //         message: 'You must provide a description for golf.',
    //       },
    //       field: hobbyPath.description,
    //     };
    //   }

    //   return undefined;
    // });
    required(hobbyPath.name);
    required(hobbyPath.description);
  });

  myForm = form<Hobby[]>(this.value, (path: FieldPath<Hobby[]>) => {
    applyEach(path, this.hobbySchema);
  });

  // errors?: InputSignal<readonly FormError[] | undefined> | undefined;
  // disabled?: InputSignal<string | boolean | undefined> | undefined;
  // readonly?: InputSignal<boolean | undefined> | undefined;
  // valid?: InputSignal<boolean | undefined> | undefined;
  // touched?: InputSignal<boolean | undefined> | undefined;
  // touch?: OutputRef<void> | undefined;

  addHobby() {
    this.value.update((current) =>
      current.concat({ name: '', description: '' }),
    );
  }
}
