import { ValidatorFn } from '@angular/forms';

export interface DynamicFormFieldModel {
  id: string
  type: 'text' | 'select'
  label: string
  selectMenuOptions?: {[key:string]: string}
  value?: string
  validators?: ValidatorFn[]
}
