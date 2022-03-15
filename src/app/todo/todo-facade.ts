import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddItemAction, ToggleItemAction } from './store/todo-actions';
import { TodoSelectors } from './store/todo-selectors';
import { TodoModel } from './types/todo';

@Injectable()
export class TodoFacade {
  @Select(TodoSelectors.todoItems)
  todoItems$!: Observable<TodoModel[]>;

  constructor(private store: Store) {}

  @Dispatch()
  toggleItem(todoItem: TodoModel) {
    return new ToggleItemAction(todoItem.id);
  }

  @Dispatch()
  addItem(name: string) {
    return new AddItemAction(name);
  }
}
