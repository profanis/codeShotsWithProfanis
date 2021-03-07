import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
        type: 'select',
        selectMenuOptions: {
          'item1': "Item 1",
          'item2': "Item 2",
          'item3': "Item 3",
        },
        value: 'item3'
      },
      {
        id: 'dynamicText',
        label: 'Email',
        type: 'text',
        value: '',
        validators: [Validators.required, Validators.email]
      },
      {
        id: 'dynamicText2',
        label: 'My Label text 2',
        type: 'text',
        value: 'profanis2'
      },
    ]


    this.dynamicFormFields.forEach(formItem => {
      const formControl = this.fb.control(formItem.value, formItem.validators)
      this.myForm.addControl(formItem.id, formControl)
    })

  }

}
