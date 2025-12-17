import { JsonPipe } from '@angular/common';
import { Component, computed, contentChild, input } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'custom-input-wrapper',
  imports: [JsonPipe],
  styles: `
    .input-wrapper {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;
    }
  `,
  template: `
    <div class="form-field" [class.invalid]="control().invalid">
      <label>
        @if (label()) {
          {{ label() }}
          @if (isRequired()) {
            <span class="required">*</span>
          }
        }
      </label>

      <ng-content></ng-content>

      @if (control().invalid) {
        <div class="error-message">
          @if (control().errors && control().touched) {
            @if (control().errors?.['required']) {
              <div class="error">This field is required</div>
            } @else if (control().errors?.['minlength']) {
              <div class="error">
                Minimum length is
                {{ control().errors?.['minlength'].requiredLength }}
              </div>
            } @else {
              Invalid input
            }
          }
        </div>
      }
    </div>
  `,
})
export class CustomInputWrapper {
  control = contentChild.required(NgControl, { read: NgControl });
  label = input<string>();

  isRequired = computed(() => {
    return this.control().control?.hasValidator(Validators.required);
  });
}
