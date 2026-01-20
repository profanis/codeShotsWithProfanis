import { Component, input } from '@angular/core';
import { FormField, FieldTree } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContractorInformationFormModel } from '../../pages/contract-form/contract-form.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-contractor-information',
  imports: [MatFormFieldModule, MatInputModule, FormField, MatCardModule],
  templateUrl: './contractor-information.component.html',
  styleUrl: './contractor-information.component.scss',
})
export class ContractorInformationComponent {
  contractorInformation =
    input.required<FieldTree<ContractorInformationFormModel>>();
}
