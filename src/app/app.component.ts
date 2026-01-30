import { Component } from '@angular/core';

import { NewUserProfileComponent } from './new-user-profile/new-user-profile/new-user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NewUserProfileComponent],
})
export class AppComponent {
  title = 'Code Shots With Profanis - Like and Subscribe :)';
}
