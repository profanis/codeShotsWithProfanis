import { Component } from '@angular/core';

@Component({
  selector: 'app-no-access',
  standalone: true,
  template: `
    <strong class="error">You are not authorized to access this page!</strong>
  `,
  styles: [
    `
      .error {
        color: red;
      }
    `,
  ],
})
export class NoAccessComponent {}
