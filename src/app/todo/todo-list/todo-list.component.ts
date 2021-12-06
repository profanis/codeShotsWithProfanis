import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { TodoModel } from '../types/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  newItemName!: string;
  items: TodoModel[] = [...new Array(10)].map((_, index) => ({
    id: index + 1,
    isDone: false,
    title: `Todo ${index + 1}`,
  }));

  trackById(index: number, item: TodoModel): number {
    return item.id;
  }

  toggleItem(todoItem: TodoModel) {
    const foundTodo = this.items.find((it) => todoItem.id === it.id);
    if (foundTodo) {
      foundTodo.isDone = !foundTodo.isDone;
    }
  }

  addItem() {
    if (!this.newItemName) {
      return;
    }

    this.items = [
      ...this.items,
      {
        id: Math.round(Math.random() * 1000),
        isDone: false,
        title: this.newItemName,
      },
    ];
    this.newItemName = '';
  }
}
