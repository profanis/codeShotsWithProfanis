import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  template: `<p>user works!</p>
    {{ user() }}`,
  styleUrl: './user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UserComponent {
  user = input.required<string>();
}
