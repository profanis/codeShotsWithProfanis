import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAdmin = false;

  getUser() {
    return { name: 'John Doe' };
  }
}
