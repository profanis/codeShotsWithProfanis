import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-details',
  imports: [],
  template: `<p>user-details works!</p>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent { }
