import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { of } from 'rxjs';
import { catchError, debounceTime, switchMap } from 'rxjs/operators';
import {
  defaultLoadingState,
  handleLoadingState,
} from '../handle-loading-state';
import { Post } from './post.type';
import { PostsService } from './posts.service';

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
  loadingState = defaultLoadingState();

  // Signal
  userId = signal<number | undefined>(undefined);
  posts = toSignal(
    toObservable(this.userId).pipe(
      debounceTime(500),
      switchMap((userId) =>
        this.postsService.get(userId).pipe(
          handleLoadingState(this.loadingState),
          catchError(() => of([]))
        )
      )
    )
  );

  trackByFn(index: number, post: Post): string {
    return post.id.toString();
  }
}
