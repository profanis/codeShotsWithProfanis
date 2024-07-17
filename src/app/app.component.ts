import { Component } from '@angular/core';
import { TodoListComponent } from './todo/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [TodoListComponent],
})
export class AppComponent {
  title = 'Code Shots With Profanis - Like and Subscribe :)';
}
