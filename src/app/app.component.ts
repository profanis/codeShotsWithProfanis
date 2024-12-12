import { Component } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';
import { BooksComponent } from './books/books.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [BooksComponent, AccordionComponent],
})
export class AppComponent {
  title = 'Code Shots With Profanis - Like and Subscribe :)';
}
