import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, delay, map, of, switchMap, timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _httpClient = inject(HttpClient);

  /**
   * 200 OK - Username is available
   * 403 profanis - Username is taken
   */
  usernameIsAvailable(username: string) {
    return timer(5000).pipe(
      switchMap(() => {
        return this._httpClient
          .get(
            `http://localhost:3000/auth/validate-user-name?username=${username}`,
          )
          .pipe(map(Boolean));
      }),
    );
  }

  register(payload: { username: string; age: number; department: string }) {
    return timer(3000).pipe(
      switchMap(() => {
        return this._httpClient.post(
          'http://localhost:3000/auth/register',
          payload,
        );
      }),
    );
  }
}
