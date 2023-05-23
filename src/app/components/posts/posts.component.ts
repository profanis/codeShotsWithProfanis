import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  effect,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  BehaviorSubject,
  Observable,
  debounceTime,
  firstValueFrom,
} from 'rxjs';
import { Post } from './post.type';
import { PostsService } from './posts.service';

export interface LoadingState {
  isLoading: boolean;
  hasError: boolean;
}

export function initLoadingState() {
  return signal<LoadingState>({
    isLoading: false,
    hasError: false,
  });
}

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatListModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent {
  private postsService = inject(PostsService);
  loadingState = initLoadingState();

  // Signal
  userId$ = new BehaviorSubject<number | undefined>(undefined);
  userId = signal<number | undefined>(undefined);
  posts = signal<Post[]>([]);

  constructor() {
    this.userId$
      .pipe(debounceTime(300))
      .subscribe((userId) => this.search(userId));

    effect(() => {
      this.userId$.next(this.userId());
    });
  }

  async search(userId?: number) {
    try {
      const source$ = this.postsService
        .get(userId)
        .pipe(myLoadingState(this.loadingState));
      const posts = await firstValueFrom(source$);
      this.posts.set(posts);
    } catch (error) {
      this.posts.set([]);
    }
  }

  trackByFn(index: number, post: Post): string {
    return post.id.toString();
  }
}
function myLoadingState(
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
          });
        },
      });

      return () => {
        subscription.unsubscribe();
      };
    });
  };
}
