import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-users-list',
  template: `<button mat-raised-button color="primary">Create a user</button>`,
  styleUrls: ['./users-list.component.scss'],
  standalone: true,
  imports: [MatButtonModule],
})
export class UsersListComponent {}
