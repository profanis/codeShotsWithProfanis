import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  template: `<p>admin works!</p>
    {{ user() }}`,
  styleUrl: './admin.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminComponent {
  user = input.required<string>();
}
