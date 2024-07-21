import { inject, Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { firstValueFrom } from 'rxjs';
import { TodoService } from '../../todo.service';
import { TodoModel } from '../../types/todo';
import { TodoActions } from './todo.actions';

export interface TodoStateModel {
  todos: TodoModel[];
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: [],
  },
})
@Injectable()
export class TodoState {
  private readonly _todoService = inject(TodoService);

  @Action(TodoActions.Get)
  async get(ctx: StateContext<TodoStateModel>) {
    const todoItems = await firstValueFrom(this._todoService.get());
    ctx.setState({
      todos: todoItems,
    });
  }

  @Action(TodoActions.UpdateComplete)
  async updateComplete(
    ctx: StateContext<TodoStateModel>,
    { id, todo }: TodoActions.UpdateComplete,
  ) {
    const state = ctx.getState();

    // update the todo item without mutating the state
    const updatedTodoItems = state.todos.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }

      return item;
    });

    ctx.setState({
      todos: updatedTodoItems,
    });

    // update the todo item using the updateItem method
    // ctx.setState(
    //   patch<TodoStateModel>({
    //     todos: updateItem<TodoModel>(
    //       (item) => item.id === id,
    //       patch<TodoModel>({
    //         completed: !todo.completed,
    //       }),
    //     ),
    //   }),
    // );
  }

  @Action(TodoActions.Add)
  async add(ctx: StateContext<TodoStateModel>, { todoName }: TodoActions.Add) {
    const newTodoItem = await firstValueFrom(
      this._todoService.create(todoName),
    );
    ctx.patchState({
      todos: [newTodoItem, ...ctx.getState().todos],
    });
  }
}
