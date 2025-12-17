import { Component, inject } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'custom-input',
  template: `<input [value]="value" (input)="onChange($event.target.value)" />`,
})
export class CustomInput implements ControlValueAccessor {
  value = '';

  constructor() {
    inject(NgControl).valueAccessor = this;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange = (value: string) => {};
  private onTouched = () => {};
}
