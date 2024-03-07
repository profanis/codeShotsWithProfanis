import { Component, ModelSignal, computed, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  template: `
    <input type="text" [(ngModel)]="name" />

    <p>
      {{ fullName() }}
    </p>
  `,
})
export class ChildComponent {
  name: ModelSignal<string> = model.required({
    alias: 'firstName',
  });

  user: ModelSignal<User> = model.required();

  fullName = computed(() => `${this.user().firstName} ${this.user().lastName}`);
}
