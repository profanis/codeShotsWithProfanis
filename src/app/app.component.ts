import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myForm!: FormGroup

  get colors(): FormArray {
    return this.myForm.get('colors') as FormArray
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      colors: this.fb.array([
        this.fb.group({name: 'red'}),
        this.fb.group({name: 'green'}),
        this.fb.group({name: 'blue'}),
      ]),
    })
  }

  removeColor(index: number) {
    this.colors.removeAt(index)
  }

  addColor() {
    this.colors.push(this.fb.group({name: ''}))
  }

}
