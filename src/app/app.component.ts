import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      isUseful: this.fb.control(null, Validators.required),
      reason: this.fb.control(null),
    })



    /*

    If (value of fieldA  === 'something') {
      setValidator on fieldB
    } else {
      clearValidators on fieldB
    }

    recalculate the value and validity of fieldB

    */

    const isUsefulField = this.myForm.get('isUseful')
    const reasonField = this.myForm.get('reason')


    isUsefulField?.valueChanges.subscribe(value => {
      if (value === '3') {
        reasonField?.setValidators(Validators.required)
      } else {
        reasonField?.clearValidators()
      }

      reasonField?.updateValueAndValidity()


    })





  }

}
