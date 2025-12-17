import { Injectable, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface ContactDetailsForm {
  street: string;
  number: string;
  postalCode: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactDetailsService {
  private fb = inject(FormBuilder);

  createContactDetailsFormGroup(): FormGroup {
    return this.fb.group({
      street: ['', [Validators.required]],
      number: ['', [Validators.required]],
      postalCode: [
        '',
        [Validators.required, Validators.pattern(/^\d{5}(-\d{4})?$/)],
      ],
      nestedFormGroup: this.fb.group({
        nestedField: ['', [Validators.required]],
        deepNestedGroup: this.fb.group({
          deepField: ['', [Validators.required]],
        }),
      }),
    });
  }
}
