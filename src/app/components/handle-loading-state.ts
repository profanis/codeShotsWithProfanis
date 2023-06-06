import { WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';

export interface LoadingState {
  isLoading: boolean;
  hasError: boolean;
}

export function defaultLoadingState() {
  return signal<LoadingState>({
    isLoading: false,
    hasError: false,
  });
}

export function handleLoadingState(
  loadingState: WritableSignal<{
    isLoading: boolean;
    hasError: boolean;
  }>
) {
  return (source: Observable<any>): Observable<any> => {
    loadingState.mutate((state) => {
      state.isLoading = true;
    });

    return new Observable((observer) => {
      const subscription = source.subscribe({
        next: (value) => {
          observer.next(value);
          loadingState.mutate((state) => {
            state.isLoading = false;
            state.hasError = false;
          });
        },
        error: (error) => {
          observer.error(error);
          loadingState.mutate((state) => {
            state.isLoading = false;
            state.hasError = true;
          });
        },
        complete: () => {
          observer.complete();
          loadingState.mutate((state) => {
            state.isLoading = false;
            state.hasError = false;
          });
        },
      });

      return () => {
        subscription.unsubscribe();
      };
    });
  };
}
