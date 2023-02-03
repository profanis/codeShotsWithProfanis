import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  CardComponent,
  CardContentDirective,
} from './components/card/card.component';
import { HasPermissionsDirective } from './directives/has-permissions.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CardComponent,
    CardContentDirective,
    NgIf,
    CommonModule,
    HasPermissionsDirective,
  ],
})
export class AppComponent {
  title = 'Code Shots with Profanis - please subscribe :)';
  context = {
    username: 'profanis',
    firstName: 'Fanis',
    lastName: 'Prodromou',
  };
}
