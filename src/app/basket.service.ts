import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  // observable source
  private basketSource = new BehaviorSubject<number>(0);

  // stream
  basket$ = this.basketSource.asObservable();

  increase() {
    this.basketSource.next(this.basketSource.value + 1);
  }

  decrease() {
    this.basketSource.next(this.basketSource.value - 1);
  }
}
