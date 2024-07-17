import { AsyncPipe, NgForOf, NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { TodoModel } from '../types/todo';
import { TodoStore } from './todo.store';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone: true,
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule,
    FormsModule,
    AsyncPipe,
    NgForOf,
    NgTemplateOutlet,
  ],
  providers: [TodoStore],
})
export class TodoListComponent {
  todoStore = inject(TodoStore);

  newItemName!: string;

  constructor() {
    this.todoStore.getTodos();
  }

  toggleItem(todoItem: TodoModel) {
    this.todoStore.updateComplete(todoItem.id, todoItem);
  }

  addItem() {
    this.todoStore.add(this.newItemName);
    this.newItemName = '';
  }
}
