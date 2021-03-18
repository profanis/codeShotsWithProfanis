import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss'],
})
export class BasicInfoComponent implements OnInit, BaseComponent {
  form!: FormGroup;
  isFormSubmitted = false;
  isFormValid = () => this.isFormSubmitted || !this.form?.dirty;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      firstName: [],
      lastName: [],
      email: [],
      age: [],
    });
  }

  submitForm() {
    this.isFormSubmitted = true;
    console.log(this.form.value);
  }
}
