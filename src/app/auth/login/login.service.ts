import { Injectable } from '@angular/core';
import { delay, map, of, throwError } from 'rxjs';
import { LoginFormModel } from './login.schema';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  login(loginFormModel: LoginFormModel) {
    // return of(true).pipe(delay(4000));
    return of(true).pipe(
      map(() => {
        return throwError(() => new Error('Login failed'));
      }),
      delay(4000),
    );
  }
}
