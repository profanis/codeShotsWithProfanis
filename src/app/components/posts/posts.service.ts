import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, throwError } from 'rxjs';
import { Post } from './post.type';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private http = inject(HttpClient);

  get(userId?: number): Observable<Post[]> {
    if (userId == 100) {
      return throwError(() => new Error('User not found'));
    }
    return this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
        params: {
          ...(userId ? { userId: userId.toString() } : {}),
        },
      })
      .pipe(delay(2000));
  }
}
