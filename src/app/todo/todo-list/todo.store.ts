import { ChangeDetectorRef, computed, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  signalStore,
  signalStoreFeature,
  withComputed,
  withHooks,
  withMethods,
} from '@ngrx/signals';
import {
  ActionMap,
  Actions,
  createDispatchMap,
  createSelectMap,
  ofActionSuccessful,
  SelectorMap,
} from '@ngxs/store';
import { TodoActions } from '../store/todo/todo.actions';
import { TodoSelectors } from '../store/todo/todo.queries';

export function withSelectors<T extends SelectorMap>(selectorMap: T) {
  return signalStoreFeature(withComputed(() => createSelectMap(selectorMap)));
}

export function withActions<T extends ActionMap>(actionMap: T) {
  return signalStoreFeature(withMethods(() => createDispatchMap(actionMap)));
}

export const TodoStore = signalStore(
  withSelectors({
    completeTodoItems: TodoSelectors.getCompletedTodos,
    inCompleteTodoItems: TodoSelectors.getIncompletedTodos,
  }),
  withActions({
    getTodos: TodoActions.Get,
    add: TodoActions.Add,
    updateComplete: TodoActions.UpdateComplete,
  }),
  withComputed((store) => ({
    todosCount: computed(
      () =>
        store.completeTodoItems().length + store.inCompleteTodoItems().length,
    ),
  })),
  withHooks({
    onInit(
      data,
      cdr = inject(ChangeDetectorRef),
      actions$ = inject(Actions),
      destroyRef = inject(DestroyRef),
    ): void {
      actions$
        .pipe(
          ofActionSuccessful(TodoActions.Get),
          takeUntilDestroyed(destroyRef),
        )
        .subscribe(() => {
          cdr.markForCheck();
        });
    },
  }),
);
