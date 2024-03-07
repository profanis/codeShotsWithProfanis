import { Component, Signal, signal } from '@angular/core';
import { User } from 'src/app/types/user';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <app-child [(firstName)]="username" [user]="user()" />
    <p>
      {{ username() }}
    </p>
  `,
  styles: ``,
})
export class ParentComponent {
  username = signal('profanis');

  user: Signal<User> = signal({
    firstName: 'Fanis',
    lastName: 'Prodromou',
    email: '',
    id: 1,
    phone: ' ',
    website: '',
  });
}
