import {
  Component,
  model,
} from '@angular/core';
import {
  FormValueControl,
} from '@angular/forms/signals';

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrl: './custom-textarea.component.scss',
})
export class CustomTextareaComponent implements FormValueControl<string[]> {
  value = model<string[]>(['']);

  transformInput(event: Event) {
    const input = event.target as HTMLTextAreaElement;
    const lines = input.value.split('\n');
    this.value.set(lines);
  }
}
