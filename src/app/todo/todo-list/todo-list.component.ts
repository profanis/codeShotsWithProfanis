import { AsyncPipe, NgForOf, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { Store } from '@ngxs/store';
import { TodoItemComponent } from '../components/todo-item/todo-item.component';
import { TodoActions } from '../store/todo/todo.actions';
import { TodoSelectors } from '../store/todo/todo.queries';
import { TodoModel } from '../types/todo';
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
    TodoItemComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  private _store = inject(Store);

  completeTodoItems: Signal<TodoModel[]> = this._store.selectSignal(
    TodoSelectors.getCompletedTodos,
  );

  inCompleteTodoItems: Signal<TodoModel[]> = this._store.selectSignal(
    TodoSelectors.getIncompletedTodos,
  );

  newItemName!: string;

  constructor() {
    this._store.dispatch(new TodoActions.Get());
  }

  toggleItem(todoItem: TodoModel) {
    // dispatch an action to update the todo item
    this._store.dispatch(new TodoActions.UpdateComplete(todoItem.id, todoItem));
  }

  addItem() {
    this._store.dispatch(new TodoActions.Add(this.newItemName));
    this.newItemName = '';
  }
}
