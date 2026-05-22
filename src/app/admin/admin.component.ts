import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>Admin Layout</h2>
    <router-outlet />
  `,
})
export class AdminComponent {}
