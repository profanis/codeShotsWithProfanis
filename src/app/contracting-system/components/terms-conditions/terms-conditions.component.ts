import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormField, FieldTree } from '@angular/forms/signals';
import { TermsConditionsFormModel } from '../../pages/contract-form/contract-form.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-terms-conditions',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatOptionModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    FormField,
    MatCardModule,
  ],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss',
})
export class TermsConditionsComponent {
  termsConditions = input.required<FieldTree<TermsConditionsFormModel>>();
}
