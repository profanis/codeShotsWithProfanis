import { Component } from '@angular/core';
import {
  CardComponent,
  CardContentDirective,
  CardFooterDirective,
  CardHeaderDirective,
} from './components/card/card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    CardComponent,
    CardFooterDirective,
    CardHeaderDirective,
    CardContentDirective,
  ],
})
export class AppComponent {
  title = 'Code Shots with Profanis - please subscribe :)';
}
