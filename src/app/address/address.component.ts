import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit, BaseComponent {
  form!: FormGroup;
  isFormSubmitted = false;
  constructor(private fb: FormBuilder) {}

  isFormValid = () => this.isFormSubmitted || !this.form?.dirty;

  ngOnInit(): void {
    this.form = this.fb.group({
      street: [],
      number: [],
      postal: [],
      company: [],
    });
  }

  submitForm() {
    this.isFormSubmitted = true;
    console.log(this.form.value);
  }
}
