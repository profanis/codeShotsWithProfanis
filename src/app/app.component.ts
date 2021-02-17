import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      password: this.fb.control(null),
      confirmPassword: this.fb.control(null),
    }, {
      validators: this.controlValuesAreEqual('password', 'confirmPassword')
    })
  }


  private controlValuesAreEqual(controlNameA: string, controlNameB: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup
      const valueOfControlA = formGroup.get(controlNameA)?.value
      const valueOfControlB = formGroup.get(controlNameB)?.value

      if (valueOfControlA === valueOfControlB) {
        return null
      } else {
        return { valuesDoNotMatch: true }
      }


    }
  }

}
