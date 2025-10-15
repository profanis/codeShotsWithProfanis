import { Component, input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ClientInformationFormModel } from '../../pages/contract-form/contract-form.component';
import { Control, Field } from '@angular/forms/signals';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-client-information',
  imports: [MatFormFieldModule, MatInputModule, Control, MatCardModule],
  templateUrl: './client-information.component.html',
  styleUrl: './client-information.component.scss',
})
export class ClientInformationComponent {
  clientInformation = input.required<Field<ClientInformationFormModel>>();
}
