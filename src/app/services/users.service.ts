import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  get() {
    const users = [...new Array(50)].map((it, index) => ({
      id: index + 1,
      name: `User ${index + 1}`,
      description: `This is user ${index + 1}`,
    }));
    return of(users);
  }

  getById(id: number) {
    return {
      id,
      name: `User ${id}`,
      description: `This is user ${id}`,
    };
  }
}
