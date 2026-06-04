import {
  Resource,
  ResourceSnapshot,
  Signal,
  computed,
  linkedSignal,
  resourceFromSnapshots,
  signal,
  untracked,
} from '@angular/core';

export interface ResilientResourceOptions {
  keepValueWhileLoading?: boolean;
  keepValueOnError?: boolean;
}

export interface ResilientResourceRef<T> {
  readonly value: Signal<T | undefined>;
  readonly isLoading: Signal<boolean>;
  readonly error: Signal<unknown>;
  readonly hasError: Signal<boolean>;
}

function hasValue<T>(
  snap: ResourceSnapshot<T> | undefined,
): snap is Exclude<ResourceSnapshot<T>, { status: 'error' }> {
  return snap !== undefined && snap.status !== 'error';
}

export function resilientResource<T>(
  source: Resource<T>,
  options: ResilientResourceOptions = {},
): ResilientResourceRef<T> {
  const hasError = signal(false);

  const withValueWhileLoading = (
    current: ResourceSnapshot<T>,
    previous: ResourceSnapshot<T> | undefined,
  ): ResourceSnapshot<T> => {
    untracked(() => hasError.set(false));
    if (current.status === 'loading' && hasValue(previous)) {
      return { status: 'loading', value: previous.value };
    }
    return current;
  };

  const withValueOnError = (
    current: ResourceSnapshot<T>,
    previous: ResourceSnapshot<T> | undefined,
  ): ResourceSnapshot<T> => {
    if (current.status === 'error' && hasValue(previous)) {
      untracked(() => hasError.set(true));
      return { status: 'resolved', value: previous.value };
    }
    return current;
  };

  const handlers = [
    ...(options.keepValueWhileLoading ? [withValueWhileLoading] : []),
    ...(options.keepValueOnError ? [withValueOnError] : []),
  ];

  const derivedSnapshot = linkedSignal<
    ResourceSnapshot<T>,
    ResourceSnapshot<T>
  >({
    source: source.snapshot,
    computation: (current, previous) =>
      handlers.reduce((acc, handler) => handler(acc, previous?.value), current),
  });

  const derived = resourceFromSnapshots(derivedSnapshot);

  return {
    value: computed(() => derived.value()),
    isLoading: computed(() => derived.isLoading()),
    error: computed(() => derived.error()),
    hasError: computed(() => hasError()),
  };
}
