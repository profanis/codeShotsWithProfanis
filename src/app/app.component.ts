import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFormFieldModel } from './dynamic-form-field.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm!: FormGroup
  dynamicFormFields!: DynamicFormFieldModel[]

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    this.myForm = this.fb.group({})

    this.dynamicFormFields = [
      {
        id: 'dynamicSelect',
        label: 'My Label Select',
        type: 'select'
      },
      {
        id: 'dynamicText',
        label: 'My Label text',
        type: 'text'
      },
      {
        id: 'dynamicText2',
        label: 'My Label text 2',
        type: 'text'
      },
    ]


    this.dynamicFormFields.forEach(formItem => {
      this.myForm.addControl(formItem.id, this.fb.control(null))
    })

  }

}
