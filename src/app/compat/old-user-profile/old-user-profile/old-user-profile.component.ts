import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ContactDetailsComponent } from '../../contact-details/contact-details.component';
import { ContactDetailsService } from '../../contact-details/contact-details.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-old-user-profile',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatCard,
    ReactiveFormsModule,
    ContactDetailsComponent,
    JsonPipe,
  ],
  templateUrl: './old-user-profile.component.html',
  styleUrl: './old-user-profile.component.scss',
})
export class OldUserProfileComponent {
  private readonly contactDetailsService = inject(ContactDetailsService);

  userProfileForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    contactDetails: this.contactDetailsService.createContactDetailsFormGroup(),
  });

  submitForm() {
    console.log('Form Values:', this.userProfileForm.value);
  }
}
