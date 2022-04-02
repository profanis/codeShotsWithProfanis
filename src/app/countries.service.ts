import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  get(): Observable<string[]> {
    const countriesToReturn = [
      'Greece',
      'England',
      'Germany',
      'Poland',
      'India',
    ];

    return of(countriesToReturn);
  }

  getAndThrow(): Observable<string[]> {
    return throwError('An error occurred');
  }
}
