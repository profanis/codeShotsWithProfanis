import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddItemAction, ToggleItemAction } from '../store/todo-actions';
import { TodoSelectors } from '../store/todo-selectors';
import { TodoFacade } from '../todo-facade';
import { TodoModel } from '../types/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TodoFacade],
})
export class TodoListComponent {
  newItemName!: string;
  items: TodoModel[] = [...new Array(10)].map((_, index) => ({
    id: index + 1,
    isDone: false,
    title: `Todo ${index + 1}`,
  }));

  constructor(public todoFacade: TodoFacade) {}

  trackById(index: number, item: TodoModel): number {
    return item.id;
  }

  toggleItem(todoItem: TodoModel) {
    this.todoFacade.toggleItem(todoItem);
  }

  addItem() {
    this.todoFacade.addItem(this.newItemName);
    this.newItemName = '';
  }
}
